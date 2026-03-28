'use client'

import { useState } from 'react'
import { Download, Search } from 'lucide-react'

const ORDERS = [
  {
    id: 'ORD-001',
    customer: 'Sarah Mitchell',
    product: 'Anxiety Release Workbook',
    amount: '$19.99',
    date: '2024-03-18',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'ORD-002',
    customer: 'James Chen',
    product: 'Mindfulness Journal',
    amount: '$17.99',
    date: '2024-03-17',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'ORD-003',
    customer: 'Emily Rodriguez',
    product: 'Sleep Recovery Guide',
    amount: '$22.99',
    date: '2024-03-16',
    status: 'Processing',
    statusColor: 'bg-yellow-100 text-yellow-800',
  },
  {
    id: 'ORD-004',
    customer: 'Michael Park',
    product: 'Stress Toolkit Bundle',
    amount: '$24.99',
    date: '2024-03-15',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'ORD-005',
    customer: 'Lisa Thompson',
    product: 'Anxiety Release Workbook',
    amount: '$19.99',
    date: '2024-03-14',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
]

export default function AdminOrdersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState('all')

  const filteredOrders = ORDERS.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = !statusFilter || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-navy mb-2">Orders</h1>
          <p className="text-gray-600">Manage customer orders and refunds</p>
        </div>
        <button className="bg-sage hover:bg-sage/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
          <Download size={20} />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by order ID, customer, or product..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-sm"
          />
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter || ''}
          onChange={(e) => setStatusFilter(e.target.value || null)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-sm"
        >
          <option value="">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Processing">Processing</option>
          <option value="Refunded">Refunded</option>
        </select>

        {/* Date Range */}
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage text-sm"
        >
          <option value="all">All Time</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Order ID
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Customer
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Product
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Amount
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Date
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
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-navy">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.product}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-coral">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.date}
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

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No orders found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-600">
          Showing 1-{filteredOrders.length} of {ORDERS.length} orders
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Previous
          </button>
          <button className="px-4 py-2 bg-sage text-white rounded-lg text-sm">
            1
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
