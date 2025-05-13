/*
  Warnings:

  - You are about to drop the column `form` on the `VerbConjugation` table. All the data in the column will be lost.
  - You are about to drop the column `person` on the `VerbConjugation` table. All the data in the column will be lost.
  - Changed the type of `tense` on the `VerbConjugation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mood` on the `VerbConjugation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "VerbTense" AS ENUM ('present', 'simple_past', 'present_perfect', 'past_perfect', 'future_1', 'future_2');

-- CreateEnum
CREATE TYPE "VerbMood" AS ENUM ('indicative', 'subjunctive_1', 'subjunctive_2', 'imperative', 'infinitive', 'participle');

-- AlterTable
ALTER TABLE "VerbConjugation" DROP COLUMN "form",
DROP COLUMN "person",
ADD COLUMN     "forms" TEXT[],
DROP COLUMN "tense",
ADD COLUMN     "tense" "VerbTense" NOT NULL,
DROP COLUMN "mood",
ADD COLUMN     "mood" "VerbMood" NOT NULL;
