import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const products = [
    {
      id: '1',
      name: 'Modern Anxiety Toolkit',
      price: 29.00,
      originalPrice: 39.00,
      image: '/products/anxiety-toolkit.jpg',
      category: 'Toolkit',
      rating: 4.9,
      reviewCount: 324,
    },
    {
      id: '2',
      name: 'Daily Mindfulness Pack',
      price: 19.00,
      originalPrice: 24.00,
      image: '/products/mindfulness-pack.jpg',
      category: 'Mindfulness',
      rating: 4.8,
      reviewCount: 287,
    },
    {
      id: '3',
      name: 'Restorative Sleep Rituals',
      price: 24.99,
      originalPrice: 34.99,
      image: '/products/sleep-rituals.jpg',
      category: 'Sleep Guide',
      rating: 4.9,
      reviewCount: 451,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600">
            Our most popular wellness resources
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="/shop"
            className="inline-block bg-sage hover:bg-sage/90 text-white font-semibold py-3 px-8 rounded-lg transition-all hover:shadow-soft-md"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
