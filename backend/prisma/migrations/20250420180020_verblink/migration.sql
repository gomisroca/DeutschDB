/*
  Warnings:

  - Added the required column `verb` to the `VerbConjugation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "VerbConjugation" DROP CONSTRAINT "VerbConjugation_verbId_fkey";

-- AlterTable
ALTER TABLE "VerbConjugation" ADD COLUMN     "verb" TEXT NOT NULL;
