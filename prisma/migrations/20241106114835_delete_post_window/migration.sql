/*
  Warnings:

  - You are about to drop the `OptimisedPostWindow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OptimisedPostWindow" DROP CONSTRAINT "OptimisedPostWindow_postId_fkey";

-- DropTable
DROP TABLE "OptimisedPostWindow";
