'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Therapist',
    rating: 5,
    quote: 'These worksheets have become an essential part of my practice. My clients love the clarity and thoughtfulness of each resource.',
    image: '👩‍⚕️',
  },
  {
    name: 'James Chen',
    role: 'Student',
    rating: 5,
    quote: 'Perfect for managing anxiety during exam season. The journal prompts really helped me organize my thoughts and feel more grounded.',
    image: '👨‍🎓',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Professional',
    rating: 5,
    quote: 'I was skeptical at first, but after using the stress management workbook, I finally have practical tools to use daily.',
    image: '👩‍💼',
  },
  {
    name: 'Michael Park',
    role: 'Fitness Coach',
    rating: 5,
    quote: 'Great complement to physical wellness. My clients appreciate the holistic approach to health with these mental wellness resources.',
    image: '👨‍🏫',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section className="py-16 md:py-24 bg-warmWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Loved by Our Community
          </h2>
          <p className="text-lg text-gray-600">
            See what real customers are saying about Mental Balance Hub
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonials */}
          <div className="relative h-80 md:h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 h-full flex flex-col justify-between">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-coral text-coral"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center text-xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold text-navy">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-navy" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setAutoplay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === current
                      ? 'bg-sage w-8'
                      : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-navy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
