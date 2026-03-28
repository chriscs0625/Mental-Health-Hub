'use client'

import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

const REFUND_REQUESTS = [
  {
    id: 'REF-001',
    customer: 'John Smith',
    product: 'Anxiety Release Workbook',
    amount: '$19.99',
    reason: 'Content not as expected',
    date: '2024-03-18',
    status: 'Pending',
  },
  {
    id: 'REF-002',
    customer: 'Mary Johnson',
    product: 'Sleep Recovery Guide',
    amount: '$22.99',
    reason: 'Technical issues accessing file',
    date: '2024-03-16',
    status: 'Pending',
  },
  {
    id: 'REF-003',
    customer: 'David Lee',
    product: 'Mindfulness Journal',
    amount: '$17.99',
    reason: 'Changed mind',
    date: '2024-03-14',
    status: 'Approved',
  },
  {
    id: 'REF-004',
    customer: 'Patricia Brown',
    product: 'Stress Management Toolkit',
    amount: '$24.99',
    reason: 'Downloaded by mistake',
    date: '2024-03-10',
    status: 'Rejected',
  },
]

export default function AdminRefundsPage() {
  const [refunds, setRefunds] = useState(REFUND_REQUESTS)

  const handleApproveRefund = (id: string) => {
    setRefunds((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'Approved' } : r))
    )
  }

  const handleRejectRefund = (id: string) => {
    setRefunds((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'Rejected' } : r))
    )
  }

  const pendingRefunds = refunds.filter((r) => r.status === 'Pending')
  const approvedRefunds = refunds.filter((r) => r.status === 'Approved')
  const rejectedRefunds = refunds.filter((r) => r.status === 'Rejected')
  const totalRefunded = (approvedRefunds.length * 20).toFixed(2) // Approximate

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">Refunds</h1>
        <p className="text-gray-600">Manage refund requests from customers</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          {
            label: 'Pending Requests',
            value: pendingRefunds.length,
            color: 'bg-yellow-100 text-yellow-800',
          },
          {
            label: 'Approved',
            value: approvedRefunds.length,
            color: 'bg-green-100 text-green-800',
          },
          {
            label: 'Rejected',
            value: rejectedRefunds.length,
            color: 'bg-red-100 text-red-800',
          },
          {
            label: 'Total Refunded',
            value: `$${totalRefunded}`,
            color: 'bg-coral/10 text-coral',
          },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
            <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Pending Refunds */}
      {pendingRefunds.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-navy mb-4">
            Pending Requests ({pendingRefunds.length})
          </h2>

          <div className="space-y-4">
            {pendingRefunds.map((refund) => (
              <div
                key={refund.id}
                className="bg-white rounded-2xl p-6 shadow-soft border-l-4 border-yellow-400"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-navy mb-1">{refund.id}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">{refund.customer}</span> • {refund.product}
                    </p>
                    <p className="text-xs text-gray-500">
                      Reason: {refund.reason}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Requested on {refund.date}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-3 md:items-end">
                    <p className="text-xl font-bold text-coral">
                      {refund.amount}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApproveRefund(refund.id)}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-2 text-sm"
                      >
                        <CheckCircle size={16} />
                        Approve
                      </button>
                      <button
                        onClick={() => handleRejectRefund(refund.id)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-2 text-sm"
                      >
                        <XCircle size={16} />
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Refunds Table */}
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-navy">All Refund Requests</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Request ID
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
                  Reason
                </th>
                <th className="text-left px-6 py-4 font-semibold text-navy text-sm">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {refunds.map((refund) => (
                <tr key={refund.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-navy">
                    {refund.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {refund.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {refund.product}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-coral">
                    {refund.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {refund.reason}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        refund.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : refund.status === 'Approved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {refund.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
