-- DropForeignKey
ALTER TABLE "VerbConjugation" DROP CONSTRAINT "VerbConjugation_verbId_fkey";

-- AddForeignKey
ALTER TABLE "VerbConjugation" ADD CONSTRAINT "VerbConjugation_verbId_fkey" FOREIGN KEY ("verbId") REFERENCES "Verb"("id") ON DELETE CASCADE ON UPDATE CASCADE;
