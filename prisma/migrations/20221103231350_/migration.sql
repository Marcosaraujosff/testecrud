/*
  Warnings:

  - Added the required column `conteiner_id` to the `movimentacoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movimentacoes" ADD COLUMN     "conteiner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "movimentacoes" ADD CONSTRAINT "movimentacoes_conteiner_id_fkey" FOREIGN KEY ("conteiner_id") REFERENCES "conteiners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
