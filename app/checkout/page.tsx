'use client'

import { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Lock, Lock as LockIcon } from 'lucide-react'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('product') || '1'
  const productName = searchParams.get('name') || 'Digital Wellness Product'
  const productPrice = parseFloat(searchParams.get('price') || '29.99')

  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  // Get product image based on ID
  const getProductImage = (id: string) => {
    const imageMap: Record<string, string> = {
      '1': '/books/anxiety-toolkit-cover.jpg',
      '2': '/books/mindfulness-pack-cover.jpg',
      '3': '/books/sleep-rituals-cover.jpg',
      '4': '/books/stress-management-cover.jpg',
      '5': '/books/emotional-intelligence-cover.jpg',
      '6': '/books/self-care-bundle-cover.jpg',
    }
    return imageMap[id] || '/books/anxiety-toolkit-cover.jpg'
  }

  // Cart items from URL params
  const cartItems = [
    {
      id: productId,
      name: productName,
      price: productPrice,
      image: getProductImage(productId),
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const discount = promoCode === 'WELLNESS10' ? subtotal * 0.1 : 0
  const total = subtotal - discount

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      window.location.href = '/success'
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#131A1A]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-[#F9F0E2] tracking-tight mb-2">Checkout</h1>
        <p className="text-[#F9F0E2]/60 mb-12">Complete your purchase securely</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2">
            <div className="bg-glass border border-[rgba(249,240,226,0.1)] rounded-[12px] p-8 mb-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              {/* Email */}
              <div className="mb-8">
                <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors placeholder:text-[#F9F0E2]/20"
                />
              </div>

              {/* Full Name */}
              <div className="mb-10">
                <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors placeholder:text-[#F9F0E2]/20"
                />
              </div>

              {/* Card Details */}
              <div className="mb-10 pt-4 border-t border-[rgba(249,240,226,0.05)]">
                <h3 className="text-[11px] uppercase tracking-widest font-bold text-[#F9F0E2] mb-6">Payment Details</h3>

                {/* Card Number */}
                <div className="mb-8">
                  <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\s/g, '')
                      const formatted = val.replace(/(\d{4})(?=\d)/g, '$1 ')
                      setCardNumber(formatted)
                    }}
                    placeholder="4111 1111 1111 1111"
                    maxLength={19}
                    required
                    className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors font-mono tracking-widest placeholder:text-[#F9F0E2]/20"
                  />
                </div>

                {/* Expiry & CVC */}
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '')
                        const formatted =
                          val.length >= 2 ? `${val.slice(0, 2)}/${val.slice(2, 4)}` : val
                        setExpiry(formatted)
                      }}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                      className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors font-mono tracking-widest placeholder:text-[#F9F0E2]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="123"
                      maxLength={4}
                      required
                      className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors font-mono tracking-widest placeholder:text-[#F9F0E2]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-10 pt-4 border-t border-[rgba(249,240,226,0.05)]">
                <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-3">
                  Promo Code (Optional)
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="Enter code (WELLNESS10)"
                    className="flex-1 px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors placeholder:text-[#F9F0E2]/20"
                  />
                  <button
                    type="button"
                    className="px-6 py-2 bg-transparent border border-[#F9F0E2]/30 text-[#F9F0E2] text-xs uppercase tracking-wider rounded-[4px] font-semibold hover:bg-white/5 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#F04915] hover:bg-[#F04915]/90 disabled:opacity-70 text-[#F9F0E2] font-semibold tracking-wide py-4 object-none rounded-[4px] transition-all flex items-center justify-center gap-2 uppercase text-sm"
              >
                {isProcessing ? 'Processing...' : 'Complete Purchase'}
              </button>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#F9F0E2]/40 tracking-wider">
                <LockIcon size={14} />
                256-BIT SSL SECURED
              </div>
            </div>
          </form>

          {/* Right: Order Summary */}
          <div>
            <div className="bg-glass border border-[rgba(249,240,226,0.1)] rounded-[12px] p-6 sticky top-24 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <h3 className="text-[11px] uppercase tracking-widest font-bold text-[#F9F0E2] mb-6">Order Summary</h3>

              {/* Items */}
              <div className="mb-6 space-y-4 pb-6 border-b border-[rgba(249,240,226,0.1)]">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#131A1A] rounded-[8px] overflow-hidden flex-shrink-0 border border-[rgba(249,240,226,0.1)]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 py-1">
                      <p className="font-semibold text-[#F9F0E2] text-sm mb-1 leading-tight">
                        {item.name}
                      </p>
                      <p className="text-[#F04915] font-bold text-sm">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#F9F0E2]/60">Subtotal</span>
                  <span className="font-semibold text-[#F9F0E2]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#7CAF7F]">Discount</span>
                    <span className="font-semibold text-[#7CAF7F]">
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between py-4 border-t border-[rgba(249,240,226,0.1)] mt-2">
                  <span className="font-semibold text-[#F9F0E2] uppercase tracking-widest text-[11px] flex items-center">Total</span>
                  <span className="text-2xl font-bold text-[#F04915]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="text-[10px] text-[#F9F0E2]/30 text-center uppercase tracking-widest">
                <p className="mb-2">We accept</p>
                <p className="flex justify-center gap-3 flex-wrap">
                  <span>Visa</span>
                  <span>•</span>
                  <span>Mastercard</span>
                  <span>•</span>
                  <span>Amex</span>
                  <span>•</span>
                  <span>PayPal</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#131A1A] text-[#F9F0E2] flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
