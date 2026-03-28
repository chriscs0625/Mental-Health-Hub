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
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F9F0E2] mb-2">Account Settings</h1>
        <p className="text-[#F9F0E2]/60">
          Manage your account information and preferences
        </p>
      </div>

      <div className="space-y-8">
        {/* Account Information */}
        <div className="bg-glass border border-[rgba(249,240,226,0.1)] rounded-[12px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-[#F9F0E2] mb-8">
            Account Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-0 py-2 bg-[#131A1A] border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors appearance-none"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Other</option>
              </select>
            </div>

            {/* Save Button */}
            <div className="flex items-center gap-4 pt-4 border-t border-[rgba(249,240,226,0.05)] mt-4">
              <button
                type="submit"
                className="bg-[#F04915] hover:bg-[#F04915]/90 text-[#F9F0E2] text-sm uppercase tracking-wide font-semibold py-3 px-8 rounded-[4px] transition-colors flex items-center justify-center gap-2"
              >
                <Save size={16} />
                Save Changes
              </button>
              {saved && (
                <span className="text-[#7CAF7F] font-medium text-sm tracking-wide">
                  Changes saved successfully ✓
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Password & Security */}
        <div className="bg-glass border border-[rgba(249,240,226,0.1)] rounded-[12px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-[#F9F0E2] mb-8">
            Password & Security
          </h2>

          <div className="space-y-8">
            {/* Current Password */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors placeholder:text-[#F9F0E2]/20"
              />
            </div>

            {/* New Password */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors placeholder:text-[#F9F0E2]/20"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest font-normal text-[#F9F0E2]/60 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-0 py-2 bg-transparent border-0 border-b border-[rgba(249,240,226,0.2)] focus:outline-none focus:ring-0 focus:border-[#F04915] text-[#F9F0E2] transition-colors placeholder:text-[#F9F0E2]/20"
              />
            </div>

            <div className="pt-4 border-t border-[rgba(249,240,226,0.05)]">
              <button className="bg-transparent border border-[#F9F0E2]/30 hover:bg-white/5 text-[#F9F0E2] text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-[4px] transition-colors">
                Update Password
              </button>
            </div>
          </div>
        </div>

        {/* Email Preferences */}
        <div className="bg-glass border border-[rgba(249,240,226,0.1)] rounded-[12px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-[#F9F0E2] mb-6">
            Email Preferences
          </h2>

          <div className="space-y-2">
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
              <label key={index} className="flex items-center gap-4 p-4 hover:bg-white/5 rounded-[8px] cursor-pointer transition-colors border border-transparent hover:border-[#F9F0E2]/10">
                <input
                  type="checkbox"
                  defaultChecked={index < 2}
                  className="w-4 h-4 rounded-[4px] accent-[#F04915] cursor-pointer"
                />
                <div>
                  <p className="font-semibold text-[#F9F0E2] text-[13px]">{pref.title}</p>
                  <p className="text-xs text-[#F9F0E2]/60">{pref.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-glass border border-red-500/20 rounded-[12px] p-8">
          <h2 className="text-[11px] uppercase tracking-widest font-bold text-red-500 mb-4">
            Danger Zone
          </h2>

          <p className="text-[13px] text-[#F9F0E2]/60 mb-6">
            Once you delete your account, there is no going back. Please be certain.
          </p>

          <button className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-3 px-6 rounded-[4px] text-xs uppercase tracking-wider transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
