/*
  Warnings:

  - You are about to drop the column `verb` on the `VerbConjugation` table. All the data in the column will be lost.
  - Added the required column `verbId` to the `VerbConjugation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VerbConjugation" DROP COLUMN "verb",
ADD COLUMN     "verbId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Verb" (
    "id" TEXT NOT NULL,
    "verb" TEXT NOT NULL,

    CONSTRAINT "Verb_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VerbConjugation" ADD CONSTRAINT "VerbConjugation_verbId_fkey" FOREIGN KEY ("verbId") REFERENCES "Verb"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
