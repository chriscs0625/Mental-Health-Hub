'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy via-lavender/20 to-warmWhite">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-lavender/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Your Mental Wellness Journey Starts Here
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-lg">
              Access premium guided worksheets, journals, and resources designed by mental health professionals to support your wellbeing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-soft-lg group"
              >
                Shop Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/30"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Mockup */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Floating Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-lavender/20 rounded-3xl blur-2xl animate-float"></div>
              
              <div className="relative bg-white rounded-2xl shadow-glass p-6 backdrop-blur-glass transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gray-200 rounded-lg aspect-video mb-4 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">📄</div>
                    <p className="text-sm font-semibold">Wellness Worksheet</p>
                  </div>
                </div>

                <h3 className="font-semibold text-navy mb-2">Anxiety Release Workbook</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  A comprehensive guide with proven techniques to manage anxiety
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-coral">$19.99</span>
                  <button className="bg-sage text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-sage/90 transition-colors">
                    Get Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
