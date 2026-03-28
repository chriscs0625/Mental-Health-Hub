'use client'

import { BarChart3, TrendingUp, Package, Users, DollarSign, ShoppingCart } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    {
      label: 'Total Revenue',
      value: '$12,485',
      change: '+12.5%',
      icon: DollarSign,
      color: 'bg-sage',
    },
    {
      label: 'Total Orders',
      value: '284',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'bg-lavender',
    },
    {
      label: 'Active Products',
      value: '18',
      change: '+2',
      icon: Package,
      color: 'bg-coral',
    },
    {
      label: 'Total Customers',
      value: '1,204',
      change: '+45',
      icon: Users,
      color: 'bg-blue-500',
    },
  ]

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'Sarah Mitchell',
      product: 'Anxiety Release Workbook',
      amount: '$19.99',
      date: '2024-03-18',
      status: 'Completed',
    },
    {
      id: 'ORD-002',
      customer: 'James Chen',
      product: 'Mindfulness Journal',
      amount: '$17.99',
      date: '2024-03-17',
      status: 'Completed',
    },
    {
      id: 'ORD-003',
      customer: 'Emily Rodriguez',
      product: 'Sleep Recovery Guide',
      amount: '$22.99',
      date: '2024-03-16',
      status: 'Processing',
    },
    {
      id: 'ORD-004',
      customer: 'Michael Park',
      product: 'Stress Toolkit Bundle',
      amount: '$24.99',
      date: '2024-03-15',
      status: 'Completed',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Admin. Here's your business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className="text-green-600 font-semibold text-sm">
                  {stat.change}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-navy">{stat.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-navy mb-6 flex items-center gap-2">
            <BarChart3 size={20} />
            Monthly Revenue
          </h2>
          <div className="h-64 flex items-end justify-around gap-2">
            {[45, 52, 48, 65, 72, 68, 58, 75].map((value, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1">
                <div
                  className="w-full bg-gradient-to-t from-sage to-sage/50 rounded-t-lg transition-all hover:from-sage/80"
                  style={{ height: `${(value / 80) * 100}%` }}
                  title={`${value}%`}
                />
                <span className="text-xs text-gray-500">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-navy mb-4">Quick Stats</h2>
          <div className="space-y-4">
            {[
              { label: 'Conversion Rate', value: '3.2%' },
              { label: 'Avg. Order Value', value: '$21.50' },
              { label: 'Customer Satisfaction', value: '4.8/5' },
              { label: 'Refund Rate', value: '0.8%' },
            ].map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{stat.label}</span>
                <span className="font-semibold text-navy">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-12 bg-white rounded-2xl shadow-soft overflow-hidden">
        <div className="px-6 py-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-navy flex items-center gap-2">
            <ShoppingCart size={20} />
            Recent Orders
          </h2>
        </div>

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
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
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
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <a href="/admin/orders" className="text-sage font-semibold hover:underline">
            View all orders →
          </a>
        </div>
      </div>
    </div>
  )
}
