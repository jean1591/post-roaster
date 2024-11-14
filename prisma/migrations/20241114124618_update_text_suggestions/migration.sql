/*
  Warnings:

  - You are about to drop the column `postAnalysisId` on the `TextSuggestion` table. All the data in the column will be lost.
  - Added the required column `postId` to the `TextSuggestion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TextSuggestion" DROP CONSTRAINT "TextSuggestion_postAnalysisId_fkey";

-- AlterTable
ALTER TABLE "TextSuggestion" DROP COLUMN "postAnalysisId",
ADD COLUMN     "postId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TextSuggestion" ADD CONSTRAINT "TextSuggestion_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
