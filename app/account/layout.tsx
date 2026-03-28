'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Download, History, Settings, LogOut, Menu, X } from 'lucide-react'

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
    {
      href: '/account/downloads',
      label: 'My Downloads',
      icon: Download,
    },
    {
      href: '/account/orders',
      label: 'Order History',
      icon: History,
    },
    {
      href: '/account/settings',
      label: 'Settings',
      icon: Settings,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-warmWhite">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div
            className={`md:col-span-1 ${
              sidebarOpen ? 'block' : 'hidden'
            } md:block`}
          >
            {/* Mobile Close Button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden mb-4 text-navy"
            >
              <X size={24} />
            </button>

            <div className="bg-white rounded-2xl p-6 sticky top-24">
              {/* User Profile */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center text-white font-bold mb-3">
                  JD
                </div>
                <h3 className="font-semibold text-navy">John Doe</h3>
                <p className="text-sm text-gray-600">john@example.com</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2 mb-8">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </nav>

              {/* Logout */}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-coral hover:bg-coral/10 transition-colors font-medium">
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden mb-4 p-2 text-navy"
            >
              <Menu size={24} />
            </button>

            {children}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
