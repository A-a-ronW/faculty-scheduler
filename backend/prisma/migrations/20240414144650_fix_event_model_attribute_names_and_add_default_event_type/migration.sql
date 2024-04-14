/*
  Warnings:

  - You are about to drop the column `EndTime` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `StartTime` on the `Event` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "EndTime",
DROP COLUMN "StartTime",
ADD COLUMN     "endTime" TIME NOT NULL,
ADD COLUMN     "eventType" "EventType" NOT NULL DEFAULT 'CLASS',
ADD COLUMN     "startTime" TIME NOT NULL;
