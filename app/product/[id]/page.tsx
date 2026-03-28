'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Star, ShoppingCart, Download, FileText, Check, ChevronDown } from 'lucide-react'

const PRODUCTS: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Modern Anxiety Toolkit',
    price: 29.00,
    originalPrice: 39.00,
    image: '/books/anxiety-toolkit-cover.jpg',
    category: 'Toolkit',
    rating: 4.9,
    reviewCount: 324,
    description: 'A comprehensive guide designed by licensed therapists to help you understand, manage, and overcome anxiety. Includes evidence-based techniques, worksheets, and daily practices.',
    shortDescription: 'Complete anxiety management guide with practical worksheets and proven techniques',
    includes: [
      '45-page interactive PDF workbook',
      '8 guided anxiety relief exercises',
      'Daily anxiety tracking journal',
      'Breathing technique illustrations',
      'Emergency anxiety toolkit',
      'Lifetime access & updates',
    ],
    format: 'PDF • Printable • Digital',
    previews: [
      '/books/anxiety-toolkit-cover.jpg',
      '/books/mindfulness-pack-cover.jpg',
      '/books/sleep-rituals-cover.jpg',
    ],
    faqs: [
      {
        question: 'How will I receive the files?',
        answer: 'Immediately after purchase, you will receive a download link via email. You can download the files anytime and save them to your device.',
      },
      {
        question: 'Can I share these with others?',
        answer: 'These resources are for personal use only. Each purchase is for individual use. If your organization needs multiple licenses, please contact us.',
      },
      {
        question: 'What if I\'m not satisfied?',
        answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, email us within 30 days of purchase for a full refund, no questions asked.',
      },
      {
        question: 'Are these workbooks compatible with tablets?',
        answer: 'Yes! All PDFs are fully compatible with tablets, phones, and computers. You can write directly on the PDFs using note-taking apps.',
      },
    ],
  },
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = use(params)
  const product = PRODUCTS[id] || PRODUCTS['1']
  const [activeTab, setActiveTab] = useState('description')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleBuyNow = () => {
    router.push(`/checkout?product=${id}&name=${encodeURIComponent(product.name)}&price=${product.price}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-warmWhite">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/shop" className="hover:text-navy transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-navy font-semibold">{product.name}</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left: Product Image */}
          <div>
            <div className="bg-gray-200 rounded-2xl aspect-square mb-4 flex items-center justify-center overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail Gallery */}
            <div className="flex gap-2">
              {product.previews.slice(0, 3).map((preview: string, index: number) => (
                <div
                  key={index}
                  className="w-20 h-20 rounded-lg bg-gray-200 overflow-hidden cursor-pointer hover:ring-2 ring-sage transition-all"
                >
                  <Image
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Category & Breadcrumb */}
            <div className="mb-4">
              <span className="inline-block bg-sage/20 text-sage text-xs font-semibold px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'fill-coral text-coral' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-coral">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-green-600 font-semibold mt-2">
                Save ${(product.originalPrice - product.price).toFixed(2)} ({Math.round((1 - product.price / product.originalPrice) * 100)}% off)
              </p>
            </div>

            {/* Short Description */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* What's Included */}
            <div className="mb-8 bg-white rounded-xl p-6">
              <h3 className="font-semibold text-navy mb-4">What's Included</h3>
              <ul className="space-y-3">
                {product.includes.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Format Badge */}
            <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
              <FileText size={18} className="text-sage" />
              <span className="font-semibold">{product.format}</span>
            </div>

            {/* Primary CTA */}
            <button 
              onClick={handleBuyNow}
              className="w-full bg-coral hover:bg-coral/90 text-white font-semibold py-4 rounded-lg transition-all hover:shadow-soft-lg flex items-center justify-center gap-2 mb-4"
            >
              <Download size={20} />
              Buy Now — Instant Download
            </button>

            {/* Security Badge */}
            <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
              🔒 256-bit SSL Secured | Visa • Mastercard • PayPal • Stripe
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl overflow-hidden mb-16">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200">
            {['description', 'preview', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 font-semibold text-center transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-sage text-sage'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'description' && 'Description'}
                {tab === 'preview' && 'Preview'}
                {tab === 'faq' && 'FAQ'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-semibold text-navy mb-4">About This Workbook</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Each section is designed to be completed at your own pace, with room for reflection and journaling. Whether you&apos;re managing daily anxiety or working through specific triggers, this workbook provides actionable strategies backed by cognitive behavioral therapy (CBT) and mindfulness principles.
                </p>
              </div>
            )}

            {/* Preview Tab */}
            {activeTab === 'preview' && (
              <div>
                <h3 className="text-xl font-semibold text-navy mb-6">Preview Pages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.previews.map((preview: string, index: number) => (
                    <div key={index} className="relative group">
                      <div className="bg-gray-200 rounded-lg aspect-square overflow-hidden">
                        <Image
                          src={preview}
                          alt={`Preview page ${index + 1}`}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-sm font-semibold">Purchase to Unlock</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div>
                <h3 className="text-xl font-semibold text-navy mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {product.faqs.map((faq: any, index: number) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedFaq(expandedFaq === index ? null : index)
                        }
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-navy text-left">
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-sage flex-shrink-0 transition-transform ${
                            expandedFaq === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
