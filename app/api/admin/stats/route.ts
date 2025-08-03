import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const [totalProducts, totalOrders, lowStockItems, totalRevenue] = await Promise.all([
      db.product.count(),
      db.order.count(),
      db.product.count({
        where: {
          stockQuantity: {
            lt: 10,
          },
        },
      }),
      db.order.aggregate({
        _sum: {
          totalAmount: true,
        },
      }),
    ])

    const stats = {
      totalProducts,
      totalOrders,
      lowStockItems,
      totalRevenue: totalRevenue._sum.totalAmount || 0,
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
