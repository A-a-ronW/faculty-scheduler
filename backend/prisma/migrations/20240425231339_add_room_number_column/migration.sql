/*
  Warnings:

  - Added the required column `room` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "room" INTEGER NOT NULL,
ALTER COLUMN "firstName" DROP DEFAULT,
ALTER COLUMN "lastName" DROP DEFAULT;
