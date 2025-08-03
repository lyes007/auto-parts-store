import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        price: true,
        category: true,
        stockQuantity: true,
        createdAt: true,
      },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, description, price, category, imageUrl, stockQuantity } = body

    const product = await db.product.create({
      data: {
        name,
        description,
        price: Number.parseFloat(price),
        category,
        imageUrl,
        stockQuantity: Number.parseInt(stockQuantity),
      },
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
