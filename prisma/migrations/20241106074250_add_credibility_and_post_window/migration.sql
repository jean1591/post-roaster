-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "messaging" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Credibility" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Credibility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptimisedPostWindow" (
    "id" TEXT NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "postId" TEXT NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OptimisedPostWindow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credibility_postId_key" ON "Credibility"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "OptimisedPostWindow_postId_key" ON "OptimisedPostWindow"("postId");

-- AddForeignKey
ALTER TABLE "Credibility" ADD CONSTRAINT "Credibility_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptimisedPostWindow" ADD CONSTRAINT "OptimisedPostWindow_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
