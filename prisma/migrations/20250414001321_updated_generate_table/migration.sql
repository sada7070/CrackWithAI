/*
  Warnings:

  - Added the required column `questions` to the `Generate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Generate" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "questions" JSONB NOT NULL;
