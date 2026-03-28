'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ShoppingCart, Star, ArrowRight } from 'lucide-react'

const getProductImagePath = (id: string) => {
  const imageMap: Record<string, string> = {
    '1': '/books/anxiety-toolkit-cover.jpg',
    '2': '/books/mindfulness-pack-cover.jpg',
    '3': '/books/sleep-rituals-cover.jpg',
  }
  return imageMap[id] || '/books/anxiety-toolkit-cover.jpg'
}

export default function Home() {
  const products = [
    { id: '1', name: 'Modern Anxiety Toolkit', price: 29.00, original: 39.00, rating: 4.9, reviews: 324 },
    { id: '2', name: 'Daily Mindfulness Pack', price: 19.00, original: 24.00, rating: 4.8, reviews: 287 },
    { id: '3', name: 'Restorative Sleep Rituals', price: 24.99, original: 34.99, rating: 4.9, reviews: 451 },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-r from-[#1B2B4B] to-[#A89BC2] text-white py-24 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Your Mental Wellness Journey Starts Here</h1>
              <p className="text-lg text-white/90 mb-8">Premium wellness worksheets, guides & resources for mental health support</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop" className="inline-flex items-center justify-center gap-2 bg-[#E8826A] hover:bg-[#E8826A]/90 text-white font-bold py-3 px-8 rounded-lg">
                  <ShoppingCart size={20} /> Shop Now
                </Link>
                <Link href="#featured" className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white text-white font-bold py-3 px-8 rounded-lg">
                  Explore <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center h-96 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
              <div className="text-center">
                <p className="text-6xl mb-4">📄</p>
                <p className="text-xl font-bold">Premium Resources</p>
                <p className="text-sm text-white/70 mt-2">Instant Downloads</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><p className="text-3xl font-bold text-[#1B2B4B]">7500+</p><p className="text-gray-600">Happy Customers</p></div>
            <div><p className="text-3xl">⚡</p><p className="text-gray-600">Instant Download</p></div>
            <div><p className="text-3xl">🔒</p><p className="text-gray-600">Secure Payment</p></div>
            <div><p className="text-3xl">✓</p><p className="text-gray-600">30-Day Guarantee</p></div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section id="featured" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B2B4B] mb-4">Featured Resources</h2>
              <p className="text-lg text-gray-600">Our most popular wellness materials</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
                    <div className="w-full h-56 bg-white overflow-hidden">
                      <img 
                        src={getProductImagePath(product.id)} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-[#1B2B4B] mb-3">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-[#1B2B4B]">${product.price}</span>
                        <span className="text-sm text-gray-400 line-through ml-2">${product.original}</span>
                      </div>
                      <button className="w-full bg-[#E8826A] hover:bg-[#E8826A]/90 text-white font-bold py-2 rounded-lg">
                        Get Instant Access
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/shop" className="inline-block bg-[#7CAF7F] hover:bg-[#7CAF7F]/90 text-white font-bold py-3 px-8 rounded-lg">
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1B2B4B] text-center mb-16">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7CAF7F] to-[#A89BC2] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-[#1B2B4B] mb-3">Browse Products</h3>
                <p className="text-gray-600">Explore wellness resources and find what fits your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7CAF7F] to-[#A89BC2] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-[#1B2B4B] mb-3">Secure Checkout</h3>
                <p className="text-gray-600">Complete purchase with trusted payment processing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7CAF7F] to-[#A89BC2] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-[#1B2B4B] mb-3">Instant Download</h3>
                <p className="text-gray-600">Get immediate access to digital files via email</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-gradient-to-b from-white to-[#7CAF7F]/5 py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1B2B4B] text-center mb-16">What Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Johnson', text: 'These resources transformed my mental health journey!', rating: 5 },
                { name: 'Michael Chen', text: 'Great quality content at affordable prices.', rating: 5 },
                { name: 'Emma Davis', text: 'The worksheets are incredibly helpful and easy to follow.', rating: 5 },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{item.text}"</p>
                  <p className="font-semibold text-[#1B2B4B]">- {item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
