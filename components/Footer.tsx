import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sage to-lavender rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MBH</span>
              </div>
              <span className="font-semibold">Mental Balance Hub</span>
            </div>
            <p className="text-sm text-gray-300">
              Premium wellness resources to support your mental health journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-sage transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-sage transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/account/downloads" className="hover:text-sage transition-colors">
                  Account
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-sage transition-colors">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-sage transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sage transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sage transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sage transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Payment */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-sage transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-sage transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-sage transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-sage transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Payment Methods */}
            <p className="text-xs text-gray-400 mb-2">Secure Payments</p>
            <div className="flex gap-2 flex-wrap">
              <div className="px-2 py-1 bg-gray-700 rounded text-xs">Visa</div>
              <div className="px-2 py-1 bg-gray-700 rounded text-xs">Mastercard</div>
              <div className="px-2 py-1 bg-gray-700 rounded text-xs">Stripe</div>
              <div className="px-2 py-1 bg-gray-700 rounded text-xs">PayPal</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 Mental Balance Hub. All rights reserved.
          </p>
          <div className="text-xs text-gray-400 mt-4 md:mt-0">
            <span className="inline-block mr-4">🔒 256-bit SSL Secured</span>
            <span>Made with care for your wellness</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
