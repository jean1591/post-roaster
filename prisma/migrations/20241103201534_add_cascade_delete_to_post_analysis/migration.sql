-- DropForeignKey
ALTER TABLE "PostAnalysis" DROP CONSTRAINT "PostAnalysis_postId_fkey";

-- DropForeignKey
ALTER TABLE "Suggestion" DROP CONSTRAINT "Suggestion_postAnalysisId_fkey";

-- AddForeignKey
ALTER TABLE "PostAnalysis" ADD CONSTRAINT "PostAnalysis_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suggestion" ADD CONSTRAINT "Suggestion_postAnalysisId_fkey" FOREIGN KEY ("postAnalysisId") REFERENCES "PostAnalysis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
