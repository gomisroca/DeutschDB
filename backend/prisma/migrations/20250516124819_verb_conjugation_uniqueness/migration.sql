/*
  Warnings:

  - A unique constraint covering the columns `[verbId,tense,mood]` on the table `VerbConjugation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VerbConjugation_verbId_tense_mood_key" ON "VerbConjugation"("verbId", "tense", "mood");
