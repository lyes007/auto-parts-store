// import { db } from "@/lib/db"
// import type { Product } from "@/lib/db"
import Image from "next/image"
import Link from "next/link"
import {
  ShoppingCart,
  Truck,
  Shield,
  Wrench,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Clock,
  Search,
  Filter,
  Heart,
  Eye,
} from "lucide-react"
import MobileMenu from "@/components/mobile-menu"

// Mock products data
const mockProducts = [
  {
    id: 1,
    name: "Premium Brake Pads",
    price: "299.99",
    category: "Brake System",
    description: "High-quality brake pads for optimal stopping power and durability.",
    imageUrl: "/placeholder.svg?height=300&width=400&query=brake pads",
    stockQuantity: 50,
    _count: { reviews: 12 }
  },
  {
    id: 2,
    name: "LED Headlight Bulbs",
    price: "89.99",
    category: "Lighting",
    description: "Bright LED headlight bulbs for improved visibility and safety.",
    imageUrl: "/placeholder.svg?height=300&width=400&query=led bulbs",
    stockQuantity: 25,
    _count: { reviews: 8 }
  },
  {
    id: 3,
    name: "Air Filter Set",
    price: "45.99",
    category: "Engine",
    description: "High-performance air filters for better engine performance.",
    imageUrl: "/placeholder.svg?height=300&width=400&query=air filter",
    stockQuantity: 100,
    _count: { reviews: 15 }
  },
  {
    id: 4,
    name: "Oil Filter",
    price: "32.99",
    category: "Engine",
    description: "Quality oil filters for engine protection and longevity.",
    imageUrl: "/placeholder.svg?height=300&width=400&query=oil filter",
    stockQuantity: 75,
    _count: { reviews: 6 }
  },
  {
    id: 5,
    name: "Spark Plugs Set",
    price: "67.99",
    category: "Engine",
    description: "Premium spark plugs for optimal ignition performance.",
    imageUrl: "/placeholder.svg?height=300&width=400&query=spark plugs",
    stockQuantity: 40,
    _count: { reviews: 9 }
  },
  {
    id: 6,
    name: "Wiper Blades",
    price: "28.99",
    category: "Exterior",
    description: "Durable wiper blades for clear visibility in all weather.",
    imageUrl: "/placeholder.svg?height=300&width=400&query=wiper blades",
    stockQuantity: 60,
    _count: { reviews: 11 }
  }
]

