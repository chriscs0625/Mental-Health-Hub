'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#131A1A]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F04915]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F9F0E2]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-[#F9F0E2]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-balance tracking-tight text-[#F9F0E2]">
              Your Mental Wellness Journey Starts Here
            </h1>

            <p className="text-lg md:text-xl text-[#F9F0E2]/70 mb-8 leading-relaxed max-w-lg">
              Access premium guided worksheets, journals, and resources designed by mental health professionals to support your wellbeing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-[#F04915] text-[#F9F0E2] font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(240,73,21,0.3)] hover:shadow-[0_0_30px_rgba(240,73,21,0.5)] group tracking-wide"
              >
                Shop Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#F9F0E2] font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-[#F9F0E2] hover:bg-white/5 tracking-wide"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-[#F9F0E2]/80 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-2xl text-[#F04915]">✓</span>
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-[#F04915]">🔒</span>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-[#F04915]">⭐</span>
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Mockup */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative bg-glass rounded-[12px] p-6 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                <div className="bg-white/5 border border-white/10 rounded-lg aspect-video mb-4 flex items-center justify-center">
                  <div className="text-white/40 text-center">
                    <div className="text-4xl mb-2">📄</div>
                    <p className="text-sm font-semibold text-[#F9F0E2]/70">Wellness Worksheet</p>
                  </div>
                </div>

                <h3 className="font-semibold text-[#F9F0E2] mb-2 text-lg">Anxiety Release Workbook</h3>
                <p className="text-sm text-[#F9F0E2]/60 mb-4 line-clamp-2">
                  A comprehensive guide with proven techniques to manage anxiety
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#F9F0E2]">$19.99</span>
                  <button className="bg-[#131A1A] border border-[#F04915]/50 text-[#F04915] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#F04915] hover:text-[#F9F0E2] transition-colors">
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
