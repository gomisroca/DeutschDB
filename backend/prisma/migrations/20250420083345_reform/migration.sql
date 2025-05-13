/*
  Warnings:

  - You are about to drop the `BossMacro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CraftingMacro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BossMacro";

-- DropTable
DROP TABLE "CraftingMacro";

-- CreateTable
CREATE TABLE "Word" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "gender" TEXT,
    "plural" TEXT,
    "level" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "examples" TEXT[],

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerbConjugation" (
    "id" TEXT NOT NULL,
    "verbId" TEXT NOT NULL,
    "tense" TEXT NOT NULL,
    "mood" TEXT NOT NULL,
    "person" TEXT NOT NULL,
    "form" TEXT NOT NULL,

    CONSTRAINT "VerbConjugation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrammarTopic" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "examples" TEXT[],

    CONSTRAINT "GrammarTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phrase" (
    "id" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "german" TEXT NOT NULL,
    "english" TEXT NOT NULL,

    CONSTRAINT "Phrase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VerbConjugation" ADD CONSTRAINT "VerbConjugation_verbId_fkey" FOREIGN KEY ("verbId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
