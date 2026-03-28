import { Search, CreditCard, Download, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Browse Products',
      description: 'Explore our curated collection of wellness resources and find what resonates with you.',
    },
    {
      icon: CreditCard,
      title: 'Secure Checkout',
      description: 'Complete your purchase safely with industry-standard encryption and multiple payment options.',
    },
    {
      icon: Download,
      title: 'Instant Download',
      description: 'Get immediate access to your digital resources and start your wellness journey right away.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to start your mental wellness journey
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-warmWhite rounded-2xl p-8 h-full hover:shadow-soft-md transition-shadow">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-sage/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={32} className="text-sage" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 text-sage">
                    <ArrowRight size={28} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Ready to start your wellness journey?</p>
          <a
            href="/shop"
            className="inline-block bg-coral hover:bg-coral/90 text-white font-semibold py-3 px-8 rounded-lg transition-all hover:shadow-soft-lg"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  )
}
