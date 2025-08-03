import { prisma } from "./prisma"
import type { Product, Order, OrderItem, Review } from "@prisma/client"

export { prisma }

// Export types from Prisma
export type {
  Product,
  Order,
  OrderItem,
  Review,
  User,
  OrderStatus,
  UserRole,
} from "@prisma/client"

// Extended types for API responses
export type ProductWithReviews = Product & {
  reviews: Review[]
  _count: {
    reviews: number
  }
}

export type OrderWithItems = Order & {
  orderItems: (OrderItem & {
    product: Product
  })[]
}

// Database utility functions
export const db = {
  // Product operations
  product: {
    findMany: (args?: Parameters<typeof prisma.product.findMany>[0]) => prisma.product.findMany(args),

    findUnique: (args: Parameters<typeof prisma.product.findUnique>[0]) => prisma.product.findUnique(args),

    create: (args: Parameters<typeof prisma.product.create>[0]) => prisma.product.create(args),

    update: (args: Parameters<typeof prisma.product.update>[0]) => prisma.product.update(args),

    delete: (args: Parameters<typeof prisma.product.delete>[0]) => prisma.product.delete(args),

    count: (args?: Parameters<typeof prisma.product.count>[0]) => prisma.product.count(args),
  },

  // Order operations
  order: {
    findMany: (args?: Parameters<typeof prisma.order.findMany>[0]) => prisma.order.findMany(args),

    findUnique: (args: Parameters<typeof prisma.order.findUnique>[0]) => prisma.order.findUnique(args),

    create: (args: Parameters<typeof prisma.order.create>[0]) => prisma.order.create(args),

    update: (args: Parameters<typeof prisma.order.update>[0]) => prisma.order.update(args),

    count: (args?: Parameters<typeof prisma.order.count>[0]) => prisma.order.count(args),
  },

  // Review operations
  review: {
    findMany: (args?: Parameters<typeof prisma.review.findMany>[0]) => prisma.review.findMany(args),

    create: (args: Parameters<typeof prisma.review.create>[0]) => prisma.review.create(args),

    delete: (args: Parameters<typeof prisma.review.delete>[0]) => prisma.review.delete(args),
  },

  // User operations
  user: {
    findUnique: (args: Parameters<typeof prisma.user.findUnique>[0]) => prisma.user.findUnique(args),

    create: (args: Parameters<typeof prisma.user.create>[0]) => prisma.user.create(args),

    update: (args: Parameters<typeof prisma.user.update>[0]) => prisma.user.update(args),
  },
}
