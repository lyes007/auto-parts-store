"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Package, ShoppingCart, DollarSign, Users, AlertTriangle, Plus, Eye } from "lucide-react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { StatCard } from "@/components/admin/stat-cards"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { DataTable } from "@/components/admin/data-table"

interface Product {
  id: number
  name: string
  price: number
  category: string
  stockQuantity: number
  status: string
}

interface DashboardStats {
  totalProducts: number
  totalOrders: number
  totalRevenue: number
  lowStockItems: number
}

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    amount: "299.99 TND",
    status: "Processing",
    date: "2024-01-15",
  },
  {
    id: "#ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: "149.99 TND",
    status: "Shipped",
    date: "2024-01-14",
  },
  {
    id: "#ORD-003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    amount: "89.99 TND",
    status: "Delivered",
    date: "2024-01-13",
  },
]

const orderColumns = [
  { key: "id", label: "Order ID", sortable: true },
  { key: "customer", label: "Customer", sortable: true },
  { key: "email", label: "Email" },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
    render: (value: string) => <span className="font-semibold text-green-600">{value}</span>,
  },
  {
    key: "status",
    label: "Status",
    render: (value: string) => (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          value === "Processing"
            ? "bg-yellow-100 text-yellow-800"
            : value === "Shipped"
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
        }`}
      >
        {value}
      </span>
    ),
  },
  { key: "date", label: "Date", sortable: true },
]

const productColumns = [
  { key: "id", label: "ID", sortable: true },
  { key: "name", label: "Product Name", sortable: true },
  { key: "category", label: "Category", sortable: true },
  {
    key: "price",
    label: "Price",
    sortable: true,
    render: (value: number) => <span className="font-semibold text-green-600">{value} TND</span>,
  },
  {
    key: "stockQuantity",
    label: "Stock",
    sortable: true,
    render: (value: number) => (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          value < 10 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
        }`}
      >
        {value}
      </span>
    ),
  },
]

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    lowStockItems: 0,
  })
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in (in production, use proper session management)
    const isLoggedIn = localStorage.getItem("admin_logged_in")
    if (!isLoggedIn) {
      router.push("/admin")
      return
    }

    // Fetch dashboard data
    fetchDashboardData()
  }, [router])

  const fetchDashboardData = async () => {
    try {
      // Fetch products
      const productsResponse = await fetch("/api/admin/products")
      const productsData = await productsResponse.json()
      setProducts(productsData)

      // Fetch stats
      const statsResponse = await fetch("/api/admin/stats")
      const statsData = await statsResponse.json()
      setStats(statsData)
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="lg:pl-72">
        <AdminHeader />

        <main className="p-4 sm:p-6">
          {/* Page Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Welcome back! Here's what's happening with your store today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <StatCard
              title="Total Revenue"
              value={`${Number(stats.totalRevenue).toLocaleString()} TND`}
              change={12.5}
              changeType="increase"
              icon={DollarSign}
              color="green"
            />
            <StatCard
              title="Total Orders"
              value={stats.totalOrders}
              change={8.2}
              changeType="increase"
              icon={ShoppingCart}
              color="blue"
            />
            <StatCard
              title="Total Products"
              value={stats.totalProducts}
              change={3.1}
              changeType="increase"
              icon={Package}
              color="purple"
            />
            <StatCard
              title="Low Stock Items"
              value={stats.lowStockItems}
              change={-15.3}
              changeType="decrease"
              icon={AlertTriangle}
              color="red"
            />
          </div>

          {/* Charts and Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Quick Actions</h3>
              <div className="space-y-2 sm:space-y-3">
                <button className="w-full flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 bg-primary-green text-white rounded-lg hover:bg-primary-green-dark transition-colors text-sm sm:text-base">
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Add New Product
                </button>
                <button className="w-full flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  View All Orders
                </button>
                <button className="w-full flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Manage Customers
                </button>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Recent Activity</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center text-xs sm:text-sm">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3"></div>
                    <span className="text-gray-600">New order from John Doe</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                    <span className="text-gray-600">Product "Brake Pads" updated</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full mr-2 sm:mr-3"></div>
                    <span className="text-gray-600">Low stock alert: LED Bulbs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <DataTable
            title="Recent Orders"
            columns={orderColumns}
            data={recentOrders}
            actions={
              <button className="flex items-center px-3 sm:px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-green-dark transition-colors text-xs sm:text-sm">
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                New Order
              </button>
            }
          />

          {/* Products Table */}
          <div className="mt-6 sm:mt-8">
            <DataTable
              title="Products"
              columns={productColumns}
              data={products}
              actions={
                <button className="flex items-center px-3 sm:px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-green-dark transition-colors text-xs sm:text-sm">
                  <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Add Product
                </button>
              }
            />
          </div>
        </main>
      </div>
    </div>
  )
}
