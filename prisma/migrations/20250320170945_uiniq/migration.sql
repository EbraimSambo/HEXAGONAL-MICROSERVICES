/*
  Warnings:

  - A unique constraint covering the columns `[email,uuid]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_code_key" ON "verification_tokens"("identifier", "code");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_uuid_key" ON "User"("email", "uuid");
