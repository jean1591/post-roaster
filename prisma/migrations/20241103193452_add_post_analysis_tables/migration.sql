-- CreateTable
CREATE TABLE "PostAnalysis" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "notation" INTEGER NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "PostAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suggestion" (
    "id" TEXT NOT NULL,
    "postAnalysisId" TEXT NOT NULL,
    "suggestion" TEXT NOT NULL,

    CONSTRAINT "Suggestion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostAnalysis" ADD CONSTRAINT "PostAnalysis_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suggestion" ADD CONSTRAINT "Suggestion_postAnalysisId_fkey" FOREIGN KEY ("postAnalysisId") REFERENCES "PostAnalysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
