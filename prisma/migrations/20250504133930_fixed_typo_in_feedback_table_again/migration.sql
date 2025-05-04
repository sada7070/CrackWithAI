/*
  Warnings:

  - The values [Cultutal_Fit] on the enum `CategoryName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CategoryName_new" AS ENUM ('Communication_Skills', 'Technical_Knowledge', 'Problem_Solving', 'Cultural_Fit', 'Confidence_and_Clarity');
ALTER TABLE "CategoryScore" ALTER COLUMN "name" TYPE "CategoryName_new" USING ("name"::text::"CategoryName_new");
ALTER TYPE "CategoryName" RENAME TO "CategoryName_old";
ALTER TYPE "CategoryName_new" RENAME TO "CategoryName";
DROP TYPE "CategoryName_old";
COMMIT;
