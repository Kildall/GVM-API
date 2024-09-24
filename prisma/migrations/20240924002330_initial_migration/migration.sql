-- CreateEnum
CREATE TYPE "TipoEntidad" AS ENUM ('Permiso', 'Rol');

-- CreateTable
CREATE TABLE "Cliente" (
    "ClienteId" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "fechaRegistro" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("ClienteId")
);

-- CreateTable
CREATE TABLE "Compra" (
    "CompraId" SERIAL NOT NULL,
    "empleadoId" INTEGER NOT NULL,
    "distribuidorId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("CompraId")
);

-- CreateTable
CREATE TABLE "CompraProducto" (
    "compraId" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "CompraProducto_pkey" PRIMARY KEY ("compraId","productoId")
);

-- CreateTable
CREATE TABLE "Direccion" (
    "DireccionId" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "calle1" TEXT NOT NULL,
    "calle2" TEXT,
    "codigoPostal" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "localidad" TEXT NOT NULL,
    "detalle" TEXT,

    CONSTRAINT "Direccion_pkey" PRIMARY KEY ("DireccionId")
);

-- CreateTable
CREATE TABLE "Distribuidor" (
    "DistribuidorId" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Distribuidor_pkey" PRIMARY KEY ("DistribuidorId")
);

-- CreateTable
CREATE TABLE "Empleado" (
    "EmpleadoId" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("EmpleadoId")
);

-- CreateTable
CREATE TABLE "Envio" (
    "EnvioId" SERIAL NOT NULL,
    "ventaId" INTEGER NOT NULL,
    "repartidorId" INTEGER NOT NULL,
    "direccionId" INTEGER NOT NULL,
    "estado" INTEGER NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaUltimaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Envio_pkey" PRIMARY KEY ("EnvioId")
);

-- CreateTable
CREATE TABLE "EstadoEnvio" (
    "EstadoId" INTEGER NOT NULL,
    "descEstado" TEXT NOT NULL,

    CONSTRAINT "EstadoEnvio_pkey" PRIMARY KEY ("EstadoId")
);

-- CreateTable
CREATE TABLE "EstadoVenta" (
    "EstadoId" INTEGER NOT NULL,
    "descEstado" TEXT NOT NULL,

    CONSTRAINT "EstadoVenta_pkey" PRIMARY KEY ("EstadoId")
);

-- CreateTable
CREATE TABLE "Producto" (
    "ProductoId" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "medida" DOUBLE PRECISION NOT NULL,
    "marca" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("ProductoId")
);

-- CreateTable
CREATE TABLE "ProductoVenta" (
    "ventaId" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "ProductoVenta_pkey" PRIMARY KEY ("ventaId","productoId")
);

-- CreateTable
CREATE TABLE "Repartidor" (
    "RepartidorId" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "Repartidor_pkey" PRIMARY KEY ("RepartidorId")
);

-- CreateTable
CREATE TABLE "RepartidorEnvio" (
    "repartidorId" INTEGER NOT NULL,
    "envioId" INTEGER NOT NULL,
    "estado" INTEGER NOT NULL,

    CONSTRAINT "RepartidorEnvio_pkey" PRIMARY KEY ("repartidorId","envioId")
);

-- CreateTable
CREATE TABLE "Venta" (
    "VentaId" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "estado" INTEGER NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaUltimaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("VentaId")
);

-- CreateTable
CREATE TABLE "Entidad" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" "TipoEntidad" NOT NULL,

    CONSTRAINT "Entidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntidadUsuario" (
    "usuarioId" INTEGER NOT NULL,
    "entidadId" INTEGER NOT NULL,

    CONSTRAINT "EntidadUsuario_pkey" PRIMARY KEY ("usuarioId","entidadId")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "UsuarioId" SERIAL NOT NULL,
    "nombre" VARCHAR(256) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "clave" VARCHAR(256) NOT NULL,
    "habilitado" BOOLEAN NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("UsuarioId")
);

-- CreateTable
CREATE TABLE "_PermisoRol" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PermisoRol_AB_unique" ON "_PermisoRol"("A", "B");

-- CreateIndex
CREATE INDEX "_PermisoRol_B_index" ON "_PermisoRol"("B");

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "Empleado"("EmpleadoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_distribuidorId_fkey" FOREIGN KEY ("distribuidorId") REFERENCES "Distribuidor"("DistribuidorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompraProducto" ADD CONSTRAINT "CompraProducto_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "Compra"("CompraId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompraProducto" ADD CONSTRAINT "CompraProducto_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("ProductoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Direccion" ADD CONSTRAINT "Direccion_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("ClienteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Envio" ADD CONSTRAINT "Envio_ventaId_fkey" FOREIGN KEY ("ventaId") REFERENCES "Venta"("VentaId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Envio" ADD CONSTRAINT "Envio_repartidorId_fkey" FOREIGN KEY ("repartidorId") REFERENCES "Repartidor"("RepartidorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Envio" ADD CONSTRAINT "Envio_direccionId_fkey" FOREIGN KEY ("direccionId") REFERENCES "Direccion"("DireccionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Envio" ADD CONSTRAINT "Envio_estado_fkey" FOREIGN KEY ("estado") REFERENCES "EstadoEnvio"("EstadoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoVenta" ADD CONSTRAINT "ProductoVenta_ventaId_fkey" FOREIGN KEY ("ventaId") REFERENCES "Venta"("VentaId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoVenta" ADD CONSTRAINT "ProductoVenta_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("ProductoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepartidorEnvio" ADD CONSTRAINT "RepartidorEnvio_repartidorId_fkey" FOREIGN KEY ("repartidorId") REFERENCES "Repartidor"("RepartidorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepartidorEnvio" ADD CONSTRAINT "RepartidorEnvio_envioId_fkey" FOREIGN KEY ("envioId") REFERENCES "Envio"("EnvioId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepartidorEnvio" ADD CONSTRAINT "RepartidorEnvio_estado_fkey" FOREIGN KEY ("estado") REFERENCES "EstadoEnvio"("EstadoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("ClienteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_estado_fkey" FOREIGN KEY ("estado") REFERENCES "EstadoVenta"("EstadoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntidadUsuario" ADD CONSTRAINT "EntidadUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("UsuarioId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntidadUsuario" ADD CONSTRAINT "EntidadUsuario_entidadId_fkey" FOREIGN KEY ("entidadId") REFERENCES "Entidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermisoRol" ADD CONSTRAINT "_PermisoRol_A_fkey" FOREIGN KEY ("A") REFERENCES "Entidad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermisoRol" ADD CONSTRAINT "_PermisoRol_B_fkey" FOREIGN KEY ("B") REFERENCES "Entidad"("id") ON DELETE CASCADE ON UPDATE CASCADE;
