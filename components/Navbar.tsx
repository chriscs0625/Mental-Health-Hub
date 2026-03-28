'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sage to-lavender rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MBH</span>
            </div>
            <span className="hidden sm:inline text-lg font-semibold text-navy">Mental Balance Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-navy hover:text-sage transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium text-navy hover:text-sage transition-colors">
              Shop
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/account/downloads" className="text-sm font-medium text-navy hover:text-sage transition-colors">
              Account
            </Link>
            <Link
              href="/checkout"
              className="relative p-2 text-navy hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-coral text-white text-xs rounded-full flex items-center justify-center font-bold">
                1
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-navy"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-navy hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-4 py-2 text-sm font-medium text-navy hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/account/downloads"
              className="block px-4 py-2 text-sm font-medium text-navy hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Account
            </Link>
            <Link
              href="/checkout"
              className="block px-4 py-2 text-sm font-medium text-navy hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
