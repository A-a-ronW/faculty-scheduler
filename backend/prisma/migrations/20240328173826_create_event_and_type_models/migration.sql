-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('CLASS', 'MEETING');

-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "professorId" TEXT NOT NULL,
    "eventType" "EventType" NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "eventId" TEXT NOT NULL,
    "startTime" TIME NOT NULL,
    "endTime" TIME NOT NULL,
    "days" "DayOfWeek"[]
);

-- CreateTable
CREATE TABLE "Meeting" (
    "eventId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Class_eventId_key" ON "Class"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Meeting_eventId_key" ON "Meeting"("eventId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meeting" ADD CONSTRAINT "Meeting_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
