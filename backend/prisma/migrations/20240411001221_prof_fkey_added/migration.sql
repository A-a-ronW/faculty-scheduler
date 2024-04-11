-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "professorId" TEXT NOT NULL DEFAULT 'test';

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
