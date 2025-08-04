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

export default function HomePageSimple() {
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

      {/* Hero Section */}
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

      {/* Featured Products */}
      <section id="products" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-black mb-4">Featured Products</h2>
            <p className="text-lg lg:text-xl text-primary-dark mb-8">
              Discover our most popular auto parts with unbeatable quality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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
        </div>
      </section>

      <MobileMenu />
    </div>
  )
} 