export default function HomePage() {
  const products = mockProducts

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 lg:hidden">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center">
            <Wrench className="h-7 w-7 text-primary-green mr-2" />
            <span className="text-xl font-bold text-primary-black">AutoParts Pro</span>
          </div>
          <button className="mobile-menu-toggle p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Menu className="h-6 w-6 text-primary-dark" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className="mobile-menu hidden fixed inset-0 bg-black/50 z-40">
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform translate-x-full transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <button className="mobile-menu-close p-2 rounded-lg hover:bg-gray-100">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <a
                href="#products"
                className="block py-3 text-lg font-medium text-primary-dark hover:text-primary-green transition-colors"
              >
                Products
              </a>
              <a
                href="#about"
                className="block py-3 text-lg font-medium text-primary-dark hover:text-primary-green transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="block py-3 text-lg font-medium text-primary-dark hover:text-primary-green transition-colors"
              >
                Contact
              </a>
              <Link href="/admin" className="block w-full mt-6 btn-primary text-center">
                Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Header */}
      <header className="hidden lg:block bg-white/95 backdrop-blur-md shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Wrench className="h-9 w-9 text-primary-green mr-3" />
              <span className="text-2xl font-bold text-primary-black">AutoParts Pro</span>
            </div>
            <nav className="flex space-x-8">
              <a href="#products" className="text-primary-dark hover:text-primary-green transition-colors font-medium">
                Products
              </a>
              <a href="#about" className="text-primary-dark hover:text-primary-green transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-primary-dark hover:text-primary-green transition-colors font-medium">
                Contact
              </a>
            </nav>
            <Link href="/admin" className="btn-secondary text-sm px-6">
              Admin Panel
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-primary-black via-primary-dark to-primary-green-dark text-white pt-16 lg:pt-0 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Auto Parts for
                <span className="text-primary-green block mt-2">Every Vehicle</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Discover high-quality auto parts and accessories from trusted brands. Fast shipping, competitive prices,
                and expert support.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="btn-primary text-lg px-8 py-4 group">
                  <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                  View Catalog
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary-green" />
                  Free Shipping
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary-green" />
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary-green" />
                  Quality Guarantee
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/autopartslandingpage.png"
                  alt="Premium Auto Parts"
                  width={700}
                  height={600}
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Cards */}
                <div className="absolute -top-4 -left-4 bg-white text-primary-black p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <Award className="w-6 h-6 text-primary-green mr-2" />
                    <div>
                      <div className="font-bold">20+ Years</div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary-green text-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    <div>
                      <div className="font-bold">50K+</div>
                      <div className="text-sm">Happy Customers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-black mb-4">Why Choose AutoParts Pro?</h2>
            <p className="text-lg lg:text-xl text-primary-dark max-w-3xl mx-auto">
              We're committed to providing the best auto parts experience with unmatched quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast Shipping</h3>
              <p className="text-primary-dark leading-relaxed">
                Free shipping on orders over 150 TND. Most orders ship within 24 hours with tracking included.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Guarantee</h3>
              <p className="text-primary-dark leading-relaxed">
                All parts come with manufacturer warranty and our 30-day money-back guarantee.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-primary-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-primary-dark leading-relaxed">
                Our certified technicians are here 24/7 to help you find the perfect parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Enhanced */}
      <section id="products" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-black mb-4">Featured Products</h2>
            <p className="text-lg lg:text-xl text-primary-dark mb-8">
              Discover our most popular auto parts with unbeatable quality
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search auto parts..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                />
              </div>
              <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.imageUrl || "/placeholder.svg?height=300&width=400&query=auto parts product"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <button className="p-3 bg-white rounded-full hover:bg-primary-green hover:text-white transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white rounded-full hover:bg-red-500 hover:text-white transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  {/* Stock Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-green text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-primary-green font-medium">{product.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-green transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-primary-dark mb-4 text-sm leading-relaxed line-clamp-2">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({product._count?.reviews || 0} reviews)</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-primary-green">{product.price} TND</span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {(Number(product.price) * 1.2).toFixed(2)} TND
                      </span>
                    </div>
                    <button className="btn-primary text-sm px-6 py-2 group">
                      <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary px-8 py-4 text-lg">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="py-16 lg:py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black/50 to-primary-green-dark/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">About AutoParts Pro</h2>
              <p className="text-lg lg:text-xl mb-6 text-gray-300 leading-relaxed">
                With over 20 years of experience in the automotive industry, AutoParts Pro has been the trusted source
                for high-quality auto parts and accessories.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We work directly with manufacturers to ensure you get genuine parts at competitive prices. Our
                commitment to quality, fast shipping, and exceptional customer service has made us the preferred choice
                for mechanics, auto enthusiasts, and everyday drivers alike.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-green mb-2">50K+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary-green mb-2">100K+</div>
                  <div className="text-gray-300">Parts Sold</div>
                </div>
              </div>

              <button className="btn-primary">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="relative">
              <Image
                src="/autopartscustomersupport.png"
                alt="Auto Workshop"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Achievement */}
              <div className="absolute -bottom-6 -left-6 bg-white text-primary-black p-6 rounded-xl shadow-xl">
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-primary-green mr-3" />
                  <div>
                    <div className="font-bold text-lg">24/7</div>
                    <div className="text-sm text-gray-600">Customer Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-black mb-4">Get in Touch</h2>
            <p className="text-lg lg:text-xl text-primary-dark">
              Have questions? We're here to help you find the perfect parts!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                  <p className="text-primary-dark mb-2">Call us for immediate assistance</p>
                  <p className="text-primary-green font-semibold">1-800-AUTO-PARTS</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                  <p className="text-primary-dark mb-2">Send us your questions anytime</p>
                  <p className="text-primary-green font-semibold">support@autopartspro.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Visit Our Store</h3>
                  <p className="text-primary-dark mb-2">Come see our parts in person</p>
                  <p className="text-primary-green font-semibold">123 Auto Street, Parts City, PC 12345</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-primary-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Wrench className="h-8 w-8 text-primary-green mr-3" />
                <span className="text-2xl font-bold">AutoParts Pro</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Your trusted source for premium auto parts and accessories. Quality guaranteed, fast shipping, and
                expert support for over 20 years.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-primary-green/20 rounded-lg flex items-center justify-center hover:bg-primary-green transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-5 h-5 bg-current"></div>
                </button>
                <button className="w-10 h-10 bg-primary-green/20 rounded-lg flex items-center justify-center hover:bg-primary-green transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-5 h-5 bg-current"></div>
                </button>
                <button className="w-10 h-10 bg-primary-green/20 rounded-lg flex items-center justify-center hover:bg-primary-green transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-5 h-5 bg-current"></div>
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Products</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary-green transition-colors">
                    Engine Parts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-green transition-colors">
                    Brake Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-green transition-colors">
                    Suspension
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-green transition-colors">
                    Lighting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-green transition-colors">
                    Electrical
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary-green transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-green transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-green transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-green transition-colors">
                    Warranty
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-green transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 AutoParts Pro. All rights reserved.</p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-primary-green transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary-green transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary-green transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <MobileMenu />
    </div>
  )
}
