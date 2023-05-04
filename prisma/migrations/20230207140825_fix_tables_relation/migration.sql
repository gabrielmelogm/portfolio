/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `stacks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `projects` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `stacks` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
