-- CreateTable
CREATE TABLE "conteiners" (
    "id" TEXT NOT NULL,
    "cliente" TEXT NOT NULL,
    "conteiner" TEXT NOT NULL,
    "tipo" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "conteiners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movimentacoes" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "data_Hora_Inicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_hora_fim" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movimentacoes_pkey" PRIMARY KEY ("id")
);
