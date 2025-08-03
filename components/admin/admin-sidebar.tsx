"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
  Wrench,
  ChevronDown,
  Truck,
  Star,
  CreditCard,
  Shield,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    current: true,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
    current: false,
    children: [
      { name: "All Products", href: "/admin/products" },
      { name: "Add Product", href: "/admin/products/new" },
      { name: "Categories", href: "/admin/products/categories" },
      { name: "Inventory", href: "/admin/products/inventory" },
    ],
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
    current: false,
    badge: "12",
    children: [
      { name: "All Orders", href: "/admin/orders" },
      { name: "Pending", href: "/admin/orders?status=pending" },
      { name: "Processing", href: "/admin/orders?status=processing" },
      { name: "Shipped", href: "/admin/orders?status=shipped" },
    ],
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
    current: false,
  },
  {
    name: "Reviews",
    href: "/admin/reviews",
    icon: Star,
    current: false,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
    current: false,
    children: [
      { name: "Sales Report", href: "/admin/analytics/sales" },
      { name: "Product Performance", href: "/admin/analytics/products" },
      { name: "Customer Insights", href: "/admin/analytics/customers" },
    ],
  },
  {
    name: "Shipping",
    href: "/admin/shipping",
    icon: Truck,
    current: false,
  },
  {
    name: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
    current: false,
  },
]

const bottomNavigation = [
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
  {
    name: "Security",
    href: "/admin/security",
    icon: Shield,
  },
]

export function AdminSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const pathname = usePathname()

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName) ? prev.filter((item) => item !== itemName) : [...prev, itemName],
    )
  }

  return (
    <>
      {/* Mobile sidebar overlay */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-6 border-b border-gray-200">
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-primary-green" />
              <span className="ml-2 text-xl font-bold text-gray-900">AutoParts Pro</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <SidebarContent
              navigation={navigation}
              bottomNavigation={bottomNavigation}
              pathname={pathname}
              expandedItems={expandedItems}
              toggleExpanded={toggleExpanded}
            />
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 shadow-sm">
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <Wrench className="h-8 w-8 text-primary-green" />
            <span className="ml-2 text-xl font-bold text-gray-900">AutoParts Pro</span>
            <span className="ml-3 px-2 py-1 text-xs font-medium bg-primary-green text-white rounded-full">Admin</span>
          </div>
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <SidebarContent
              navigation={navigation}
              bottomNavigation={bottomNavigation}
              pathname={pathname}
              expandedItems={expandedItems}
              toggleExpanded={toggleExpanded}
            />
          </nav>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-40 p-2 bg-white rounded-lg shadow-md border border-gray-200"
        >
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </>
  )
}

function SidebarContent({
  navigation,
  bottomNavigation,
  pathname,
  expandedItems,
  toggleExpanded,
}: {
  navigation: any[]
  bottomNavigation: any[]
  pathname: string
  expandedItems: string[]
  toggleExpanded: (name: string) => void
}) {
  return (
    <div className="space-y-1">
      {navigation.map((item) => (
        <div key={item.name}>
          {item.children ? (
            <div>
              <button
                onClick={() => toggleExpanded(item.name)}
                className={`group flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname.startsWith(item.href)
                    ? "bg-primary-green text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                  {item.badge && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      {item.badge}
                    </span>
                  )}
                </div>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expandedItems.includes(item.name) ? "rotate-180" : ""}`}
                />
              </button>
              {expandedItems.includes(item.name) && (
                <div className="mt-1 space-y-1 pl-11">
                  {item.children.map((child: any) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                        pathname === child.href
                          ? "bg-primary-green/10 text-primary-green font-medium"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={item.href}
              className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-primary-green text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
              {item.name}
              {item.badge && (
                <span className="ml-auto inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  {item.badge}
                </span>
              )}
            </Link>
          )}
        </div>
      ))}

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="space-y-1">
          {bottomNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-primary-green text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
