/*
  Warnings:

  - Added the required column `qty` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderProduct" ADD COLUMN     "qty" INTEGER NOT NULL;
