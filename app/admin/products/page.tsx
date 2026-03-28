'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Edit2, Trash2, Plus, ChevronDown } from 'lucide-react'

const PRODUCTS = [
  {
    id: '1',
    name: 'Anxiety Release Workbook',
    price: 19.99,
    category: 'Workbook',
    stock: 'Unlimited',
    sales: 324,
    image: '/images/product-1.jpg',
  },
  {
    id: '2',
    name: 'Mindfulness & Meditation Journal',
    price: 17.99,
    category: 'Journal',
    stock: 'Unlimited',
    sales: 287,
    image: '/images/product-2.jpg',
  },
  {
    id: '3',
    name: 'Sleep & Rest Recovery Guide',
    price: 22.99,
    category: 'Guide',
    stock: 'Unlimited',
    sales: 451,
    image: '/images/product-3.jpg',
  },
]

export default function AdminProductsPage() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    originalPrice: '',
    category: 'Workbook',
    description: '',
    published: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? !prev[name as keyof typeof prev] : value,
    }))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-navy mb-2">Products</h1>
          <p className="text-gray-600">Manage your wellness resources</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
        >
          <Plus size={20} />
          Add New Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Product
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Category
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Price
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Sales
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-navy text-sm">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Digital • PDF Format
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-coral">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.sales} sales
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-sage">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-coral">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-bold text-navy mb-6">Add New Product</h2>

            <form className="space-y-4">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-sm"
                />
              </div>

              {/* Price & Original Price */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Sale Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="19.99"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Original Price
                  </label>
                  <input
                    type="number"
                    name="originalPrice"
                    value={formData.originalPrice}
                    onChange={handleInputChange}
                    placeholder="29.99"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-sm"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-sm"
                >
                  <option>Workbook</option>
                  <option>Journal</option>
                  <option>Guide</option>
                  <option>Toolkit</option>
                  <option>Bundle</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter product description"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-sm"
                />
              </div>

              {/* File Upload (placeholder) */}
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  PDF File
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-sage transition-colors cursor-pointer">
                  <p className="text-sm text-gray-600">Drag and drop your PDF here</p>
                  <p className="text-xs text-gray-500">or click to browse</p>
                </div>
              </div>

              {/* Publish Toggle */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="w-4 h-4 accent-sage cursor-pointer"
                />
                <span className="text-sm font-semibold text-navy">
                  Publish product
                </span>
              </label>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-200 text-navy rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-sage text-white rounded-lg hover:bg-sage/90 transition-colors font-semibold text-sm"
                >
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
