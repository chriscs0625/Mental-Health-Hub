'use client'

import { useState } from 'react'
import { Eye, EyeOff, Save } from 'lucide-react'

export default function AdminSettingsPage() {
  const [storeSettings, setStoreSettings] = useState({
    storeName: 'Mental Balance Hub',
    storeEmail: 'support@mentalbalancehub.com',
    storePhone: '+1 (555) 123-4567',
    supportEmail: 'help@mentalbalancehub.com',
  })

  const [paymentSettings, setPaymentSettings] = useState({
    stripeKey: 'pk_live_51234567890abcdefg',
    showStripeKey: false,
  })

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUser: 'your-email@gmail.com',
    smtpPassword: 'app-password-here',
    showPassword: false,
  })

  const [saved, setSaved] = useState(false)

  const handleStoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setStoreSettings((prev) => ({ ...prev, [name]: value }))
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">Settings</h1>
        <p className="text-gray-600">Manage your store configuration</p>
      </div>

      <div className="space-y-8">
        {/* Store Information */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-navy mb-6">
            Store Information
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Store Name
              </label>
              <input
                type="text"
                name="storeName"
                value={storeSettings.storeName}
                onChange={handleStoreChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Store Email
                </label>
                <input
                  type="email"
                  name="storeEmail"
                  value={storeSettings.storeEmail}
                  onChange={handleStoreChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Store Phone
                </label>
                <input
                  type="tel"
                  name="storePhone"
                  value={storeSettings.storePhone}
                  onChange={handleStoreChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Support Email
              </label>
              <input
                type="email"
                name="supportEmail"
                value={storeSettings.supportEmail}
                onChange={handleStoreChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </div>

            <button
              onClick={handleSave}
              className="bg-sage hover:bg-sage/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto"
            >
              <Save size={18} />
              Save Changes
            </button>
            {saved && (
              <p className="text-green-600 font-semibold">
                Settings saved successfully ✓
              </p>
            )}
          </div>
        </div>

        {/* Payment Settings */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-navy mb-6">
            Payment Settings
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Stripe API Key
              </label>
              <div className="relative">
                <input
                  type={paymentSettings.showStripeKey ? 'text' : 'password'}
                  value={paymentSettings.stripeKey}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage bg-gray-50"
                />
                <button
                  onClick={() =>
                    setPaymentSettings((prev) => ({
                      ...prev,
                      showStripeKey: !prev.showStripeKey,
                    }))
                  }
                  className="absolute right-3 top-3 text-gray-600"
                >
                  {paymentSettings.showStripeKey ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Your API key is encrypted and secure
              </p>
            </div>

            <button className="bg-sage hover:bg-sage/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Update API Key
            </button>
          </div>
        </div>

        {/* Email Settings */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-navy mb-6">
            Email Settings (SMTP)
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  SMTP Host
                </label>
                <input
                  type="text"
                  value={emailSettings.smtpHost}
                  onChange={(e) =>
                    setEmailSettings((prev) => ({
                      ...prev,
                      smtpHost: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  SMTP Port
                </label>
                <input
                  type="text"
                  value={emailSettings.smtpPort}
                  onChange={(e) =>
                    setEmailSettings((prev) => ({
                      ...prev,
                      smtpPort: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                SMTP Username
              </label>
              <input
                type="text"
                value={emailSettings.smtpUser}
                onChange={(e) =>
                  setEmailSettings((prev) => ({
                    ...prev,
                    smtpUser: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                SMTP Password
              </label>
              <div className="relative">
                <input
                  type={emailSettings.showPassword ? 'text' : 'password'}
                  value={emailSettings.smtpPassword}
                  onChange={(e) =>
                    setEmailSettings((prev) => ({
                      ...prev,
                      smtpPassword: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                />
                <button
                  onClick={() =>
                    setEmailSettings((prev) => ({
                      ...prev,
                      showPassword: !prev.showPassword,
                    }))
                  }
                  className="absolute right-3 top-3 text-gray-600"
                >
                  {emailSettings.showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <button className="bg-sage hover:bg-sage/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Test Email Connection
            </button>
          </div>
        </div>

        {/* API Documentation Link */}
        <div className="bg-sage/10 rounded-2xl p-6 border border-sage/20">
          <p className="text-navy font-semibold mb-2">Need help setting up?</p>
          <p className="text-gray-600 text-sm mb-4">
            Check our documentation for detailed setup instructions and API references.
          </p>
          <a
            href="#"
            className="text-sage font-semibold hover:underline text-sm"
          >
            View Documentation →
          </a>
        </div>
      </div>
    </div>
  )
}
