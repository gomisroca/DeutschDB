/*
  Warnings:

  - You are about to drop the column `english` on the `Phrase` table. All the data in the column will be lost.
  - You are about to drop the column `german` on the `Phrase` table. All the data in the column will be lost.
  - Added the required column `original` to the `Phrase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translation` to the `Phrase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translation` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Phrase" DROP COLUMN "english",
DROP COLUMN "german",
ADD COLUMN     "original" TEXT NOT NULL,
ADD COLUMN     "translation" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "translation" TEXT NOT NULL;
