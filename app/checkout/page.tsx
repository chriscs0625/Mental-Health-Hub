'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Lock, Lock as LockIcon } from 'lucide-react'

export default function CheckoutPage() {
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
    <div className="min-h-screen flex flex-col bg-warmWhite">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-navy mb-2">Checkout</h1>
        <p className="text-gray-600 mb-12">Complete your purchase securely</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2">
            <div className="bg-white rounded-2xl p-8 mb-8">
              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-navy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>

              {/* Full Name */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-navy mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>

              {/* Card Details */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-navy mb-4">Payment Details</h3>

                {/* Card Number */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-navy mb-2">
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage font-mono"
                  />
                </div>

                {/* Expiry & CVC */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="123"
                      maxLength={4}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-8 p-4 bg-sage/10 rounded-lg">
                <label className="block text-sm font-semibold text-navy mb-2">
                  Promo Code (Optional)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="Enter code (WELLNESS10 for 10% off)"
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                  />
                  <button
                    type="button"
                    className="px-4 py-3 bg-sage text-white rounded-lg font-semibold hover:bg-sage/90 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-coral hover:bg-coral/90 disabled:opacity-70 text-white font-semibold py-4 rounded-lg transition-all hover:shadow-soft-lg flex items-center justify-center gap-2"
              >
                {isProcessing ? 'Processing...' : 'Complete Purchase'}
              </button>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
                <LockIcon size={16} />
                256-bit SSL Secured
              </div>
            </div>
          </form>

          {/* Right: Order Summary */}
          <div>
            <div className="bg-white rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-navy mb-6">Order Summary</h3>

              {/* Items */}
              <div className="mb-6 space-y-4 pb-6 border-b border-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-navy text-sm mb-2">
                        {item.name}
                      </p>
                      <p className="text-coral font-bold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-navy">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Discount</span>
                    <span className="font-semibold text-green-600">
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between py-3 border-t border-gray-200 pt-3">
                  <span className="font-semibold text-navy">Total</span>
                  <span className="text-2xl font-bold text-coral">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="text-xs text-gray-500 text-center">
                <p className="mb-2">We accept</p>
                <p className="flex justify-center gap-2 flex-wrap">
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
