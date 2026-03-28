'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LayoutGrid, Package, ShoppingBag, Users, RotateCcw, Settings, LogOut, Menu, X } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutGrid },
    { href: '/admin/products', label: 'Products', icon: Package },
    { href: '/admin/orders', label: 'Orders', icon: ShoppingBag },
    { href: '/admin/customers', label: 'Customers', icon: Users },
    { href: '/admin/refunds', label: 'Refunds', icon: RotateCcw },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed md:relative inset-y-0 left-0 w-64 bg-navy text-white flex flex-col transition-transform duration-300 z-40 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {/* Close Button Mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </button>

          {/* Logo */}
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold">MBH Admin</h2>
            <p className="text-xs text-gray-400 mt-1">Dashboard</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="px-6 py-3 flex items-center gap-3 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors border-l-4 border-transparent hover:border-sage"
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="p-6 border-t border-gray-700 space-y-3">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors">
              <Settings size={18} />
              <span className="font-medium">Preferences</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-coral hover:bg-coral/10 rounded-lg transition-colors">
              <LogOut size={18} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden fixed top-20 left-4 z-30 p-2 bg-white rounded-lg shadow-soft"
          >
            <Menu size={24} className="text-navy" />
          </button>

          {/* Content Wrapper */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
