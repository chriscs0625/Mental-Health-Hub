'use client'

import Link from 'next/link'
import { ShoppingCart, Star } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image?: string
  category: string
  rating?: number
  reviewCount?: number
  onAddToCart?: () => void
}

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

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  category,
  rating = 4.8,
  reviewCount = 120,
  onAddToCart,
}: ProductCardProps) {
  const router = useRouter()
  const [isAdding, setIsAdding] = useState(false)

  const handleBuyNow = () => {
    router.push(`/checkout?product=${id}&name=${encodeURIComponent(name)}&price=${price}`)
  }

  return (
    <div className="group h-full">
      <Link href={`/product/${id}`}>
        <div 
          className="bg-glass border border-[rgba(249,240,226,0.1)] rounded-[24px] cursor-pointer h-full flex flex-col p-2 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          style={{ transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* Product Image */}
          <div className="relative h-56 w-full rounded-[12px] overflow-hidden group-hover:opacity-95 transition-all">
            <img 
              src={getProductImage(id)} 
              alt={name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1">
            {/* Category Badge */}
            <div className="inline-flex w-fit mb-3">
              <span className="text-xs font-semibold px-3 py-1 bg-[#F04915]/10 text-[#F04915] rounded-full border border-[#F04915]/20">
                {category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg text-[#F9F0E2] mb-2 line-clamp-2">{name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(rating) ? 'fill-[#F04915] text-[#F04915]' : 'text-gray-600'}
                  />
                ))}
              </div>
              <span className="text-xs text-[#F9F0E2]/60">({reviewCount})</span>
            </div>

            {/* Price */}
            <div className="mb-4 mt-auto">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#F9F0E2]">${price.toFixed(2)}</span>
                {originalPrice && (
                  <span className="text-sm text-[#F9F0E2]/40 line-through">${originalPrice.toFixed(2)}</span>
                )}
              </div>
              {originalPrice && (
                <p className="text-xs text-[#F04915] font-semibold mt-1">
                  Save ${(originalPrice - price).toFixed(2)}
                </p>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={(e) => {
                e.preventDefault()
                handleBuyNow()
              }}
              className="w-full bg-[#131A1A] border border-[rgba(249,240,226,0.1)] group-hover:bg-[#F04915] group-hover:border-[#F04915] text-[#F9F0E2] font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              Get Instant Access
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}
