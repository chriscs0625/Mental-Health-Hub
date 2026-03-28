'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Download, CheckCircle, Mail } from 'lucide-react'

export default function SuccessPage() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    // Generate confetti pieces
    const pieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
    }))
    setConfetti(pieces)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-warmWhite">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {/* Confetti Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="absolute animate-confetti"
              style={{
                left: `${piece.left}%`,
                top: '-10px',
                width: '10px',
                height: '10px',
                backgroundColor: ['#7CAF7F', '#A89BC2', '#E8826A', '#1B2B4B'][
                  Math.floor(Math.random() * 4)
                ],
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                animation: `confetti 2.5s ease-in forwards`,
                animationDelay: `${piece.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="max-w-md text-center relative z-10">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center">
              <CheckCircle size={48} className="text-sage animate-pulse-soft" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-navy mb-3">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your purchase is complete. Your files are ready to download and we&apos;ve sent the link to your email.
          </p>

          {/* Email Notification */}
          <div className="bg-white rounded-xl p-6 mb-8 border border-sage/20">
            <div className="flex items-center gap-3 mb-3">
              <Mail size={20} className="text-sage" />
              <span className="font-semibold text-navy">Check your email</span>
            </div>
            <p className="text-sm text-gray-600">
              A download link and receipt have been sent to your email address. Check your inbox and spam folder.
            </p>
          </div>

          {/* Primary CTA */}
          <button className="w-full bg-coral hover:bg-coral/90 text-white font-semibold py-4 rounded-lg transition-all hover:shadow-soft-lg flex items-center justify-center gap-2 mb-4">
            <Download size={20} />
            Download Files
          </button>

          {/* Secondary CTA */}
          <Link
            href="/login"
            className="block w-full bg-sage/10 hover:bg-sage/20 text-sage font-semibold py-3 rounded-lg transition-colors mb-8"
          >
            Create Account to Re-access Downloads
          </Link>

          {/* Additional Info */}
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <span className="font-semibold">Order ID:</span> ORD-2024-001234
            </p>
            <p>
              <span className="font-semibold">Date:</span> {new Date().toLocaleDateString()}
            </p>
            <p className="pt-4 border-t border-gray-200">
              Questions? <a href="#" className="text-sage font-semibold hover:underline">Contact our support team</a>
            </p>
          </div>

          {/* Continue Shopping */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link
              href="/shop"
              className="text-sage font-semibold hover:underline"
            >
              Continue Shopping →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
