/*
  Warnings:

  - Added the required column `EndTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StartTime` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "EndTime" TIME NOT NULL,
ADD COLUMN     "StartTime" TIME NOT NULL,
ADD COLUMN     "days" "DayOfWeek"[],
ADD COLUMN     "description" TEXT,
ALTER COLUMN "professorId" DROP DEFAULT;
