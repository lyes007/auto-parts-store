import type React from "react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  change: number
  changeType: "increase" | "decrease" | "neutral"
  icon: React.ComponentType<{ className?: string }>
  color: "green" | "blue" | "purple" | "orange" | "red"
}

const colorClasses = {
  green: {
    bg: "bg-green-50",
    icon: "text-green-600",
    text: "text-green-600",
  },
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    text: "text-blue-600",
  },
  purple: {
    bg: "bg-purple-50",
    icon: "text-purple-600",
    text: "text-purple-600",
  },
  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    text: "text-orange-600",
  },
  red: {
    bg: "bg-red-50",
    icon: "text-red-600",
    text: "text-red-600",
  },
}

export function StatCard({ title, value, change, changeType, icon: Icon, color }: StatCardProps) {
  const colors = colorClasses[color]

  const getTrendIcon = () => {
    switch (changeType) {
      case "increase":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "decrease":
        return <TrendingDown className="h-4 w-4 text-red-500" />
      default:
        return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  const getTrendColor = () => {
    switch (changeType) {
      case "increase":
        return "text-green-600"
      case "decrease":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
          <div className="flex items-center space-x-1">
            {getTrendIcon()}
            <span className={`text-sm font-medium ${getTrendColor()}`}>{Math.abs(change)}% from last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${colors.bg}`}>
          <Icon className={`h-8 w-8 ${colors.icon}`} />
        </div>
      </div>
    </div>
  )
}
