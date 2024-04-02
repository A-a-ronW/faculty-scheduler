/*
  Warnings:

  - You are about to drop the column `fName` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `lName` on the `Professor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firstName,lastName]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Professor_fName_lName_key";

-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "fName",
DROP COLUMN "lName",
ADD COLUMN     "firstName" TEXT NOT NULL DEFAULT 'John',
ADD COLUMN     "lastName" TEXT NOT NULL DEFAULT 'Doe';

-- CreateIndex
CREATE UNIQUE INDEX "Professor_firstName_lastName_key" ON "Professor"("firstName", "lastName");
