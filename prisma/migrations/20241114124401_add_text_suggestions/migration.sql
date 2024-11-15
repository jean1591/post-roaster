-- CreateTable
CREATE TABLE "TextSuggestion" (
    "id" TEXT NOT NULL,
    "examples" TEXT[],
    "issue" TEXT NOT NULL,
    "phrase" TEXT NOT NULL,
    "postAnalysisId" TEXT NOT NULL,

    CONSTRAINT "TextSuggestion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TextSuggestion" ADD CONSTRAINT "TextSuggestion_postAnalysisId_fkey" FOREIGN KEY ("postAnalysisId") REFERENCES "PostAnalysis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
