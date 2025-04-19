-- CreateTable
CREATE TABLE "BossMacro" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patch" TEXT NOT NULL,
    "series" TEXT NOT NULL,
    "boss" TEXT NOT NULL,

    CONSTRAINT "BossMacro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CraftingMacro" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patch" TEXT NOT NULL,

    CONSTRAINT "CraftingMacro_pkey" PRIMARY KEY ("id")
);
