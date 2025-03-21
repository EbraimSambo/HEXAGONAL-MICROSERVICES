-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_verification_tokens" (
    "identifier" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_verification_tokens" ("code", "expires", "identifier") SELECT "code", "expires", "identifier" FROM "verification_tokens";
DROP TABLE "verification_tokens";
ALTER TABLE "new_verification_tokens" RENAME TO "verification_tokens";
CREATE UNIQUE INDEX "verification_tokens_identifier_code_key" ON "verification_tokens"("identifier", "code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
