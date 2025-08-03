import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding database...")

  // Create sample products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: "Premium Brake Pads",
        description:
          "High-performance ceramic brake pads for superior stopping power and reduced brake dust. Compatible with most vehicle makes and models.",
        price: 89.99,
        category: "Brakes",
        imageUrl: "/placeholder.svg?height=300&width=300",
        stockQuantity: 50,
      },
    }),
    prisma.product.create({
      data: {
        name: "Engine Oil Filter",
        description:
          "Premium oil filter for optimal engine protection. Features advanced filtration technology and extended service life.",
        price: 24.99,
        category: "Engine",
        imageUrl: "/placeholder.svg?height=300&width=300",
        stockQuantity: 100,
      },
    }),
    prisma.product.create({
      data: {
        name: "LED Headlight Bulbs",
        description:
          "Ultra-bright LED headlight bulbs with 50,000+ hour lifespan. Easy installation and improved visibility.",
        price: 149.99,
        category: "Lighting",
        imageUrl: "/placeholder.svg?height=300&width=300",
        stockQuantity: 75,
      },
    }),
    prisma.product.create({
      data: {
        name: "Performance Air Filter",
        description:
          "High-flow air filter for improved engine performance and fuel efficiency. Washable and reusable design.",
        price: 59.99,
        category: "Engine",
        imageUrl: "/placeholder.svg?height=300&width=300",
        stockQuantity: 30,
      },
    }),
    prisma.product.create({
      data: {
        name: "Shock Absorbers",
        description:
          "Premium shock absorbers for smooth ride quality and improved handling. Gas-charged design for consistent performance.",
        price: 199.99,
        category: "Suspension",
        imageUrl: "/placeholder.svg?height=300&width=300",
        stockQuantity: 25,
      },
    }),
    prisma.product.create({
      data: {
        name: "Spark Plugs Set",
        description:
          "Iridium spark plugs for enhanced ignition performance and fuel efficiency. Set of 4 plugs with extended service life.",
        price: 79.99,
        category: "Engine",
        imageUrl: "/placeholder.svg?height=300&width=300",
        stockQuantity: 60,
      },
    }),
  ])

  console.log(`✅ Created ${products.length} products`)

  // Create sample reviews
  const reviews = await Promise.all([
    prisma.review.create({
      data: {
        productId: products[0].id,
        rating: 5,
        comment: "Excellent brake pads! Much better stopping power than the original ones.",
        author: "John Smith",
        email: "john@example.com",
      },
    }),
    prisma.review.create({
      data: {
        productId: products[0].id,
        rating: 4,
        comment: "Good quality, easy to install. Reduced brake dust significantly.",
        author: "Sarah Johnson",
        email: "sarah@example.com",
      },
    }),
    prisma.review.create({
      data: {
        productId: products[1].id,
        rating: 5,
        comment: "Perfect fit and great quality. Will definitely buy again.",
        author: "Mike Wilson",
        email: "mike@example.com",
      },
    }),
    prisma.review.create({
      data: {
        productId: products[2].id,
        rating: 5,
        comment: "Amazing brightness! Night driving is so much safer now.",
        author: "Lisa Brown",
        email: "lisa@example.com",
      },
    }),
  ])

  console.log(`✅ Created ${reviews.length} reviews`)

  // Create sample orders
  const orders = await Promise.all([
    prisma.order.create({
      data: {
        customerName: "John Doe",
        customerEmail: "john.doe@example.com",
        customerPhone: "+1-555-0123",
        totalAmount: 169.98,
        status: "DELIVERED",
        orderItems: {
          create: [
            {
              productId: products[0].id,
              quantity: 1,
              price: 89.99,
            },
            {
              productId: products[1].id,
              quantity: 2,
              price: 24.99,
            },
          ],
        },
      },
    }),
    prisma.order.create({
      data: {
        customerName: "Jane Smith",
        customerEmail: "jane.smith@example.com",
        customerPhone: "+1-555-0456",
        totalAmount: 149.99,
        status: "SHIPPED",
        orderItems: {
          create: [
            {
              productId: products[2].id,
              quantity: 1,
              price: 149.99,
            },
          ],
        },
      },
    }),
  ])

  console.log(`✅ Created ${orders.length} orders`)

  // Create admin user (if it doesn't exist)
  const existingAdmin = await prisma.user.findUnique({
    where: { email: "admin@autoparts.com" },
  })

  if (!existingAdmin) {
    const adminUser = await prisma.user.create({
      data: {
        email: "admin@autoparts.com",
        name: "Admin User",
        role: "ADMIN",
      },
    })
    console.log(`✅ Created admin user: ${adminUser.email}`)
  } else {
    console.log(`✅ Admin user already exists: ${existingAdmin.email}`)
  }

  console.log("🎉 Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
