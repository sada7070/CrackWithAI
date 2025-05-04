/*
  Warnings:

  - You are about to drop the column `categoryScores` on the `Feedback` table. All the data in the column will be lost.
  - The `areasForImprovement` column on the `Feedback` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "CategoryName" AS ENUM ('Communication_Skills', 'Technical_Knowledge', 'Problem_solving', 'Cultutal_fit', 'Confidance_and_Clarity');

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "categoryScores",
ADD COLUMN     "strengths" TEXT[],
DROP COLUMN "areasForImprovement",
ADD COLUMN     "areasForImprovement" TEXT[];

-- CreateTable
CREATE TABLE "CategorySocre" (
    "id" TEXT NOT NULL,
    "name" "CategoryName" NOT NULL,
    "score" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "feedbackId" TEXT NOT NULL,

    CONSTRAINT "CategorySocre_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategorySocre" ADD CONSTRAINT "CategorySocre_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "Feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
