'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-[20px] z-50 max-w-[1200px] mx-auto bg-glass rounded-full shadow-glass mt-[20px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F04915] to-[#E8826A] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MBH</span>
            </div>
            <span className="hidden sm:inline text-xl font-extrabold tracking-tighter text-[#F9F0E2]">Mental Balance Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-[#F9F0E2] hover:text-[#F04915] transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium text-[#F9F0E2] hover:text-[#F04915] transition-colors">
              Shop
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/account/downloads" className="text-sm font-medium text-[#F9F0E2] hover:text-[#F04915] transition-colors">
              Account
            </Link>
            <Link
              href="/checkout"
              className="relative p-2 text-[#F9F0E2] hover:bg-white/5 rounded-full transition-colors"
            >
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#F04915] text-[#F9F0E2] text-xs rounded-full flex items-center justify-center font-bold">
                1
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F9F0E2]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-[#F9F0E2] hover:bg-white/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-4 py-2 text-sm font-medium text-[#F9F0E2] hover:bg-white/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/account/downloads"
              className="block px-4 py-2 text-sm font-medium text-[#F9F0E2] hover:bg-white/5 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Account
            </Link>
            <Link
              href="/checkout"
              className="block px-4 py-2 text-sm font-medium text-[#F9F0E2] hover:bg-white/5 rounded-lg"
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
