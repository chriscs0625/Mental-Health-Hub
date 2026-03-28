'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const ORDERS = [
  {
    id: 'ORD-001',
    date: '2024-03-15',
    product: 'Anxiety Release Workbook',
    amount: 19.99,
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'ORD-002',
    date: '2024-02-28',
    product: 'Mindfulness & Meditation Journal',
    amount: 17.99,
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'ORD-003',
    date: '2024-02-10',
    product: 'Sleep & Rest Recovery Guide',
    amount: 22.99,
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'ORD-004',
    date: '2024-01-25',
    product: 'Stress Management Toolkit',
    amount: 24.99,
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
]

export default function OrdersPage() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">Order History</h1>
        <p className="text-gray-600">
          View all your past purchases and order details
        </p>
      </div>

      {ORDERS.length > 0 ? (
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                    Order ID
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                    Date
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                    Product
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                    Amount
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {ORDERS.map((order) => (
                  <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.product}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-coral">
                      ${order.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-sage font-semibold hover:underline">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-gray-200">
            {ORDERS.map((order) => (
              <div key={order.id} className="p-4">
                <button
                  onClick={() =>
                    setExpandedOrder(
                      expandedOrder === order.id ? null : order.id
                    )
                  }
                  className="w-full flex items-center justify-between mb-2"
                >
                  <div className="text-left flex-1">
                    <p className="font-semibold text-navy mb-1">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.product}</p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform ${
                      expandedOrder === order.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedOrder === order.id && (
                  <div className="pt-4 border-t border-gray-200 space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date</span>
                      <span className="font-medium text-navy">
                        {new Date(order.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount</span>
                      <span className="font-semibold text-coral">
                        ${order.amount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <button className="w-full mt-4 text-sage font-semibold py-2 hover:bg-gray-100 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl">
          <div className="text-5xl mb-4">📋</div>
          <h2 className="text-xl font-semibold text-navy mb-2">
            No Orders Yet
          </h2>
          <p className="text-gray-600 mb-6">
            You haven&apos;t placed any orders yet. Explore our wellness resources!
          </p>
          <a
            href="/shop"
            className="inline-block bg-sage text-white font-semibold py-3 px-8 rounded-lg hover:bg-sage/90 transition-colors"
          >
            Start Shopping
          </a>
        </div>
      )}
    </div>
  )
}
