/*
  Warnings:

  - You are about to drop the column `categoryScores` on the `Feedback` table. All the data in the column will be lost.
  - The `areasForImprovement` column on the `Feedback` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "CategoryName" AS ENUM ('Communication_Skills', 'Technical_Knowledge', 'Problem_Solving', 'Cultutal_Fit', 'Confidence_and_Clarity');

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "categoryScores",
ADD COLUMN     "strengths" TEXT[],
DROP COLUMN "areasForImprovement",
ADD COLUMN     "areasForImprovement" TEXT[];

-- CreateTable
CREATE TABLE "CategoryScore" (
    "id" TEXT NOT NULL,
    "name" "CategoryName" NOT NULL,
    "score" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "feedbackId" TEXT NOT NULL,

    CONSTRAINT "CategoryScore_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryScore" ADD CONSTRAINT "CategoryScore_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "Feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
