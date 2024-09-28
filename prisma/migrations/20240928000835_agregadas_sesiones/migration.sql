-- CreateTable
CREATE TABLE "Sesion" (
    "sesionId" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER,

    CONSTRAINT "Sesion_pkey" PRIMARY KEY ("sesionId")
);

-- AddForeignKey
ALTER TABLE "Sesion" ADD CONSTRAINT "Sesion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("UsuarioId") ON DELETE SET NULL ON UPDATE CASCADE;
