'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    country: 'United States',
  })

  const [saved, setSaved] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setSaved(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save changes
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">Account Settings</h1>
        <p className="text-gray-600">
          Manage your account information and preferences
        </p>
      </div>

      <div className="space-y-8">
        {/* Account Information */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-navy mb-6">
            Account Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Other</option>
              </select>
            </div>

            {/* Save Button */}
            <div className="flex items-center gap-3 pt-4">
              <button
                type="submit"
                className="bg-sage hover:bg-sage/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
              >
                <Save size={18} />
                Save Changes
              </button>
              {saved && (
                <span className="text-green-600 font-semibold text-sm">
                  Changes saved successfully ✓
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Password & Security */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-navy mb-6">
            Password & Security
          </h2>

          <div className="space-y-6">
            {/* Current Password */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </div>

            <button className="bg-sage hover:bg-sage/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Update Password
            </button>
          </div>
        </div>

        {/* Email Preferences */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-navy mb-6">
            Email Preferences
          </h2>

          <div className="space-y-4">
            {[
              {
                title: 'Marketing emails',
                desc: 'Receive updates about new products and offers',
              },
              {
                title: 'Order updates',
                desc: 'Get notified about your purchases and downloads',
              },
              {
                title: 'Product tips',
                desc: 'Helpful tips on how to use your wellness resources',
              },
            ].map((pref, index) => (
              <label key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={index < 2}
                  className="w-4 h-4 rounded accent-sage cursor-pointer"
                />
                <div>
                  <p className="font-semibold text-navy text-sm">{pref.title}</p>
                  <p className="text-xs text-gray-600">{pref.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
          <h2 className="text-xl font-semibold text-red-700 mb-4">
            Danger Zone
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Once you delete your account, there is no going back. Please be certain.
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
