'use client'

import Image from 'next/image'
import { Download, Mail } from 'lucide-react'

const DOWNLOADS = [
  {
    id: '1',
    name: 'Anxiety Release Workbook',
    image: '/images/product-1.jpg',
    purchaseDate: '2024-03-15',
    downloadCount: 3,
  },
  {
    id: '2',
    name: 'Mindfulness & Meditation Journal',
    image: '/images/product-2.jpg',
    purchaseDate: '2024-02-28',
    downloadCount: 5,
  },
  {
    id: '3',
    name: 'Sleep & Rest Recovery Guide',
    image: '/images/product-3.jpg',
    purchaseDate: '2024-01-10',
    downloadCount: 1,
  },
]

export default function DownloadsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">My Downloads</h1>
        <p className="text-gray-600">
          Access all your purchased wellness resources
        </p>
      </div>

      {DOWNLOADS.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOWNLOADS.map((download) => (
            <div
              key={download.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all p-4"
            >
              {/* Product Image */}
              <div className="bg-gray-200 rounded-lg aspect-square mb-4 overflow-hidden">
                <Image
                  src={download.image}
                  alt={download.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-navy mb-2 line-clamp-2">
                {download.name}
              </h3>

              {/* Date */}
              <p className="text-sm text-gray-600 mb-4">
                Purchased on{' '}
                {new Date(download.purchaseDate).toLocaleDateString()}
              </p>

              {/* Actions */}
              <div className="space-y-2">
                <button className="w-full bg-sage hover:bg-sage/90 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Download size={16} />
                  Download
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Mail size={16} />
                  Re-send to Email
                </button>
              </div>

              {/* Meta */}
              <p className="text-xs text-gray-500 mt-3 text-center">
                Downloaded {download.downloadCount} time{download.downloadCount !== 1 ? 's' : ''}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl">
          <div className="text-5xl mb-4">📦</div>
          <h2 className="text-xl font-semibold text-navy mb-2">
            No Downloads Yet
          </h2>
          <p className="text-gray-600 mb-6">
            You haven&apos;t purchased any products yet. Start exploring our wellness resources!
          </p>
          <a
            href="/shop"
            className="inline-block bg-sage text-white font-semibold py-3 px-8 rounded-lg hover:bg-sage/90 transition-colors"
          >
            Browse Products
          </a>
        </div>
      )}
    </div>
  )
}
