/*
  Warnings:

  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - Added the required column `LastName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "lastName",
ADD COLUMN     "LastName" TEXT NOT NULL;
