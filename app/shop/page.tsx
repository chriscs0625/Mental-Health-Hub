'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { ChevronDown } from 'lucide-react'

const ALL_PRODUCTS = [
  {
    id: '1',
    name: 'Modern Anxiety Toolkit',
    price: 29.00,
    originalPrice: 39.00,
    image: '/products/anxiety-toolkit.jpg',
    category: 'Toolkit',
    rating: 4.9,
    reviewCount: 324,
  },
  {
    id: '2',
    name: 'Daily Mindfulness Pack',
    price: 19.00,
    originalPrice: 24.00,
    image: '/products/mindfulness-pack.jpg',
    category: 'Mindfulness',
    rating: 4.8,
    reviewCount: 287,
  },
  {
    id: '3',
    name: 'Restorative Sleep Rituals',
    price: 24.99,
    originalPrice: 34.99,
    image: '/products/sleep-rituals.jpg',
    category: 'Sleep Guide',
    rating: 4.9,
    reviewCount: 451,
  },
  {
    id: '4',
    name: 'Stress Management Toolkit',
    price: 24.99,
    originalPrice: 34.99,
    image: '/products/anxiety-toolkit.jpg',
    category: 'Toolkit',
    rating: 4.7,
    reviewCount: 198,
  },
  {
    id: '5',
    name: 'Emotional Intelligence Workbook',
    price: 19.99,
    originalPrice: 28.99,
    image: '/products/mindfulness-pack.jpg',
    category: 'Mindfulness',
    rating: 4.8,
    reviewCount: 276,
  },
  {
    id: '6',
    name: 'Self-Care Ritual Guide Bundle',
    price: 29.99,
    originalPrice: 44.99,
    image: '/products/sleep-rituals.jpg',
    category: 'Sleep Guide',
    rating: 4.9,
    reviewCount: 512,
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState(50)
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['Toolkit', 'Mindfulness', 'Sleep Guide']

  const filteredProducts = useMemo(() => {
    let products = ALL_PRODUCTS

    if (selectedCategory) {
      products = products.filter((p) => p.category === selectedCategory)
    }

    products = products.filter((p) => p.price <= priceRange)

    if (sortBy === 'price-low') {
      products.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      products.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      products.sort((a, b) => b.rating - a.rating)
    }

    return products
  }, [selectedCategory, priceRange, sortBy])

  return (
    <div className="min-h-screen flex flex-col bg-warmWhite">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-navy mb-2">
            All Products
          </h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {ALL_PRODUCTS.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-navy mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === null
                        ? 'bg-sage text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() =>
                        setSelectedCategory(selectedCategory === cat ? null : cat)
                      }
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat
                          ? 'bg-sage text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-navy mb-4">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full cursor-pointer accent-sage"
                />
                <p className="mt-3 text-sm text-gray-600">
                  Up to ${priceRange.toFixed(2)}
                </p>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory(null)
                  setPriceRange(50)
                }}
                className="w-full py-2 text-sm font-medium text-sage border border-sage rounded-lg hover:bg-sage/10 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort Dropdown */}
            <div className="mb-8 flex items-center justify-end">
              <label className="text-sm text-gray-600 mr-3">Sort by:</label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm pr-10 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-gray-600 mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null)
                    setPriceRange(50)
                  }}
                  className="text-sage font-semibold hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
