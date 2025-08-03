/*
  Warnings:

  - You are about to alter the column `price` on the `order_items` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - You are about to alter the column `total_amount` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - The `status` column on the `orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "order_items" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "customer_name" SET DATA TYPE TEXT,
ALTER COLUMN "customer_email" SET DATA TYPE TEXT,
ALTER COLUMN "customer_phone" SET DATA TYPE TEXT,
ALTER COLUMN "total_amount" SET DATA TYPE DOUBLE PRECISION,
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "category" SET DATA TYPE TEXT,
ALTER COLUMN "image_url" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "rating" SET DATA TYPE INTEGER,
ALTER COLUMN "author" SET DATA TYPE TEXT,
ALTER COLUMN "email" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
DROP COLUMN "role",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'CUSTOMER';

-- DropEnum
DROP TYPE "OrderStatus";

-- DropEnum
DROP TYPE "UserRole";
