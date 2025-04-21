/*
  Warnings:

  - The `gender` column on the `Word` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `level` to the `GrammarTopic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Phrase` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Word` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `level` on the `Word` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "WordType" AS ENUM ('noun', 'verb', 'adjective', 'adverb', 'pronoun', 'article', 'preposition', 'conjunction', 'numeral', 'interjection');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('masculine', 'feminine', 'neuter');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

-- AlterTable
ALTER TABLE "GrammarTopic" ADD COLUMN     "level" "Level" NOT NULL;

-- AlterTable
ALTER TABLE "Phrase" ADD COLUMN     "level" "Level" NOT NULL;

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "type",
ADD COLUMN     "type" "WordType" NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender",
DROP COLUMN "level",
ADD COLUMN     "level" "Level" NOT NULL;
