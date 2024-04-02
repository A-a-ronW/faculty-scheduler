/*
  Warnings:

  - You are about to drop the column `fname` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `lname` on the `Professor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fName,lName]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Professor_fname_lname_key";

-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "fname",
DROP COLUMN "lname",
ADD COLUMN     "fName" TEXT NOT NULL DEFAULT 'John',
ADD COLUMN     "lName" TEXT NOT NULL DEFAULT 'Doe';

-- CreateIndex
CREATE UNIQUE INDEX "Professor_fName_lName_key" ON "Professor"("fName", "lName");
