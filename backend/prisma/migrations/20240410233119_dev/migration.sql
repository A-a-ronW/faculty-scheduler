/*
  Warnings:

  - You are about to drop the column `professorId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Meeting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_professorId_fkey";

-- DropForeignKey
ALTER TABLE "Meeting" DROP CONSTRAINT "Meeting_eventId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "professorId";

-- DropTable
DROP TABLE "Class";

-- DropTable
DROP TABLE "Meeting";
