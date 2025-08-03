import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const [totalProducts, totalOrders, lowStockItems] = await Promise.all([
      db.product.count(),
      db.order.count(),
      db.product.count({
        where: {
          stockQuantity: {
            lt: 10,
          },
        },
      }),
    ])

    // Calculate total revenue using a different approach
    const revenueResult = await db.order.findMany({
      select: {
        totalAmount: true,
      },
    })

    const totalRevenue = revenueResult.reduce((sum, order) => sum + order.totalAmount, 0)

    const stats = {
      totalProducts,
      totalOrders,
      lowStockItems,
      totalRevenue,
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
