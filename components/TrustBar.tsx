import { Users, Zap, Lock, CheckCircle } from 'lucide-react'

export default function TrustBar() {
  const items = [
    {
      icon: Users,
      text: '7500+ Customers',
      subtext: 'Trusted by wellness seekers',
    },
    {
      icon: Zap,
      text: 'Instant Download',
      subtext: 'Access immediately after purchase',
    },
    {
      icon: Lock,
      text: 'Secure Payment',
      subtext: 'Encrypted transactions',
    },
    {
      icon: CheckCircle,
      text: '30-Day Guarantee',
      subtext: 'Money-back guarantee',
    },
  ]

  return (
    <div className="bg-warmWhite py-12 md:py-16 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center">
                  <Icon size={24} className="text-sage" />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">
                    {item.text}
                  </p>
                  <p className="text-xs text-gray-600">
                    {item.subtext}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
