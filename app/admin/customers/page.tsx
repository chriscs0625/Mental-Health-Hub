'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

const CUSTOMERS = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    email: 'sarah@example.com',
    orders: 3,
    totalSpent: '$67.97',
    joined: '2024-01-15',
    status: 'Active',
  },
  {
    id: '2',
    name: 'James Chen',
    email: 'james@example.com',
    orders: 1,
    totalSpent: '$19.99',
    joined: '2024-02-20',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily@example.com',
    orders: 5,
    totalSpent: '$109.95',
    joined: '2023-12-10',
    status: 'Active',
  },
  {
    id: '4',
    name: 'Michael Park',
    email: 'michael@example.com',
    orders: 2,
    totalSpent: '$42.98',
    joined: '2024-02-01',
    status: 'Active',
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    email: 'lisa@example.com',
    orders: 1,
    totalSpent: '$19.99',
    joined: '2024-03-05',
    status: 'Inactive',
  },
]

export default function AdminCustomersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCustomers = CUSTOMERS.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">Customers</h1>
        <p className="text-gray-600">Manage your customer base</p>
      </div>

      {/* Search */}
      <div className="mb-6 relative max-w-md">
        <Search size={18} className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search customers..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
        />
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Customer
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Email
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Orders
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Total Spent
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Joined
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-navy text-sm">
                        {customer.name}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {customer.email}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-navy">
                    {customer.orders}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-coral">
                    {customer.totalSpent}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {customer.joined}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        customer.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No customers found.</p>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <p className="text-gray-600 text-sm mb-2">Total Customers</p>
          <p className="text-3xl font-bold text-navy">{CUSTOMERS.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <p className="text-gray-600 text-sm mb-2">Active Customers</p>
          <p className="text-3xl font-bold text-sage">
            {CUSTOMERS.filter((c) => c.status === 'Active').length}
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <p className="text-gray-600 text-sm mb-2">Avg. Customer Value</p>
          <p className="text-3xl font-bold text-coral">$52.18</p>
        </div>
      </div>
    </div>
  )
}
