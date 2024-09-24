
/**
 * Client
**/

import * as runtime from '.././runtime/library.d.ts';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Compra
 * 
 */
export type Compra = $Result.DefaultSelection<Prisma.$CompraPayload>
/**
 * Model CompraProducto
 * 
 */
export type CompraProducto = $Result.DefaultSelection<Prisma.$CompraProductoPayload>
/**
 * Model Direccion
 * 
 */
export type Direccion = $Result.DefaultSelection<Prisma.$DireccionPayload>
/**
 * Model Distribuidor
 * 
 */
export type Distribuidor = $Result.DefaultSelection<Prisma.$DistribuidorPayload>
/**
 * Model Empleado
 * 
 */
export type Empleado = $Result.DefaultSelection<Prisma.$EmpleadoPayload>
/**
 * Model Envio
 * 
 */
export type Envio = $Result.DefaultSelection<Prisma.$EnvioPayload>
/**
 * Model EstadoEnvio
 * 
 */
export type EstadoEnvio = $Result.DefaultSelection<Prisma.$EstadoEnvioPayload>
/**
 * Model EstadoVenta
 * 
 */
export type EstadoVenta = $Result.DefaultSelection<Prisma.$EstadoVentaPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model ProductoVenta
 * 
 */
export type ProductoVenta = $Result.DefaultSelection<Prisma.$ProductoVentaPayload>
/**
 * Model Repartidor
 * 
 */
export type Repartidor = $Result.DefaultSelection<Prisma.$RepartidorPayload>
/**
 * Model RepartidorEnvio
 * 
 */
export type RepartidorEnvio = $Result.DefaultSelection<Prisma.$RepartidorEnvioPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model Entidad
 * 
 */
export type Entidad = $Result.DefaultSelection<Prisma.$EntidadPayload>
/**
 * Model EntidadUsuario
 * 
 */
export type EntidadUsuario = $Result.DefaultSelection<Prisma.$EntidadUsuarioPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoEntidad: {
  Permiso: 'Permiso',
  Rol: 'Rol'
};

export type TipoEntidad = (typeof TipoEntidad)[keyof typeof TipoEntidad]

}

export type TipoEntidad = $Enums.TipoEntidad

export const TipoEntidad: typeof $Enums.TipoEntidad

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs>;

  /**
   * `prisma.compra`: Exposes CRUD operations for the **Compra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compra.findMany()
    * ```
    */
  get compra(): Prisma.CompraDelegate<ExtArgs>;

  /**
   * `prisma.compraProducto`: Exposes CRUD operations for the **CompraProducto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompraProductos
    * const compraProductos = await prisma.compraProducto.findMany()
    * ```
    */
  get compraProducto(): Prisma.CompraProductoDelegate<ExtArgs>;

  /**
   * `prisma.direccion`: Exposes CRUD operations for the **Direccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Direccions
    * const direccions = await prisma.direccion.findMany()
    * ```
    */
  get direccion(): Prisma.DireccionDelegate<ExtArgs>;

  /**
   * `prisma.distribuidor`: Exposes CRUD operations for the **Distribuidor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distribuidors
    * const distribuidors = await prisma.distribuidor.findMany()
    * ```
    */
  get distribuidor(): Prisma.DistribuidorDelegate<ExtArgs>;

  /**
   * `prisma.empleado`: Exposes CRUD operations for the **Empleado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleado.findMany()
    * ```
    */
  get empleado(): Prisma.EmpleadoDelegate<ExtArgs>;

  /**
   * `prisma.envio`: Exposes CRUD operations for the **Envio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Envios
    * const envios = await prisma.envio.findMany()
    * ```
    */
  get envio(): Prisma.EnvioDelegate<ExtArgs>;

  /**
   * `prisma.estadoEnvio`: Exposes CRUD operations for the **EstadoEnvio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstadoEnvios
    * const estadoEnvios = await prisma.estadoEnvio.findMany()
    * ```
    */
  get estadoEnvio(): Prisma.EstadoEnvioDelegate<ExtArgs>;

  /**
   * `prisma.estadoVenta`: Exposes CRUD operations for the **EstadoVenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstadoVentas
    * const estadoVentas = await prisma.estadoVenta.findMany()
    * ```
    */
  get estadoVenta(): Prisma.EstadoVentaDelegate<ExtArgs>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs>;

  /**
   * `prisma.productoVenta`: Exposes CRUD operations for the **ProductoVenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductoVentas
    * const productoVentas = await prisma.productoVenta.findMany()
    * ```
    */
  get productoVenta(): Prisma.ProductoVentaDelegate<ExtArgs>;

  /**
   * `prisma.repartidor`: Exposes CRUD operations for the **Repartidor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repartidors
    * const repartidors = await prisma.repartidor.findMany()
    * ```
    */
  get repartidor(): Prisma.RepartidorDelegate<ExtArgs>;

  /**
   * `prisma.repartidorEnvio`: Exposes CRUD operations for the **RepartidorEnvio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepartidorEnvios
    * const repartidorEnvios = await prisma.repartidorEnvio.findMany()
    * ```
    */
  get repartidorEnvio(): Prisma.RepartidorEnvioDelegate<ExtArgs>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs>;

  /**
   * `prisma.entidad`: Exposes CRUD operations for the **Entidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entidads
    * const entidads = await prisma.entidad.findMany()
    * ```
    */
  get entidad(): Prisma.EntidadDelegate<ExtArgs>;

  /**
   * `prisma.entidadUsuario`: Exposes CRUD operations for the **EntidadUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EntidadUsuarios
    * const entidadUsuarios = await prisma.entidadUsuario.findMany()
    * ```
    */
  get entidadUsuario(): Prisma.EntidadUsuarioDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Compra: 'Compra',
    CompraProducto: 'CompraProducto',
    Direccion: 'Direccion',
    Distribuidor: 'Distribuidor',
    Empleado: 'Empleado',
    Envio: 'Envio',
    EstadoEnvio: 'EstadoEnvio',
    EstadoVenta: 'EstadoVenta',
    Producto: 'Producto',
    ProductoVenta: 'ProductoVenta',
    Repartidor: 'Repartidor',
    RepartidorEnvio: 'RepartidorEnvio',
    Venta: 'Venta',
    Entidad: 'Entidad',
    EntidadUsuario: 'EntidadUsuario',
    Usuario: 'Usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "cliente" | "compra" | "compraProducto" | "direccion" | "distribuidor" | "empleado" | "envio" | "estadoEnvio" | "estadoVenta" | "producto" | "productoVenta" | "repartidor" | "repartidorEnvio" | "venta" | "entidad" | "entidadUsuario" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Compra: {
        payload: Prisma.$CompraPayload<ExtArgs>
        fields: Prisma.CompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findFirst: {
            args: Prisma.CompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findMany: {
            args: Prisma.CompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          create: {
            args: Prisma.CompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          createMany: {
            args: Prisma.CompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          delete: {
            args: Prisma.CompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          update: {
            args: Prisma.CompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          deleteMany: {
            args: Prisma.CompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          aggregate: {
            args: Prisma.CompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompra>
          }
          groupBy: {
            args: Prisma.CompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraCountArgs<ExtArgs>
            result: $Utils.Optional<CompraCountAggregateOutputType> | number
          }
        }
      }
      CompraProducto: {
        payload: Prisma.$CompraProductoPayload<ExtArgs>
        fields: Prisma.CompraProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          findFirst: {
            args: Prisma.CompraProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          findMany: {
            args: Prisma.CompraProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>[]
          }
          create: {
            args: Prisma.CompraProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          createMany: {
            args: Prisma.CompraProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompraProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>[]
          }
          delete: {
            args: Prisma.CompraProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          update: {
            args: Prisma.CompraProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          deleteMany: {
            args: Prisma.CompraProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompraProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          aggregate: {
            args: Prisma.CompraProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompraProducto>
          }
          groupBy: {
            args: Prisma.CompraProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraProductoCountArgs<ExtArgs>
            result: $Utils.Optional<CompraProductoCountAggregateOutputType> | number
          }
        }
      }
      Direccion: {
        payload: Prisma.$DireccionPayload<ExtArgs>
        fields: Prisma.DireccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DireccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DireccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findFirst: {
            args: Prisma.DireccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DireccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findMany: {
            args: Prisma.DireccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          create: {
            args: Prisma.DireccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          createMany: {
            args: Prisma.DireccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DireccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          delete: {
            args: Prisma.DireccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          update: {
            args: Prisma.DireccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          deleteMany: {
            args: Prisma.DireccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DireccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DireccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          aggregate: {
            args: Prisma.DireccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDireccion>
          }
          groupBy: {
            args: Prisma.DireccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DireccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DireccionCountArgs<ExtArgs>
            result: $Utils.Optional<DireccionCountAggregateOutputType> | number
          }
        }
      }
      Distribuidor: {
        payload: Prisma.$DistribuidorPayload<ExtArgs>
        fields: Prisma.DistribuidorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistribuidorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistribuidorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          findFirst: {
            args: Prisma.DistribuidorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistribuidorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          findMany: {
            args: Prisma.DistribuidorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>[]
          }
          create: {
            args: Prisma.DistribuidorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          createMany: {
            args: Prisma.DistribuidorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistribuidorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>[]
          }
          delete: {
            args: Prisma.DistribuidorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          update: {
            args: Prisma.DistribuidorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          deleteMany: {
            args: Prisma.DistribuidorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistribuidorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DistribuidorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          aggregate: {
            args: Prisma.DistribuidorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistribuidor>
          }
          groupBy: {
            args: Prisma.DistribuidorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistribuidorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistribuidorCountArgs<ExtArgs>
            result: $Utils.Optional<DistribuidorCountAggregateOutputType> | number
          }
        }
      }
      Empleado: {
        payload: Prisma.$EmpleadoPayload<ExtArgs>
        fields: Prisma.EmpleadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpleadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpleadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findFirst: {
            args: Prisma.EmpleadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpleadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findMany: {
            args: Prisma.EmpleadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          create: {
            args: Prisma.EmpleadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          createMany: {
            args: Prisma.EmpleadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpleadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          delete: {
            args: Prisma.EmpleadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          update: {
            args: Prisma.EmpleadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          deleteMany: {
            args: Prisma.EmpleadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpleadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmpleadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          aggregate: {
            args: Prisma.EmpleadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpleado>
          }
          groupBy: {
            args: Prisma.EmpleadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpleadoCountArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoCountAggregateOutputType> | number
          }
        }
      }
      Envio: {
        payload: Prisma.$EnvioPayload<ExtArgs>
        fields: Prisma.EnvioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          findFirst: {
            args: Prisma.EnvioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          findMany: {
            args: Prisma.EnvioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>[]
          }
          create: {
            args: Prisma.EnvioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          createMany: {
            args: Prisma.EnvioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnvioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>[]
          }
          delete: {
            args: Prisma.EnvioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          update: {
            args: Prisma.EnvioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          deleteMany: {
            args: Prisma.EnvioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnvioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          aggregate: {
            args: Prisma.EnvioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvio>
          }
          groupBy: {
            args: Prisma.EnvioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvioCountArgs<ExtArgs>
            result: $Utils.Optional<EnvioCountAggregateOutputType> | number
          }
        }
      }
      EstadoEnvio: {
        payload: Prisma.$EstadoEnvioPayload<ExtArgs>
        fields: Prisma.EstadoEnvioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoEnvioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoEnvioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoEnvioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoEnvioPayload>
          }
          findFirst: {
            args: Prisma.EstadoEnvioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoEnvioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoEnvioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoEnvioPayload>
          }
          findMany: {
            args: Prisma.EstadoEnvioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoEnvioPayload>[]
          }
          create: {
            args: Prisma.EstadoEnvioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoEnvioPayload>
          }
          createMany: {
            args: Prisma.EstadoEnvioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstadoEnvioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoEnvioPayload>[]
          }
          delete: {
            args: Prisma.EstadoEnvioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoEnvioPayload>
          }
          update: {
            args: Prisma.EstadoEnvioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoEnvioPayload>
          }
          deleteMany: {
            args: Prisma.EstadoEnvioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoEnvioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstadoEnvioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoEnvioPayload>
          }
          aggregate: {
            args: Prisma.EstadoEnvioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstadoEnvio>
          }
          groupBy: {
            args: Prisma.EstadoEnvioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoEnvioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoEnvioCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoEnvioCountAggregateOutputType> | number
          }
        }
      }
      EstadoVenta: {
        payload: Prisma.$EstadoVentaPayload<ExtArgs>
        fields: Prisma.EstadoVentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoVentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoVentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoVentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoVentaPayload>
          }
          findFirst: {
            args: Prisma.EstadoVentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoVentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoVentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoVentaPayload>
          }
          findMany: {
            args: Prisma.EstadoVentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoVentaPayload>[]
          }
          create: {
            args: Prisma.EstadoVentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoVentaPayload>
          }
          createMany: {
            args: Prisma.EstadoVentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstadoVentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoVentaPayload>[]
          }
          delete: {
            args: Prisma.EstadoVentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoVentaPayload>
          }
          update: {
            args: Prisma.EstadoVentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoVentaPayload>
          }
          deleteMany: {
            args: Prisma.EstadoVentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoVentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstadoVentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoVentaPayload>
          }
          aggregate: {
            args: Prisma.EstadoVentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstadoVenta>
          }
          groupBy: {
            args: Prisma.EstadoVentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoVentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoVentaCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoVentaCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      ProductoVenta: {
        payload: Prisma.$ProductoVentaPayload<ExtArgs>
        fields: Prisma.ProductoVentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoVentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoVentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoVentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoVentaPayload>
          }
          findFirst: {
            args: Prisma.ProductoVentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoVentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoVentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoVentaPayload>
          }
          findMany: {
            args: Prisma.ProductoVentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoVentaPayload>[]
          }
          create: {
            args: Prisma.ProductoVentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoVentaPayload>
          }
          createMany: {
            args: Prisma.ProductoVentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoVentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoVentaPayload>[]
          }
          delete: {
            args: Prisma.ProductoVentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoVentaPayload>
          }
          update: {
            args: Prisma.ProductoVentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoVentaPayload>
          }
          deleteMany: {
            args: Prisma.ProductoVentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoVentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoVentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoVentaPayload>
          }
          aggregate: {
            args: Prisma.ProductoVentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductoVenta>
          }
          groupBy: {
            args: Prisma.ProductoVentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoVentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoVentaCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoVentaCountAggregateOutputType> | number
          }
        }
      }
      Repartidor: {
        payload: Prisma.$RepartidorPayload<ExtArgs>
        fields: Prisma.RepartidorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepartidorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepartidorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          findFirst: {
            args: Prisma.RepartidorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepartidorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          findMany: {
            args: Prisma.RepartidorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>[]
          }
          create: {
            args: Prisma.RepartidorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          createMany: {
            args: Prisma.RepartidorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepartidorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>[]
          }
          delete: {
            args: Prisma.RepartidorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          update: {
            args: Prisma.RepartidorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          deleteMany: {
            args: Prisma.RepartidorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepartidorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RepartidorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          aggregate: {
            args: Prisma.RepartidorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepartidor>
          }
          groupBy: {
            args: Prisma.RepartidorGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepartidorGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepartidorCountArgs<ExtArgs>
            result: $Utils.Optional<RepartidorCountAggregateOutputType> | number
          }
        }
      }
      RepartidorEnvio: {
        payload: Prisma.$RepartidorEnvioPayload<ExtArgs>
        fields: Prisma.RepartidorEnvioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepartidorEnvioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorEnvioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepartidorEnvioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorEnvioPayload>
          }
          findFirst: {
            args: Prisma.RepartidorEnvioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorEnvioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepartidorEnvioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorEnvioPayload>
          }
          findMany: {
            args: Prisma.RepartidorEnvioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorEnvioPayload>[]
          }
          create: {
            args: Prisma.RepartidorEnvioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorEnvioPayload>
          }
          createMany: {
            args: Prisma.RepartidorEnvioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepartidorEnvioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorEnvioPayload>[]
          }
          delete: {
            args: Prisma.RepartidorEnvioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorEnvioPayload>
          }
          update: {
            args: Prisma.RepartidorEnvioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorEnvioPayload>
          }
          deleteMany: {
            args: Prisma.RepartidorEnvioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepartidorEnvioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RepartidorEnvioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorEnvioPayload>
          }
          aggregate: {
            args: Prisma.RepartidorEnvioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepartidorEnvio>
          }
          groupBy: {
            args: Prisma.RepartidorEnvioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepartidorEnvioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepartidorEnvioCountArgs<ExtArgs>
            result: $Utils.Optional<RepartidorEnvioCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      Entidad: {
        payload: Prisma.$EntidadPayload<ExtArgs>
        fields: Prisma.EntidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          findFirst: {
            args: Prisma.EntidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          findMany: {
            args: Prisma.EntidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>[]
          }
          create: {
            args: Prisma.EntidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          createMany: {
            args: Prisma.EntidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>[]
          }
          delete: {
            args: Prisma.EntidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          update: {
            args: Prisma.EntidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          deleteMany: {
            args: Prisma.EntidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadPayload>
          }
          aggregate: {
            args: Prisma.EntidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntidad>
          }
          groupBy: {
            args: Prisma.EntidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntidadCountArgs<ExtArgs>
            result: $Utils.Optional<EntidadCountAggregateOutputType> | number
          }
        }
      }
      EntidadUsuario: {
        payload: Prisma.$EntidadUsuarioPayload<ExtArgs>
        fields: Prisma.EntidadUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntidadUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntidadUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadUsuarioPayload>
          }
          findFirst: {
            args: Prisma.EntidadUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntidadUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadUsuarioPayload>
          }
          findMany: {
            args: Prisma.EntidadUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadUsuarioPayload>[]
          }
          create: {
            args: Prisma.EntidadUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadUsuarioPayload>
          }
          createMany: {
            args: Prisma.EntidadUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntidadUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadUsuarioPayload>[]
          }
          delete: {
            args: Prisma.EntidadUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadUsuarioPayload>
          }
          update: {
            args: Prisma.EntidadUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.EntidadUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntidadUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntidadUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntidadUsuarioPayload>
          }
          aggregate: {
            args: Prisma.EntidadUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntidadUsuario>
          }
          groupBy: {
            args: Prisma.EntidadUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntidadUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntidadUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<EntidadUsuarioCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    direcciones: number
    ventas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | ClienteCountOutputTypeCountDireccionesArgs
    ventas?: boolean | ClienteCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountDireccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }


  /**
   * Count Type CompraCountOutputType
   */

  export type CompraCountOutputType = {
    productos: number
  }

  export type CompraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CompraCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraCountOutputType
     */
    select?: CompraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraProductoWhereInput
  }


  /**
   * Count Type DireccionCountOutputType
   */

  export type DireccionCountOutputType = {
    envios: number
  }

  export type DireccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    envios?: boolean | DireccionCountOutputTypeCountEnviosArgs
  }

  // Custom InputTypes
  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DireccionCountOutputType
     */
    select?: DireccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeCountEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvioWhereInput
  }


  /**
   * Count Type DistribuidorCountOutputType
   */

  export type DistribuidorCountOutputType = {
    compras: number
  }

  export type DistribuidorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | DistribuidorCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes
  /**
   * DistribuidorCountOutputType without action
   */
  export type DistribuidorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistribuidorCountOutputType
     */
    select?: DistribuidorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistribuidorCountOutputType without action
   */
  export type DistribuidorCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
  }


  /**
   * Count Type EmpleadoCountOutputType
   */

  export type EmpleadoCountOutputType = {
    compras: number
  }

  export type EmpleadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | EmpleadoCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes
  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpleadoCountOutputType
     */
    select?: EmpleadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
  }


  /**
   * Count Type EnvioCountOutputType
   */

  export type EnvioCountOutputType = {
    repartidoresEnvios: number
  }

  export type EnvioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repartidoresEnvios?: boolean | EnvioCountOutputTypeCountRepartidoresEnviosArgs
  }

  // Custom InputTypes
  /**
   * EnvioCountOutputType without action
   */
  export type EnvioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvioCountOutputType
     */
    select?: EnvioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnvioCountOutputType without action
   */
  export type EnvioCountOutputTypeCountRepartidoresEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepartidorEnvioWhereInput
  }


  /**
   * Count Type EstadoEnvioCountOutputType
   */

  export type EstadoEnvioCountOutputType = {
    envios: number
    repartidorEnvios: number
  }

  export type EstadoEnvioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    envios?: boolean | EstadoEnvioCountOutputTypeCountEnviosArgs
    repartidorEnvios?: boolean | EstadoEnvioCountOutputTypeCountRepartidorEnviosArgs
  }

  // Custom InputTypes
  /**
   * EstadoEnvioCountOutputType without action
   */
  export type EstadoEnvioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvioCountOutputType
     */
    select?: EstadoEnvioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoEnvioCountOutputType without action
   */
  export type EstadoEnvioCountOutputTypeCountEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvioWhereInput
  }

  /**
   * EstadoEnvioCountOutputType without action
   */
  export type EstadoEnvioCountOutputTypeCountRepartidorEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepartidorEnvioWhereInput
  }


  /**
   * Count Type EstadoVentaCountOutputType
   */

  export type EstadoVentaCountOutputType = {
    ventas: number
  }

  export type EstadoVentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | EstadoVentaCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * EstadoVentaCountOutputType without action
   */
  export type EstadoVentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVentaCountOutputType
     */
    select?: EstadoVentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoVentaCountOutputType without action
   */
  export type EstadoVentaCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    compras: number
    ventas: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | ProductoCountOutputTypeCountComprasArgs
    ventas?: boolean | ProductoCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraProductoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoVentaWhereInput
  }


  /**
   * Count Type RepartidorCountOutputType
   */

  export type RepartidorCountOutputType = {
    envios: number
    enviosDirect: number
  }

  export type RepartidorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    envios?: boolean | RepartidorCountOutputTypeCountEnviosArgs
    enviosDirect?: boolean | RepartidorCountOutputTypeCountEnviosDirectArgs
  }

  // Custom InputTypes
  /**
   * RepartidorCountOutputType without action
   */
  export type RepartidorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorCountOutputType
     */
    select?: RepartidorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepartidorCountOutputType without action
   */
  export type RepartidorCountOutputTypeCountEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepartidorEnvioWhereInput
  }

  /**
   * RepartidorCountOutputType without action
   */
  export type RepartidorCountOutputTypeCountEnviosDirectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvioWhereInput
  }


  /**
   * Count Type VentaCountOutputType
   */

  export type VentaCountOutputType = {
    productos: number
    envios: number
  }

  export type VentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | VentaCountOutputTypeCountProductosArgs
    envios?: boolean | VentaCountOutputTypeCountEnviosArgs
  }

  // Custom InputTypes
  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaCountOutputType
     */
    select?: VentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoVentaWhereInput
  }

  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeCountEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvioWhereInput
  }


  /**
   * Count Type EntidadCountOutputType
   */

  export type EntidadCountOutputType = {
    entidadUsuario: number
    permisos: number
    roles: number
  }

  export type EntidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entidadUsuario?: boolean | EntidadCountOutputTypeCountEntidadUsuarioArgs
    permisos?: boolean | EntidadCountOutputTypeCountPermisosArgs
    roles?: boolean | EntidadCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * EntidadCountOutputType without action
   */
  export type EntidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadCountOutputType
     */
    select?: EntidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntidadCountOutputType without action
   */
  export type EntidadCountOutputTypeCountEntidadUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntidadUsuarioWhereInput
  }

  /**
   * EntidadCountOutputType without action
   */
  export type EntidadCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntidadWhereInput
  }

  /**
   * EntidadCountOutputType without action
   */
  export type EntidadCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntidadWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    permisos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permisos?: boolean | UsuarioCountOutputTypeCountPermisosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntidadUsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    telefono: string | null
    fechaRegistro: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    telefono: string | null
    fechaRegistro: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    telefono: number
    fechaRegistro: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    fechaRegistro?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    fechaRegistro?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    fechaRegistro?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nombre: string
    telefono: string
    fechaRegistro: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    fechaRegistro?: boolean
    direcciones?: boolean | Cliente$direccionesArgs<ExtArgs>
    ventas?: boolean | Cliente$ventasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    fechaRegistro?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    fechaRegistro?: boolean
  }

  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | Cliente$direccionesArgs<ExtArgs>
    ventas?: boolean | Cliente$ventasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      direcciones: Prisma.$DireccionPayload<ExtArgs>[]
      ventas: Prisma.$VentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      telefono: string
      fechaRegistro: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    direcciones<T extends Cliente$direccionesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$direccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany"> | Null>
    ventas<T extends Cliente$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */ 
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly fechaRegistro: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
  }

  /**
   * Cliente.direcciones
   */
  export type Cliente$direccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    cursor?: DireccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Cliente.ventas
   */
  export type Cliente$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Compra
   */

  export type AggregateCompra = {
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  export type CompraAvgAggregateOutputType = {
    id: number | null
    empleadoId: number | null
    distribuidorId: number | null
    monto: number | null
  }

  export type CompraSumAggregateOutputType = {
    id: number | null
    empleadoId: number | null
    distribuidorId: number | null
    monto: number | null
  }

  export type CompraMinAggregateOutputType = {
    id: number | null
    empleadoId: number | null
    distribuidorId: number | null
    fecha: Date | null
    monto: number | null
    descripcion: string | null
  }

  export type CompraMaxAggregateOutputType = {
    id: number | null
    empleadoId: number | null
    distribuidorId: number | null
    fecha: Date | null
    monto: number | null
    descripcion: string | null
  }

  export type CompraCountAggregateOutputType = {
    id: number
    empleadoId: number
    distribuidorId: number
    fecha: number
    monto: number
    descripcion: number
    _all: number
  }


  export type CompraAvgAggregateInputType = {
    id?: true
    empleadoId?: true
    distribuidorId?: true
    monto?: true
  }

  export type CompraSumAggregateInputType = {
    id?: true
    empleadoId?: true
    distribuidorId?: true
    monto?: true
  }

  export type CompraMinAggregateInputType = {
    id?: true
    empleadoId?: true
    distribuidorId?: true
    fecha?: true
    monto?: true
    descripcion?: true
  }

  export type CompraMaxAggregateInputType = {
    id?: true
    empleadoId?: true
    distribuidorId?: true
    fecha?: true
    monto?: true
    descripcion?: true
  }

  export type CompraCountAggregateInputType = {
    id?: true
    empleadoId?: true
    distribuidorId?: true
    fecha?: true
    monto?: true
    descripcion?: true
    _all?: true
  }

  export type CompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compra to aggregate.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compras
    **/
    _count?: true | CompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraMaxAggregateInputType
  }

  export type GetCompraAggregateType<T extends CompraAggregateArgs> = {
        [P in keyof T & keyof AggregateCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompra[P]>
      : GetScalarType<T[P], AggregateCompra[P]>
  }




  export type CompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithAggregationInput | CompraOrderByWithAggregationInput[]
    by: CompraScalarFieldEnum[] | CompraScalarFieldEnum
    having?: CompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraCountAggregateInputType | true
    _avg?: CompraAvgAggregateInputType
    _sum?: CompraSumAggregateInputType
    _min?: CompraMinAggregateInputType
    _max?: CompraMaxAggregateInputType
  }

  export type CompraGroupByOutputType = {
    id: number
    empleadoId: number
    distribuidorId: number
    fecha: Date
    monto: number
    descripcion: string
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  type GetCompraGroupByPayload<T extends CompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraGroupByOutputType[P]>
            : GetScalarType<T[P], CompraGroupByOutputType[P]>
        }
      >
    >


  export type CompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoId?: boolean
    distribuidorId?: boolean
    fecha?: boolean
    monto?: boolean
    descripcion?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    distribuidor?: boolean | DistribuidorDefaultArgs<ExtArgs>
    productos?: boolean | Compra$productosArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>

  export type CompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleadoId?: boolean
    distribuidorId?: boolean
    fecha?: boolean
    monto?: boolean
    descripcion?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    distribuidor?: boolean | DistribuidorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>

  export type CompraSelectScalar = {
    id?: boolean
    empleadoId?: boolean
    distribuidorId?: boolean
    fecha?: boolean
    monto?: boolean
    descripcion?: boolean
  }

  export type CompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    distribuidor?: boolean | DistribuidorDefaultArgs<ExtArgs>
    productos?: boolean | Compra$productosArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    distribuidor?: boolean | DistribuidorDefaultArgs<ExtArgs>
  }

  export type $CompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compra"
    objects: {
      empleado: Prisma.$EmpleadoPayload<ExtArgs>
      distribuidor: Prisma.$DistribuidorPayload<ExtArgs>
      productos: Prisma.$CompraProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empleadoId: number
      distribuidorId: number
      fecha: Date
      monto: number
      descripcion: string
    }, ExtArgs["result"]["compra"]>
    composites: {}
  }

  type CompraGetPayload<S extends boolean | null | undefined | CompraDefaultArgs> = $Result.GetResult<Prisma.$CompraPayload, S>

  type CompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompraFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompraCountAggregateInputType | true
    }

  export interface CompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compra'], meta: { name: 'Compra' } }
    /**
     * Find zero or one Compra that matches the filter.
     * @param {CompraFindUniqueArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraFindUniqueArgs>(args: SelectSubset<T, CompraFindUniqueArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Compra that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompraFindUniqueOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Compra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraFindFirstArgs>(args?: SelectSubset<T, CompraFindFirstArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Compra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compra.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compraWithIdOnly = await prisma.compra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompraFindManyArgs>(args?: SelectSubset<T, CompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Compra.
     * @param {CompraCreateArgs} args - Arguments to create a Compra.
     * @example
     * // Create one Compra
     * const Compra = await prisma.compra.create({
     *   data: {
     *     // ... data to create a Compra
     *   }
     * })
     * 
     */
    create<T extends CompraCreateArgs>(args: SelectSubset<T, CompraCreateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Compras.
     * @param {CompraCreateManyArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraCreateManyArgs>(args?: SelectSubset<T, CompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Compras and returns the data saved in the database.
     * @param {CompraCreateManyAndReturnArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Compras and only return the `id`
     * const compraWithIdOnly = await prisma.compra.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompraCreateManyAndReturnArgs>(args?: SelectSubset<T, CompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Compra.
     * @param {CompraDeleteArgs} args - Arguments to delete one Compra.
     * @example
     * // Delete one Compra
     * const Compra = await prisma.compra.delete({
     *   where: {
     *     // ... filter to delete one Compra
     *   }
     * })
     * 
     */
    delete<T extends CompraDeleteArgs>(args: SelectSubset<T, CompraDeleteArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Compra.
     * @param {CompraUpdateArgs} args - Arguments to update one Compra.
     * @example
     * // Update one Compra
     * const compra = await prisma.compra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraUpdateArgs>(args: SelectSubset<T, CompraUpdateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Compras.
     * @param {CompraDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraDeleteManyArgs>(args?: SelectSubset<T, CompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraUpdateManyArgs>(args: SelectSubset<T, CompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Compra.
     * @param {CompraUpsertArgs} args - Arguments to update or create a Compra.
     * @example
     * // Update or create a Compra
     * const compra = await prisma.compra.upsert({
     *   create: {
     *     // ... data to create a Compra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compra we want to update
     *   }
     * })
     */
    upsert<T extends CompraUpsertArgs>(args: SelectSubset<T, CompraUpsertArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compra.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends CompraCountArgs>(
      args?: Subset<T, CompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraAggregateArgs>(args: Subset<T, CompraAggregateArgs>): Prisma.PrismaPromise<GetCompraAggregateType<T>>

    /**
     * Group by Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraGroupByArgs['orderBy'] }
        : { orderBy?: CompraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compra model
   */
  readonly fields: CompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends EmpleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpleadoDefaultArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    distribuidor<T extends DistribuidorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistribuidorDefaultArgs<ExtArgs>>): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    productos<T extends Compra$productosArgs<ExtArgs> = {}>(args?: Subset<T, Compra$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Compra model
   */ 
  interface CompraFieldRefs {
    readonly id: FieldRef<"Compra", 'Int'>
    readonly empleadoId: FieldRef<"Compra", 'Int'>
    readonly distribuidorId: FieldRef<"Compra", 'Int'>
    readonly fecha: FieldRef<"Compra", 'DateTime'>
    readonly monto: FieldRef<"Compra", 'Float'>
    readonly descripcion: FieldRef<"Compra", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Compra findUnique
   */
  export type CompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findUniqueOrThrow
   */
  export type CompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findFirst
   */
  export type CompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findFirstOrThrow
   */
  export type CompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findMany
   */
  export type CompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra create
   */
  export type CompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to create a Compra.
     */
    data: XOR<CompraCreateInput, CompraUncheckedCreateInput>
  }

  /**
   * Compra createMany
   */
  export type CompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compra createManyAndReturn
   */
  export type CompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Compra update
   */
  export type CompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to update a Compra.
     */
    data: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
    /**
     * Choose, which Compra to update.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra updateMany
   */
  export type CompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compras.
     */
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     */
    where?: CompraWhereInput
  }

  /**
   * Compra upsert
   */
  export type CompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The filter to search for the Compra to update in case it exists.
     */
    where: CompraWhereUniqueInput
    /**
     * In case the Compra found by the `where` argument doesn't exist, create a new Compra with this data.
     */
    create: XOR<CompraCreateInput, CompraUncheckedCreateInput>
    /**
     * In case the Compra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
  }

  /**
   * Compra delete
   */
  export type CompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter which Compra to delete.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra deleteMany
   */
  export type CompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compras to delete
     */
    where?: CompraWhereInput
  }

  /**
   * Compra.productos
   */
  export type Compra$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    where?: CompraProductoWhereInput
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    cursor?: CompraProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraProductoScalarFieldEnum | CompraProductoScalarFieldEnum[]
  }

  /**
   * Compra without action
   */
  export type CompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
  }


  /**
   * Model CompraProducto
   */

  export type AggregateCompraProducto = {
    _count: CompraProductoCountAggregateOutputType | null
    _avg: CompraProductoAvgAggregateOutputType | null
    _sum: CompraProductoSumAggregateOutputType | null
    _min: CompraProductoMinAggregateOutputType | null
    _max: CompraProductoMaxAggregateOutputType | null
  }

  export type CompraProductoAvgAggregateOutputType = {
    compraId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type CompraProductoSumAggregateOutputType = {
    compraId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type CompraProductoMinAggregateOutputType = {
    compraId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type CompraProductoMaxAggregateOutputType = {
    compraId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type CompraProductoCountAggregateOutputType = {
    compraId: number
    productoId: number
    cantidad: number
    _all: number
  }


  export type CompraProductoAvgAggregateInputType = {
    compraId?: true
    productoId?: true
    cantidad?: true
  }

  export type CompraProductoSumAggregateInputType = {
    compraId?: true
    productoId?: true
    cantidad?: true
  }

  export type CompraProductoMinAggregateInputType = {
    compraId?: true
    productoId?: true
    cantidad?: true
  }

  export type CompraProductoMaxAggregateInputType = {
    compraId?: true
    productoId?: true
    cantidad?: true
  }

  export type CompraProductoCountAggregateInputType = {
    compraId?: true
    productoId?: true
    cantidad?: true
    _all?: true
  }

  export type CompraProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompraProducto to aggregate.
     */
    where?: CompraProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProductos to fetch.
     */
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompraProductos
    **/
    _count?: true | CompraProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraProductoMaxAggregateInputType
  }

  export type GetCompraProductoAggregateType<T extends CompraProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateCompraProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompraProducto[P]>
      : GetScalarType<T[P], AggregateCompraProducto[P]>
  }




  export type CompraProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraProductoWhereInput
    orderBy?: CompraProductoOrderByWithAggregationInput | CompraProductoOrderByWithAggregationInput[]
    by: CompraProductoScalarFieldEnum[] | CompraProductoScalarFieldEnum
    having?: CompraProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraProductoCountAggregateInputType | true
    _avg?: CompraProductoAvgAggregateInputType
    _sum?: CompraProductoSumAggregateInputType
    _min?: CompraProductoMinAggregateInputType
    _max?: CompraProductoMaxAggregateInputType
  }

  export type CompraProductoGroupByOutputType = {
    compraId: number
    productoId: number
    cantidad: number
    _count: CompraProductoCountAggregateOutputType | null
    _avg: CompraProductoAvgAggregateOutputType | null
    _sum: CompraProductoSumAggregateOutputType | null
    _min: CompraProductoMinAggregateOutputType | null
    _max: CompraProductoMaxAggregateOutputType | null
  }

  type GetCompraProductoGroupByPayload<T extends CompraProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraProductoGroupByOutputType[P]>
            : GetScalarType<T[P], CompraProductoGroupByOutputType[P]>
        }
      >
    >


  export type CompraProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    compraId?: boolean
    productoId?: boolean
    cantidad?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compraProducto"]>

  export type CompraProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    compraId?: boolean
    productoId?: boolean
    cantidad?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compraProducto"]>

  export type CompraProductoSelectScalar = {
    compraId?: boolean
    productoId?: boolean
    cantidad?: boolean
  }

  export type CompraProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type CompraProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $CompraProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompraProducto"
    objects: {
      compra: Prisma.$CompraPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      compraId: number
      productoId: number
      cantidad: number
    }, ExtArgs["result"]["compraProducto"]>
    composites: {}
  }

  type CompraProductoGetPayload<S extends boolean | null | undefined | CompraProductoDefaultArgs> = $Result.GetResult<Prisma.$CompraProductoPayload, S>

  type CompraProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompraProductoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompraProductoCountAggregateInputType | true
    }

  export interface CompraProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompraProducto'], meta: { name: 'CompraProducto' } }
    /**
     * Find zero or one CompraProducto that matches the filter.
     * @param {CompraProductoFindUniqueArgs} args - Arguments to find a CompraProducto
     * @example
     * // Get one CompraProducto
     * const compraProducto = await prisma.compraProducto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraProductoFindUniqueArgs>(args: SelectSubset<T, CompraProductoFindUniqueArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CompraProducto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompraProductoFindUniqueOrThrowArgs} args - Arguments to find a CompraProducto
     * @example
     * // Get one CompraProducto
     * const compraProducto = await prisma.compraProducto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CompraProducto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoFindFirstArgs} args - Arguments to find a CompraProducto
     * @example
     * // Get one CompraProducto
     * const compraProducto = await prisma.compraProducto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraProductoFindFirstArgs>(args?: SelectSubset<T, CompraProductoFindFirstArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CompraProducto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoFindFirstOrThrowArgs} args - Arguments to find a CompraProducto
     * @example
     * // Get one CompraProducto
     * const compraProducto = await prisma.compraProducto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CompraProductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompraProductos
     * const compraProductos = await prisma.compraProducto.findMany()
     * 
     * // Get first 10 CompraProductos
     * const compraProductos = await prisma.compraProducto.findMany({ take: 10 })
     * 
     * // Only select the `compraId`
     * const compraProductoWithCompraIdOnly = await prisma.compraProducto.findMany({ select: { compraId: true } })
     * 
     */
    findMany<T extends CompraProductoFindManyArgs>(args?: SelectSubset<T, CompraProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CompraProducto.
     * @param {CompraProductoCreateArgs} args - Arguments to create a CompraProducto.
     * @example
     * // Create one CompraProducto
     * const CompraProducto = await prisma.compraProducto.create({
     *   data: {
     *     // ... data to create a CompraProducto
     *   }
     * })
     * 
     */
    create<T extends CompraProductoCreateArgs>(args: SelectSubset<T, CompraProductoCreateArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CompraProductos.
     * @param {CompraProductoCreateManyArgs} args - Arguments to create many CompraProductos.
     * @example
     * // Create many CompraProductos
     * const compraProducto = await prisma.compraProducto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraProductoCreateManyArgs>(args?: SelectSubset<T, CompraProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompraProductos and returns the data saved in the database.
     * @param {CompraProductoCreateManyAndReturnArgs} args - Arguments to create many CompraProductos.
     * @example
     * // Create many CompraProductos
     * const compraProducto = await prisma.compraProducto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompraProductos and only return the `compraId`
     * const compraProductoWithCompraIdOnly = await prisma.compraProducto.createManyAndReturn({ 
     *   select: { compraId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompraProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, CompraProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CompraProducto.
     * @param {CompraProductoDeleteArgs} args - Arguments to delete one CompraProducto.
     * @example
     * // Delete one CompraProducto
     * const CompraProducto = await prisma.compraProducto.delete({
     *   where: {
     *     // ... filter to delete one CompraProducto
     *   }
     * })
     * 
     */
    delete<T extends CompraProductoDeleteArgs>(args: SelectSubset<T, CompraProductoDeleteArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CompraProducto.
     * @param {CompraProductoUpdateArgs} args - Arguments to update one CompraProducto.
     * @example
     * // Update one CompraProducto
     * const compraProducto = await prisma.compraProducto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraProductoUpdateArgs>(args: SelectSubset<T, CompraProductoUpdateArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CompraProductos.
     * @param {CompraProductoDeleteManyArgs} args - Arguments to filter CompraProductos to delete.
     * @example
     * // Delete a few CompraProductos
     * const { count } = await prisma.compraProducto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraProductoDeleteManyArgs>(args?: SelectSubset<T, CompraProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompraProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompraProductos
     * const compraProducto = await prisma.compraProducto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraProductoUpdateManyArgs>(args: SelectSubset<T, CompraProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompraProducto.
     * @param {CompraProductoUpsertArgs} args - Arguments to update or create a CompraProducto.
     * @example
     * // Update or create a CompraProducto
     * const compraProducto = await prisma.compraProducto.upsert({
     *   create: {
     *     // ... data to create a CompraProducto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompraProducto we want to update
     *   }
     * })
     */
    upsert<T extends CompraProductoUpsertArgs>(args: SelectSubset<T, CompraProductoUpsertArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CompraProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoCountArgs} args - Arguments to filter CompraProductos to count.
     * @example
     * // Count the number of CompraProductos
     * const count = await prisma.compraProducto.count({
     *   where: {
     *     // ... the filter for the CompraProductos we want to count
     *   }
     * })
    **/
    count<T extends CompraProductoCountArgs>(
      args?: Subset<T, CompraProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompraProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraProductoAggregateArgs>(args: Subset<T, CompraProductoAggregateArgs>): Prisma.PrismaPromise<GetCompraProductoAggregateType<T>>

    /**
     * Group by CompraProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompraProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraProductoGroupByArgs['orderBy'] }
        : { orderBy?: CompraProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompraProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompraProducto model
   */
  readonly fields: CompraProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompraProducto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compra<T extends CompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompraDefaultArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompraProducto model
   */ 
  interface CompraProductoFieldRefs {
    readonly compraId: FieldRef<"CompraProducto", 'Int'>
    readonly productoId: FieldRef<"CompraProducto", 'Int'>
    readonly cantidad: FieldRef<"CompraProducto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CompraProducto findUnique
   */
  export type CompraProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProducto to fetch.
     */
    where: CompraProductoWhereUniqueInput
  }

  /**
   * CompraProducto findUniqueOrThrow
   */
  export type CompraProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProducto to fetch.
     */
    where: CompraProductoWhereUniqueInput
  }

  /**
   * CompraProducto findFirst
   */
  export type CompraProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProducto to fetch.
     */
    where?: CompraProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProductos to fetch.
     */
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompraProductos.
     */
    cursor?: CompraProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompraProductos.
     */
    distinct?: CompraProductoScalarFieldEnum | CompraProductoScalarFieldEnum[]
  }

  /**
   * CompraProducto findFirstOrThrow
   */
  export type CompraProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProducto to fetch.
     */
    where?: CompraProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProductos to fetch.
     */
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompraProductos.
     */
    cursor?: CompraProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompraProductos.
     */
    distinct?: CompraProductoScalarFieldEnum | CompraProductoScalarFieldEnum[]
  }

  /**
   * CompraProducto findMany
   */
  export type CompraProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProductos to fetch.
     */
    where?: CompraProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProductos to fetch.
     */
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompraProductos.
     */
    cursor?: CompraProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProductos.
     */
    skip?: number
    distinct?: CompraProductoScalarFieldEnum | CompraProductoScalarFieldEnum[]
  }

  /**
   * CompraProducto create
   */
  export type CompraProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a CompraProducto.
     */
    data: XOR<CompraProductoCreateInput, CompraProductoUncheckedCreateInput>
  }

  /**
   * CompraProducto createMany
   */
  export type CompraProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompraProductos.
     */
    data: CompraProductoCreateManyInput | CompraProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompraProducto createManyAndReturn
   */
  export type CompraProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CompraProductos.
     */
    data: CompraProductoCreateManyInput | CompraProductoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompraProducto update
   */
  export type CompraProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a CompraProducto.
     */
    data: XOR<CompraProductoUpdateInput, CompraProductoUncheckedUpdateInput>
    /**
     * Choose, which CompraProducto to update.
     */
    where: CompraProductoWhereUniqueInput
  }

  /**
   * CompraProducto updateMany
   */
  export type CompraProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompraProductos.
     */
    data: XOR<CompraProductoUpdateManyMutationInput, CompraProductoUncheckedUpdateManyInput>
    /**
     * Filter which CompraProductos to update
     */
    where?: CompraProductoWhereInput
  }

  /**
   * CompraProducto upsert
   */
  export type CompraProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the CompraProducto to update in case it exists.
     */
    where: CompraProductoWhereUniqueInput
    /**
     * In case the CompraProducto found by the `where` argument doesn't exist, create a new CompraProducto with this data.
     */
    create: XOR<CompraProductoCreateInput, CompraProductoUncheckedCreateInput>
    /**
     * In case the CompraProducto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraProductoUpdateInput, CompraProductoUncheckedUpdateInput>
  }

  /**
   * CompraProducto delete
   */
  export type CompraProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter which CompraProducto to delete.
     */
    where: CompraProductoWhereUniqueInput
  }

  /**
   * CompraProducto deleteMany
   */
  export type CompraProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompraProductos to delete
     */
    where?: CompraProductoWhereInput
  }

  /**
   * CompraProducto without action
   */
  export type CompraProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
  }


  /**
   * Model Direccion
   */

  export type AggregateDireccion = {
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  export type DireccionAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
  }

  export type DireccionSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
  }

  export type DireccionMinAggregateOutputType = {
    id: number | null
    clienteId: number | null
    calle1: string | null
    calle2: string | null
    codigoPostal: string | null
    provincia: string | null
    localidad: string | null
    detalle: string | null
  }

  export type DireccionMaxAggregateOutputType = {
    id: number | null
    clienteId: number | null
    calle1: string | null
    calle2: string | null
    codigoPostal: string | null
    provincia: string | null
    localidad: string | null
    detalle: string | null
  }

  export type DireccionCountAggregateOutputType = {
    id: number
    clienteId: number
    calle1: number
    calle2: number
    codigoPostal: number
    provincia: number
    localidad: number
    detalle: number
    _all: number
  }


  export type DireccionAvgAggregateInputType = {
    id?: true
    clienteId?: true
  }

  export type DireccionSumAggregateInputType = {
    id?: true
    clienteId?: true
  }

  export type DireccionMinAggregateInputType = {
    id?: true
    clienteId?: true
    calle1?: true
    calle2?: true
    codigoPostal?: true
    provincia?: true
    localidad?: true
    detalle?: true
  }

  export type DireccionMaxAggregateInputType = {
    id?: true
    clienteId?: true
    calle1?: true
    calle2?: true
    codigoPostal?: true
    provincia?: true
    localidad?: true
    detalle?: true
  }

  export type DireccionCountAggregateInputType = {
    id?: true
    clienteId?: true
    calle1?: true
    calle2?: true
    codigoPostal?: true
    provincia?: true
    localidad?: true
    detalle?: true
    _all?: true
  }

  export type DireccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccion to aggregate.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Direccions
    **/
    _count?: true | DireccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DireccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DireccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DireccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DireccionMaxAggregateInputType
  }

  export type GetDireccionAggregateType<T extends DireccionAggregateArgs> = {
        [P in keyof T & keyof AggregateDireccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDireccion[P]>
      : GetScalarType<T[P], AggregateDireccion[P]>
  }




  export type DireccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithAggregationInput | DireccionOrderByWithAggregationInput[]
    by: DireccionScalarFieldEnum[] | DireccionScalarFieldEnum
    having?: DireccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DireccionCountAggregateInputType | true
    _avg?: DireccionAvgAggregateInputType
    _sum?: DireccionSumAggregateInputType
    _min?: DireccionMinAggregateInputType
    _max?: DireccionMaxAggregateInputType
  }

  export type DireccionGroupByOutputType = {
    id: number
    clienteId: number
    calle1: string
    calle2: string | null
    codigoPostal: string
    provincia: string
    localidad: string
    detalle: string | null
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  type GetDireccionGroupByPayload<T extends DireccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DireccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DireccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DireccionGroupByOutputType[P]>
            : GetScalarType<T[P], DireccionGroupByOutputType[P]>
        }
      >
    >


  export type DireccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    calle1?: boolean
    calle2?: boolean
    codigoPostal?: boolean
    provincia?: boolean
    localidad?: boolean
    detalle?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    envios?: boolean | Direccion$enviosArgs<ExtArgs>
    _count?: boolean | DireccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>

  export type DireccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    calle1?: boolean
    calle2?: boolean
    codigoPostal?: boolean
    provincia?: boolean
    localidad?: boolean
    detalle?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>

  export type DireccionSelectScalar = {
    id?: boolean
    clienteId?: boolean
    calle1?: boolean
    calle2?: boolean
    codigoPostal?: boolean
    provincia?: boolean
    localidad?: boolean
    detalle?: boolean
  }

  export type DireccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    envios?: boolean | Direccion$enviosArgs<ExtArgs>
    _count?: boolean | DireccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DireccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $DireccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Direccion"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      envios: Prisma.$EnvioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clienteId: number
      calle1: string
      calle2: string | null
      codigoPostal: string
      provincia: string
      localidad: string
      detalle: string | null
    }, ExtArgs["result"]["direccion"]>
    composites: {}
  }

  type DireccionGetPayload<S extends boolean | null | undefined | DireccionDefaultArgs> = $Result.GetResult<Prisma.$DireccionPayload, S>

  type DireccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DireccionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DireccionCountAggregateInputType | true
    }

  export interface DireccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Direccion'], meta: { name: 'Direccion' } }
    /**
     * Find zero or one Direccion that matches the filter.
     * @param {DireccionFindUniqueArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DireccionFindUniqueArgs>(args: SelectSubset<T, DireccionFindUniqueArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Direccion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DireccionFindUniqueOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DireccionFindUniqueOrThrowArgs>(args: SelectSubset<T, DireccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Direccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DireccionFindFirstArgs>(args?: SelectSubset<T, DireccionFindFirstArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Direccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DireccionFindFirstOrThrowArgs>(args?: SelectSubset<T, DireccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Direccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Direccions
     * const direccions = await prisma.direccion.findMany()
     * 
     * // Get first 10 Direccions
     * const direccions = await prisma.direccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const direccionWithIdOnly = await prisma.direccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DireccionFindManyArgs>(args?: SelectSubset<T, DireccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Direccion.
     * @param {DireccionCreateArgs} args - Arguments to create a Direccion.
     * @example
     * // Create one Direccion
     * const Direccion = await prisma.direccion.create({
     *   data: {
     *     // ... data to create a Direccion
     *   }
     * })
     * 
     */
    create<T extends DireccionCreateArgs>(args: SelectSubset<T, DireccionCreateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Direccions.
     * @param {DireccionCreateManyArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DireccionCreateManyArgs>(args?: SelectSubset<T, DireccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Direccions and returns the data saved in the database.
     * @param {DireccionCreateManyAndReturnArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Direccions and only return the `id`
     * const direccionWithIdOnly = await prisma.direccion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DireccionCreateManyAndReturnArgs>(args?: SelectSubset<T, DireccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Direccion.
     * @param {DireccionDeleteArgs} args - Arguments to delete one Direccion.
     * @example
     * // Delete one Direccion
     * const Direccion = await prisma.direccion.delete({
     *   where: {
     *     // ... filter to delete one Direccion
     *   }
     * })
     * 
     */
    delete<T extends DireccionDeleteArgs>(args: SelectSubset<T, DireccionDeleteArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Direccion.
     * @param {DireccionUpdateArgs} args - Arguments to update one Direccion.
     * @example
     * // Update one Direccion
     * const direccion = await prisma.direccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DireccionUpdateArgs>(args: SelectSubset<T, DireccionUpdateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Direccions.
     * @param {DireccionDeleteManyArgs} args - Arguments to filter Direccions to delete.
     * @example
     * // Delete a few Direccions
     * const { count } = await prisma.direccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DireccionDeleteManyArgs>(args?: SelectSubset<T, DireccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Direccions
     * const direccion = await prisma.direccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DireccionUpdateManyArgs>(args: SelectSubset<T, DireccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Direccion.
     * @param {DireccionUpsertArgs} args - Arguments to update or create a Direccion.
     * @example
     * // Update or create a Direccion
     * const direccion = await prisma.direccion.upsert({
     *   create: {
     *     // ... data to create a Direccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direccion we want to update
     *   }
     * })
     */
    upsert<T extends DireccionUpsertArgs>(args: SelectSubset<T, DireccionUpsertArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionCountArgs} args - Arguments to filter Direccions to count.
     * @example
     * // Count the number of Direccions
     * const count = await prisma.direccion.count({
     *   where: {
     *     // ... the filter for the Direccions we want to count
     *   }
     * })
    **/
    count<T extends DireccionCountArgs>(
      args?: Subset<T, DireccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DireccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DireccionAggregateArgs>(args: Subset<T, DireccionAggregateArgs>): Prisma.PrismaPromise<GetDireccionAggregateType<T>>

    /**
     * Group by Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DireccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DireccionGroupByArgs['orderBy'] }
        : { orderBy?: DireccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DireccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDireccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Direccion model
   */
  readonly fields: DireccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Direccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DireccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    envios<T extends Direccion$enviosArgs<ExtArgs> = {}>(args?: Subset<T, Direccion$enviosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Direccion model
   */ 
  interface DireccionFieldRefs {
    readonly id: FieldRef<"Direccion", 'Int'>
    readonly clienteId: FieldRef<"Direccion", 'Int'>
    readonly calle1: FieldRef<"Direccion", 'String'>
    readonly calle2: FieldRef<"Direccion", 'String'>
    readonly codigoPostal: FieldRef<"Direccion", 'String'>
    readonly provincia: FieldRef<"Direccion", 'String'>
    readonly localidad: FieldRef<"Direccion", 'String'>
    readonly detalle: FieldRef<"Direccion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Direccion findUnique
   */
  export type DireccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findUniqueOrThrow
   */
  export type DireccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findFirst
   */
  export type DireccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findFirstOrThrow
   */
  export type DireccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findMany
   */
  export type DireccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccions to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion create
   */
  export type DireccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Direccion.
     */
    data: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
  }

  /**
   * Direccion createMany
   */
  export type DireccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Direccions.
     */
    data: DireccionCreateManyInput | DireccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direccion createManyAndReturn
   */
  export type DireccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Direccions.
     */
    data: DireccionCreateManyInput | DireccionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Direccion update
   */
  export type DireccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Direccion.
     */
    data: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
    /**
     * Choose, which Direccion to update.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion updateMany
   */
  export type DireccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Direccions.
     */
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyInput>
    /**
     * Filter which Direccions to update
     */
    where?: DireccionWhereInput
  }

  /**
   * Direccion upsert
   */
  export type DireccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Direccion to update in case it exists.
     */
    where: DireccionWhereUniqueInput
    /**
     * In case the Direccion found by the `where` argument doesn't exist, create a new Direccion with this data.
     */
    create: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
    /**
     * In case the Direccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
  }

  /**
   * Direccion delete
   */
  export type DireccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter which Direccion to delete.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion deleteMany
   */
  export type DireccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccions to delete
     */
    where?: DireccionWhereInput
  }

  /**
   * Direccion.envios
   */
  export type Direccion$enviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    where?: EnvioWhereInput
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    cursor?: EnvioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * Direccion without action
   */
  export type DireccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
  }


  /**
   * Model Distribuidor
   */

  export type AggregateDistribuidor = {
    _count: DistribuidorCountAggregateOutputType | null
    _avg: DistribuidorAvgAggregateOutputType | null
    _sum: DistribuidorSumAggregateOutputType | null
    _min: DistribuidorMinAggregateOutputType | null
    _max: DistribuidorMaxAggregateOutputType | null
  }

  export type DistribuidorAvgAggregateOutputType = {
    id: number | null
  }

  export type DistribuidorSumAggregateOutputType = {
    id: number | null
  }

  export type DistribuidorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type DistribuidorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type DistribuidorCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type DistribuidorAvgAggregateInputType = {
    id?: true
  }

  export type DistribuidorSumAggregateInputType = {
    id?: true
  }

  export type DistribuidorMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type DistribuidorMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type DistribuidorCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type DistribuidorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distribuidor to aggregate.
     */
    where?: DistribuidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuidors to fetch.
     */
    orderBy?: DistribuidorOrderByWithRelationInput | DistribuidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistribuidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distribuidors
    **/
    _count?: true | DistribuidorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistribuidorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistribuidorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistribuidorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistribuidorMaxAggregateInputType
  }

  export type GetDistribuidorAggregateType<T extends DistribuidorAggregateArgs> = {
        [P in keyof T & keyof AggregateDistribuidor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistribuidor[P]>
      : GetScalarType<T[P], AggregateDistribuidor[P]>
  }




  export type DistribuidorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistribuidorWhereInput
    orderBy?: DistribuidorOrderByWithAggregationInput | DistribuidorOrderByWithAggregationInput[]
    by: DistribuidorScalarFieldEnum[] | DistribuidorScalarFieldEnum
    having?: DistribuidorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistribuidorCountAggregateInputType | true
    _avg?: DistribuidorAvgAggregateInputType
    _sum?: DistribuidorSumAggregateInputType
    _min?: DistribuidorMinAggregateInputType
    _max?: DistribuidorMaxAggregateInputType
  }

  export type DistribuidorGroupByOutputType = {
    id: number
    nombre: string
    _count: DistribuidorCountAggregateOutputType | null
    _avg: DistribuidorAvgAggregateOutputType | null
    _sum: DistribuidorSumAggregateOutputType | null
    _min: DistribuidorMinAggregateOutputType | null
    _max: DistribuidorMaxAggregateOutputType | null
  }

  type GetDistribuidorGroupByPayload<T extends DistribuidorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistribuidorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistribuidorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistribuidorGroupByOutputType[P]>
            : GetScalarType<T[P], DistribuidorGroupByOutputType[P]>
        }
      >
    >


  export type DistribuidorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    compras?: boolean | Distribuidor$comprasArgs<ExtArgs>
    _count?: boolean | DistribuidorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribuidor"]>

  export type DistribuidorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["distribuidor"]>

  export type DistribuidorSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type DistribuidorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | Distribuidor$comprasArgs<ExtArgs>
    _count?: boolean | DistribuidorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistribuidorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DistribuidorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Distribuidor"
    objects: {
      compras: Prisma.$CompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["distribuidor"]>
    composites: {}
  }

  type DistribuidorGetPayload<S extends boolean | null | undefined | DistribuidorDefaultArgs> = $Result.GetResult<Prisma.$DistribuidorPayload, S>

  type DistribuidorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DistribuidorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DistribuidorCountAggregateInputType | true
    }

  export interface DistribuidorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distribuidor'], meta: { name: 'Distribuidor' } }
    /**
     * Find zero or one Distribuidor that matches the filter.
     * @param {DistribuidorFindUniqueArgs} args - Arguments to find a Distribuidor
     * @example
     * // Get one Distribuidor
     * const distribuidor = await prisma.distribuidor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistribuidorFindUniqueArgs>(args: SelectSubset<T, DistribuidorFindUniqueArgs<ExtArgs>>): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Distribuidor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DistribuidorFindUniqueOrThrowArgs} args - Arguments to find a Distribuidor
     * @example
     * // Get one Distribuidor
     * const distribuidor = await prisma.distribuidor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistribuidorFindUniqueOrThrowArgs>(args: SelectSubset<T, DistribuidorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Distribuidor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorFindFirstArgs} args - Arguments to find a Distribuidor
     * @example
     * // Get one Distribuidor
     * const distribuidor = await prisma.distribuidor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistribuidorFindFirstArgs>(args?: SelectSubset<T, DistribuidorFindFirstArgs<ExtArgs>>): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Distribuidor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorFindFirstOrThrowArgs} args - Arguments to find a Distribuidor
     * @example
     * // Get one Distribuidor
     * const distribuidor = await prisma.distribuidor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistribuidorFindFirstOrThrowArgs>(args?: SelectSubset<T, DistribuidorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Distribuidors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distribuidors
     * const distribuidors = await prisma.distribuidor.findMany()
     * 
     * // Get first 10 Distribuidors
     * const distribuidors = await prisma.distribuidor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distribuidorWithIdOnly = await prisma.distribuidor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistribuidorFindManyArgs>(args?: SelectSubset<T, DistribuidorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Distribuidor.
     * @param {DistribuidorCreateArgs} args - Arguments to create a Distribuidor.
     * @example
     * // Create one Distribuidor
     * const Distribuidor = await prisma.distribuidor.create({
     *   data: {
     *     // ... data to create a Distribuidor
     *   }
     * })
     * 
     */
    create<T extends DistribuidorCreateArgs>(args: SelectSubset<T, DistribuidorCreateArgs<ExtArgs>>): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Distribuidors.
     * @param {DistribuidorCreateManyArgs} args - Arguments to create many Distribuidors.
     * @example
     * // Create many Distribuidors
     * const distribuidor = await prisma.distribuidor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistribuidorCreateManyArgs>(args?: SelectSubset<T, DistribuidorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Distribuidors and returns the data saved in the database.
     * @param {DistribuidorCreateManyAndReturnArgs} args - Arguments to create many Distribuidors.
     * @example
     * // Create many Distribuidors
     * const distribuidor = await prisma.distribuidor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Distribuidors and only return the `id`
     * const distribuidorWithIdOnly = await prisma.distribuidor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistribuidorCreateManyAndReturnArgs>(args?: SelectSubset<T, DistribuidorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Distribuidor.
     * @param {DistribuidorDeleteArgs} args - Arguments to delete one Distribuidor.
     * @example
     * // Delete one Distribuidor
     * const Distribuidor = await prisma.distribuidor.delete({
     *   where: {
     *     // ... filter to delete one Distribuidor
     *   }
     * })
     * 
     */
    delete<T extends DistribuidorDeleteArgs>(args: SelectSubset<T, DistribuidorDeleteArgs<ExtArgs>>): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Distribuidor.
     * @param {DistribuidorUpdateArgs} args - Arguments to update one Distribuidor.
     * @example
     * // Update one Distribuidor
     * const distribuidor = await prisma.distribuidor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistribuidorUpdateArgs>(args: SelectSubset<T, DistribuidorUpdateArgs<ExtArgs>>): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Distribuidors.
     * @param {DistribuidorDeleteManyArgs} args - Arguments to filter Distribuidors to delete.
     * @example
     * // Delete a few Distribuidors
     * const { count } = await prisma.distribuidor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistribuidorDeleteManyArgs>(args?: SelectSubset<T, DistribuidorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distribuidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distribuidors
     * const distribuidor = await prisma.distribuidor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistribuidorUpdateManyArgs>(args: SelectSubset<T, DistribuidorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Distribuidor.
     * @param {DistribuidorUpsertArgs} args - Arguments to update or create a Distribuidor.
     * @example
     * // Update or create a Distribuidor
     * const distribuidor = await prisma.distribuidor.upsert({
     *   create: {
     *     // ... data to create a Distribuidor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distribuidor we want to update
     *   }
     * })
     */
    upsert<T extends DistribuidorUpsertArgs>(args: SelectSubset<T, DistribuidorUpsertArgs<ExtArgs>>): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Distribuidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorCountArgs} args - Arguments to filter Distribuidors to count.
     * @example
     * // Count the number of Distribuidors
     * const count = await prisma.distribuidor.count({
     *   where: {
     *     // ... the filter for the Distribuidors we want to count
     *   }
     * })
    **/
    count<T extends DistribuidorCountArgs>(
      args?: Subset<T, DistribuidorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistribuidorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distribuidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistribuidorAggregateArgs>(args: Subset<T, DistribuidorAggregateArgs>): Prisma.PrismaPromise<GetDistribuidorAggregateType<T>>

    /**
     * Group by Distribuidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistribuidorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistribuidorGroupByArgs['orderBy'] }
        : { orderBy?: DistribuidorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistribuidorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistribuidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distribuidor model
   */
  readonly fields: DistribuidorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distribuidor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistribuidorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compras<T extends Distribuidor$comprasArgs<ExtArgs> = {}>(args?: Subset<T, Distribuidor$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Distribuidor model
   */ 
  interface DistribuidorFieldRefs {
    readonly id: FieldRef<"Distribuidor", 'Int'>
    readonly nombre: FieldRef<"Distribuidor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Distribuidor findUnique
   */
  export type DistribuidorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter, which Distribuidor to fetch.
     */
    where: DistribuidorWhereUniqueInput
  }

  /**
   * Distribuidor findUniqueOrThrow
   */
  export type DistribuidorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter, which Distribuidor to fetch.
     */
    where: DistribuidorWhereUniqueInput
  }

  /**
   * Distribuidor findFirst
   */
  export type DistribuidorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter, which Distribuidor to fetch.
     */
    where?: DistribuidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuidors to fetch.
     */
    orderBy?: DistribuidorOrderByWithRelationInput | DistribuidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distribuidors.
     */
    cursor?: DistribuidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distribuidors.
     */
    distinct?: DistribuidorScalarFieldEnum | DistribuidorScalarFieldEnum[]
  }

  /**
   * Distribuidor findFirstOrThrow
   */
  export type DistribuidorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter, which Distribuidor to fetch.
     */
    where?: DistribuidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuidors to fetch.
     */
    orderBy?: DistribuidorOrderByWithRelationInput | DistribuidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distribuidors.
     */
    cursor?: DistribuidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distribuidors.
     */
    distinct?: DistribuidorScalarFieldEnum | DistribuidorScalarFieldEnum[]
  }

  /**
   * Distribuidor findMany
   */
  export type DistribuidorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter, which Distribuidors to fetch.
     */
    where?: DistribuidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuidors to fetch.
     */
    orderBy?: DistribuidorOrderByWithRelationInput | DistribuidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distribuidors.
     */
    cursor?: DistribuidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuidors.
     */
    skip?: number
    distinct?: DistribuidorScalarFieldEnum | DistribuidorScalarFieldEnum[]
  }

  /**
   * Distribuidor create
   */
  export type DistribuidorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * The data needed to create a Distribuidor.
     */
    data: XOR<DistribuidorCreateInput, DistribuidorUncheckedCreateInput>
  }

  /**
   * Distribuidor createMany
   */
  export type DistribuidorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distribuidors.
     */
    data: DistribuidorCreateManyInput | DistribuidorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Distribuidor createManyAndReturn
   */
  export type DistribuidorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Distribuidors.
     */
    data: DistribuidorCreateManyInput | DistribuidorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Distribuidor update
   */
  export type DistribuidorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * The data needed to update a Distribuidor.
     */
    data: XOR<DistribuidorUpdateInput, DistribuidorUncheckedUpdateInput>
    /**
     * Choose, which Distribuidor to update.
     */
    where: DistribuidorWhereUniqueInput
  }

  /**
   * Distribuidor updateMany
   */
  export type DistribuidorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distribuidors.
     */
    data: XOR<DistribuidorUpdateManyMutationInput, DistribuidorUncheckedUpdateManyInput>
    /**
     * Filter which Distribuidors to update
     */
    where?: DistribuidorWhereInput
  }

  /**
   * Distribuidor upsert
   */
  export type DistribuidorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * The filter to search for the Distribuidor to update in case it exists.
     */
    where: DistribuidorWhereUniqueInput
    /**
     * In case the Distribuidor found by the `where` argument doesn't exist, create a new Distribuidor with this data.
     */
    create: XOR<DistribuidorCreateInput, DistribuidorUncheckedCreateInput>
    /**
     * In case the Distribuidor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistribuidorUpdateInput, DistribuidorUncheckedUpdateInput>
  }

  /**
   * Distribuidor delete
   */
  export type DistribuidorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter which Distribuidor to delete.
     */
    where: DistribuidorWhereUniqueInput
  }

  /**
   * Distribuidor deleteMany
   */
  export type DistribuidorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distribuidors to delete
     */
    where?: DistribuidorWhereInput
  }

  /**
   * Distribuidor.compras
   */
  export type Distribuidor$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    cursor?: CompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Distribuidor without action
   */
  export type DistribuidorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuidorInclude<ExtArgs> | null
  }


  /**
   * Model Empleado
   */

  export type AggregateEmpleado = {
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  export type EmpleadoAvgAggregateOutputType = {
    id: number | null
  }

  export type EmpleadoSumAggregateOutputType = {
    id: number | null
  }

  export type EmpleadoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    cargo: string | null
  }

  export type EmpleadoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    cargo: string | null
  }

  export type EmpleadoCountAggregateOutputType = {
    id: number
    nombre: number
    cargo: number
    _all: number
  }


  export type EmpleadoAvgAggregateInputType = {
    id?: true
  }

  export type EmpleadoSumAggregateInputType = {
    id?: true
  }

  export type EmpleadoMinAggregateInputType = {
    id?: true
    nombre?: true
    cargo?: true
  }

  export type EmpleadoMaxAggregateInputType = {
    id?: true
    nombre?: true
    cargo?: true
  }

  export type EmpleadoCountAggregateInputType = {
    id?: true
    nombre?: true
    cargo?: true
    _all?: true
  }

  export type EmpleadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleado to aggregate.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empleados
    **/
    _count?: true | EmpleadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadoMaxAggregateInputType
  }

  export type GetEmpleadoAggregateType<T extends EmpleadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleado[P]>
      : GetScalarType<T[P], AggregateEmpleado[P]>
  }




  export type EmpleadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpleadoWhereInput
    orderBy?: EmpleadoOrderByWithAggregationInput | EmpleadoOrderByWithAggregationInput[]
    by: EmpleadoScalarFieldEnum[] | EmpleadoScalarFieldEnum
    having?: EmpleadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadoCountAggregateInputType | true
    _avg?: EmpleadoAvgAggregateInputType
    _sum?: EmpleadoSumAggregateInputType
    _min?: EmpleadoMinAggregateInputType
    _max?: EmpleadoMaxAggregateInputType
  }

  export type EmpleadoGroupByOutputType = {
    id: number
    nombre: string
    cargo: string
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  type GetEmpleadoGroupByPayload<T extends EmpleadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
        }
      >
    >


  export type EmpleadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cargo?: boolean
    compras?: boolean | Empleado$comprasArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cargo?: boolean
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectScalar = {
    id?: boolean
    nombre?: boolean
    cargo?: boolean
  }

  export type EmpleadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | Empleado$comprasArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpleadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpleadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empleado"
    objects: {
      compras: Prisma.$CompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      cargo: string
    }, ExtArgs["result"]["empleado"]>
    composites: {}
  }

  type EmpleadoGetPayload<S extends boolean | null | undefined | EmpleadoDefaultArgs> = $Result.GetResult<Prisma.$EmpleadoPayload, S>

  type EmpleadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmpleadoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmpleadoCountAggregateInputType | true
    }

  export interface EmpleadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empleado'], meta: { name: 'Empleado' } }
    /**
     * Find zero or one Empleado that matches the filter.
     * @param {EmpleadoFindUniqueArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpleadoFindUniqueArgs>(args: SelectSubset<T, EmpleadoFindUniqueArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Empleado that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmpleadoFindUniqueOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpleadoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpleadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Empleado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpleadoFindFirstArgs>(args?: SelectSubset<T, EmpleadoFindFirstArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Empleado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpleadoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpleadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleado.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empleadoWithIdOnly = await prisma.empleado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpleadoFindManyArgs>(args?: SelectSubset<T, EmpleadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Empleado.
     * @param {EmpleadoCreateArgs} args - Arguments to create a Empleado.
     * @example
     * // Create one Empleado
     * const Empleado = await prisma.empleado.create({
     *   data: {
     *     // ... data to create a Empleado
     *   }
     * })
     * 
     */
    create<T extends EmpleadoCreateArgs>(args: SelectSubset<T, EmpleadoCreateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Empleados.
     * @param {EmpleadoCreateManyArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpleadoCreateManyArgs>(args?: SelectSubset<T, EmpleadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empleados and returns the data saved in the database.
     * @param {EmpleadoCreateManyAndReturnArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empleados and only return the `id`
     * const empleadoWithIdOnly = await prisma.empleado.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpleadoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpleadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Empleado.
     * @param {EmpleadoDeleteArgs} args - Arguments to delete one Empleado.
     * @example
     * // Delete one Empleado
     * const Empleado = await prisma.empleado.delete({
     *   where: {
     *     // ... filter to delete one Empleado
     *   }
     * })
     * 
     */
    delete<T extends EmpleadoDeleteArgs>(args: SelectSubset<T, EmpleadoDeleteArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Empleado.
     * @param {EmpleadoUpdateArgs} args - Arguments to update one Empleado.
     * @example
     * // Update one Empleado
     * const empleado = await prisma.empleado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpleadoUpdateArgs>(args: SelectSubset<T, EmpleadoUpdateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Empleados.
     * @param {EmpleadoDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpleadoDeleteManyArgs>(args?: SelectSubset<T, EmpleadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpleadoUpdateManyArgs>(args: SelectSubset<T, EmpleadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empleado.
     * @param {EmpleadoUpsertArgs} args - Arguments to update or create a Empleado.
     * @example
     * // Update or create a Empleado
     * const empleado = await prisma.empleado.upsert({
     *   create: {
     *     // ... data to create a Empleado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleado we want to update
     *   }
     * })
     */
    upsert<T extends EmpleadoUpsertArgs>(args: SelectSubset<T, EmpleadoUpsertArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleado.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends EmpleadoCountArgs>(
      args?: Subset<T, EmpleadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpleadoAggregateArgs>(args: Subset<T, EmpleadoAggregateArgs>): Prisma.PrismaPromise<GetEmpleadoAggregateType<T>>

    /**
     * Group by Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmpleadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpleadoGroupByArgs['orderBy'] }
        : { orderBy?: EmpleadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmpleadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empleado model
   */
  readonly fields: EmpleadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empleado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpleadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compras<T extends Empleado$comprasArgs<ExtArgs> = {}>(args?: Subset<T, Empleado$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Empleado model
   */ 
  interface EmpleadoFieldRefs {
    readonly id: FieldRef<"Empleado", 'Int'>
    readonly nombre: FieldRef<"Empleado", 'String'>
    readonly cargo: FieldRef<"Empleado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empleado findUnique
   */
  export type EmpleadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findUniqueOrThrow
   */
  export type EmpleadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findFirst
   */
  export type EmpleadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findFirstOrThrow
   */
  export type EmpleadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findMany
   */
  export type EmpleadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado create
   */
  export type EmpleadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Empleado.
     */
    data: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
  }

  /**
   * Empleado createMany
   */
  export type EmpleadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empleado createManyAndReturn
   */
  export type EmpleadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empleado update
   */
  export type EmpleadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Empleado.
     */
    data: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
    /**
     * Choose, which Empleado to update.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado updateMany
   */
  export type EmpleadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadoWhereInput
  }

  /**
   * Empleado upsert
   */
  export type EmpleadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Empleado to update in case it exists.
     */
    where: EmpleadoWhereUniqueInput
    /**
     * In case the Empleado found by the `where` argument doesn't exist, create a new Empleado with this data.
     */
    create: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
    /**
     * In case the Empleado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
  }

  /**
   * Empleado delete
   */
  export type EmpleadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter which Empleado to delete.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado deleteMany
   */
  export type EmpleadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleados to delete
     */
    where?: EmpleadoWhereInput
  }

  /**
   * Empleado.compras
   */
  export type Empleado$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    cursor?: CompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Empleado without action
   */
  export type EmpleadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
  }


  /**
   * Model Envio
   */

  export type AggregateEnvio = {
    _count: EnvioCountAggregateOutputType | null
    _avg: EnvioAvgAggregateOutputType | null
    _sum: EnvioSumAggregateOutputType | null
    _min: EnvioMinAggregateOutputType | null
    _max: EnvioMaxAggregateOutputType | null
  }

  export type EnvioAvgAggregateOutputType = {
    id: number | null
    ventaId: number | null
    repartidorId: number | null
    direccionId: number | null
    estado: number | null
  }

  export type EnvioSumAggregateOutputType = {
    id: number | null
    ventaId: number | null
    repartidorId: number | null
    direccionId: number | null
    estado: number | null
  }

  export type EnvioMinAggregateOutputType = {
    id: number | null
    ventaId: number | null
    repartidorId: number | null
    direccionId: number | null
    estado: number | null
    fechaInicio: Date | null
    fechaUltimaActualizacion: Date | null
  }

  export type EnvioMaxAggregateOutputType = {
    id: number | null
    ventaId: number | null
    repartidorId: number | null
    direccionId: number | null
    estado: number | null
    fechaInicio: Date | null
    fechaUltimaActualizacion: Date | null
  }

  export type EnvioCountAggregateOutputType = {
    id: number
    ventaId: number
    repartidorId: number
    direccionId: number
    estado: number
    fechaInicio: number
    fechaUltimaActualizacion: number
    _all: number
  }


  export type EnvioAvgAggregateInputType = {
    id?: true
    ventaId?: true
    repartidorId?: true
    direccionId?: true
    estado?: true
  }

  export type EnvioSumAggregateInputType = {
    id?: true
    ventaId?: true
    repartidorId?: true
    direccionId?: true
    estado?: true
  }

  export type EnvioMinAggregateInputType = {
    id?: true
    ventaId?: true
    repartidorId?: true
    direccionId?: true
    estado?: true
    fechaInicio?: true
    fechaUltimaActualizacion?: true
  }

  export type EnvioMaxAggregateInputType = {
    id?: true
    ventaId?: true
    repartidorId?: true
    direccionId?: true
    estado?: true
    fechaInicio?: true
    fechaUltimaActualizacion?: true
  }

  export type EnvioCountAggregateInputType = {
    id?: true
    ventaId?: true
    repartidorId?: true
    direccionId?: true
    estado?: true
    fechaInicio?: true
    fechaUltimaActualizacion?: true
    _all?: true
  }

  export type EnvioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Envio to aggregate.
     */
    where?: EnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Envios to fetch.
     */
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Envios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Envios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Envios
    **/
    _count?: true | EnvioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnvioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnvioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvioMaxAggregateInputType
  }

  export type GetEnvioAggregateType<T extends EnvioAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvio[P]>
      : GetScalarType<T[P], AggregateEnvio[P]>
  }




  export type EnvioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvioWhereInput
    orderBy?: EnvioOrderByWithAggregationInput | EnvioOrderByWithAggregationInput[]
    by: EnvioScalarFieldEnum[] | EnvioScalarFieldEnum
    having?: EnvioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvioCountAggregateInputType | true
    _avg?: EnvioAvgAggregateInputType
    _sum?: EnvioSumAggregateInputType
    _min?: EnvioMinAggregateInputType
    _max?: EnvioMaxAggregateInputType
  }

  export type EnvioGroupByOutputType = {
    id: number
    ventaId: number
    repartidorId: number
    direccionId: number
    estado: number
    fechaInicio: Date
    fechaUltimaActualizacion: Date
    _count: EnvioCountAggregateOutputType | null
    _avg: EnvioAvgAggregateOutputType | null
    _sum: EnvioSumAggregateOutputType | null
    _min: EnvioMinAggregateOutputType | null
    _max: EnvioMaxAggregateOutputType | null
  }

  type GetEnvioGroupByPayload<T extends EnvioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvioGroupByOutputType[P]>
            : GetScalarType<T[P], EnvioGroupByOutputType[P]>
        }
      >
    >


  export type EnvioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    repartidorId?: boolean
    direccionId?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaUltimaActualizacion?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    repartidor?: boolean | RepartidorDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
    estadoEnvio?: boolean | EstadoEnvioDefaultArgs<ExtArgs>
    repartidoresEnvios?: boolean | Envio$repartidoresEnviosArgs<ExtArgs>
    _count?: boolean | EnvioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["envio"]>

  export type EnvioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    repartidorId?: boolean
    direccionId?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaUltimaActualizacion?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    repartidor?: boolean | RepartidorDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
    estadoEnvio?: boolean | EstadoEnvioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["envio"]>

  export type EnvioSelectScalar = {
    id?: boolean
    ventaId?: boolean
    repartidorId?: boolean
    direccionId?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaUltimaActualizacion?: boolean
  }

  export type EnvioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    repartidor?: boolean | RepartidorDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
    estadoEnvio?: boolean | EstadoEnvioDefaultArgs<ExtArgs>
    repartidoresEnvios?: boolean | Envio$repartidoresEnviosArgs<ExtArgs>
    _count?: boolean | EnvioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnvioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    repartidor?: boolean | RepartidorDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
    estadoEnvio?: boolean | EstadoEnvioDefaultArgs<ExtArgs>
  }

  export type $EnvioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Envio"
    objects: {
      venta: Prisma.$VentaPayload<ExtArgs>
      repartidor: Prisma.$RepartidorPayload<ExtArgs>
      direccion: Prisma.$DireccionPayload<ExtArgs>
      estadoEnvio: Prisma.$EstadoEnvioPayload<ExtArgs>
      repartidoresEnvios: Prisma.$RepartidorEnvioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ventaId: number
      repartidorId: number
      direccionId: number
      estado: number
      fechaInicio: Date
      fechaUltimaActualizacion: Date
    }, ExtArgs["result"]["envio"]>
    composites: {}
  }

  type EnvioGetPayload<S extends boolean | null | undefined | EnvioDefaultArgs> = $Result.GetResult<Prisma.$EnvioPayload, S>

  type EnvioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnvioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnvioCountAggregateInputType | true
    }

  export interface EnvioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Envio'], meta: { name: 'Envio' } }
    /**
     * Find zero or one Envio that matches the filter.
     * @param {EnvioFindUniqueArgs} args - Arguments to find a Envio
     * @example
     * // Get one Envio
     * const envio = await prisma.envio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvioFindUniqueArgs>(args: SelectSubset<T, EnvioFindUniqueArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Envio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EnvioFindUniqueOrThrowArgs} args - Arguments to find a Envio
     * @example
     * // Get one Envio
     * const envio = await prisma.envio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvioFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Envio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioFindFirstArgs} args - Arguments to find a Envio
     * @example
     * // Get one Envio
     * const envio = await prisma.envio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvioFindFirstArgs>(args?: SelectSubset<T, EnvioFindFirstArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Envio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioFindFirstOrThrowArgs} args - Arguments to find a Envio
     * @example
     * // Get one Envio
     * const envio = await prisma.envio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvioFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Envios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Envios
     * const envios = await prisma.envio.findMany()
     * 
     * // Get first 10 Envios
     * const envios = await prisma.envio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const envioWithIdOnly = await prisma.envio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvioFindManyArgs>(args?: SelectSubset<T, EnvioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Envio.
     * @param {EnvioCreateArgs} args - Arguments to create a Envio.
     * @example
     * // Create one Envio
     * const Envio = await prisma.envio.create({
     *   data: {
     *     // ... data to create a Envio
     *   }
     * })
     * 
     */
    create<T extends EnvioCreateArgs>(args: SelectSubset<T, EnvioCreateArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Envios.
     * @param {EnvioCreateManyArgs} args - Arguments to create many Envios.
     * @example
     * // Create many Envios
     * const envio = await prisma.envio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvioCreateManyArgs>(args?: SelectSubset<T, EnvioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Envios and returns the data saved in the database.
     * @param {EnvioCreateManyAndReturnArgs} args - Arguments to create many Envios.
     * @example
     * // Create many Envios
     * const envio = await prisma.envio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Envios and only return the `id`
     * const envioWithIdOnly = await prisma.envio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnvioCreateManyAndReturnArgs>(args?: SelectSubset<T, EnvioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Envio.
     * @param {EnvioDeleteArgs} args - Arguments to delete one Envio.
     * @example
     * // Delete one Envio
     * const Envio = await prisma.envio.delete({
     *   where: {
     *     // ... filter to delete one Envio
     *   }
     * })
     * 
     */
    delete<T extends EnvioDeleteArgs>(args: SelectSubset<T, EnvioDeleteArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Envio.
     * @param {EnvioUpdateArgs} args - Arguments to update one Envio.
     * @example
     * // Update one Envio
     * const envio = await prisma.envio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvioUpdateArgs>(args: SelectSubset<T, EnvioUpdateArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Envios.
     * @param {EnvioDeleteManyArgs} args - Arguments to filter Envios to delete.
     * @example
     * // Delete a few Envios
     * const { count } = await prisma.envio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvioDeleteManyArgs>(args?: SelectSubset<T, EnvioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Envios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Envios
     * const envio = await prisma.envio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvioUpdateManyArgs>(args: SelectSubset<T, EnvioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Envio.
     * @param {EnvioUpsertArgs} args - Arguments to update or create a Envio.
     * @example
     * // Update or create a Envio
     * const envio = await prisma.envio.upsert({
     *   create: {
     *     // ... data to create a Envio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Envio we want to update
     *   }
     * })
     */
    upsert<T extends EnvioUpsertArgs>(args: SelectSubset<T, EnvioUpsertArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Envios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioCountArgs} args - Arguments to filter Envios to count.
     * @example
     * // Count the number of Envios
     * const count = await prisma.envio.count({
     *   where: {
     *     // ... the filter for the Envios we want to count
     *   }
     * })
    **/
    count<T extends EnvioCountArgs>(
      args?: Subset<T, EnvioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Envio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvioAggregateArgs>(args: Subset<T, EnvioAggregateArgs>): Prisma.PrismaPromise<GetEnvioAggregateType<T>>

    /**
     * Group by Envio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnvioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvioGroupByArgs['orderBy'] }
        : { orderBy?: EnvioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnvioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Envio model
   */
  readonly fields: EnvioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Envio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venta<T extends VentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentaDefaultArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    repartidor<T extends RepartidorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepartidorDefaultArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    direccion<T extends DireccionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DireccionDefaultArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    estadoEnvio<T extends EstadoEnvioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoEnvioDefaultArgs<ExtArgs>>): Prisma__EstadoEnvioClient<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    repartidoresEnvios<T extends Envio$repartidoresEnviosArgs<ExtArgs> = {}>(args?: Subset<T, Envio$repartidoresEnviosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Envio model
   */ 
  interface EnvioFieldRefs {
    readonly id: FieldRef<"Envio", 'Int'>
    readonly ventaId: FieldRef<"Envio", 'Int'>
    readonly repartidorId: FieldRef<"Envio", 'Int'>
    readonly direccionId: FieldRef<"Envio", 'Int'>
    readonly estado: FieldRef<"Envio", 'Int'>
    readonly fechaInicio: FieldRef<"Envio", 'DateTime'>
    readonly fechaUltimaActualizacion: FieldRef<"Envio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Envio findUnique
   */
  export type EnvioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter, which Envio to fetch.
     */
    where: EnvioWhereUniqueInput
  }

  /**
   * Envio findUniqueOrThrow
   */
  export type EnvioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter, which Envio to fetch.
     */
    where: EnvioWhereUniqueInput
  }

  /**
   * Envio findFirst
   */
  export type EnvioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter, which Envio to fetch.
     */
    where?: EnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Envios to fetch.
     */
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Envios.
     */
    cursor?: EnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Envios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Envios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Envios.
     */
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * Envio findFirstOrThrow
   */
  export type EnvioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter, which Envio to fetch.
     */
    where?: EnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Envios to fetch.
     */
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Envios.
     */
    cursor?: EnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Envios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Envios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Envios.
     */
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * Envio findMany
   */
  export type EnvioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter, which Envios to fetch.
     */
    where?: EnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Envios to fetch.
     */
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Envios.
     */
    cursor?: EnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Envios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Envios.
     */
    skip?: number
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * Envio create
   */
  export type EnvioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * The data needed to create a Envio.
     */
    data: XOR<EnvioCreateInput, EnvioUncheckedCreateInput>
  }

  /**
   * Envio createMany
   */
  export type EnvioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Envios.
     */
    data: EnvioCreateManyInput | EnvioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Envio createManyAndReturn
   */
  export type EnvioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Envios.
     */
    data: EnvioCreateManyInput | EnvioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Envio update
   */
  export type EnvioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * The data needed to update a Envio.
     */
    data: XOR<EnvioUpdateInput, EnvioUncheckedUpdateInput>
    /**
     * Choose, which Envio to update.
     */
    where: EnvioWhereUniqueInput
  }

  /**
   * Envio updateMany
   */
  export type EnvioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Envios.
     */
    data: XOR<EnvioUpdateManyMutationInput, EnvioUncheckedUpdateManyInput>
    /**
     * Filter which Envios to update
     */
    where?: EnvioWhereInput
  }

  /**
   * Envio upsert
   */
  export type EnvioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * The filter to search for the Envio to update in case it exists.
     */
    where: EnvioWhereUniqueInput
    /**
     * In case the Envio found by the `where` argument doesn't exist, create a new Envio with this data.
     */
    create: XOR<EnvioCreateInput, EnvioUncheckedCreateInput>
    /**
     * In case the Envio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvioUpdateInput, EnvioUncheckedUpdateInput>
  }

  /**
   * Envio delete
   */
  export type EnvioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter which Envio to delete.
     */
    where: EnvioWhereUniqueInput
  }

  /**
   * Envio deleteMany
   */
  export type EnvioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Envios to delete
     */
    where?: EnvioWhereInput
  }

  /**
   * Envio.repartidoresEnvios
   */
  export type Envio$repartidoresEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    where?: RepartidorEnvioWhereInput
    orderBy?: RepartidorEnvioOrderByWithRelationInput | RepartidorEnvioOrderByWithRelationInput[]
    cursor?: RepartidorEnvioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepartidorEnvioScalarFieldEnum | RepartidorEnvioScalarFieldEnum[]
  }

  /**
   * Envio without action
   */
  export type EnvioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
  }


  /**
   * Model EstadoEnvio
   */

  export type AggregateEstadoEnvio = {
    _count: EstadoEnvioCountAggregateOutputType | null
    _avg: EstadoEnvioAvgAggregateOutputType | null
    _sum: EstadoEnvioSumAggregateOutputType | null
    _min: EstadoEnvioMinAggregateOutputType | null
    _max: EstadoEnvioMaxAggregateOutputType | null
  }

  export type EstadoEnvioAvgAggregateOutputType = {
    id: number | null
  }

  export type EstadoEnvioSumAggregateOutputType = {
    id: number | null
  }

  export type EstadoEnvioMinAggregateOutputType = {
    id: number | null
    descEstado: string | null
  }

  export type EstadoEnvioMaxAggregateOutputType = {
    id: number | null
    descEstado: string | null
  }

  export type EstadoEnvioCountAggregateOutputType = {
    id: number
    descEstado: number
    _all: number
  }


  export type EstadoEnvioAvgAggregateInputType = {
    id?: true
  }

  export type EstadoEnvioSumAggregateInputType = {
    id?: true
  }

  export type EstadoEnvioMinAggregateInputType = {
    id?: true
    descEstado?: true
  }

  export type EstadoEnvioMaxAggregateInputType = {
    id?: true
    descEstado?: true
  }

  export type EstadoEnvioCountAggregateInputType = {
    id?: true
    descEstado?: true
    _all?: true
  }

  export type EstadoEnvioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoEnvio to aggregate.
     */
    where?: EstadoEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoEnvios to fetch.
     */
    orderBy?: EstadoEnvioOrderByWithRelationInput | EstadoEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstadoEnvios
    **/
    _count?: true | EstadoEnvioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoEnvioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoEnvioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoEnvioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoEnvioMaxAggregateInputType
  }

  export type GetEstadoEnvioAggregateType<T extends EstadoEnvioAggregateArgs> = {
        [P in keyof T & keyof AggregateEstadoEnvio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstadoEnvio[P]>
      : GetScalarType<T[P], AggregateEstadoEnvio[P]>
  }




  export type EstadoEnvioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoEnvioWhereInput
    orderBy?: EstadoEnvioOrderByWithAggregationInput | EstadoEnvioOrderByWithAggregationInput[]
    by: EstadoEnvioScalarFieldEnum[] | EstadoEnvioScalarFieldEnum
    having?: EstadoEnvioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoEnvioCountAggregateInputType | true
    _avg?: EstadoEnvioAvgAggregateInputType
    _sum?: EstadoEnvioSumAggregateInputType
    _min?: EstadoEnvioMinAggregateInputType
    _max?: EstadoEnvioMaxAggregateInputType
  }

  export type EstadoEnvioGroupByOutputType = {
    id: number
    descEstado: string
    _count: EstadoEnvioCountAggregateOutputType | null
    _avg: EstadoEnvioAvgAggregateOutputType | null
    _sum: EstadoEnvioSumAggregateOutputType | null
    _min: EstadoEnvioMinAggregateOutputType | null
    _max: EstadoEnvioMaxAggregateOutputType | null
  }

  type GetEstadoEnvioGroupByPayload<T extends EstadoEnvioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoEnvioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoEnvioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoEnvioGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoEnvioGroupByOutputType[P]>
        }
      >
    >


  export type EstadoEnvioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descEstado?: boolean
    envios?: boolean | EstadoEnvio$enviosArgs<ExtArgs>
    repartidorEnvios?: boolean | EstadoEnvio$repartidorEnviosArgs<ExtArgs>
    _count?: boolean | EstadoEnvioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadoEnvio"]>

  export type EstadoEnvioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descEstado?: boolean
  }, ExtArgs["result"]["estadoEnvio"]>

  export type EstadoEnvioSelectScalar = {
    id?: boolean
    descEstado?: boolean
  }

  export type EstadoEnvioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    envios?: boolean | EstadoEnvio$enviosArgs<ExtArgs>
    repartidorEnvios?: boolean | EstadoEnvio$repartidorEnviosArgs<ExtArgs>
    _count?: boolean | EstadoEnvioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstadoEnvioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstadoEnvioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstadoEnvio"
    objects: {
      envios: Prisma.$EnvioPayload<ExtArgs>[]
      repartidorEnvios: Prisma.$RepartidorEnvioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descEstado: string
    }, ExtArgs["result"]["estadoEnvio"]>
    composites: {}
  }

  type EstadoEnvioGetPayload<S extends boolean | null | undefined | EstadoEnvioDefaultArgs> = $Result.GetResult<Prisma.$EstadoEnvioPayload, S>

  type EstadoEnvioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EstadoEnvioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EstadoEnvioCountAggregateInputType | true
    }

  export interface EstadoEnvioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstadoEnvio'], meta: { name: 'EstadoEnvio' } }
    /**
     * Find zero or one EstadoEnvio that matches the filter.
     * @param {EstadoEnvioFindUniqueArgs} args - Arguments to find a EstadoEnvio
     * @example
     * // Get one EstadoEnvio
     * const estadoEnvio = await prisma.estadoEnvio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoEnvioFindUniqueArgs>(args: SelectSubset<T, EstadoEnvioFindUniqueArgs<ExtArgs>>): Prisma__EstadoEnvioClient<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EstadoEnvio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EstadoEnvioFindUniqueOrThrowArgs} args - Arguments to find a EstadoEnvio
     * @example
     * // Get one EstadoEnvio
     * const estadoEnvio = await prisma.estadoEnvio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoEnvioFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoEnvioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoEnvioClient<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EstadoEnvio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoEnvioFindFirstArgs} args - Arguments to find a EstadoEnvio
     * @example
     * // Get one EstadoEnvio
     * const estadoEnvio = await prisma.estadoEnvio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoEnvioFindFirstArgs>(args?: SelectSubset<T, EstadoEnvioFindFirstArgs<ExtArgs>>): Prisma__EstadoEnvioClient<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EstadoEnvio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoEnvioFindFirstOrThrowArgs} args - Arguments to find a EstadoEnvio
     * @example
     * // Get one EstadoEnvio
     * const estadoEnvio = await prisma.estadoEnvio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoEnvioFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoEnvioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoEnvioClient<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EstadoEnvios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoEnvioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstadoEnvios
     * const estadoEnvios = await prisma.estadoEnvio.findMany()
     * 
     * // Get first 10 EstadoEnvios
     * const estadoEnvios = await prisma.estadoEnvio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoEnvioWithIdOnly = await prisma.estadoEnvio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstadoEnvioFindManyArgs>(args?: SelectSubset<T, EstadoEnvioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EstadoEnvio.
     * @param {EstadoEnvioCreateArgs} args - Arguments to create a EstadoEnvio.
     * @example
     * // Create one EstadoEnvio
     * const EstadoEnvio = await prisma.estadoEnvio.create({
     *   data: {
     *     // ... data to create a EstadoEnvio
     *   }
     * })
     * 
     */
    create<T extends EstadoEnvioCreateArgs>(args: SelectSubset<T, EstadoEnvioCreateArgs<ExtArgs>>): Prisma__EstadoEnvioClient<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EstadoEnvios.
     * @param {EstadoEnvioCreateManyArgs} args - Arguments to create many EstadoEnvios.
     * @example
     * // Create many EstadoEnvios
     * const estadoEnvio = await prisma.estadoEnvio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoEnvioCreateManyArgs>(args?: SelectSubset<T, EstadoEnvioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EstadoEnvios and returns the data saved in the database.
     * @param {EstadoEnvioCreateManyAndReturnArgs} args - Arguments to create many EstadoEnvios.
     * @example
     * // Create many EstadoEnvios
     * const estadoEnvio = await prisma.estadoEnvio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EstadoEnvios and only return the `id`
     * const estadoEnvioWithIdOnly = await prisma.estadoEnvio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstadoEnvioCreateManyAndReturnArgs>(args?: SelectSubset<T, EstadoEnvioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EstadoEnvio.
     * @param {EstadoEnvioDeleteArgs} args - Arguments to delete one EstadoEnvio.
     * @example
     * // Delete one EstadoEnvio
     * const EstadoEnvio = await prisma.estadoEnvio.delete({
     *   where: {
     *     // ... filter to delete one EstadoEnvio
     *   }
     * })
     * 
     */
    delete<T extends EstadoEnvioDeleteArgs>(args: SelectSubset<T, EstadoEnvioDeleteArgs<ExtArgs>>): Prisma__EstadoEnvioClient<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EstadoEnvio.
     * @param {EstadoEnvioUpdateArgs} args - Arguments to update one EstadoEnvio.
     * @example
     * // Update one EstadoEnvio
     * const estadoEnvio = await prisma.estadoEnvio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoEnvioUpdateArgs>(args: SelectSubset<T, EstadoEnvioUpdateArgs<ExtArgs>>): Prisma__EstadoEnvioClient<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EstadoEnvios.
     * @param {EstadoEnvioDeleteManyArgs} args - Arguments to filter EstadoEnvios to delete.
     * @example
     * // Delete a few EstadoEnvios
     * const { count } = await prisma.estadoEnvio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoEnvioDeleteManyArgs>(args?: SelectSubset<T, EstadoEnvioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoEnvios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoEnvioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstadoEnvios
     * const estadoEnvio = await prisma.estadoEnvio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoEnvioUpdateManyArgs>(args: SelectSubset<T, EstadoEnvioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EstadoEnvio.
     * @param {EstadoEnvioUpsertArgs} args - Arguments to update or create a EstadoEnvio.
     * @example
     * // Update or create a EstadoEnvio
     * const estadoEnvio = await prisma.estadoEnvio.upsert({
     *   create: {
     *     // ... data to create a EstadoEnvio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstadoEnvio we want to update
     *   }
     * })
     */
    upsert<T extends EstadoEnvioUpsertArgs>(args: SelectSubset<T, EstadoEnvioUpsertArgs<ExtArgs>>): Prisma__EstadoEnvioClient<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EstadoEnvios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoEnvioCountArgs} args - Arguments to filter EstadoEnvios to count.
     * @example
     * // Count the number of EstadoEnvios
     * const count = await prisma.estadoEnvio.count({
     *   where: {
     *     // ... the filter for the EstadoEnvios we want to count
     *   }
     * })
    **/
    count<T extends EstadoEnvioCountArgs>(
      args?: Subset<T, EstadoEnvioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoEnvioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstadoEnvio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoEnvioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstadoEnvioAggregateArgs>(args: Subset<T, EstadoEnvioAggregateArgs>): Prisma.PrismaPromise<GetEstadoEnvioAggregateType<T>>

    /**
     * Group by EstadoEnvio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoEnvioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstadoEnvioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoEnvioGroupByArgs['orderBy'] }
        : { orderBy?: EstadoEnvioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstadoEnvioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoEnvioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstadoEnvio model
   */
  readonly fields: EstadoEnvioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstadoEnvio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoEnvioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    envios<T extends EstadoEnvio$enviosArgs<ExtArgs> = {}>(args?: Subset<T, EstadoEnvio$enviosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findMany"> | Null>
    repartidorEnvios<T extends EstadoEnvio$repartidorEnviosArgs<ExtArgs> = {}>(args?: Subset<T, EstadoEnvio$repartidorEnviosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EstadoEnvio model
   */ 
  interface EstadoEnvioFieldRefs {
    readonly id: FieldRef<"EstadoEnvio", 'Int'>
    readonly descEstado: FieldRef<"EstadoEnvio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EstadoEnvio findUnique
   */
  export type EstadoEnvioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoEnvioInclude<ExtArgs> | null
    /**
     * Filter, which EstadoEnvio to fetch.
     */
    where: EstadoEnvioWhereUniqueInput
  }

  /**
   * EstadoEnvio findUniqueOrThrow
   */
  export type EstadoEnvioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoEnvioInclude<ExtArgs> | null
    /**
     * Filter, which EstadoEnvio to fetch.
     */
    where: EstadoEnvioWhereUniqueInput
  }

  /**
   * EstadoEnvio findFirst
   */
  export type EstadoEnvioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoEnvioInclude<ExtArgs> | null
    /**
     * Filter, which EstadoEnvio to fetch.
     */
    where?: EstadoEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoEnvios to fetch.
     */
    orderBy?: EstadoEnvioOrderByWithRelationInput | EstadoEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoEnvios.
     */
    cursor?: EstadoEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoEnvios.
     */
    distinct?: EstadoEnvioScalarFieldEnum | EstadoEnvioScalarFieldEnum[]
  }

  /**
   * EstadoEnvio findFirstOrThrow
   */
  export type EstadoEnvioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoEnvioInclude<ExtArgs> | null
    /**
     * Filter, which EstadoEnvio to fetch.
     */
    where?: EstadoEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoEnvios to fetch.
     */
    orderBy?: EstadoEnvioOrderByWithRelationInput | EstadoEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoEnvios.
     */
    cursor?: EstadoEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoEnvios.
     */
    distinct?: EstadoEnvioScalarFieldEnum | EstadoEnvioScalarFieldEnum[]
  }

  /**
   * EstadoEnvio findMany
   */
  export type EstadoEnvioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoEnvioInclude<ExtArgs> | null
    /**
     * Filter, which EstadoEnvios to fetch.
     */
    where?: EstadoEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoEnvios to fetch.
     */
    orderBy?: EstadoEnvioOrderByWithRelationInput | EstadoEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstadoEnvios.
     */
    cursor?: EstadoEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoEnvios.
     */
    skip?: number
    distinct?: EstadoEnvioScalarFieldEnum | EstadoEnvioScalarFieldEnum[]
  }

  /**
   * EstadoEnvio create
   */
  export type EstadoEnvioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoEnvioInclude<ExtArgs> | null
    /**
     * The data needed to create a EstadoEnvio.
     */
    data: XOR<EstadoEnvioCreateInput, EstadoEnvioUncheckedCreateInput>
  }

  /**
   * EstadoEnvio createMany
   */
  export type EstadoEnvioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstadoEnvios.
     */
    data: EstadoEnvioCreateManyInput | EstadoEnvioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstadoEnvio createManyAndReturn
   */
  export type EstadoEnvioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EstadoEnvios.
     */
    data: EstadoEnvioCreateManyInput | EstadoEnvioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstadoEnvio update
   */
  export type EstadoEnvioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoEnvioInclude<ExtArgs> | null
    /**
     * The data needed to update a EstadoEnvio.
     */
    data: XOR<EstadoEnvioUpdateInput, EstadoEnvioUncheckedUpdateInput>
    /**
     * Choose, which EstadoEnvio to update.
     */
    where: EstadoEnvioWhereUniqueInput
  }

  /**
   * EstadoEnvio updateMany
   */
  export type EstadoEnvioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstadoEnvios.
     */
    data: XOR<EstadoEnvioUpdateManyMutationInput, EstadoEnvioUncheckedUpdateManyInput>
    /**
     * Filter which EstadoEnvios to update
     */
    where?: EstadoEnvioWhereInput
  }

  /**
   * EstadoEnvio upsert
   */
  export type EstadoEnvioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoEnvioInclude<ExtArgs> | null
    /**
     * The filter to search for the EstadoEnvio to update in case it exists.
     */
    where: EstadoEnvioWhereUniqueInput
    /**
     * In case the EstadoEnvio found by the `where` argument doesn't exist, create a new EstadoEnvio with this data.
     */
    create: XOR<EstadoEnvioCreateInput, EstadoEnvioUncheckedCreateInput>
    /**
     * In case the EstadoEnvio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoEnvioUpdateInput, EstadoEnvioUncheckedUpdateInput>
  }

  /**
   * EstadoEnvio delete
   */
  export type EstadoEnvioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoEnvioInclude<ExtArgs> | null
    /**
     * Filter which EstadoEnvio to delete.
     */
    where: EstadoEnvioWhereUniqueInput
  }

  /**
   * EstadoEnvio deleteMany
   */
  export type EstadoEnvioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoEnvios to delete
     */
    where?: EstadoEnvioWhereInput
  }

  /**
   * EstadoEnvio.envios
   */
  export type EstadoEnvio$enviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    where?: EnvioWhereInput
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    cursor?: EnvioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * EstadoEnvio.repartidorEnvios
   */
  export type EstadoEnvio$repartidorEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    where?: RepartidorEnvioWhereInput
    orderBy?: RepartidorEnvioOrderByWithRelationInput | RepartidorEnvioOrderByWithRelationInput[]
    cursor?: RepartidorEnvioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepartidorEnvioScalarFieldEnum | RepartidorEnvioScalarFieldEnum[]
  }

  /**
   * EstadoEnvio without action
   */
  export type EstadoEnvioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoEnvio
     */
    select?: EstadoEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoEnvioInclude<ExtArgs> | null
  }


  /**
   * Model EstadoVenta
   */

  export type AggregateEstadoVenta = {
    _count: EstadoVentaCountAggregateOutputType | null
    _avg: EstadoVentaAvgAggregateOutputType | null
    _sum: EstadoVentaSumAggregateOutputType | null
    _min: EstadoVentaMinAggregateOutputType | null
    _max: EstadoVentaMaxAggregateOutputType | null
  }

  export type EstadoVentaAvgAggregateOutputType = {
    id: number | null
  }

  export type EstadoVentaSumAggregateOutputType = {
    id: number | null
  }

  export type EstadoVentaMinAggregateOutputType = {
    id: number | null
    descEstado: string | null
  }

  export type EstadoVentaMaxAggregateOutputType = {
    id: number | null
    descEstado: string | null
  }

  export type EstadoVentaCountAggregateOutputType = {
    id: number
    descEstado: number
    _all: number
  }


  export type EstadoVentaAvgAggregateInputType = {
    id?: true
  }

  export type EstadoVentaSumAggregateInputType = {
    id?: true
  }

  export type EstadoVentaMinAggregateInputType = {
    id?: true
    descEstado?: true
  }

  export type EstadoVentaMaxAggregateInputType = {
    id?: true
    descEstado?: true
  }

  export type EstadoVentaCountAggregateInputType = {
    id?: true
    descEstado?: true
    _all?: true
  }

  export type EstadoVentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoVenta to aggregate.
     */
    where?: EstadoVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoVentas to fetch.
     */
    orderBy?: EstadoVentaOrderByWithRelationInput | EstadoVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstadoVentas
    **/
    _count?: true | EstadoVentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoVentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoVentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoVentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoVentaMaxAggregateInputType
  }

  export type GetEstadoVentaAggregateType<T extends EstadoVentaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstadoVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstadoVenta[P]>
      : GetScalarType<T[P], AggregateEstadoVenta[P]>
  }




  export type EstadoVentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoVentaWhereInput
    orderBy?: EstadoVentaOrderByWithAggregationInput | EstadoVentaOrderByWithAggregationInput[]
    by: EstadoVentaScalarFieldEnum[] | EstadoVentaScalarFieldEnum
    having?: EstadoVentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoVentaCountAggregateInputType | true
    _avg?: EstadoVentaAvgAggregateInputType
    _sum?: EstadoVentaSumAggregateInputType
    _min?: EstadoVentaMinAggregateInputType
    _max?: EstadoVentaMaxAggregateInputType
  }

  export type EstadoVentaGroupByOutputType = {
    id: number
    descEstado: string
    _count: EstadoVentaCountAggregateOutputType | null
    _avg: EstadoVentaAvgAggregateOutputType | null
    _sum: EstadoVentaSumAggregateOutputType | null
    _min: EstadoVentaMinAggregateOutputType | null
    _max: EstadoVentaMaxAggregateOutputType | null
  }

  type GetEstadoVentaGroupByPayload<T extends EstadoVentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoVentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoVentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoVentaGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoVentaGroupByOutputType[P]>
        }
      >
    >


  export type EstadoVentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descEstado?: boolean
    ventas?: boolean | EstadoVenta$ventasArgs<ExtArgs>
    _count?: boolean | EstadoVentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadoVenta"]>

  export type EstadoVentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descEstado?: boolean
  }, ExtArgs["result"]["estadoVenta"]>

  export type EstadoVentaSelectScalar = {
    id?: boolean
    descEstado?: boolean
  }

  export type EstadoVentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | EstadoVenta$ventasArgs<ExtArgs>
    _count?: boolean | EstadoVentaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstadoVentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstadoVentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstadoVenta"
    objects: {
      ventas: Prisma.$VentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descEstado: string
    }, ExtArgs["result"]["estadoVenta"]>
    composites: {}
  }

  type EstadoVentaGetPayload<S extends boolean | null | undefined | EstadoVentaDefaultArgs> = $Result.GetResult<Prisma.$EstadoVentaPayload, S>

  type EstadoVentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EstadoVentaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EstadoVentaCountAggregateInputType | true
    }

  export interface EstadoVentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstadoVenta'], meta: { name: 'EstadoVenta' } }
    /**
     * Find zero or one EstadoVenta that matches the filter.
     * @param {EstadoVentaFindUniqueArgs} args - Arguments to find a EstadoVenta
     * @example
     * // Get one EstadoVenta
     * const estadoVenta = await prisma.estadoVenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoVentaFindUniqueArgs>(args: SelectSubset<T, EstadoVentaFindUniqueArgs<ExtArgs>>): Prisma__EstadoVentaClient<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EstadoVenta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EstadoVentaFindUniqueOrThrowArgs} args - Arguments to find a EstadoVenta
     * @example
     * // Get one EstadoVenta
     * const estadoVenta = await prisma.estadoVenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoVentaFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoVentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoVentaClient<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EstadoVenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoVentaFindFirstArgs} args - Arguments to find a EstadoVenta
     * @example
     * // Get one EstadoVenta
     * const estadoVenta = await prisma.estadoVenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoVentaFindFirstArgs>(args?: SelectSubset<T, EstadoVentaFindFirstArgs<ExtArgs>>): Prisma__EstadoVentaClient<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EstadoVenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoVentaFindFirstOrThrowArgs} args - Arguments to find a EstadoVenta
     * @example
     * // Get one EstadoVenta
     * const estadoVenta = await prisma.estadoVenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoVentaFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoVentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoVentaClient<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EstadoVentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoVentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstadoVentas
     * const estadoVentas = await prisma.estadoVenta.findMany()
     * 
     * // Get first 10 EstadoVentas
     * const estadoVentas = await prisma.estadoVenta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoVentaWithIdOnly = await prisma.estadoVenta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstadoVentaFindManyArgs>(args?: SelectSubset<T, EstadoVentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EstadoVenta.
     * @param {EstadoVentaCreateArgs} args - Arguments to create a EstadoVenta.
     * @example
     * // Create one EstadoVenta
     * const EstadoVenta = await prisma.estadoVenta.create({
     *   data: {
     *     // ... data to create a EstadoVenta
     *   }
     * })
     * 
     */
    create<T extends EstadoVentaCreateArgs>(args: SelectSubset<T, EstadoVentaCreateArgs<ExtArgs>>): Prisma__EstadoVentaClient<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EstadoVentas.
     * @param {EstadoVentaCreateManyArgs} args - Arguments to create many EstadoVentas.
     * @example
     * // Create many EstadoVentas
     * const estadoVenta = await prisma.estadoVenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoVentaCreateManyArgs>(args?: SelectSubset<T, EstadoVentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EstadoVentas and returns the data saved in the database.
     * @param {EstadoVentaCreateManyAndReturnArgs} args - Arguments to create many EstadoVentas.
     * @example
     * // Create many EstadoVentas
     * const estadoVenta = await prisma.estadoVenta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EstadoVentas and only return the `id`
     * const estadoVentaWithIdOnly = await prisma.estadoVenta.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstadoVentaCreateManyAndReturnArgs>(args?: SelectSubset<T, EstadoVentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EstadoVenta.
     * @param {EstadoVentaDeleteArgs} args - Arguments to delete one EstadoVenta.
     * @example
     * // Delete one EstadoVenta
     * const EstadoVenta = await prisma.estadoVenta.delete({
     *   where: {
     *     // ... filter to delete one EstadoVenta
     *   }
     * })
     * 
     */
    delete<T extends EstadoVentaDeleteArgs>(args: SelectSubset<T, EstadoVentaDeleteArgs<ExtArgs>>): Prisma__EstadoVentaClient<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EstadoVenta.
     * @param {EstadoVentaUpdateArgs} args - Arguments to update one EstadoVenta.
     * @example
     * // Update one EstadoVenta
     * const estadoVenta = await prisma.estadoVenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoVentaUpdateArgs>(args: SelectSubset<T, EstadoVentaUpdateArgs<ExtArgs>>): Prisma__EstadoVentaClient<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EstadoVentas.
     * @param {EstadoVentaDeleteManyArgs} args - Arguments to filter EstadoVentas to delete.
     * @example
     * // Delete a few EstadoVentas
     * const { count } = await prisma.estadoVenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoVentaDeleteManyArgs>(args?: SelectSubset<T, EstadoVentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoVentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstadoVentas
     * const estadoVenta = await prisma.estadoVenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoVentaUpdateManyArgs>(args: SelectSubset<T, EstadoVentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EstadoVenta.
     * @param {EstadoVentaUpsertArgs} args - Arguments to update or create a EstadoVenta.
     * @example
     * // Update or create a EstadoVenta
     * const estadoVenta = await prisma.estadoVenta.upsert({
     *   create: {
     *     // ... data to create a EstadoVenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstadoVenta we want to update
     *   }
     * })
     */
    upsert<T extends EstadoVentaUpsertArgs>(args: SelectSubset<T, EstadoVentaUpsertArgs<ExtArgs>>): Prisma__EstadoVentaClient<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EstadoVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoVentaCountArgs} args - Arguments to filter EstadoVentas to count.
     * @example
     * // Count the number of EstadoVentas
     * const count = await prisma.estadoVenta.count({
     *   where: {
     *     // ... the filter for the EstadoVentas we want to count
     *   }
     * })
    **/
    count<T extends EstadoVentaCountArgs>(
      args?: Subset<T, EstadoVentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoVentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstadoVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoVentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstadoVentaAggregateArgs>(args: Subset<T, EstadoVentaAggregateArgs>): Prisma.PrismaPromise<GetEstadoVentaAggregateType<T>>

    /**
     * Group by EstadoVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoVentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstadoVentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoVentaGroupByArgs['orderBy'] }
        : { orderBy?: EstadoVentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstadoVentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstadoVenta model
   */
  readonly fields: EstadoVentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstadoVenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoVentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ventas<T extends EstadoVenta$ventasArgs<ExtArgs> = {}>(args?: Subset<T, EstadoVenta$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EstadoVenta model
   */ 
  interface EstadoVentaFieldRefs {
    readonly id: FieldRef<"EstadoVenta", 'Int'>
    readonly descEstado: FieldRef<"EstadoVenta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EstadoVenta findUnique
   */
  export type EstadoVentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoVentaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoVenta to fetch.
     */
    where: EstadoVentaWhereUniqueInput
  }

  /**
   * EstadoVenta findUniqueOrThrow
   */
  export type EstadoVentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoVentaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoVenta to fetch.
     */
    where: EstadoVentaWhereUniqueInput
  }

  /**
   * EstadoVenta findFirst
   */
  export type EstadoVentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoVentaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoVenta to fetch.
     */
    where?: EstadoVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoVentas to fetch.
     */
    orderBy?: EstadoVentaOrderByWithRelationInput | EstadoVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoVentas.
     */
    cursor?: EstadoVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoVentas.
     */
    distinct?: EstadoVentaScalarFieldEnum | EstadoVentaScalarFieldEnum[]
  }

  /**
   * EstadoVenta findFirstOrThrow
   */
  export type EstadoVentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoVentaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoVenta to fetch.
     */
    where?: EstadoVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoVentas to fetch.
     */
    orderBy?: EstadoVentaOrderByWithRelationInput | EstadoVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoVentas.
     */
    cursor?: EstadoVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoVentas.
     */
    distinct?: EstadoVentaScalarFieldEnum | EstadoVentaScalarFieldEnum[]
  }

  /**
   * EstadoVenta findMany
   */
  export type EstadoVentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoVentaInclude<ExtArgs> | null
    /**
     * Filter, which EstadoVentas to fetch.
     */
    where?: EstadoVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoVentas to fetch.
     */
    orderBy?: EstadoVentaOrderByWithRelationInput | EstadoVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstadoVentas.
     */
    cursor?: EstadoVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoVentas.
     */
    skip?: number
    distinct?: EstadoVentaScalarFieldEnum | EstadoVentaScalarFieldEnum[]
  }

  /**
   * EstadoVenta create
   */
  export type EstadoVentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoVentaInclude<ExtArgs> | null
    /**
     * The data needed to create a EstadoVenta.
     */
    data: XOR<EstadoVentaCreateInput, EstadoVentaUncheckedCreateInput>
  }

  /**
   * EstadoVenta createMany
   */
  export type EstadoVentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstadoVentas.
     */
    data: EstadoVentaCreateManyInput | EstadoVentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstadoVenta createManyAndReturn
   */
  export type EstadoVentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EstadoVentas.
     */
    data: EstadoVentaCreateManyInput | EstadoVentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstadoVenta update
   */
  export type EstadoVentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoVentaInclude<ExtArgs> | null
    /**
     * The data needed to update a EstadoVenta.
     */
    data: XOR<EstadoVentaUpdateInput, EstadoVentaUncheckedUpdateInput>
    /**
     * Choose, which EstadoVenta to update.
     */
    where: EstadoVentaWhereUniqueInput
  }

  /**
   * EstadoVenta updateMany
   */
  export type EstadoVentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstadoVentas.
     */
    data: XOR<EstadoVentaUpdateManyMutationInput, EstadoVentaUncheckedUpdateManyInput>
    /**
     * Filter which EstadoVentas to update
     */
    where?: EstadoVentaWhereInput
  }

  /**
   * EstadoVenta upsert
   */
  export type EstadoVentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoVentaInclude<ExtArgs> | null
    /**
     * The filter to search for the EstadoVenta to update in case it exists.
     */
    where: EstadoVentaWhereUniqueInput
    /**
     * In case the EstadoVenta found by the `where` argument doesn't exist, create a new EstadoVenta with this data.
     */
    create: XOR<EstadoVentaCreateInput, EstadoVentaUncheckedCreateInput>
    /**
     * In case the EstadoVenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoVentaUpdateInput, EstadoVentaUncheckedUpdateInput>
  }

  /**
   * EstadoVenta delete
   */
  export type EstadoVentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoVentaInclude<ExtArgs> | null
    /**
     * Filter which EstadoVenta to delete.
     */
    where: EstadoVentaWhereUniqueInput
  }

  /**
   * EstadoVenta deleteMany
   */
  export type EstadoVentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoVentas to delete
     */
    where?: EstadoVentaWhereInput
  }

  /**
   * EstadoVenta.ventas
   */
  export type EstadoVenta$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * EstadoVenta without action
   */
  export type EstadoVentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoVenta
     */
    select?: EstadoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoVentaInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
    medida: number | null
    precio: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
    medida: number | null
    precio: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    cantidad: number | null
    medida: number | null
    marca: string | null
    precio: number | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    cantidad: number | null
    medida: number | null
    marca: string | null
    precio: number | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    cantidad: number
    medida: number
    marca: number
    precio: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    cantidad?: true
    medida?: true
    precio?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    cantidad?: true
    medida?: true
    precio?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    cantidad?: true
    medida?: true
    marca?: true
    precio?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    cantidad?: true
    medida?: true
    marca?: true
    precio?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    cantidad?: true
    medida?: true
    marca?: true
    precio?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    cantidad: number
    medida: number
    marca: string
    precio: number
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cantidad?: boolean
    medida?: boolean
    marca?: boolean
    precio?: boolean
    compras?: boolean | Producto$comprasArgs<ExtArgs>
    ventas?: boolean | Producto$ventasArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cantidad?: boolean
    medida?: boolean
    marca?: boolean
    precio?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    cantidad?: boolean
    medida?: boolean
    marca?: boolean
    precio?: boolean
  }

  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | Producto$comprasArgs<ExtArgs>
    ventas?: boolean | Producto$ventasArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      compras: Prisma.$CompraProductoPayload<ExtArgs>[]
      ventas: Prisma.$ProductoVentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      cantidad: number
      medida: number
      marca: string
      precio: number
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compras<T extends Producto$comprasArgs<ExtArgs> = {}>(args?: Subset<T, Producto$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findMany"> | Null>
    ventas<T extends Producto$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Producto$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */ 
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly cantidad: FieldRef<"Producto", 'Int'>
    readonly medida: FieldRef<"Producto", 'Float'>
    readonly marca: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
  }

  /**
   * Producto.compras
   */
  export type Producto$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    where?: CompraProductoWhereInput
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    cursor?: CompraProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraProductoScalarFieldEnum | CompraProductoScalarFieldEnum[]
  }

  /**
   * Producto.ventas
   */
  export type Producto$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    where?: ProductoVentaWhereInput
    orderBy?: ProductoVentaOrderByWithRelationInput | ProductoVentaOrderByWithRelationInput[]
    cursor?: ProductoVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoVentaScalarFieldEnum | ProductoVentaScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model ProductoVenta
   */

  export type AggregateProductoVenta = {
    _count: ProductoVentaCountAggregateOutputType | null
    _avg: ProductoVentaAvgAggregateOutputType | null
    _sum: ProductoVentaSumAggregateOutputType | null
    _min: ProductoVentaMinAggregateOutputType | null
    _max: ProductoVentaMaxAggregateOutputType | null
  }

  export type ProductoVentaAvgAggregateOutputType = {
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type ProductoVentaSumAggregateOutputType = {
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type ProductoVentaMinAggregateOutputType = {
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type ProductoVentaMaxAggregateOutputType = {
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type ProductoVentaCountAggregateOutputType = {
    ventaId: number
    productoId: number
    cantidad: number
    _all: number
  }


  export type ProductoVentaAvgAggregateInputType = {
    ventaId?: true
    productoId?: true
    cantidad?: true
  }

  export type ProductoVentaSumAggregateInputType = {
    ventaId?: true
    productoId?: true
    cantidad?: true
  }

  export type ProductoVentaMinAggregateInputType = {
    ventaId?: true
    productoId?: true
    cantidad?: true
  }

  export type ProductoVentaMaxAggregateInputType = {
    ventaId?: true
    productoId?: true
    cantidad?: true
  }

  export type ProductoVentaCountAggregateInputType = {
    ventaId?: true
    productoId?: true
    cantidad?: true
    _all?: true
  }

  export type ProductoVentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoVenta to aggregate.
     */
    where?: ProductoVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoVentas to fetch.
     */
    orderBy?: ProductoVentaOrderByWithRelationInput | ProductoVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductoVentas
    **/
    _count?: true | ProductoVentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoVentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoVentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoVentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoVentaMaxAggregateInputType
  }

  export type GetProductoVentaAggregateType<T extends ProductoVentaAggregateArgs> = {
        [P in keyof T & keyof AggregateProductoVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductoVenta[P]>
      : GetScalarType<T[P], AggregateProductoVenta[P]>
  }




  export type ProductoVentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoVentaWhereInput
    orderBy?: ProductoVentaOrderByWithAggregationInput | ProductoVentaOrderByWithAggregationInput[]
    by: ProductoVentaScalarFieldEnum[] | ProductoVentaScalarFieldEnum
    having?: ProductoVentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoVentaCountAggregateInputType | true
    _avg?: ProductoVentaAvgAggregateInputType
    _sum?: ProductoVentaSumAggregateInputType
    _min?: ProductoVentaMinAggregateInputType
    _max?: ProductoVentaMaxAggregateInputType
  }

  export type ProductoVentaGroupByOutputType = {
    ventaId: number
    productoId: number
    cantidad: number
    _count: ProductoVentaCountAggregateOutputType | null
    _avg: ProductoVentaAvgAggregateOutputType | null
    _sum: ProductoVentaSumAggregateOutputType | null
    _min: ProductoVentaMinAggregateOutputType | null
    _max: ProductoVentaMaxAggregateOutputType | null
  }

  type GetProductoVentaGroupByPayload<T extends ProductoVentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoVentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoVentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoVentaGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoVentaGroupByOutputType[P]>
        }
      >
    >


  export type ProductoVentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ventaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productoVenta"]>

  export type ProductoVentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ventaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productoVenta"]>

  export type ProductoVentaSelectScalar = {
    ventaId?: boolean
    productoId?: boolean
    cantidad?: boolean
  }

  export type ProductoVentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type ProductoVentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $ProductoVentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductoVenta"
    objects: {
      venta: Prisma.$VentaPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ventaId: number
      productoId: number
      cantidad: number
    }, ExtArgs["result"]["productoVenta"]>
    composites: {}
  }

  type ProductoVentaGetPayload<S extends boolean | null | undefined | ProductoVentaDefaultArgs> = $Result.GetResult<Prisma.$ProductoVentaPayload, S>

  type ProductoVentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductoVentaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductoVentaCountAggregateInputType | true
    }

  export interface ProductoVentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductoVenta'], meta: { name: 'ProductoVenta' } }
    /**
     * Find zero or one ProductoVenta that matches the filter.
     * @param {ProductoVentaFindUniqueArgs} args - Arguments to find a ProductoVenta
     * @example
     * // Get one ProductoVenta
     * const productoVenta = await prisma.productoVenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoVentaFindUniqueArgs>(args: SelectSubset<T, ProductoVentaFindUniqueArgs<ExtArgs>>): Prisma__ProductoVentaClient<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductoVenta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductoVentaFindUniqueOrThrowArgs} args - Arguments to find a ProductoVenta
     * @example
     * // Get one ProductoVenta
     * const productoVenta = await prisma.productoVenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoVentaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoVentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoVentaClient<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductoVenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoVentaFindFirstArgs} args - Arguments to find a ProductoVenta
     * @example
     * // Get one ProductoVenta
     * const productoVenta = await prisma.productoVenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoVentaFindFirstArgs>(args?: SelectSubset<T, ProductoVentaFindFirstArgs<ExtArgs>>): Prisma__ProductoVentaClient<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductoVenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoVentaFindFirstOrThrowArgs} args - Arguments to find a ProductoVenta
     * @example
     * // Get one ProductoVenta
     * const productoVenta = await prisma.productoVenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoVentaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoVentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoVentaClient<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductoVentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoVentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductoVentas
     * const productoVentas = await prisma.productoVenta.findMany()
     * 
     * // Get first 10 ProductoVentas
     * const productoVentas = await prisma.productoVenta.findMany({ take: 10 })
     * 
     * // Only select the `ventaId`
     * const productoVentaWithVentaIdOnly = await prisma.productoVenta.findMany({ select: { ventaId: true } })
     * 
     */
    findMany<T extends ProductoVentaFindManyArgs>(args?: SelectSubset<T, ProductoVentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductoVenta.
     * @param {ProductoVentaCreateArgs} args - Arguments to create a ProductoVenta.
     * @example
     * // Create one ProductoVenta
     * const ProductoVenta = await prisma.productoVenta.create({
     *   data: {
     *     // ... data to create a ProductoVenta
     *   }
     * })
     * 
     */
    create<T extends ProductoVentaCreateArgs>(args: SelectSubset<T, ProductoVentaCreateArgs<ExtArgs>>): Prisma__ProductoVentaClient<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductoVentas.
     * @param {ProductoVentaCreateManyArgs} args - Arguments to create many ProductoVentas.
     * @example
     * // Create many ProductoVentas
     * const productoVenta = await prisma.productoVenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoVentaCreateManyArgs>(args?: SelectSubset<T, ProductoVentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductoVentas and returns the data saved in the database.
     * @param {ProductoVentaCreateManyAndReturnArgs} args - Arguments to create many ProductoVentas.
     * @example
     * // Create many ProductoVentas
     * const productoVenta = await prisma.productoVenta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductoVentas and only return the `ventaId`
     * const productoVentaWithVentaIdOnly = await prisma.productoVenta.createManyAndReturn({ 
     *   select: { ventaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoVentaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoVentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductoVenta.
     * @param {ProductoVentaDeleteArgs} args - Arguments to delete one ProductoVenta.
     * @example
     * // Delete one ProductoVenta
     * const ProductoVenta = await prisma.productoVenta.delete({
     *   where: {
     *     // ... filter to delete one ProductoVenta
     *   }
     * })
     * 
     */
    delete<T extends ProductoVentaDeleteArgs>(args: SelectSubset<T, ProductoVentaDeleteArgs<ExtArgs>>): Prisma__ProductoVentaClient<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductoVenta.
     * @param {ProductoVentaUpdateArgs} args - Arguments to update one ProductoVenta.
     * @example
     * // Update one ProductoVenta
     * const productoVenta = await prisma.productoVenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoVentaUpdateArgs>(args: SelectSubset<T, ProductoVentaUpdateArgs<ExtArgs>>): Prisma__ProductoVentaClient<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductoVentas.
     * @param {ProductoVentaDeleteManyArgs} args - Arguments to filter ProductoVentas to delete.
     * @example
     * // Delete a few ProductoVentas
     * const { count } = await prisma.productoVenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoVentaDeleteManyArgs>(args?: SelectSubset<T, ProductoVentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductoVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoVentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductoVentas
     * const productoVenta = await prisma.productoVenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoVentaUpdateManyArgs>(args: SelectSubset<T, ProductoVentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductoVenta.
     * @param {ProductoVentaUpsertArgs} args - Arguments to update or create a ProductoVenta.
     * @example
     * // Update or create a ProductoVenta
     * const productoVenta = await prisma.productoVenta.upsert({
     *   create: {
     *     // ... data to create a ProductoVenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductoVenta we want to update
     *   }
     * })
     */
    upsert<T extends ProductoVentaUpsertArgs>(args: SelectSubset<T, ProductoVentaUpsertArgs<ExtArgs>>): Prisma__ProductoVentaClient<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductoVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoVentaCountArgs} args - Arguments to filter ProductoVentas to count.
     * @example
     * // Count the number of ProductoVentas
     * const count = await prisma.productoVenta.count({
     *   where: {
     *     // ... the filter for the ProductoVentas we want to count
     *   }
     * })
    **/
    count<T extends ProductoVentaCountArgs>(
      args?: Subset<T, ProductoVentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoVentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductoVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoVentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoVentaAggregateArgs>(args: Subset<T, ProductoVentaAggregateArgs>): Prisma.PrismaPromise<GetProductoVentaAggregateType<T>>

    /**
     * Group by ProductoVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoVentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoVentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoVentaGroupByArgs['orderBy'] }
        : { orderBy?: ProductoVentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoVentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductoVenta model
   */
  readonly fields: ProductoVentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductoVenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoVentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venta<T extends VentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentaDefaultArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductoVenta model
   */ 
  interface ProductoVentaFieldRefs {
    readonly ventaId: FieldRef<"ProductoVenta", 'Int'>
    readonly productoId: FieldRef<"ProductoVenta", 'Int'>
    readonly cantidad: FieldRef<"ProductoVenta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductoVenta findUnique
   */
  export type ProductoVentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoVenta to fetch.
     */
    where: ProductoVentaWhereUniqueInput
  }

  /**
   * ProductoVenta findUniqueOrThrow
   */
  export type ProductoVentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoVenta to fetch.
     */
    where: ProductoVentaWhereUniqueInput
  }

  /**
   * ProductoVenta findFirst
   */
  export type ProductoVentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoVenta to fetch.
     */
    where?: ProductoVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoVentas to fetch.
     */
    orderBy?: ProductoVentaOrderByWithRelationInput | ProductoVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoVentas.
     */
    cursor?: ProductoVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoVentas.
     */
    distinct?: ProductoVentaScalarFieldEnum | ProductoVentaScalarFieldEnum[]
  }

  /**
   * ProductoVenta findFirstOrThrow
   */
  export type ProductoVentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoVenta to fetch.
     */
    where?: ProductoVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoVentas to fetch.
     */
    orderBy?: ProductoVentaOrderByWithRelationInput | ProductoVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoVentas.
     */
    cursor?: ProductoVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoVentas.
     */
    distinct?: ProductoVentaScalarFieldEnum | ProductoVentaScalarFieldEnum[]
  }

  /**
   * ProductoVenta findMany
   */
  export type ProductoVentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    /**
     * Filter, which ProductoVentas to fetch.
     */
    where?: ProductoVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoVentas to fetch.
     */
    orderBy?: ProductoVentaOrderByWithRelationInput | ProductoVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductoVentas.
     */
    cursor?: ProductoVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoVentas.
     */
    skip?: number
    distinct?: ProductoVentaScalarFieldEnum | ProductoVentaScalarFieldEnum[]
  }

  /**
   * ProductoVenta create
   */
  export type ProductoVentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductoVenta.
     */
    data: XOR<ProductoVentaCreateInput, ProductoVentaUncheckedCreateInput>
  }

  /**
   * ProductoVenta createMany
   */
  export type ProductoVentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductoVentas.
     */
    data: ProductoVentaCreateManyInput | ProductoVentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductoVenta createManyAndReturn
   */
  export type ProductoVentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductoVentas.
     */
    data: ProductoVentaCreateManyInput | ProductoVentaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductoVenta update
   */
  export type ProductoVentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductoVenta.
     */
    data: XOR<ProductoVentaUpdateInput, ProductoVentaUncheckedUpdateInput>
    /**
     * Choose, which ProductoVenta to update.
     */
    where: ProductoVentaWhereUniqueInput
  }

  /**
   * ProductoVenta updateMany
   */
  export type ProductoVentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductoVentas.
     */
    data: XOR<ProductoVentaUpdateManyMutationInput, ProductoVentaUncheckedUpdateManyInput>
    /**
     * Filter which ProductoVentas to update
     */
    where?: ProductoVentaWhereInput
  }

  /**
   * ProductoVenta upsert
   */
  export type ProductoVentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductoVenta to update in case it exists.
     */
    where: ProductoVentaWhereUniqueInput
    /**
     * In case the ProductoVenta found by the `where` argument doesn't exist, create a new ProductoVenta with this data.
     */
    create: XOR<ProductoVentaCreateInput, ProductoVentaUncheckedCreateInput>
    /**
     * In case the ProductoVenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoVentaUpdateInput, ProductoVentaUncheckedUpdateInput>
  }

  /**
   * ProductoVenta delete
   */
  export type ProductoVentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    /**
     * Filter which ProductoVenta to delete.
     */
    where: ProductoVentaWhereUniqueInput
  }

  /**
   * ProductoVenta deleteMany
   */
  export type ProductoVentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoVentas to delete
     */
    where?: ProductoVentaWhereInput
  }

  /**
   * ProductoVenta without action
   */
  export type ProductoVentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
  }


  /**
   * Model Repartidor
   */

  export type AggregateRepartidor = {
    _count: RepartidorCountAggregateOutputType | null
    _avg: RepartidorAvgAggregateOutputType | null
    _sum: RepartidorSumAggregateOutputType | null
    _min: RepartidorMinAggregateOutputType | null
    _max: RepartidorMaxAggregateOutputType | null
  }

  export type RepartidorAvgAggregateOutputType = {
    id: number | null
  }

  export type RepartidorSumAggregateOutputType = {
    id: number | null
  }

  export type RepartidorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    telefono: string | null
  }

  export type RepartidorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    telefono: string | null
  }

  export type RepartidorCountAggregateOutputType = {
    id: number
    nombre: number
    telefono: number
    _all: number
  }


  export type RepartidorAvgAggregateInputType = {
    id?: true
  }

  export type RepartidorSumAggregateInputType = {
    id?: true
  }

  export type RepartidorMinAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
  }

  export type RepartidorMaxAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
  }

  export type RepartidorCountAggregateInputType = {
    id?: true
    nombre?: true
    telefono?: true
    _all?: true
  }

  export type RepartidorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repartidor to aggregate.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repartidors
    **/
    _count?: true | RepartidorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepartidorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepartidorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepartidorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepartidorMaxAggregateInputType
  }

  export type GetRepartidorAggregateType<T extends RepartidorAggregateArgs> = {
        [P in keyof T & keyof AggregateRepartidor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepartidor[P]>
      : GetScalarType<T[P], AggregateRepartidor[P]>
  }




  export type RepartidorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepartidorWhereInput
    orderBy?: RepartidorOrderByWithAggregationInput | RepartidorOrderByWithAggregationInput[]
    by: RepartidorScalarFieldEnum[] | RepartidorScalarFieldEnum
    having?: RepartidorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepartidorCountAggregateInputType | true
    _avg?: RepartidorAvgAggregateInputType
    _sum?: RepartidorSumAggregateInputType
    _min?: RepartidorMinAggregateInputType
    _max?: RepartidorMaxAggregateInputType
  }

  export type RepartidorGroupByOutputType = {
    id: number
    nombre: string
    telefono: string
    _count: RepartidorCountAggregateOutputType | null
    _avg: RepartidorAvgAggregateOutputType | null
    _sum: RepartidorSumAggregateOutputType | null
    _min: RepartidorMinAggregateOutputType | null
    _max: RepartidorMaxAggregateOutputType | null
  }

  type GetRepartidorGroupByPayload<T extends RepartidorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepartidorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepartidorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepartidorGroupByOutputType[P]>
            : GetScalarType<T[P], RepartidorGroupByOutputType[P]>
        }
      >
    >


  export type RepartidorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
    envios?: boolean | Repartidor$enviosArgs<ExtArgs>
    enviosDirect?: boolean | Repartidor$enviosDirectArgs<ExtArgs>
    _count?: boolean | RepartidorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repartidor"]>

  export type RepartidorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["repartidor"]>

  export type RepartidorSelectScalar = {
    id?: boolean
    nombre?: boolean
    telefono?: boolean
  }

  export type RepartidorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    envios?: boolean | Repartidor$enviosArgs<ExtArgs>
    enviosDirect?: boolean | Repartidor$enviosDirectArgs<ExtArgs>
    _count?: boolean | RepartidorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepartidorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RepartidorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repartidor"
    objects: {
      envios: Prisma.$RepartidorEnvioPayload<ExtArgs>[]
      enviosDirect: Prisma.$EnvioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      telefono: string
    }, ExtArgs["result"]["repartidor"]>
    composites: {}
  }

  type RepartidorGetPayload<S extends boolean | null | undefined | RepartidorDefaultArgs> = $Result.GetResult<Prisma.$RepartidorPayload, S>

  type RepartidorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RepartidorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RepartidorCountAggregateInputType | true
    }

  export interface RepartidorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repartidor'], meta: { name: 'Repartidor' } }
    /**
     * Find zero or one Repartidor that matches the filter.
     * @param {RepartidorFindUniqueArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepartidorFindUniqueArgs>(args: SelectSubset<T, RepartidorFindUniqueArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Repartidor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RepartidorFindUniqueOrThrowArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepartidorFindUniqueOrThrowArgs>(args: SelectSubset<T, RepartidorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Repartidor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorFindFirstArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepartidorFindFirstArgs>(args?: SelectSubset<T, RepartidorFindFirstArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Repartidor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorFindFirstOrThrowArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepartidorFindFirstOrThrowArgs>(args?: SelectSubset<T, RepartidorFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Repartidors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repartidors
     * const repartidors = await prisma.repartidor.findMany()
     * 
     * // Get first 10 Repartidors
     * const repartidors = await prisma.repartidor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repartidorWithIdOnly = await prisma.repartidor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepartidorFindManyArgs>(args?: SelectSubset<T, RepartidorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Repartidor.
     * @param {RepartidorCreateArgs} args - Arguments to create a Repartidor.
     * @example
     * // Create one Repartidor
     * const Repartidor = await prisma.repartidor.create({
     *   data: {
     *     // ... data to create a Repartidor
     *   }
     * })
     * 
     */
    create<T extends RepartidorCreateArgs>(args: SelectSubset<T, RepartidorCreateArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Repartidors.
     * @param {RepartidorCreateManyArgs} args - Arguments to create many Repartidors.
     * @example
     * // Create many Repartidors
     * const repartidor = await prisma.repartidor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepartidorCreateManyArgs>(args?: SelectSubset<T, RepartidorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repartidors and returns the data saved in the database.
     * @param {RepartidorCreateManyAndReturnArgs} args - Arguments to create many Repartidors.
     * @example
     * // Create many Repartidors
     * const repartidor = await prisma.repartidor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repartidors and only return the `id`
     * const repartidorWithIdOnly = await prisma.repartidor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepartidorCreateManyAndReturnArgs>(args?: SelectSubset<T, RepartidorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Repartidor.
     * @param {RepartidorDeleteArgs} args - Arguments to delete one Repartidor.
     * @example
     * // Delete one Repartidor
     * const Repartidor = await prisma.repartidor.delete({
     *   where: {
     *     // ... filter to delete one Repartidor
     *   }
     * })
     * 
     */
    delete<T extends RepartidorDeleteArgs>(args: SelectSubset<T, RepartidorDeleteArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Repartidor.
     * @param {RepartidorUpdateArgs} args - Arguments to update one Repartidor.
     * @example
     * // Update one Repartidor
     * const repartidor = await prisma.repartidor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepartidorUpdateArgs>(args: SelectSubset<T, RepartidorUpdateArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Repartidors.
     * @param {RepartidorDeleteManyArgs} args - Arguments to filter Repartidors to delete.
     * @example
     * // Delete a few Repartidors
     * const { count } = await prisma.repartidor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepartidorDeleteManyArgs>(args?: SelectSubset<T, RepartidorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repartidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repartidors
     * const repartidor = await prisma.repartidor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepartidorUpdateManyArgs>(args: SelectSubset<T, RepartidorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Repartidor.
     * @param {RepartidorUpsertArgs} args - Arguments to update or create a Repartidor.
     * @example
     * // Update or create a Repartidor
     * const repartidor = await prisma.repartidor.upsert({
     *   create: {
     *     // ... data to create a Repartidor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repartidor we want to update
     *   }
     * })
     */
    upsert<T extends RepartidorUpsertArgs>(args: SelectSubset<T, RepartidorUpsertArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Repartidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorCountArgs} args - Arguments to filter Repartidors to count.
     * @example
     * // Count the number of Repartidors
     * const count = await prisma.repartidor.count({
     *   where: {
     *     // ... the filter for the Repartidors we want to count
     *   }
     * })
    **/
    count<T extends RepartidorCountArgs>(
      args?: Subset<T, RepartidorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepartidorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repartidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepartidorAggregateArgs>(args: Subset<T, RepartidorAggregateArgs>): Prisma.PrismaPromise<GetRepartidorAggregateType<T>>

    /**
     * Group by Repartidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepartidorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepartidorGroupByArgs['orderBy'] }
        : { orderBy?: RepartidorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepartidorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepartidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repartidor model
   */
  readonly fields: RepartidorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repartidor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepartidorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    envios<T extends Repartidor$enviosArgs<ExtArgs> = {}>(args?: Subset<T, Repartidor$enviosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "findMany"> | Null>
    enviosDirect<T extends Repartidor$enviosDirectArgs<ExtArgs> = {}>(args?: Subset<T, Repartidor$enviosDirectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Repartidor model
   */ 
  interface RepartidorFieldRefs {
    readonly id: FieldRef<"Repartidor", 'Int'>
    readonly nombre: FieldRef<"Repartidor", 'String'>
    readonly telefono: FieldRef<"Repartidor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Repartidor findUnique
   */
  export type RepartidorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor findUniqueOrThrow
   */
  export type RepartidorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor findFirst
   */
  export type RepartidorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repartidors.
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repartidors.
     */
    distinct?: RepartidorScalarFieldEnum | RepartidorScalarFieldEnum[]
  }

  /**
   * Repartidor findFirstOrThrow
   */
  export type RepartidorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repartidors.
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repartidors.
     */
    distinct?: RepartidorScalarFieldEnum | RepartidorScalarFieldEnum[]
  }

  /**
   * Repartidor findMany
   */
  export type RepartidorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidors to fetch.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repartidors.
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    distinct?: RepartidorScalarFieldEnum | RepartidorScalarFieldEnum[]
  }

  /**
   * Repartidor create
   */
  export type RepartidorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * The data needed to create a Repartidor.
     */
    data: XOR<RepartidorCreateInput, RepartidorUncheckedCreateInput>
  }

  /**
   * Repartidor createMany
   */
  export type RepartidorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repartidors.
     */
    data: RepartidorCreateManyInput | RepartidorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repartidor createManyAndReturn
   */
  export type RepartidorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Repartidors.
     */
    data: RepartidorCreateManyInput | RepartidorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repartidor update
   */
  export type RepartidorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * The data needed to update a Repartidor.
     */
    data: XOR<RepartidorUpdateInput, RepartidorUncheckedUpdateInput>
    /**
     * Choose, which Repartidor to update.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor updateMany
   */
  export type RepartidorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repartidors.
     */
    data: XOR<RepartidorUpdateManyMutationInput, RepartidorUncheckedUpdateManyInput>
    /**
     * Filter which Repartidors to update
     */
    where?: RepartidorWhereInput
  }

  /**
   * Repartidor upsert
   */
  export type RepartidorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * The filter to search for the Repartidor to update in case it exists.
     */
    where: RepartidorWhereUniqueInput
    /**
     * In case the Repartidor found by the `where` argument doesn't exist, create a new Repartidor with this data.
     */
    create: XOR<RepartidorCreateInput, RepartidorUncheckedCreateInput>
    /**
     * In case the Repartidor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepartidorUpdateInput, RepartidorUncheckedUpdateInput>
  }

  /**
   * Repartidor delete
   */
  export type RepartidorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter which Repartidor to delete.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor deleteMany
   */
  export type RepartidorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repartidors to delete
     */
    where?: RepartidorWhereInput
  }

  /**
   * Repartidor.envios
   */
  export type Repartidor$enviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    where?: RepartidorEnvioWhereInput
    orderBy?: RepartidorEnvioOrderByWithRelationInput | RepartidorEnvioOrderByWithRelationInput[]
    cursor?: RepartidorEnvioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepartidorEnvioScalarFieldEnum | RepartidorEnvioScalarFieldEnum[]
  }

  /**
   * Repartidor.enviosDirect
   */
  export type Repartidor$enviosDirectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    where?: EnvioWhereInput
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    cursor?: EnvioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * Repartidor without action
   */
  export type RepartidorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
  }


  /**
   * Model RepartidorEnvio
   */

  export type AggregateRepartidorEnvio = {
    _count: RepartidorEnvioCountAggregateOutputType | null
    _avg: RepartidorEnvioAvgAggregateOutputType | null
    _sum: RepartidorEnvioSumAggregateOutputType | null
    _min: RepartidorEnvioMinAggregateOutputType | null
    _max: RepartidorEnvioMaxAggregateOutputType | null
  }

  export type RepartidorEnvioAvgAggregateOutputType = {
    repartidorId: number | null
    envioId: number | null
    estado: number | null
  }

  export type RepartidorEnvioSumAggregateOutputType = {
    repartidorId: number | null
    envioId: number | null
    estado: number | null
  }

  export type RepartidorEnvioMinAggregateOutputType = {
    repartidorId: number | null
    envioId: number | null
    estado: number | null
  }

  export type RepartidorEnvioMaxAggregateOutputType = {
    repartidorId: number | null
    envioId: number | null
    estado: number | null
  }

  export type RepartidorEnvioCountAggregateOutputType = {
    repartidorId: number
    envioId: number
    estado: number
    _all: number
  }


  export type RepartidorEnvioAvgAggregateInputType = {
    repartidorId?: true
    envioId?: true
    estado?: true
  }

  export type RepartidorEnvioSumAggregateInputType = {
    repartidorId?: true
    envioId?: true
    estado?: true
  }

  export type RepartidorEnvioMinAggregateInputType = {
    repartidorId?: true
    envioId?: true
    estado?: true
  }

  export type RepartidorEnvioMaxAggregateInputType = {
    repartidorId?: true
    envioId?: true
    estado?: true
  }

  export type RepartidorEnvioCountAggregateInputType = {
    repartidorId?: true
    envioId?: true
    estado?: true
    _all?: true
  }

  export type RepartidorEnvioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepartidorEnvio to aggregate.
     */
    where?: RepartidorEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepartidorEnvios to fetch.
     */
    orderBy?: RepartidorEnvioOrderByWithRelationInput | RepartidorEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepartidorEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepartidorEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepartidorEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepartidorEnvios
    **/
    _count?: true | RepartidorEnvioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepartidorEnvioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepartidorEnvioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepartidorEnvioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepartidorEnvioMaxAggregateInputType
  }

  export type GetRepartidorEnvioAggregateType<T extends RepartidorEnvioAggregateArgs> = {
        [P in keyof T & keyof AggregateRepartidorEnvio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepartidorEnvio[P]>
      : GetScalarType<T[P], AggregateRepartidorEnvio[P]>
  }




  export type RepartidorEnvioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepartidorEnvioWhereInput
    orderBy?: RepartidorEnvioOrderByWithAggregationInput | RepartidorEnvioOrderByWithAggregationInput[]
    by: RepartidorEnvioScalarFieldEnum[] | RepartidorEnvioScalarFieldEnum
    having?: RepartidorEnvioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepartidorEnvioCountAggregateInputType | true
    _avg?: RepartidorEnvioAvgAggregateInputType
    _sum?: RepartidorEnvioSumAggregateInputType
    _min?: RepartidorEnvioMinAggregateInputType
    _max?: RepartidorEnvioMaxAggregateInputType
  }

  export type RepartidorEnvioGroupByOutputType = {
    repartidorId: number
    envioId: number
    estado: number
    _count: RepartidorEnvioCountAggregateOutputType | null
    _avg: RepartidorEnvioAvgAggregateOutputType | null
    _sum: RepartidorEnvioSumAggregateOutputType | null
    _min: RepartidorEnvioMinAggregateOutputType | null
    _max: RepartidorEnvioMaxAggregateOutputType | null
  }

  type GetRepartidorEnvioGroupByPayload<T extends RepartidorEnvioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepartidorEnvioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepartidorEnvioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepartidorEnvioGroupByOutputType[P]>
            : GetScalarType<T[P], RepartidorEnvioGroupByOutputType[P]>
        }
      >
    >


  export type RepartidorEnvioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repartidorId?: boolean
    envioId?: boolean
    estado?: boolean
    repartidor?: boolean | RepartidorDefaultArgs<ExtArgs>
    envio?: boolean | EnvioDefaultArgs<ExtArgs>
    estadoEnvio?: boolean | EstadoEnvioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repartidorEnvio"]>

  export type RepartidorEnvioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    repartidorId?: boolean
    envioId?: boolean
    estado?: boolean
    repartidor?: boolean | RepartidorDefaultArgs<ExtArgs>
    envio?: boolean | EnvioDefaultArgs<ExtArgs>
    estadoEnvio?: boolean | EstadoEnvioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repartidorEnvio"]>

  export type RepartidorEnvioSelectScalar = {
    repartidorId?: boolean
    envioId?: boolean
    estado?: boolean
  }

  export type RepartidorEnvioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repartidor?: boolean | RepartidorDefaultArgs<ExtArgs>
    envio?: boolean | EnvioDefaultArgs<ExtArgs>
    estadoEnvio?: boolean | EstadoEnvioDefaultArgs<ExtArgs>
  }
  export type RepartidorEnvioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repartidor?: boolean | RepartidorDefaultArgs<ExtArgs>
    envio?: boolean | EnvioDefaultArgs<ExtArgs>
    estadoEnvio?: boolean | EstadoEnvioDefaultArgs<ExtArgs>
  }

  export type $RepartidorEnvioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepartidorEnvio"
    objects: {
      repartidor: Prisma.$RepartidorPayload<ExtArgs>
      envio: Prisma.$EnvioPayload<ExtArgs>
      estadoEnvio: Prisma.$EstadoEnvioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      repartidorId: number
      envioId: number
      estado: number
    }, ExtArgs["result"]["repartidorEnvio"]>
    composites: {}
  }

  type RepartidorEnvioGetPayload<S extends boolean | null | undefined | RepartidorEnvioDefaultArgs> = $Result.GetResult<Prisma.$RepartidorEnvioPayload, S>

  type RepartidorEnvioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RepartidorEnvioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RepartidorEnvioCountAggregateInputType | true
    }

  export interface RepartidorEnvioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepartidorEnvio'], meta: { name: 'RepartidorEnvio' } }
    /**
     * Find zero or one RepartidorEnvio that matches the filter.
     * @param {RepartidorEnvioFindUniqueArgs} args - Arguments to find a RepartidorEnvio
     * @example
     * // Get one RepartidorEnvio
     * const repartidorEnvio = await prisma.repartidorEnvio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepartidorEnvioFindUniqueArgs>(args: SelectSubset<T, RepartidorEnvioFindUniqueArgs<ExtArgs>>): Prisma__RepartidorEnvioClient<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RepartidorEnvio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RepartidorEnvioFindUniqueOrThrowArgs} args - Arguments to find a RepartidorEnvio
     * @example
     * // Get one RepartidorEnvio
     * const repartidorEnvio = await prisma.repartidorEnvio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepartidorEnvioFindUniqueOrThrowArgs>(args: SelectSubset<T, RepartidorEnvioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepartidorEnvioClient<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RepartidorEnvio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorEnvioFindFirstArgs} args - Arguments to find a RepartidorEnvio
     * @example
     * // Get one RepartidorEnvio
     * const repartidorEnvio = await prisma.repartidorEnvio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepartidorEnvioFindFirstArgs>(args?: SelectSubset<T, RepartidorEnvioFindFirstArgs<ExtArgs>>): Prisma__RepartidorEnvioClient<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RepartidorEnvio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorEnvioFindFirstOrThrowArgs} args - Arguments to find a RepartidorEnvio
     * @example
     * // Get one RepartidorEnvio
     * const repartidorEnvio = await prisma.repartidorEnvio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepartidorEnvioFindFirstOrThrowArgs>(args?: SelectSubset<T, RepartidorEnvioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepartidorEnvioClient<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RepartidorEnvios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorEnvioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepartidorEnvios
     * const repartidorEnvios = await prisma.repartidorEnvio.findMany()
     * 
     * // Get first 10 RepartidorEnvios
     * const repartidorEnvios = await prisma.repartidorEnvio.findMany({ take: 10 })
     * 
     * // Only select the `repartidorId`
     * const repartidorEnvioWithRepartidorIdOnly = await prisma.repartidorEnvio.findMany({ select: { repartidorId: true } })
     * 
     */
    findMany<T extends RepartidorEnvioFindManyArgs>(args?: SelectSubset<T, RepartidorEnvioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RepartidorEnvio.
     * @param {RepartidorEnvioCreateArgs} args - Arguments to create a RepartidorEnvio.
     * @example
     * // Create one RepartidorEnvio
     * const RepartidorEnvio = await prisma.repartidorEnvio.create({
     *   data: {
     *     // ... data to create a RepartidorEnvio
     *   }
     * })
     * 
     */
    create<T extends RepartidorEnvioCreateArgs>(args: SelectSubset<T, RepartidorEnvioCreateArgs<ExtArgs>>): Prisma__RepartidorEnvioClient<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RepartidorEnvios.
     * @param {RepartidorEnvioCreateManyArgs} args - Arguments to create many RepartidorEnvios.
     * @example
     * // Create many RepartidorEnvios
     * const repartidorEnvio = await prisma.repartidorEnvio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepartidorEnvioCreateManyArgs>(args?: SelectSubset<T, RepartidorEnvioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepartidorEnvios and returns the data saved in the database.
     * @param {RepartidorEnvioCreateManyAndReturnArgs} args - Arguments to create many RepartidorEnvios.
     * @example
     * // Create many RepartidorEnvios
     * const repartidorEnvio = await prisma.repartidorEnvio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepartidorEnvios and only return the `repartidorId`
     * const repartidorEnvioWithRepartidorIdOnly = await prisma.repartidorEnvio.createManyAndReturn({ 
     *   select: { repartidorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepartidorEnvioCreateManyAndReturnArgs>(args?: SelectSubset<T, RepartidorEnvioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RepartidorEnvio.
     * @param {RepartidorEnvioDeleteArgs} args - Arguments to delete one RepartidorEnvio.
     * @example
     * // Delete one RepartidorEnvio
     * const RepartidorEnvio = await prisma.repartidorEnvio.delete({
     *   where: {
     *     // ... filter to delete one RepartidorEnvio
     *   }
     * })
     * 
     */
    delete<T extends RepartidorEnvioDeleteArgs>(args: SelectSubset<T, RepartidorEnvioDeleteArgs<ExtArgs>>): Prisma__RepartidorEnvioClient<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RepartidorEnvio.
     * @param {RepartidorEnvioUpdateArgs} args - Arguments to update one RepartidorEnvio.
     * @example
     * // Update one RepartidorEnvio
     * const repartidorEnvio = await prisma.repartidorEnvio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepartidorEnvioUpdateArgs>(args: SelectSubset<T, RepartidorEnvioUpdateArgs<ExtArgs>>): Prisma__RepartidorEnvioClient<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RepartidorEnvios.
     * @param {RepartidorEnvioDeleteManyArgs} args - Arguments to filter RepartidorEnvios to delete.
     * @example
     * // Delete a few RepartidorEnvios
     * const { count } = await prisma.repartidorEnvio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepartidorEnvioDeleteManyArgs>(args?: SelectSubset<T, RepartidorEnvioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepartidorEnvios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorEnvioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepartidorEnvios
     * const repartidorEnvio = await prisma.repartidorEnvio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepartidorEnvioUpdateManyArgs>(args: SelectSubset<T, RepartidorEnvioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RepartidorEnvio.
     * @param {RepartidorEnvioUpsertArgs} args - Arguments to update or create a RepartidorEnvio.
     * @example
     * // Update or create a RepartidorEnvio
     * const repartidorEnvio = await prisma.repartidorEnvio.upsert({
     *   create: {
     *     // ... data to create a RepartidorEnvio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepartidorEnvio we want to update
     *   }
     * })
     */
    upsert<T extends RepartidorEnvioUpsertArgs>(args: SelectSubset<T, RepartidorEnvioUpsertArgs<ExtArgs>>): Prisma__RepartidorEnvioClient<$Result.GetResult<Prisma.$RepartidorEnvioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RepartidorEnvios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorEnvioCountArgs} args - Arguments to filter RepartidorEnvios to count.
     * @example
     * // Count the number of RepartidorEnvios
     * const count = await prisma.repartidorEnvio.count({
     *   where: {
     *     // ... the filter for the RepartidorEnvios we want to count
     *   }
     * })
    **/
    count<T extends RepartidorEnvioCountArgs>(
      args?: Subset<T, RepartidorEnvioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepartidorEnvioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepartidorEnvio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorEnvioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepartidorEnvioAggregateArgs>(args: Subset<T, RepartidorEnvioAggregateArgs>): Prisma.PrismaPromise<GetRepartidorEnvioAggregateType<T>>

    /**
     * Group by RepartidorEnvio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorEnvioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepartidorEnvioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepartidorEnvioGroupByArgs['orderBy'] }
        : { orderBy?: RepartidorEnvioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepartidorEnvioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepartidorEnvioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepartidorEnvio model
   */
  readonly fields: RepartidorEnvioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepartidorEnvio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepartidorEnvioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repartidor<T extends RepartidorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepartidorDefaultArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    envio<T extends EnvioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnvioDefaultArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    estadoEnvio<T extends EstadoEnvioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoEnvioDefaultArgs<ExtArgs>>): Prisma__EstadoEnvioClient<$Result.GetResult<Prisma.$EstadoEnvioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepartidorEnvio model
   */ 
  interface RepartidorEnvioFieldRefs {
    readonly repartidorId: FieldRef<"RepartidorEnvio", 'Int'>
    readonly envioId: FieldRef<"RepartidorEnvio", 'Int'>
    readonly estado: FieldRef<"RepartidorEnvio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RepartidorEnvio findUnique
   */
  export type RepartidorEnvioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    /**
     * Filter, which RepartidorEnvio to fetch.
     */
    where: RepartidorEnvioWhereUniqueInput
  }

  /**
   * RepartidorEnvio findUniqueOrThrow
   */
  export type RepartidorEnvioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    /**
     * Filter, which RepartidorEnvio to fetch.
     */
    where: RepartidorEnvioWhereUniqueInput
  }

  /**
   * RepartidorEnvio findFirst
   */
  export type RepartidorEnvioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    /**
     * Filter, which RepartidorEnvio to fetch.
     */
    where?: RepartidorEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepartidorEnvios to fetch.
     */
    orderBy?: RepartidorEnvioOrderByWithRelationInput | RepartidorEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepartidorEnvios.
     */
    cursor?: RepartidorEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepartidorEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepartidorEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepartidorEnvios.
     */
    distinct?: RepartidorEnvioScalarFieldEnum | RepartidorEnvioScalarFieldEnum[]
  }

  /**
   * RepartidorEnvio findFirstOrThrow
   */
  export type RepartidorEnvioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    /**
     * Filter, which RepartidorEnvio to fetch.
     */
    where?: RepartidorEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepartidorEnvios to fetch.
     */
    orderBy?: RepartidorEnvioOrderByWithRelationInput | RepartidorEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepartidorEnvios.
     */
    cursor?: RepartidorEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepartidorEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepartidorEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepartidorEnvios.
     */
    distinct?: RepartidorEnvioScalarFieldEnum | RepartidorEnvioScalarFieldEnum[]
  }

  /**
   * RepartidorEnvio findMany
   */
  export type RepartidorEnvioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    /**
     * Filter, which RepartidorEnvios to fetch.
     */
    where?: RepartidorEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepartidorEnvios to fetch.
     */
    orderBy?: RepartidorEnvioOrderByWithRelationInput | RepartidorEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepartidorEnvios.
     */
    cursor?: RepartidorEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepartidorEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepartidorEnvios.
     */
    skip?: number
    distinct?: RepartidorEnvioScalarFieldEnum | RepartidorEnvioScalarFieldEnum[]
  }

  /**
   * RepartidorEnvio create
   */
  export type RepartidorEnvioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    /**
     * The data needed to create a RepartidorEnvio.
     */
    data: XOR<RepartidorEnvioCreateInput, RepartidorEnvioUncheckedCreateInput>
  }

  /**
   * RepartidorEnvio createMany
   */
  export type RepartidorEnvioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepartidorEnvios.
     */
    data: RepartidorEnvioCreateManyInput | RepartidorEnvioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepartidorEnvio createManyAndReturn
   */
  export type RepartidorEnvioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RepartidorEnvios.
     */
    data: RepartidorEnvioCreateManyInput | RepartidorEnvioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepartidorEnvio update
   */
  export type RepartidorEnvioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    /**
     * The data needed to update a RepartidorEnvio.
     */
    data: XOR<RepartidorEnvioUpdateInput, RepartidorEnvioUncheckedUpdateInput>
    /**
     * Choose, which RepartidorEnvio to update.
     */
    where: RepartidorEnvioWhereUniqueInput
  }

  /**
   * RepartidorEnvio updateMany
   */
  export type RepartidorEnvioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepartidorEnvios.
     */
    data: XOR<RepartidorEnvioUpdateManyMutationInput, RepartidorEnvioUncheckedUpdateManyInput>
    /**
     * Filter which RepartidorEnvios to update
     */
    where?: RepartidorEnvioWhereInput
  }

  /**
   * RepartidorEnvio upsert
   */
  export type RepartidorEnvioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    /**
     * The filter to search for the RepartidorEnvio to update in case it exists.
     */
    where: RepartidorEnvioWhereUniqueInput
    /**
     * In case the RepartidorEnvio found by the `where` argument doesn't exist, create a new RepartidorEnvio with this data.
     */
    create: XOR<RepartidorEnvioCreateInput, RepartidorEnvioUncheckedCreateInput>
    /**
     * In case the RepartidorEnvio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepartidorEnvioUpdateInput, RepartidorEnvioUncheckedUpdateInput>
  }

  /**
   * RepartidorEnvio delete
   */
  export type RepartidorEnvioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
    /**
     * Filter which RepartidorEnvio to delete.
     */
    where: RepartidorEnvioWhereUniqueInput
  }

  /**
   * RepartidorEnvio deleteMany
   */
  export type RepartidorEnvioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepartidorEnvios to delete
     */
    where?: RepartidorEnvioWhereInput
  }

  /**
   * RepartidorEnvio without action
   */
  export type RepartidorEnvioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorEnvio
     */
    select?: RepartidorEnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorEnvioInclude<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    estado: number | null
  }

  export type VentaSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    estado: number | null
  }

  export type VentaMinAggregateOutputType = {
    id: number | null
    clienteId: number | null
    estado: number | null
    fechaInicio: Date | null
    fechaUltimaActualizacion: Date | null
  }

  export type VentaMaxAggregateOutputType = {
    id: number | null
    clienteId: number | null
    estado: number | null
    fechaInicio: Date | null
    fechaUltimaActualizacion: Date | null
  }

  export type VentaCountAggregateOutputType = {
    id: number
    clienteId: number
    estado: number
    fechaInicio: number
    fechaUltimaActualizacion: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    id?: true
    clienteId?: true
    estado?: true
  }

  export type VentaSumAggregateInputType = {
    id?: true
    clienteId?: true
    estado?: true
  }

  export type VentaMinAggregateInputType = {
    id?: true
    clienteId?: true
    estado?: true
    fechaInicio?: true
    fechaUltimaActualizacion?: true
  }

  export type VentaMaxAggregateInputType = {
    id?: true
    clienteId?: true
    estado?: true
    fechaInicio?: true
    fechaUltimaActualizacion?: true
  }

  export type VentaCountAggregateInputType = {
    id?: true
    clienteId?: true
    estado?: true
    fechaInicio?: true
    fechaUltimaActualizacion?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id: number
    clienteId: number
    estado: number
    fechaInicio: Date
    fechaUltimaActualizacion: Date
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaUltimaActualizacion?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    estadoVenta?: boolean | EstadoVentaDefaultArgs<ExtArgs>
    productos?: boolean | Venta$productosArgs<ExtArgs>
    envios?: boolean | Venta$enviosArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaUltimaActualizacion?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    estadoVenta?: boolean | EstadoVentaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectScalar = {
    id?: boolean
    clienteId?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaUltimaActualizacion?: boolean
  }

  export type VentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    estadoVenta?: boolean | EstadoVentaDefaultArgs<ExtArgs>
    productos?: boolean | Venta$productosArgs<ExtArgs>
    envios?: boolean | Venta$enviosArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    estadoVenta?: boolean | EstadoVentaDefaultArgs<ExtArgs>
  }

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      estadoVenta: Prisma.$EstadoVentaPayload<ExtArgs>
      productos: Prisma.$ProductoVentaPayload<ExtArgs>[]
      envios: Prisma.$EnvioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clienteId: number
      estado: number
      fechaInicio: Date
      fechaUltimaActualizacion: Date
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaWithIdOnly = await prisma.venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {VentaCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VentaCreateManyAndReturnArgs>(args?: SelectSubset<T, VentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    estadoVenta<T extends EstadoVentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoVentaDefaultArgs<ExtArgs>>): Prisma__EstadoVentaClient<$Result.GetResult<Prisma.$EstadoVentaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    productos<T extends Venta$productosArgs<ExtArgs> = {}>(args?: Subset<T, Venta$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoVentaPayload<ExtArgs>, T, "findMany"> | Null>
    envios<T extends Venta$enviosArgs<ExtArgs> = {}>(args?: Subset<T, Venta$enviosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venta model
   */ 
  interface VentaFieldRefs {
    readonly id: FieldRef<"Venta", 'Int'>
    readonly clienteId: FieldRef<"Venta", 'Int'>
    readonly estado: FieldRef<"Venta", 'Int'>
    readonly fechaInicio: FieldRef<"Venta", 'DateTime'>
    readonly fechaUltimaActualizacion: FieldRef<"Venta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta createManyAndReturn
   */
  export type VentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
  }

  /**
   * Venta.productos
   */
  export type Venta$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoVenta
     */
    select?: ProductoVentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoVentaInclude<ExtArgs> | null
    where?: ProductoVentaWhereInput
    orderBy?: ProductoVentaOrderByWithRelationInput | ProductoVentaOrderByWithRelationInput[]
    cursor?: ProductoVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoVentaScalarFieldEnum | ProductoVentaScalarFieldEnum[]
  }

  /**
   * Venta.envios
   */
  export type Venta$enviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    where?: EnvioWhereInput
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    cursor?: EnvioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
  }


  /**
   * Model Entidad
   */

  export type AggregateEntidad = {
    _count: EntidadCountAggregateOutputType | null
    _avg: EntidadAvgAggregateOutputType | null
    _sum: EntidadSumAggregateOutputType | null
    _min: EntidadMinAggregateOutputType | null
    _max: EntidadMaxAggregateOutputType | null
  }

  export type EntidadAvgAggregateOutputType = {
    id: number | null
  }

  export type EntidadSumAggregateOutputType = {
    id: number | null
  }

  export type EntidadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: $Enums.TipoEntidad | null
  }

  export type EntidadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: $Enums.TipoEntidad | null
  }

  export type EntidadCountAggregateOutputType = {
    id: number
    nombre: number
    tipo: number
    _all: number
  }


  export type EntidadAvgAggregateInputType = {
    id?: true
  }

  export type EntidadSumAggregateInputType = {
    id?: true
  }

  export type EntidadMinAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
  }

  export type EntidadMaxAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
  }

  export type EntidadCountAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    _all?: true
  }

  export type EntidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entidad to aggregate.
     */
    where?: EntidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidads to fetch.
     */
    orderBy?: EntidadOrderByWithRelationInput | EntidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entidads
    **/
    _count?: true | EntidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntidadMaxAggregateInputType
  }

  export type GetEntidadAggregateType<T extends EntidadAggregateArgs> = {
        [P in keyof T & keyof AggregateEntidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntidad[P]>
      : GetScalarType<T[P], AggregateEntidad[P]>
  }




  export type EntidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntidadWhereInput
    orderBy?: EntidadOrderByWithAggregationInput | EntidadOrderByWithAggregationInput[]
    by: EntidadScalarFieldEnum[] | EntidadScalarFieldEnum
    having?: EntidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntidadCountAggregateInputType | true
    _avg?: EntidadAvgAggregateInputType
    _sum?: EntidadSumAggregateInputType
    _min?: EntidadMinAggregateInputType
    _max?: EntidadMaxAggregateInputType
  }

  export type EntidadGroupByOutputType = {
    id: number
    nombre: string
    tipo: $Enums.TipoEntidad
    _count: EntidadCountAggregateOutputType | null
    _avg: EntidadAvgAggregateOutputType | null
    _sum: EntidadSumAggregateOutputType | null
    _min: EntidadMinAggregateOutputType | null
    _max: EntidadMaxAggregateOutputType | null
  }

  type GetEntidadGroupByPayload<T extends EntidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntidadGroupByOutputType[P]>
            : GetScalarType<T[P], EntidadGroupByOutputType[P]>
        }
      >
    >


  export type EntidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    entidadUsuario?: boolean | Entidad$entidadUsuarioArgs<ExtArgs>
    permisos?: boolean | Entidad$permisosArgs<ExtArgs>
    roles?: boolean | Entidad$rolesArgs<ExtArgs>
    _count?: boolean | EntidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entidad"]>

  export type EntidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["entidad"]>

  export type EntidadSelectScalar = {
    id?: boolean
    nombre?: boolean
    tipo?: boolean
  }

  export type EntidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entidadUsuario?: boolean | Entidad$entidadUsuarioArgs<ExtArgs>
    permisos?: boolean | Entidad$permisosArgs<ExtArgs>
    roles?: boolean | Entidad$rolesArgs<ExtArgs>
    _count?: boolean | EntidadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entidad"
    objects: {
      entidadUsuario: Prisma.$EntidadUsuarioPayload<ExtArgs>[]
      permisos: Prisma.$EntidadPayload<ExtArgs>[]
      roles: Prisma.$EntidadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      tipo: $Enums.TipoEntidad
    }, ExtArgs["result"]["entidad"]>
    composites: {}
  }

  type EntidadGetPayload<S extends boolean | null | undefined | EntidadDefaultArgs> = $Result.GetResult<Prisma.$EntidadPayload, S>

  type EntidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntidadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntidadCountAggregateInputType | true
    }

  export interface EntidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entidad'], meta: { name: 'Entidad' } }
    /**
     * Find zero or one Entidad that matches the filter.
     * @param {EntidadFindUniqueArgs} args - Arguments to find a Entidad
     * @example
     * // Get one Entidad
     * const entidad = await prisma.entidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntidadFindUniqueArgs>(args: SelectSubset<T, EntidadFindUniqueArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Entidad that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EntidadFindUniqueOrThrowArgs} args - Arguments to find a Entidad
     * @example
     * // Get one Entidad
     * const entidad = await prisma.entidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntidadFindUniqueOrThrowArgs>(args: SelectSubset<T, EntidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Entidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadFindFirstArgs} args - Arguments to find a Entidad
     * @example
     * // Get one Entidad
     * const entidad = await prisma.entidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntidadFindFirstArgs>(args?: SelectSubset<T, EntidadFindFirstArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Entidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadFindFirstOrThrowArgs} args - Arguments to find a Entidad
     * @example
     * // Get one Entidad
     * const entidad = await prisma.entidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntidadFindFirstOrThrowArgs>(args?: SelectSubset<T, EntidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Entidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entidads
     * const entidads = await prisma.entidad.findMany()
     * 
     * // Get first 10 Entidads
     * const entidads = await prisma.entidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entidadWithIdOnly = await prisma.entidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntidadFindManyArgs>(args?: SelectSubset<T, EntidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Entidad.
     * @param {EntidadCreateArgs} args - Arguments to create a Entidad.
     * @example
     * // Create one Entidad
     * const Entidad = await prisma.entidad.create({
     *   data: {
     *     // ... data to create a Entidad
     *   }
     * })
     * 
     */
    create<T extends EntidadCreateArgs>(args: SelectSubset<T, EntidadCreateArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Entidads.
     * @param {EntidadCreateManyArgs} args - Arguments to create many Entidads.
     * @example
     * // Create many Entidads
     * const entidad = await prisma.entidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntidadCreateManyArgs>(args?: SelectSubset<T, EntidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entidads and returns the data saved in the database.
     * @param {EntidadCreateManyAndReturnArgs} args - Arguments to create many Entidads.
     * @example
     * // Create many Entidads
     * const entidad = await prisma.entidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entidads and only return the `id`
     * const entidadWithIdOnly = await prisma.entidad.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntidadCreateManyAndReturnArgs>(args?: SelectSubset<T, EntidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Entidad.
     * @param {EntidadDeleteArgs} args - Arguments to delete one Entidad.
     * @example
     * // Delete one Entidad
     * const Entidad = await prisma.entidad.delete({
     *   where: {
     *     // ... filter to delete one Entidad
     *   }
     * })
     * 
     */
    delete<T extends EntidadDeleteArgs>(args: SelectSubset<T, EntidadDeleteArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Entidad.
     * @param {EntidadUpdateArgs} args - Arguments to update one Entidad.
     * @example
     * // Update one Entidad
     * const entidad = await prisma.entidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntidadUpdateArgs>(args: SelectSubset<T, EntidadUpdateArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Entidads.
     * @param {EntidadDeleteManyArgs} args - Arguments to filter Entidads to delete.
     * @example
     * // Delete a few Entidads
     * const { count } = await prisma.entidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntidadDeleteManyArgs>(args?: SelectSubset<T, EntidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entidads
     * const entidad = await prisma.entidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntidadUpdateManyArgs>(args: SelectSubset<T, EntidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entidad.
     * @param {EntidadUpsertArgs} args - Arguments to update or create a Entidad.
     * @example
     * // Update or create a Entidad
     * const entidad = await prisma.entidad.upsert({
     *   create: {
     *     // ... data to create a Entidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entidad we want to update
     *   }
     * })
     */
    upsert<T extends EntidadUpsertArgs>(args: SelectSubset<T, EntidadUpsertArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Entidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadCountArgs} args - Arguments to filter Entidads to count.
     * @example
     * // Count the number of Entidads
     * const count = await prisma.entidad.count({
     *   where: {
     *     // ... the filter for the Entidads we want to count
     *   }
     * })
    **/
    count<T extends EntidadCountArgs>(
      args?: Subset<T, EntidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntidadAggregateArgs>(args: Subset<T, EntidadAggregateArgs>): Prisma.PrismaPromise<GetEntidadAggregateType<T>>

    /**
     * Group by Entidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntidadGroupByArgs['orderBy'] }
        : { orderBy?: EntidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entidad model
   */
  readonly fields: EntidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entidadUsuario<T extends Entidad$entidadUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Entidad$entidadUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "findMany"> | Null>
    permisos<T extends Entidad$permisosArgs<ExtArgs> = {}>(args?: Subset<T, Entidad$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findMany"> | Null>
    roles<T extends Entidad$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Entidad$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entidad model
   */ 
  interface EntidadFieldRefs {
    readonly id: FieldRef<"Entidad", 'Int'>
    readonly nombre: FieldRef<"Entidad", 'String'>
    readonly tipo: FieldRef<"Entidad", 'TipoEntidad'>
  }
    

  // Custom InputTypes
  /**
   * Entidad findUnique
   */
  export type EntidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter, which Entidad to fetch.
     */
    where: EntidadWhereUniqueInput
  }

  /**
   * Entidad findUniqueOrThrow
   */
  export type EntidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter, which Entidad to fetch.
     */
    where: EntidadWhereUniqueInput
  }

  /**
   * Entidad findFirst
   */
  export type EntidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter, which Entidad to fetch.
     */
    where?: EntidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidads to fetch.
     */
    orderBy?: EntidadOrderByWithRelationInput | EntidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entidads.
     */
    cursor?: EntidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entidads.
     */
    distinct?: EntidadScalarFieldEnum | EntidadScalarFieldEnum[]
  }

  /**
   * Entidad findFirstOrThrow
   */
  export type EntidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter, which Entidad to fetch.
     */
    where?: EntidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidads to fetch.
     */
    orderBy?: EntidadOrderByWithRelationInput | EntidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entidads.
     */
    cursor?: EntidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entidads.
     */
    distinct?: EntidadScalarFieldEnum | EntidadScalarFieldEnum[]
  }

  /**
   * Entidad findMany
   */
  export type EntidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter, which Entidads to fetch.
     */
    where?: EntidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entidads to fetch.
     */
    orderBy?: EntidadOrderByWithRelationInput | EntidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entidads.
     */
    cursor?: EntidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entidads.
     */
    skip?: number
    distinct?: EntidadScalarFieldEnum | EntidadScalarFieldEnum[]
  }

  /**
   * Entidad create
   */
  export type EntidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Entidad.
     */
    data: XOR<EntidadCreateInput, EntidadUncheckedCreateInput>
  }

  /**
   * Entidad createMany
   */
  export type EntidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entidads.
     */
    data: EntidadCreateManyInput | EntidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entidad createManyAndReturn
   */
  export type EntidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Entidads.
     */
    data: EntidadCreateManyInput | EntidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entidad update
   */
  export type EntidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Entidad.
     */
    data: XOR<EntidadUpdateInput, EntidadUncheckedUpdateInput>
    /**
     * Choose, which Entidad to update.
     */
    where: EntidadWhereUniqueInput
  }

  /**
   * Entidad updateMany
   */
  export type EntidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entidads.
     */
    data: XOR<EntidadUpdateManyMutationInput, EntidadUncheckedUpdateManyInput>
    /**
     * Filter which Entidads to update
     */
    where?: EntidadWhereInput
  }

  /**
   * Entidad upsert
   */
  export type EntidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Entidad to update in case it exists.
     */
    where: EntidadWhereUniqueInput
    /**
     * In case the Entidad found by the `where` argument doesn't exist, create a new Entidad with this data.
     */
    create: XOR<EntidadCreateInput, EntidadUncheckedCreateInput>
    /**
     * In case the Entidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntidadUpdateInput, EntidadUncheckedUpdateInput>
  }

  /**
   * Entidad delete
   */
  export type EntidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    /**
     * Filter which Entidad to delete.
     */
    where: EntidadWhereUniqueInput
  }

  /**
   * Entidad deleteMany
   */
  export type EntidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entidads to delete
     */
    where?: EntidadWhereInput
  }

  /**
   * Entidad.entidadUsuario
   */
  export type Entidad$entidadUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    where?: EntidadUsuarioWhereInput
    orderBy?: EntidadUsuarioOrderByWithRelationInput | EntidadUsuarioOrderByWithRelationInput[]
    cursor?: EntidadUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntidadUsuarioScalarFieldEnum | EntidadUsuarioScalarFieldEnum[]
  }

  /**
   * Entidad.permisos
   */
  export type Entidad$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    where?: EntidadWhereInput
    orderBy?: EntidadOrderByWithRelationInput | EntidadOrderByWithRelationInput[]
    cursor?: EntidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntidadScalarFieldEnum | EntidadScalarFieldEnum[]
  }

  /**
   * Entidad.roles
   */
  export type Entidad$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
    where?: EntidadWhereInput
    orderBy?: EntidadOrderByWithRelationInput | EntidadOrderByWithRelationInput[]
    cursor?: EntidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntidadScalarFieldEnum | EntidadScalarFieldEnum[]
  }

  /**
   * Entidad without action
   */
  export type EntidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entidad
     */
    select?: EntidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadInclude<ExtArgs> | null
  }


  /**
   * Model EntidadUsuario
   */

  export type AggregateEntidadUsuario = {
    _count: EntidadUsuarioCountAggregateOutputType | null
    _avg: EntidadUsuarioAvgAggregateOutputType | null
    _sum: EntidadUsuarioSumAggregateOutputType | null
    _min: EntidadUsuarioMinAggregateOutputType | null
    _max: EntidadUsuarioMaxAggregateOutputType | null
  }

  export type EntidadUsuarioAvgAggregateOutputType = {
    usuarioId: number | null
    entidadId: number | null
  }

  export type EntidadUsuarioSumAggregateOutputType = {
    usuarioId: number | null
    entidadId: number | null
  }

  export type EntidadUsuarioMinAggregateOutputType = {
    usuarioId: number | null
    entidadId: number | null
  }

  export type EntidadUsuarioMaxAggregateOutputType = {
    usuarioId: number | null
    entidadId: number | null
  }

  export type EntidadUsuarioCountAggregateOutputType = {
    usuarioId: number
    entidadId: number
    _all: number
  }


  export type EntidadUsuarioAvgAggregateInputType = {
    usuarioId?: true
    entidadId?: true
  }

  export type EntidadUsuarioSumAggregateInputType = {
    usuarioId?: true
    entidadId?: true
  }

  export type EntidadUsuarioMinAggregateInputType = {
    usuarioId?: true
    entidadId?: true
  }

  export type EntidadUsuarioMaxAggregateInputType = {
    usuarioId?: true
    entidadId?: true
  }

  export type EntidadUsuarioCountAggregateInputType = {
    usuarioId?: true
    entidadId?: true
    _all?: true
  }

  export type EntidadUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntidadUsuario to aggregate.
     */
    where?: EntidadUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntidadUsuarios to fetch.
     */
    orderBy?: EntidadUsuarioOrderByWithRelationInput | EntidadUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntidadUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntidadUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntidadUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EntidadUsuarios
    **/
    _count?: true | EntidadUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntidadUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntidadUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntidadUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntidadUsuarioMaxAggregateInputType
  }

  export type GetEntidadUsuarioAggregateType<T extends EntidadUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateEntidadUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntidadUsuario[P]>
      : GetScalarType<T[P], AggregateEntidadUsuario[P]>
  }




  export type EntidadUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntidadUsuarioWhereInput
    orderBy?: EntidadUsuarioOrderByWithAggregationInput | EntidadUsuarioOrderByWithAggregationInput[]
    by: EntidadUsuarioScalarFieldEnum[] | EntidadUsuarioScalarFieldEnum
    having?: EntidadUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntidadUsuarioCountAggregateInputType | true
    _avg?: EntidadUsuarioAvgAggregateInputType
    _sum?: EntidadUsuarioSumAggregateInputType
    _min?: EntidadUsuarioMinAggregateInputType
    _max?: EntidadUsuarioMaxAggregateInputType
  }

  export type EntidadUsuarioGroupByOutputType = {
    usuarioId: number
    entidadId: number
    _count: EntidadUsuarioCountAggregateOutputType | null
    _avg: EntidadUsuarioAvgAggregateOutputType | null
    _sum: EntidadUsuarioSumAggregateOutputType | null
    _min: EntidadUsuarioMinAggregateOutputType | null
    _max: EntidadUsuarioMaxAggregateOutputType | null
  }

  type GetEntidadUsuarioGroupByPayload<T extends EntidadUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntidadUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntidadUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntidadUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], EntidadUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type EntidadUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    entidadId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entidadUsuario"]>

  export type EntidadUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    entidadId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entidadUsuario"]>

  export type EntidadUsuarioSelectScalar = {
    usuarioId?: boolean
    entidadId?: boolean
  }

  export type EntidadUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }
  export type EntidadUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    entidad?: boolean | EntidadDefaultArgs<ExtArgs>
  }

  export type $EntidadUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EntidadUsuario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      entidad: Prisma.$EntidadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuarioId: number
      entidadId: number
    }, ExtArgs["result"]["entidadUsuario"]>
    composites: {}
  }

  type EntidadUsuarioGetPayload<S extends boolean | null | undefined | EntidadUsuarioDefaultArgs> = $Result.GetResult<Prisma.$EntidadUsuarioPayload, S>

  type EntidadUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntidadUsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntidadUsuarioCountAggregateInputType | true
    }

  export interface EntidadUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EntidadUsuario'], meta: { name: 'EntidadUsuario' } }
    /**
     * Find zero or one EntidadUsuario that matches the filter.
     * @param {EntidadUsuarioFindUniqueArgs} args - Arguments to find a EntidadUsuario
     * @example
     * // Get one EntidadUsuario
     * const entidadUsuario = await prisma.entidadUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntidadUsuarioFindUniqueArgs>(args: SelectSubset<T, EntidadUsuarioFindUniqueArgs<ExtArgs>>): Prisma__EntidadUsuarioClient<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EntidadUsuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EntidadUsuarioFindUniqueOrThrowArgs} args - Arguments to find a EntidadUsuario
     * @example
     * // Get one EntidadUsuario
     * const entidadUsuario = await prisma.entidadUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntidadUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, EntidadUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntidadUsuarioClient<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EntidadUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadUsuarioFindFirstArgs} args - Arguments to find a EntidadUsuario
     * @example
     * // Get one EntidadUsuario
     * const entidadUsuario = await prisma.entidadUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntidadUsuarioFindFirstArgs>(args?: SelectSubset<T, EntidadUsuarioFindFirstArgs<ExtArgs>>): Prisma__EntidadUsuarioClient<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EntidadUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadUsuarioFindFirstOrThrowArgs} args - Arguments to find a EntidadUsuario
     * @example
     * // Get one EntidadUsuario
     * const entidadUsuario = await prisma.entidadUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntidadUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, EntidadUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntidadUsuarioClient<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EntidadUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntidadUsuarios
     * const entidadUsuarios = await prisma.entidadUsuario.findMany()
     * 
     * // Get first 10 EntidadUsuarios
     * const entidadUsuarios = await prisma.entidadUsuario.findMany({ take: 10 })
     * 
     * // Only select the `usuarioId`
     * const entidadUsuarioWithUsuarioIdOnly = await prisma.entidadUsuario.findMany({ select: { usuarioId: true } })
     * 
     */
    findMany<T extends EntidadUsuarioFindManyArgs>(args?: SelectSubset<T, EntidadUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EntidadUsuario.
     * @param {EntidadUsuarioCreateArgs} args - Arguments to create a EntidadUsuario.
     * @example
     * // Create one EntidadUsuario
     * const EntidadUsuario = await prisma.entidadUsuario.create({
     *   data: {
     *     // ... data to create a EntidadUsuario
     *   }
     * })
     * 
     */
    create<T extends EntidadUsuarioCreateArgs>(args: SelectSubset<T, EntidadUsuarioCreateArgs<ExtArgs>>): Prisma__EntidadUsuarioClient<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EntidadUsuarios.
     * @param {EntidadUsuarioCreateManyArgs} args - Arguments to create many EntidadUsuarios.
     * @example
     * // Create many EntidadUsuarios
     * const entidadUsuario = await prisma.entidadUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntidadUsuarioCreateManyArgs>(args?: SelectSubset<T, EntidadUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EntidadUsuarios and returns the data saved in the database.
     * @param {EntidadUsuarioCreateManyAndReturnArgs} args - Arguments to create many EntidadUsuarios.
     * @example
     * // Create many EntidadUsuarios
     * const entidadUsuario = await prisma.entidadUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EntidadUsuarios and only return the `usuarioId`
     * const entidadUsuarioWithUsuarioIdOnly = await prisma.entidadUsuario.createManyAndReturn({ 
     *   select: { usuarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntidadUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, EntidadUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EntidadUsuario.
     * @param {EntidadUsuarioDeleteArgs} args - Arguments to delete one EntidadUsuario.
     * @example
     * // Delete one EntidadUsuario
     * const EntidadUsuario = await prisma.entidadUsuario.delete({
     *   where: {
     *     // ... filter to delete one EntidadUsuario
     *   }
     * })
     * 
     */
    delete<T extends EntidadUsuarioDeleteArgs>(args: SelectSubset<T, EntidadUsuarioDeleteArgs<ExtArgs>>): Prisma__EntidadUsuarioClient<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EntidadUsuario.
     * @param {EntidadUsuarioUpdateArgs} args - Arguments to update one EntidadUsuario.
     * @example
     * // Update one EntidadUsuario
     * const entidadUsuario = await prisma.entidadUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntidadUsuarioUpdateArgs>(args: SelectSubset<T, EntidadUsuarioUpdateArgs<ExtArgs>>): Prisma__EntidadUsuarioClient<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EntidadUsuarios.
     * @param {EntidadUsuarioDeleteManyArgs} args - Arguments to filter EntidadUsuarios to delete.
     * @example
     * // Delete a few EntidadUsuarios
     * const { count } = await prisma.entidadUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntidadUsuarioDeleteManyArgs>(args?: SelectSubset<T, EntidadUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntidadUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntidadUsuarios
     * const entidadUsuario = await prisma.entidadUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntidadUsuarioUpdateManyArgs>(args: SelectSubset<T, EntidadUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EntidadUsuario.
     * @param {EntidadUsuarioUpsertArgs} args - Arguments to update or create a EntidadUsuario.
     * @example
     * // Update or create a EntidadUsuario
     * const entidadUsuario = await prisma.entidadUsuario.upsert({
     *   create: {
     *     // ... data to create a EntidadUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntidadUsuario we want to update
     *   }
     * })
     */
    upsert<T extends EntidadUsuarioUpsertArgs>(args: SelectSubset<T, EntidadUsuarioUpsertArgs<ExtArgs>>): Prisma__EntidadUsuarioClient<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EntidadUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadUsuarioCountArgs} args - Arguments to filter EntidadUsuarios to count.
     * @example
     * // Count the number of EntidadUsuarios
     * const count = await prisma.entidadUsuario.count({
     *   where: {
     *     // ... the filter for the EntidadUsuarios we want to count
     *   }
     * })
    **/
    count<T extends EntidadUsuarioCountArgs>(
      args?: Subset<T, EntidadUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntidadUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EntidadUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntidadUsuarioAggregateArgs>(args: Subset<T, EntidadUsuarioAggregateArgs>): Prisma.PrismaPromise<GetEntidadUsuarioAggregateType<T>>

    /**
     * Group by EntidadUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntidadUsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntidadUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntidadUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: EntidadUsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntidadUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntidadUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EntidadUsuario model
   */
  readonly fields: EntidadUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EntidadUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntidadUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    entidad<T extends EntidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntidadDefaultArgs<ExtArgs>>): Prisma__EntidadClient<$Result.GetResult<Prisma.$EntidadPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EntidadUsuario model
   */ 
  interface EntidadUsuarioFieldRefs {
    readonly usuarioId: FieldRef<"EntidadUsuario", 'Int'>
    readonly entidadId: FieldRef<"EntidadUsuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EntidadUsuario findUnique
   */
  export type EntidadUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EntidadUsuario to fetch.
     */
    where: EntidadUsuarioWhereUniqueInput
  }

  /**
   * EntidadUsuario findUniqueOrThrow
   */
  export type EntidadUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EntidadUsuario to fetch.
     */
    where: EntidadUsuarioWhereUniqueInput
  }

  /**
   * EntidadUsuario findFirst
   */
  export type EntidadUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EntidadUsuario to fetch.
     */
    where?: EntidadUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntidadUsuarios to fetch.
     */
    orderBy?: EntidadUsuarioOrderByWithRelationInput | EntidadUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntidadUsuarios.
     */
    cursor?: EntidadUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntidadUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntidadUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntidadUsuarios.
     */
    distinct?: EntidadUsuarioScalarFieldEnum | EntidadUsuarioScalarFieldEnum[]
  }

  /**
   * EntidadUsuario findFirstOrThrow
   */
  export type EntidadUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EntidadUsuario to fetch.
     */
    where?: EntidadUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntidadUsuarios to fetch.
     */
    orderBy?: EntidadUsuarioOrderByWithRelationInput | EntidadUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntidadUsuarios.
     */
    cursor?: EntidadUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntidadUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntidadUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntidadUsuarios.
     */
    distinct?: EntidadUsuarioScalarFieldEnum | EntidadUsuarioScalarFieldEnum[]
  }

  /**
   * EntidadUsuario findMany
   */
  export type EntidadUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EntidadUsuarios to fetch.
     */
    where?: EntidadUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntidadUsuarios to fetch.
     */
    orderBy?: EntidadUsuarioOrderByWithRelationInput | EntidadUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EntidadUsuarios.
     */
    cursor?: EntidadUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntidadUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntidadUsuarios.
     */
    skip?: number
    distinct?: EntidadUsuarioScalarFieldEnum | EntidadUsuarioScalarFieldEnum[]
  }

  /**
   * EntidadUsuario create
   */
  export type EntidadUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a EntidadUsuario.
     */
    data: XOR<EntidadUsuarioCreateInput, EntidadUsuarioUncheckedCreateInput>
  }

  /**
   * EntidadUsuario createMany
   */
  export type EntidadUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntidadUsuarios.
     */
    data: EntidadUsuarioCreateManyInput | EntidadUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EntidadUsuario createManyAndReturn
   */
  export type EntidadUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EntidadUsuarios.
     */
    data: EntidadUsuarioCreateManyInput | EntidadUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EntidadUsuario update
   */
  export type EntidadUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a EntidadUsuario.
     */
    data: XOR<EntidadUsuarioUpdateInput, EntidadUsuarioUncheckedUpdateInput>
    /**
     * Choose, which EntidadUsuario to update.
     */
    where: EntidadUsuarioWhereUniqueInput
  }

  /**
   * EntidadUsuario updateMany
   */
  export type EntidadUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EntidadUsuarios.
     */
    data: XOR<EntidadUsuarioUpdateManyMutationInput, EntidadUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which EntidadUsuarios to update
     */
    where?: EntidadUsuarioWhereInput
  }

  /**
   * EntidadUsuario upsert
   */
  export type EntidadUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the EntidadUsuario to update in case it exists.
     */
    where: EntidadUsuarioWhereUniqueInput
    /**
     * In case the EntidadUsuario found by the `where` argument doesn't exist, create a new EntidadUsuario with this data.
     */
    create: XOR<EntidadUsuarioCreateInput, EntidadUsuarioUncheckedCreateInput>
    /**
     * In case the EntidadUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntidadUsuarioUpdateInput, EntidadUsuarioUncheckedUpdateInput>
  }

  /**
   * EntidadUsuario delete
   */
  export type EntidadUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    /**
     * Filter which EntidadUsuario to delete.
     */
    where: EntidadUsuarioWhereUniqueInput
  }

  /**
   * EntidadUsuario deleteMany
   */
  export type EntidadUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntidadUsuarios to delete
     */
    where?: EntidadUsuarioWhereInput
  }

  /**
   * EntidadUsuario without action
   */
  export type EntidadUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    clave: string | null
    habilitado: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    clave: string | null
    habilitado: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    clave: number
    habilitado: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    clave?: true
    habilitado?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    clave?: true
    habilitado?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    clave?: true
    habilitado?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    clave: string
    habilitado: boolean
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    clave?: boolean
    habilitado?: boolean
    permisos?: boolean | Usuario$permisosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    clave?: boolean
    habilitado?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    clave?: boolean
    habilitado?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permisos?: boolean | Usuario$permisosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      permisos: Prisma.$EntidadUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      clave: string
      habilitado: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permisos<T extends Usuario$permisosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntidadUsuarioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly clave: FieldRef<"Usuario", 'String'>
    readonly habilitado: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.permisos
   */
  export type Usuario$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntidadUsuario
     */
    select?: EntidadUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntidadUsuarioInclude<ExtArgs> | null
    where?: EntidadUsuarioWhereInput
    orderBy?: EntidadUsuarioOrderByWithRelationInput | EntidadUsuarioOrderByWithRelationInput[]
    cursor?: EntidadUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntidadUsuarioScalarFieldEnum | EntidadUsuarioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    telefono: 'telefono',
    fechaRegistro: 'fechaRegistro'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const CompraScalarFieldEnum: {
    id: 'id',
    empleadoId: 'empleadoId',
    distribuidorId: 'distribuidorId',
    fecha: 'fecha',
    monto: 'monto',
    descripcion: 'descripcion'
  };

  export type CompraScalarFieldEnum = (typeof CompraScalarFieldEnum)[keyof typeof CompraScalarFieldEnum]


  export const CompraProductoScalarFieldEnum: {
    compraId: 'compraId',
    productoId: 'productoId',
    cantidad: 'cantidad'
  };

  export type CompraProductoScalarFieldEnum = (typeof CompraProductoScalarFieldEnum)[keyof typeof CompraProductoScalarFieldEnum]


  export const DireccionScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    calle1: 'calle1',
    calle2: 'calle2',
    codigoPostal: 'codigoPostal',
    provincia: 'provincia',
    localidad: 'localidad',
    detalle: 'detalle'
  };

  export type DireccionScalarFieldEnum = (typeof DireccionScalarFieldEnum)[keyof typeof DireccionScalarFieldEnum]


  export const DistribuidorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type DistribuidorScalarFieldEnum = (typeof DistribuidorScalarFieldEnum)[keyof typeof DistribuidorScalarFieldEnum]


  export const EmpleadoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    cargo: 'cargo'
  };

  export type EmpleadoScalarFieldEnum = (typeof EmpleadoScalarFieldEnum)[keyof typeof EmpleadoScalarFieldEnum]


  export const EnvioScalarFieldEnum: {
    id: 'id',
    ventaId: 'ventaId',
    repartidorId: 'repartidorId',
    direccionId: 'direccionId',
    estado: 'estado',
    fechaInicio: 'fechaInicio',
    fechaUltimaActualizacion: 'fechaUltimaActualizacion'
  };

  export type EnvioScalarFieldEnum = (typeof EnvioScalarFieldEnum)[keyof typeof EnvioScalarFieldEnum]


  export const EstadoEnvioScalarFieldEnum: {
    id: 'id',
    descEstado: 'descEstado'
  };

  export type EstadoEnvioScalarFieldEnum = (typeof EstadoEnvioScalarFieldEnum)[keyof typeof EstadoEnvioScalarFieldEnum]


  export const EstadoVentaScalarFieldEnum: {
    id: 'id',
    descEstado: 'descEstado'
  };

  export type EstadoVentaScalarFieldEnum = (typeof EstadoVentaScalarFieldEnum)[keyof typeof EstadoVentaScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    cantidad: 'cantidad',
    medida: 'medida',
    marca: 'marca',
    precio: 'precio'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const ProductoVentaScalarFieldEnum: {
    ventaId: 'ventaId',
    productoId: 'productoId',
    cantidad: 'cantidad'
  };

  export type ProductoVentaScalarFieldEnum = (typeof ProductoVentaScalarFieldEnum)[keyof typeof ProductoVentaScalarFieldEnum]


  export const RepartidorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    telefono: 'telefono'
  };

  export type RepartidorScalarFieldEnum = (typeof RepartidorScalarFieldEnum)[keyof typeof RepartidorScalarFieldEnum]


  export const RepartidorEnvioScalarFieldEnum: {
    repartidorId: 'repartidorId',
    envioId: 'envioId',
    estado: 'estado'
  };

  export type RepartidorEnvioScalarFieldEnum = (typeof RepartidorEnvioScalarFieldEnum)[keyof typeof RepartidorEnvioScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    estado: 'estado',
    fechaInicio: 'fechaInicio',
    fechaUltimaActualizacion: 'fechaUltimaActualizacion'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const EntidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    tipo: 'tipo'
  };

  export type EntidadScalarFieldEnum = (typeof EntidadScalarFieldEnum)[keyof typeof EntidadScalarFieldEnum]


  export const EntidadUsuarioScalarFieldEnum: {
    usuarioId: 'usuarioId',
    entidadId: 'entidadId'
  };

  export type EntidadUsuarioScalarFieldEnum = (typeof EntidadUsuarioScalarFieldEnum)[keyof typeof EntidadUsuarioScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    clave: 'clave',
    habilitado: 'habilitado'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoEntidad'
   */
  export type EnumTipoEntidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoEntidad'>
    


  /**
   * Reference to a field of type 'TipoEntidad[]'
   */
  export type ListEnumTipoEntidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoEntidad[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    fechaRegistro?: DateTimeFilter<"Cliente"> | Date | string
    direcciones?: DireccionListRelationFilter
    ventas?: VentaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
    direcciones?: DireccionOrderByRelationAggregateInput
    ventas?: VentaOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    fechaRegistro?: DateTimeFilter<"Cliente"> | Date | string
    direcciones?: DireccionListRelationFilter
    ventas?: VentaListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringWithAggregatesFilter<"Cliente"> | string
    fechaRegistro?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type CompraWhereInput = {
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    id?: IntFilter<"Compra"> | number
    empleadoId?: IntFilter<"Compra"> | number
    distribuidorId?: IntFilter<"Compra"> | number
    fecha?: DateTimeFilter<"Compra"> | Date | string
    monto?: FloatFilter<"Compra"> | number
    descripcion?: StringFilter<"Compra"> | string
    empleado?: XOR<EmpleadoRelationFilter, EmpleadoWhereInput>
    distribuidor?: XOR<DistribuidorRelationFilter, DistribuidorWhereInput>
    productos?: CompraProductoListRelationFilter
  }

  export type CompraOrderByWithRelationInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    distribuidorId?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    descripcion?: SortOrder
    empleado?: EmpleadoOrderByWithRelationInput
    distribuidor?: DistribuidorOrderByWithRelationInput
    productos?: CompraProductoOrderByRelationAggregateInput
  }

  export type CompraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    empleadoId?: IntFilter<"Compra"> | number
    distribuidorId?: IntFilter<"Compra"> | number
    fecha?: DateTimeFilter<"Compra"> | Date | string
    monto?: FloatFilter<"Compra"> | number
    descripcion?: StringFilter<"Compra"> | string
    empleado?: XOR<EmpleadoRelationFilter, EmpleadoWhereInput>
    distribuidor?: XOR<DistribuidorRelationFilter, DistribuidorWhereInput>
    productos?: CompraProductoListRelationFilter
  }, "id">

  export type CompraOrderByWithAggregationInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    distribuidorId?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    descripcion?: SortOrder
    _count?: CompraCountOrderByAggregateInput
    _avg?: CompraAvgOrderByAggregateInput
    _max?: CompraMaxOrderByAggregateInput
    _min?: CompraMinOrderByAggregateInput
    _sum?: CompraSumOrderByAggregateInput
  }

  export type CompraScalarWhereWithAggregatesInput = {
    AND?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    OR?: CompraScalarWhereWithAggregatesInput[]
    NOT?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Compra"> | number
    empleadoId?: IntWithAggregatesFilter<"Compra"> | number
    distribuidorId?: IntWithAggregatesFilter<"Compra"> | number
    fecha?: DateTimeWithAggregatesFilter<"Compra"> | Date | string
    monto?: FloatWithAggregatesFilter<"Compra"> | number
    descripcion?: StringWithAggregatesFilter<"Compra"> | string
  }

  export type CompraProductoWhereInput = {
    AND?: CompraProductoWhereInput | CompraProductoWhereInput[]
    OR?: CompraProductoWhereInput[]
    NOT?: CompraProductoWhereInput | CompraProductoWhereInput[]
    compraId?: IntFilter<"CompraProducto"> | number
    productoId?: IntFilter<"CompraProducto"> | number
    cantidad?: IntFilter<"CompraProducto"> | number
    compra?: XOR<CompraRelationFilter, CompraWhereInput>
    producto?: XOR<ProductoRelationFilter, ProductoWhereInput>
  }

  export type CompraProductoOrderByWithRelationInput = {
    compraId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    compra?: CompraOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type CompraProductoWhereUniqueInput = Prisma.AtLeast<{
    compraId_productoId?: CompraProductoCompraIdProductoIdCompoundUniqueInput
    AND?: CompraProductoWhereInput | CompraProductoWhereInput[]
    OR?: CompraProductoWhereInput[]
    NOT?: CompraProductoWhereInput | CompraProductoWhereInput[]
    compraId?: IntFilter<"CompraProducto"> | number
    productoId?: IntFilter<"CompraProducto"> | number
    cantidad?: IntFilter<"CompraProducto"> | number
    compra?: XOR<CompraRelationFilter, CompraWhereInput>
    producto?: XOR<ProductoRelationFilter, ProductoWhereInput>
  }, "compraId_productoId">

  export type CompraProductoOrderByWithAggregationInput = {
    compraId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    _count?: CompraProductoCountOrderByAggregateInput
    _avg?: CompraProductoAvgOrderByAggregateInput
    _max?: CompraProductoMaxOrderByAggregateInput
    _min?: CompraProductoMinOrderByAggregateInput
    _sum?: CompraProductoSumOrderByAggregateInput
  }

  export type CompraProductoScalarWhereWithAggregatesInput = {
    AND?: CompraProductoScalarWhereWithAggregatesInput | CompraProductoScalarWhereWithAggregatesInput[]
    OR?: CompraProductoScalarWhereWithAggregatesInput[]
    NOT?: CompraProductoScalarWhereWithAggregatesInput | CompraProductoScalarWhereWithAggregatesInput[]
    compraId?: IntWithAggregatesFilter<"CompraProducto"> | number
    productoId?: IntWithAggregatesFilter<"CompraProducto"> | number
    cantidad?: IntWithAggregatesFilter<"CompraProducto"> | number
  }

  export type DireccionWhereInput = {
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    id?: IntFilter<"Direccion"> | number
    clienteId?: IntFilter<"Direccion"> | number
    calle1?: StringFilter<"Direccion"> | string
    calle2?: StringNullableFilter<"Direccion"> | string | null
    codigoPostal?: StringFilter<"Direccion"> | string
    provincia?: StringFilter<"Direccion"> | string
    localidad?: StringFilter<"Direccion"> | string
    detalle?: StringNullableFilter<"Direccion"> | string | null
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    envios?: EnvioListRelationFilter
  }

  export type DireccionOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    calle1?: SortOrder
    calle2?: SortOrderInput | SortOrder
    codigoPostal?: SortOrder
    provincia?: SortOrder
    localidad?: SortOrder
    detalle?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
    envios?: EnvioOrderByRelationAggregateInput
  }

  export type DireccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    clienteId?: IntFilter<"Direccion"> | number
    calle1?: StringFilter<"Direccion"> | string
    calle2?: StringNullableFilter<"Direccion"> | string | null
    codigoPostal?: StringFilter<"Direccion"> | string
    provincia?: StringFilter<"Direccion"> | string
    localidad?: StringFilter<"Direccion"> | string
    detalle?: StringNullableFilter<"Direccion"> | string | null
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    envios?: EnvioListRelationFilter
  }, "id">

  export type DireccionOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    calle1?: SortOrder
    calle2?: SortOrderInput | SortOrder
    codigoPostal?: SortOrder
    provincia?: SortOrder
    localidad?: SortOrder
    detalle?: SortOrderInput | SortOrder
    _count?: DireccionCountOrderByAggregateInput
    _avg?: DireccionAvgOrderByAggregateInput
    _max?: DireccionMaxOrderByAggregateInput
    _min?: DireccionMinOrderByAggregateInput
    _sum?: DireccionSumOrderByAggregateInput
  }

  export type DireccionScalarWhereWithAggregatesInput = {
    AND?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    OR?: DireccionScalarWhereWithAggregatesInput[]
    NOT?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Direccion"> | number
    clienteId?: IntWithAggregatesFilter<"Direccion"> | number
    calle1?: StringWithAggregatesFilter<"Direccion"> | string
    calle2?: StringNullableWithAggregatesFilter<"Direccion"> | string | null
    codigoPostal?: StringWithAggregatesFilter<"Direccion"> | string
    provincia?: StringWithAggregatesFilter<"Direccion"> | string
    localidad?: StringWithAggregatesFilter<"Direccion"> | string
    detalle?: StringNullableWithAggregatesFilter<"Direccion"> | string | null
  }

  export type DistribuidorWhereInput = {
    AND?: DistribuidorWhereInput | DistribuidorWhereInput[]
    OR?: DistribuidorWhereInput[]
    NOT?: DistribuidorWhereInput | DistribuidorWhereInput[]
    id?: IntFilter<"Distribuidor"> | number
    nombre?: StringFilter<"Distribuidor"> | string
    compras?: CompraListRelationFilter
  }

  export type DistribuidorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    compras?: CompraOrderByRelationAggregateInput
  }

  export type DistribuidorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DistribuidorWhereInput | DistribuidorWhereInput[]
    OR?: DistribuidorWhereInput[]
    NOT?: DistribuidorWhereInput | DistribuidorWhereInput[]
    nombre?: StringFilter<"Distribuidor"> | string
    compras?: CompraListRelationFilter
  }, "id">

  export type DistribuidorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: DistribuidorCountOrderByAggregateInput
    _avg?: DistribuidorAvgOrderByAggregateInput
    _max?: DistribuidorMaxOrderByAggregateInput
    _min?: DistribuidorMinOrderByAggregateInput
    _sum?: DistribuidorSumOrderByAggregateInput
  }

  export type DistribuidorScalarWhereWithAggregatesInput = {
    AND?: DistribuidorScalarWhereWithAggregatesInput | DistribuidorScalarWhereWithAggregatesInput[]
    OR?: DistribuidorScalarWhereWithAggregatesInput[]
    NOT?: DistribuidorScalarWhereWithAggregatesInput | DistribuidorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Distribuidor"> | number
    nombre?: StringWithAggregatesFilter<"Distribuidor"> | string
  }

  export type EmpleadoWhereInput = {
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    id?: IntFilter<"Empleado"> | number
    nombre?: StringFilter<"Empleado"> | string
    cargo?: StringFilter<"Empleado"> | string
    compras?: CompraListRelationFilter
  }

  export type EmpleadoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cargo?: SortOrder
    compras?: CompraOrderByRelationAggregateInput
  }

  export type EmpleadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    nombre?: StringFilter<"Empleado"> | string
    cargo?: StringFilter<"Empleado"> | string
    compras?: CompraListRelationFilter
  }, "id">

  export type EmpleadoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cargo?: SortOrder
    _count?: EmpleadoCountOrderByAggregateInput
    _avg?: EmpleadoAvgOrderByAggregateInput
    _max?: EmpleadoMaxOrderByAggregateInput
    _min?: EmpleadoMinOrderByAggregateInput
    _sum?: EmpleadoSumOrderByAggregateInput
  }

  export type EmpleadoScalarWhereWithAggregatesInput = {
    AND?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    OR?: EmpleadoScalarWhereWithAggregatesInput[]
    NOT?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empleado"> | number
    nombre?: StringWithAggregatesFilter<"Empleado"> | string
    cargo?: StringWithAggregatesFilter<"Empleado"> | string
  }

  export type EnvioWhereInput = {
    AND?: EnvioWhereInput | EnvioWhereInput[]
    OR?: EnvioWhereInput[]
    NOT?: EnvioWhereInput | EnvioWhereInput[]
    id?: IntFilter<"Envio"> | number
    ventaId?: IntFilter<"Envio"> | number
    repartidorId?: IntFilter<"Envio"> | number
    direccionId?: IntFilter<"Envio"> | number
    estado?: IntFilter<"Envio"> | number
    fechaInicio?: DateTimeFilter<"Envio"> | Date | string
    fechaUltimaActualizacion?: DateTimeFilter<"Envio"> | Date | string
    venta?: XOR<VentaRelationFilter, VentaWhereInput>
    repartidor?: XOR<RepartidorRelationFilter, RepartidorWhereInput>
    direccion?: XOR<DireccionRelationFilter, DireccionWhereInput>
    estadoEnvio?: XOR<EstadoEnvioRelationFilter, EstadoEnvioWhereInput>
    repartidoresEnvios?: RepartidorEnvioListRelationFilter
  }

  export type EnvioOrderByWithRelationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    repartidorId?: SortOrder
    direccionId?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaUltimaActualizacion?: SortOrder
    venta?: VentaOrderByWithRelationInput
    repartidor?: RepartidorOrderByWithRelationInput
    direccion?: DireccionOrderByWithRelationInput
    estadoEnvio?: EstadoEnvioOrderByWithRelationInput
    repartidoresEnvios?: RepartidorEnvioOrderByRelationAggregateInput
  }

  export type EnvioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnvioWhereInput | EnvioWhereInput[]
    OR?: EnvioWhereInput[]
    NOT?: EnvioWhereInput | EnvioWhereInput[]
    ventaId?: IntFilter<"Envio"> | number
    repartidorId?: IntFilter<"Envio"> | number
    direccionId?: IntFilter<"Envio"> | number
    estado?: IntFilter<"Envio"> | number
    fechaInicio?: DateTimeFilter<"Envio"> | Date | string
    fechaUltimaActualizacion?: DateTimeFilter<"Envio"> | Date | string
    venta?: XOR<VentaRelationFilter, VentaWhereInput>
    repartidor?: XOR<RepartidorRelationFilter, RepartidorWhereInput>
    direccion?: XOR<DireccionRelationFilter, DireccionWhereInput>
    estadoEnvio?: XOR<EstadoEnvioRelationFilter, EstadoEnvioWhereInput>
    repartidoresEnvios?: RepartidorEnvioListRelationFilter
  }, "id">

  export type EnvioOrderByWithAggregationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    repartidorId?: SortOrder
    direccionId?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaUltimaActualizacion?: SortOrder
    _count?: EnvioCountOrderByAggregateInput
    _avg?: EnvioAvgOrderByAggregateInput
    _max?: EnvioMaxOrderByAggregateInput
    _min?: EnvioMinOrderByAggregateInput
    _sum?: EnvioSumOrderByAggregateInput
  }

  export type EnvioScalarWhereWithAggregatesInput = {
    AND?: EnvioScalarWhereWithAggregatesInput | EnvioScalarWhereWithAggregatesInput[]
    OR?: EnvioScalarWhereWithAggregatesInput[]
    NOT?: EnvioScalarWhereWithAggregatesInput | EnvioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Envio"> | number
    ventaId?: IntWithAggregatesFilter<"Envio"> | number
    repartidorId?: IntWithAggregatesFilter<"Envio"> | number
    direccionId?: IntWithAggregatesFilter<"Envio"> | number
    estado?: IntWithAggregatesFilter<"Envio"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Envio"> | Date | string
    fechaUltimaActualizacion?: DateTimeWithAggregatesFilter<"Envio"> | Date | string
  }

  export type EstadoEnvioWhereInput = {
    AND?: EstadoEnvioWhereInput | EstadoEnvioWhereInput[]
    OR?: EstadoEnvioWhereInput[]
    NOT?: EstadoEnvioWhereInput | EstadoEnvioWhereInput[]
    id?: IntFilter<"EstadoEnvio"> | number
    descEstado?: StringFilter<"EstadoEnvio"> | string
    envios?: EnvioListRelationFilter
    repartidorEnvios?: RepartidorEnvioListRelationFilter
  }

  export type EstadoEnvioOrderByWithRelationInput = {
    id?: SortOrder
    descEstado?: SortOrder
    envios?: EnvioOrderByRelationAggregateInput
    repartidorEnvios?: RepartidorEnvioOrderByRelationAggregateInput
  }

  export type EstadoEnvioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstadoEnvioWhereInput | EstadoEnvioWhereInput[]
    OR?: EstadoEnvioWhereInput[]
    NOT?: EstadoEnvioWhereInput | EstadoEnvioWhereInput[]
    descEstado?: StringFilter<"EstadoEnvio"> | string
    envios?: EnvioListRelationFilter
    repartidorEnvios?: RepartidorEnvioListRelationFilter
  }, "id">

  export type EstadoEnvioOrderByWithAggregationInput = {
    id?: SortOrder
    descEstado?: SortOrder
    _count?: EstadoEnvioCountOrderByAggregateInput
    _avg?: EstadoEnvioAvgOrderByAggregateInput
    _max?: EstadoEnvioMaxOrderByAggregateInput
    _min?: EstadoEnvioMinOrderByAggregateInput
    _sum?: EstadoEnvioSumOrderByAggregateInput
  }

  export type EstadoEnvioScalarWhereWithAggregatesInput = {
    AND?: EstadoEnvioScalarWhereWithAggregatesInput | EstadoEnvioScalarWhereWithAggregatesInput[]
    OR?: EstadoEnvioScalarWhereWithAggregatesInput[]
    NOT?: EstadoEnvioScalarWhereWithAggregatesInput | EstadoEnvioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EstadoEnvio"> | number
    descEstado?: StringWithAggregatesFilter<"EstadoEnvio"> | string
  }

  export type EstadoVentaWhereInput = {
    AND?: EstadoVentaWhereInput | EstadoVentaWhereInput[]
    OR?: EstadoVentaWhereInput[]
    NOT?: EstadoVentaWhereInput | EstadoVentaWhereInput[]
    id?: IntFilter<"EstadoVenta"> | number
    descEstado?: StringFilter<"EstadoVenta"> | string
    ventas?: VentaListRelationFilter
  }

  export type EstadoVentaOrderByWithRelationInput = {
    id?: SortOrder
    descEstado?: SortOrder
    ventas?: VentaOrderByRelationAggregateInput
  }

  export type EstadoVentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstadoVentaWhereInput | EstadoVentaWhereInput[]
    OR?: EstadoVentaWhereInput[]
    NOT?: EstadoVentaWhereInput | EstadoVentaWhereInput[]
    descEstado?: StringFilter<"EstadoVenta"> | string
    ventas?: VentaListRelationFilter
  }, "id">

  export type EstadoVentaOrderByWithAggregationInput = {
    id?: SortOrder
    descEstado?: SortOrder
    _count?: EstadoVentaCountOrderByAggregateInput
    _avg?: EstadoVentaAvgOrderByAggregateInput
    _max?: EstadoVentaMaxOrderByAggregateInput
    _min?: EstadoVentaMinOrderByAggregateInput
    _sum?: EstadoVentaSumOrderByAggregateInput
  }

  export type EstadoVentaScalarWhereWithAggregatesInput = {
    AND?: EstadoVentaScalarWhereWithAggregatesInput | EstadoVentaScalarWhereWithAggregatesInput[]
    OR?: EstadoVentaScalarWhereWithAggregatesInput[]
    NOT?: EstadoVentaScalarWhereWithAggregatesInput | EstadoVentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EstadoVenta"> | number
    descEstado?: StringWithAggregatesFilter<"EstadoVenta"> | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    cantidad?: IntFilter<"Producto"> | number
    medida?: FloatFilter<"Producto"> | number
    marca?: StringFilter<"Producto"> | string
    precio?: FloatFilter<"Producto"> | number
    compras?: CompraProductoListRelationFilter
    ventas?: ProductoVentaListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cantidad?: SortOrder
    medida?: SortOrder
    marca?: SortOrder
    precio?: SortOrder
    compras?: CompraProductoOrderByRelationAggregateInput
    ventas?: ProductoVentaOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    cantidad?: IntFilter<"Producto"> | number
    medida?: FloatFilter<"Producto"> | number
    marca?: StringFilter<"Producto"> | string
    precio?: FloatFilter<"Producto"> | number
    compras?: CompraProductoListRelationFilter
    ventas?: ProductoVentaListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cantidad?: SortOrder
    medida?: SortOrder
    marca?: SortOrder
    precio?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    cantidad?: IntWithAggregatesFilter<"Producto"> | number
    medida?: FloatWithAggregatesFilter<"Producto"> | number
    marca?: StringWithAggregatesFilter<"Producto"> | string
    precio?: FloatWithAggregatesFilter<"Producto"> | number
  }

  export type ProductoVentaWhereInput = {
    AND?: ProductoVentaWhereInput | ProductoVentaWhereInput[]
    OR?: ProductoVentaWhereInput[]
    NOT?: ProductoVentaWhereInput | ProductoVentaWhereInput[]
    ventaId?: IntFilter<"ProductoVenta"> | number
    productoId?: IntFilter<"ProductoVenta"> | number
    cantidad?: IntFilter<"ProductoVenta"> | number
    venta?: XOR<VentaRelationFilter, VentaWhereInput>
    producto?: XOR<ProductoRelationFilter, ProductoWhereInput>
  }

  export type ProductoVentaOrderByWithRelationInput = {
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    venta?: VentaOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type ProductoVentaWhereUniqueInput = Prisma.AtLeast<{
    ventaId_productoId?: ProductoVentaVentaIdProductoIdCompoundUniqueInput
    AND?: ProductoVentaWhereInput | ProductoVentaWhereInput[]
    OR?: ProductoVentaWhereInput[]
    NOT?: ProductoVentaWhereInput | ProductoVentaWhereInput[]
    ventaId?: IntFilter<"ProductoVenta"> | number
    productoId?: IntFilter<"ProductoVenta"> | number
    cantidad?: IntFilter<"ProductoVenta"> | number
    venta?: XOR<VentaRelationFilter, VentaWhereInput>
    producto?: XOR<ProductoRelationFilter, ProductoWhereInput>
  }, "ventaId_productoId">

  export type ProductoVentaOrderByWithAggregationInput = {
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    _count?: ProductoVentaCountOrderByAggregateInput
    _avg?: ProductoVentaAvgOrderByAggregateInput
    _max?: ProductoVentaMaxOrderByAggregateInput
    _min?: ProductoVentaMinOrderByAggregateInput
    _sum?: ProductoVentaSumOrderByAggregateInput
  }

  export type ProductoVentaScalarWhereWithAggregatesInput = {
    AND?: ProductoVentaScalarWhereWithAggregatesInput | ProductoVentaScalarWhereWithAggregatesInput[]
    OR?: ProductoVentaScalarWhereWithAggregatesInput[]
    NOT?: ProductoVentaScalarWhereWithAggregatesInput | ProductoVentaScalarWhereWithAggregatesInput[]
    ventaId?: IntWithAggregatesFilter<"ProductoVenta"> | number
    productoId?: IntWithAggregatesFilter<"ProductoVenta"> | number
    cantidad?: IntWithAggregatesFilter<"ProductoVenta"> | number
  }

  export type RepartidorWhereInput = {
    AND?: RepartidorWhereInput | RepartidorWhereInput[]
    OR?: RepartidorWhereInput[]
    NOT?: RepartidorWhereInput | RepartidorWhereInput[]
    id?: IntFilter<"Repartidor"> | number
    nombre?: StringFilter<"Repartidor"> | string
    telefono?: StringFilter<"Repartidor"> | string
    envios?: RepartidorEnvioListRelationFilter
    enviosDirect?: EnvioListRelationFilter
  }

  export type RepartidorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    envios?: RepartidorEnvioOrderByRelationAggregateInput
    enviosDirect?: EnvioOrderByRelationAggregateInput
  }

  export type RepartidorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepartidorWhereInput | RepartidorWhereInput[]
    OR?: RepartidorWhereInput[]
    NOT?: RepartidorWhereInput | RepartidorWhereInput[]
    nombre?: StringFilter<"Repartidor"> | string
    telefono?: StringFilter<"Repartidor"> | string
    envios?: RepartidorEnvioListRelationFilter
    enviosDirect?: EnvioListRelationFilter
  }, "id">

  export type RepartidorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    _count?: RepartidorCountOrderByAggregateInput
    _avg?: RepartidorAvgOrderByAggregateInput
    _max?: RepartidorMaxOrderByAggregateInput
    _min?: RepartidorMinOrderByAggregateInput
    _sum?: RepartidorSumOrderByAggregateInput
  }

  export type RepartidorScalarWhereWithAggregatesInput = {
    AND?: RepartidorScalarWhereWithAggregatesInput | RepartidorScalarWhereWithAggregatesInput[]
    OR?: RepartidorScalarWhereWithAggregatesInput[]
    NOT?: RepartidorScalarWhereWithAggregatesInput | RepartidorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Repartidor"> | number
    nombre?: StringWithAggregatesFilter<"Repartidor"> | string
    telefono?: StringWithAggregatesFilter<"Repartidor"> | string
  }

  export type RepartidorEnvioWhereInput = {
    AND?: RepartidorEnvioWhereInput | RepartidorEnvioWhereInput[]
    OR?: RepartidorEnvioWhereInput[]
    NOT?: RepartidorEnvioWhereInput | RepartidorEnvioWhereInput[]
    repartidorId?: IntFilter<"RepartidorEnvio"> | number
    envioId?: IntFilter<"RepartidorEnvio"> | number
    estado?: IntFilter<"RepartidorEnvio"> | number
    repartidor?: XOR<RepartidorRelationFilter, RepartidorWhereInput>
    envio?: XOR<EnvioRelationFilter, EnvioWhereInput>
    estadoEnvio?: XOR<EstadoEnvioRelationFilter, EstadoEnvioWhereInput>
  }

  export type RepartidorEnvioOrderByWithRelationInput = {
    repartidorId?: SortOrder
    envioId?: SortOrder
    estado?: SortOrder
    repartidor?: RepartidorOrderByWithRelationInput
    envio?: EnvioOrderByWithRelationInput
    estadoEnvio?: EstadoEnvioOrderByWithRelationInput
  }

  export type RepartidorEnvioWhereUniqueInput = Prisma.AtLeast<{
    repartidorId_envioId?: RepartidorEnvioRepartidorIdEnvioIdCompoundUniqueInput
    AND?: RepartidorEnvioWhereInput | RepartidorEnvioWhereInput[]
    OR?: RepartidorEnvioWhereInput[]
    NOT?: RepartidorEnvioWhereInput | RepartidorEnvioWhereInput[]
    repartidorId?: IntFilter<"RepartidorEnvio"> | number
    envioId?: IntFilter<"RepartidorEnvio"> | number
    estado?: IntFilter<"RepartidorEnvio"> | number
    repartidor?: XOR<RepartidorRelationFilter, RepartidorWhereInput>
    envio?: XOR<EnvioRelationFilter, EnvioWhereInput>
    estadoEnvio?: XOR<EstadoEnvioRelationFilter, EstadoEnvioWhereInput>
  }, "repartidorId_envioId">

  export type RepartidorEnvioOrderByWithAggregationInput = {
    repartidorId?: SortOrder
    envioId?: SortOrder
    estado?: SortOrder
    _count?: RepartidorEnvioCountOrderByAggregateInput
    _avg?: RepartidorEnvioAvgOrderByAggregateInput
    _max?: RepartidorEnvioMaxOrderByAggregateInput
    _min?: RepartidorEnvioMinOrderByAggregateInput
    _sum?: RepartidorEnvioSumOrderByAggregateInput
  }

  export type RepartidorEnvioScalarWhereWithAggregatesInput = {
    AND?: RepartidorEnvioScalarWhereWithAggregatesInput | RepartidorEnvioScalarWhereWithAggregatesInput[]
    OR?: RepartidorEnvioScalarWhereWithAggregatesInput[]
    NOT?: RepartidorEnvioScalarWhereWithAggregatesInput | RepartidorEnvioScalarWhereWithAggregatesInput[]
    repartidorId?: IntWithAggregatesFilter<"RepartidorEnvio"> | number
    envioId?: IntWithAggregatesFilter<"RepartidorEnvio"> | number
    estado?: IntWithAggregatesFilter<"RepartidorEnvio"> | number
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id?: IntFilter<"Venta"> | number
    clienteId?: IntFilter<"Venta"> | number
    estado?: IntFilter<"Venta"> | number
    fechaInicio?: DateTimeFilter<"Venta"> | Date | string
    fechaUltimaActualizacion?: DateTimeFilter<"Venta"> | Date | string
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    estadoVenta?: XOR<EstadoVentaRelationFilter, EstadoVentaWhereInput>
    productos?: ProductoVentaListRelationFilter
    envios?: EnvioListRelationFilter
  }

  export type VentaOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaUltimaActualizacion?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    estadoVenta?: EstadoVentaOrderByWithRelationInput
    productos?: ProductoVentaOrderByRelationAggregateInput
    envios?: EnvioOrderByRelationAggregateInput
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    clienteId?: IntFilter<"Venta"> | number
    estado?: IntFilter<"Venta"> | number
    fechaInicio?: DateTimeFilter<"Venta"> | Date | string
    fechaUltimaActualizacion?: DateTimeFilter<"Venta"> | Date | string
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    estadoVenta?: XOR<EstadoVentaRelationFilter, EstadoVentaWhereInput>
    productos?: ProductoVentaListRelationFilter
    envios?: EnvioListRelationFilter
  }, "id">

  export type VentaOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaUltimaActualizacion?: SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venta"> | number
    clienteId?: IntWithAggregatesFilter<"Venta"> | number
    estado?: IntWithAggregatesFilter<"Venta"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
    fechaUltimaActualizacion?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
  }

  export type EntidadWhereInput = {
    AND?: EntidadWhereInput | EntidadWhereInput[]
    OR?: EntidadWhereInput[]
    NOT?: EntidadWhereInput | EntidadWhereInput[]
    id?: IntFilter<"Entidad"> | number
    nombre?: StringFilter<"Entidad"> | string
    tipo?: EnumTipoEntidadFilter<"Entidad"> | $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioListRelationFilter
    permisos?: EntidadListRelationFilter
    roles?: EntidadListRelationFilter
  }

  export type EntidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    entidadUsuario?: EntidadUsuarioOrderByRelationAggregateInput
    permisos?: EntidadOrderByRelationAggregateInput
    roles?: EntidadOrderByRelationAggregateInput
  }

  export type EntidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntidadWhereInput | EntidadWhereInput[]
    OR?: EntidadWhereInput[]
    NOT?: EntidadWhereInput | EntidadWhereInput[]
    nombre?: StringFilter<"Entidad"> | string
    tipo?: EnumTipoEntidadFilter<"Entidad"> | $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioListRelationFilter
    permisos?: EntidadListRelationFilter
    roles?: EntidadListRelationFilter
  }, "id">

  export type EntidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    _count?: EntidadCountOrderByAggregateInput
    _avg?: EntidadAvgOrderByAggregateInput
    _max?: EntidadMaxOrderByAggregateInput
    _min?: EntidadMinOrderByAggregateInput
    _sum?: EntidadSumOrderByAggregateInput
  }

  export type EntidadScalarWhereWithAggregatesInput = {
    AND?: EntidadScalarWhereWithAggregatesInput | EntidadScalarWhereWithAggregatesInput[]
    OR?: EntidadScalarWhereWithAggregatesInput[]
    NOT?: EntidadScalarWhereWithAggregatesInput | EntidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entidad"> | number
    nombre?: StringWithAggregatesFilter<"Entidad"> | string
    tipo?: EnumTipoEntidadWithAggregatesFilter<"Entidad"> | $Enums.TipoEntidad
  }

  export type EntidadUsuarioWhereInput = {
    AND?: EntidadUsuarioWhereInput | EntidadUsuarioWhereInput[]
    OR?: EntidadUsuarioWhereInput[]
    NOT?: EntidadUsuarioWhereInput | EntidadUsuarioWhereInput[]
    usuarioId?: IntFilter<"EntidadUsuario"> | number
    entidadId?: IntFilter<"EntidadUsuario"> | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    entidad?: XOR<EntidadRelationFilter, EntidadWhereInput>
  }

  export type EntidadUsuarioOrderByWithRelationInput = {
    usuarioId?: SortOrder
    entidadId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    entidad?: EntidadOrderByWithRelationInput
  }

  export type EntidadUsuarioWhereUniqueInput = Prisma.AtLeast<{
    usuarioId_entidadId?: EntidadUsuarioUsuarioIdEntidadIdCompoundUniqueInput
    AND?: EntidadUsuarioWhereInput | EntidadUsuarioWhereInput[]
    OR?: EntidadUsuarioWhereInput[]
    NOT?: EntidadUsuarioWhereInput | EntidadUsuarioWhereInput[]
    usuarioId?: IntFilter<"EntidadUsuario"> | number
    entidadId?: IntFilter<"EntidadUsuario"> | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    entidad?: XOR<EntidadRelationFilter, EntidadWhereInput>
  }, "usuarioId_entidadId">

  export type EntidadUsuarioOrderByWithAggregationInput = {
    usuarioId?: SortOrder
    entidadId?: SortOrder
    _count?: EntidadUsuarioCountOrderByAggregateInput
    _avg?: EntidadUsuarioAvgOrderByAggregateInput
    _max?: EntidadUsuarioMaxOrderByAggregateInput
    _min?: EntidadUsuarioMinOrderByAggregateInput
    _sum?: EntidadUsuarioSumOrderByAggregateInput
  }

  export type EntidadUsuarioScalarWhereWithAggregatesInput = {
    AND?: EntidadUsuarioScalarWhereWithAggregatesInput | EntidadUsuarioScalarWhereWithAggregatesInput[]
    OR?: EntidadUsuarioScalarWhereWithAggregatesInput[]
    NOT?: EntidadUsuarioScalarWhereWithAggregatesInput | EntidadUsuarioScalarWhereWithAggregatesInput[]
    usuarioId?: IntWithAggregatesFilter<"EntidadUsuario"> | number
    entidadId?: IntWithAggregatesFilter<"EntidadUsuario"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    clave?: StringFilter<"Usuario"> | string
    habilitado?: BoolFilter<"Usuario"> | boolean
    permisos?: EntidadUsuarioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    clave?: SortOrder
    habilitado?: SortOrder
    permisos?: EntidadUsuarioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    clave?: StringFilter<"Usuario"> | string
    habilitado?: BoolFilter<"Usuario"> | boolean
    permisos?: EntidadUsuarioListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    clave?: SortOrder
    habilitado?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    clave?: StringWithAggregatesFilter<"Usuario"> | string
    habilitado?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type ClienteCreateInput = {
    nombre: string
    telefono: string
    fechaRegistro: Date | string
    direcciones?: DireccionCreateNestedManyWithoutClienteInput
    ventas?: VentaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nombre: string
    telefono: string
    fechaRegistro: Date | string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutClienteInput
    ventas?: VentaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    direcciones?: DireccionUpdateManyWithoutClienteNestedInput
    ventas?: VentaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    direcciones?: DireccionUncheckedUpdateManyWithoutClienteNestedInput
    ventas?: VentaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nombre: string
    telefono: string
    fechaRegistro: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompraCreateInput = {
    fecha: Date | string
    monto: number
    descripcion: string
    empleado: EmpleadoCreateNestedOneWithoutComprasInput
    distribuidor: DistribuidorCreateNestedOneWithoutComprasInput
    productos?: CompraProductoCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateInput = {
    id?: number
    empleadoId: number
    distribuidorId: number
    fecha: Date | string
    monto: number
    descripcion: string
    productos?: CompraProductoUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    empleado?: EmpleadoUpdateOneRequiredWithoutComprasNestedInput
    distribuidor?: DistribuidorUpdateOneRequiredWithoutComprasNestedInput
    productos?: CompraProductoUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    distribuidorId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    productos?: CompraProductoUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraCreateManyInput = {
    id?: number
    empleadoId: number
    distribuidorId: number
    fecha: Date | string
    monto: number
    descripcion: string
  }

  export type CompraUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type CompraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    distribuidorId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type CompraProductoCreateInput = {
    cantidad: number
    compra: CompraCreateNestedOneWithoutProductosInput
    producto: ProductoCreateNestedOneWithoutComprasInput
  }

  export type CompraProductoUncheckedCreateInput = {
    compraId: number
    productoId: number
    cantidad: number
  }

  export type CompraProductoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    compra?: CompraUpdateOneRequiredWithoutProductosNestedInput
    producto?: ProductoUpdateOneRequiredWithoutComprasNestedInput
  }

  export type CompraProductoUncheckedUpdateInput = {
    compraId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CompraProductoCreateManyInput = {
    compraId: number
    productoId: number
    cantidad: number
  }

  export type CompraProductoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CompraProductoUncheckedUpdateManyInput = {
    compraId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionCreateInput = {
    calle1: string
    calle2?: string | null
    codigoPostal: string
    provincia: string
    localidad: string
    detalle?: string | null
    cliente: ClienteCreateNestedOneWithoutDireccionesInput
    envios?: EnvioCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUncheckedCreateInput = {
    id?: number
    clienteId: number
    calle1: string
    calle2?: string | null
    codigoPostal: string
    provincia: string
    localidad: string
    detalle?: string | null
    envios?: EnvioUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUpdateInput = {
    calle1?: StringFieldUpdateOperationsInput | string
    calle2?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutDireccionesNestedInput
    envios?: EnvioUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    calle1?: StringFieldUpdateOperationsInput | string
    calle2?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    envios?: EnvioUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionCreateManyInput = {
    id?: number
    clienteId: number
    calle1: string
    calle2?: string | null
    codigoPostal: string
    provincia: string
    localidad: string
    detalle?: string | null
  }

  export type DireccionUpdateManyMutationInput = {
    calle1?: StringFieldUpdateOperationsInput | string
    calle2?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DireccionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    calle1?: StringFieldUpdateOperationsInput | string
    calle2?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DistribuidorCreateInput = {
    nombre: string
    compras?: CompraCreateNestedManyWithoutDistribuidorInput
  }

  export type DistribuidorUncheckedCreateInput = {
    id?: number
    nombre: string
    compras?: CompraUncheckedCreateNestedManyWithoutDistribuidorInput
  }

  export type DistribuidorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    compras?: CompraUpdateManyWithoutDistribuidorNestedInput
  }

  export type DistribuidorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    compras?: CompraUncheckedUpdateManyWithoutDistribuidorNestedInput
  }

  export type DistribuidorCreateManyInput = {
    id?: number
    nombre: string
  }

  export type DistribuidorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DistribuidorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EmpleadoCreateInput = {
    nombre: string
    cargo: string
    compras?: CompraCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateInput = {
    id?: number
    nombre: string
    cargo: string
    compras?: CompraUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    compras?: CompraUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    compras?: CompraUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoCreateManyInput = {
    id?: number
    nombre: string
    cargo: string
  }

  export type EmpleadoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type EmpleadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type EnvioCreateInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    venta: VentaCreateNestedOneWithoutEnviosInput
    repartidor: RepartidorCreateNestedOneWithoutEnviosDirectInput
    direccion: DireccionCreateNestedOneWithoutEnviosInput
    estadoEnvio: EstadoEnvioCreateNestedOneWithoutEnviosInput
    repartidoresEnvios?: RepartidorEnvioCreateNestedManyWithoutEnvioInput
  }

  export type EnvioUncheckedCreateInput = {
    id?: number
    ventaId: number
    repartidorId: number
    direccionId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    repartidoresEnvios?: RepartidorEnvioUncheckedCreateNestedManyWithoutEnvioInput
  }

  export type EnvioUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    venta?: VentaUpdateOneRequiredWithoutEnviosNestedInput
    repartidor?: RepartidorUpdateOneRequiredWithoutEnviosDirectNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutEnviosNestedInput
    estadoEnvio?: EstadoEnvioUpdateOneRequiredWithoutEnviosNestedInput
    repartidoresEnvios?: RepartidorEnvioUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    repartidorId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    repartidoresEnvios?: RepartidorEnvioUncheckedUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioCreateManyInput = {
    id?: number
    ventaId: number
    repartidorId: number
    direccionId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
  }

  export type EnvioUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    repartidorId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoEnvioCreateInput = {
    id: number
    descEstado: string
    envios?: EnvioCreateNestedManyWithoutEstadoEnvioInput
    repartidorEnvios?: RepartidorEnvioCreateNestedManyWithoutEstadoEnvioInput
  }

  export type EstadoEnvioUncheckedCreateInput = {
    id: number
    descEstado: string
    envios?: EnvioUncheckedCreateNestedManyWithoutEstadoEnvioInput
    repartidorEnvios?: RepartidorEnvioUncheckedCreateNestedManyWithoutEstadoEnvioInput
  }

  export type EstadoEnvioUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
    envios?: EnvioUpdateManyWithoutEstadoEnvioNestedInput
    repartidorEnvios?: RepartidorEnvioUpdateManyWithoutEstadoEnvioNestedInput
  }

  export type EstadoEnvioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
    envios?: EnvioUncheckedUpdateManyWithoutEstadoEnvioNestedInput
    repartidorEnvios?: RepartidorEnvioUncheckedUpdateManyWithoutEstadoEnvioNestedInput
  }

  export type EstadoEnvioCreateManyInput = {
    id: number
    descEstado: string
  }

  export type EstadoEnvioUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoEnvioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoVentaCreateInput = {
    id: number
    descEstado: string
    ventas?: VentaCreateNestedManyWithoutEstadoVentaInput
  }

  export type EstadoVentaUncheckedCreateInput = {
    id: number
    descEstado: string
    ventas?: VentaUncheckedCreateNestedManyWithoutEstadoVentaInput
  }

  export type EstadoVentaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
    ventas?: VentaUpdateManyWithoutEstadoVentaNestedInput
  }

  export type EstadoVentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
    ventas?: VentaUncheckedUpdateManyWithoutEstadoVentaNestedInput
  }

  export type EstadoVentaCreateManyInput = {
    id: number
    descEstado: string
  }

  export type EstadoVentaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoVentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoCreateInput = {
    nombre: string
    cantidad: number
    medida: number
    marca: string
    precio: number
    compras?: CompraProductoCreateNestedManyWithoutProductoInput
    ventas?: ProductoVentaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    cantidad: number
    medida: number
    marca: string
    precio: number
    compras?: CompraProductoUncheckedCreateNestedManyWithoutProductoInput
    ventas?: ProductoVentaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medida?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    compras?: CompraProductoUpdateManyWithoutProductoNestedInput
    ventas?: ProductoVentaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medida?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    compras?: CompraProductoUncheckedUpdateManyWithoutProductoNestedInput
    ventas?: ProductoVentaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    cantidad: number
    medida: number
    marca: string
    precio: number
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medida?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medida?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductoVentaCreateInput = {
    cantidad: number
    venta: VentaCreateNestedOneWithoutProductosInput
    producto: ProductoCreateNestedOneWithoutVentasInput
  }

  export type ProductoVentaUncheckedCreateInput = {
    ventaId: number
    productoId: number
    cantidad: number
  }

  export type ProductoVentaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    venta?: VentaUpdateOneRequiredWithoutProductosNestedInput
    producto?: ProductoUpdateOneRequiredWithoutVentasNestedInput
  }

  export type ProductoVentaUncheckedUpdateInput = {
    ventaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoVentaCreateManyInput = {
    ventaId: number
    productoId: number
    cantidad: number
  }

  export type ProductoVentaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoVentaUncheckedUpdateManyInput = {
    ventaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type RepartidorCreateInput = {
    nombre: string
    telefono: string
    envios?: RepartidorEnvioCreateNestedManyWithoutRepartidorInput
    enviosDirect?: EnvioCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorUncheckedCreateInput = {
    id?: number
    nombre: string
    telefono: string
    envios?: RepartidorEnvioUncheckedCreateNestedManyWithoutRepartidorInput
    enviosDirect?: EnvioUncheckedCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    envios?: RepartidorEnvioUpdateManyWithoutRepartidorNestedInput
    enviosDirect?: EnvioUpdateManyWithoutRepartidorNestedInput
  }

  export type RepartidorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    envios?: RepartidorEnvioUncheckedUpdateManyWithoutRepartidorNestedInput
    enviosDirect?: EnvioUncheckedUpdateManyWithoutRepartidorNestedInput
  }

  export type RepartidorCreateManyInput = {
    id?: number
    nombre: string
    telefono: string
  }

  export type RepartidorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type RepartidorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type RepartidorEnvioCreateInput = {
    repartidor: RepartidorCreateNestedOneWithoutEnviosInput
    envio: EnvioCreateNestedOneWithoutRepartidoresEnviosInput
    estadoEnvio: EstadoEnvioCreateNestedOneWithoutRepartidorEnviosInput
  }

  export type RepartidorEnvioUncheckedCreateInput = {
    repartidorId: number
    envioId: number
    estado: number
  }

  export type RepartidorEnvioUpdateInput = {
    repartidor?: RepartidorUpdateOneRequiredWithoutEnviosNestedInput
    envio?: EnvioUpdateOneRequiredWithoutRepartidoresEnviosNestedInput
    estadoEnvio?: EstadoEnvioUpdateOneRequiredWithoutRepartidorEnviosNestedInput
  }

  export type RepartidorEnvioUncheckedUpdateInput = {
    repartidorId?: IntFieldUpdateOperationsInput | number
    envioId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type RepartidorEnvioCreateManyInput = {
    repartidorId: number
    envioId: number
    estado: number
  }

  export type RepartidorEnvioUpdateManyMutationInput = {

  }

  export type RepartidorEnvioUncheckedUpdateManyInput = {
    repartidorId?: IntFieldUpdateOperationsInput | number
    envioId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type VentaCreateInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    estadoVenta: EstadoVentaCreateNestedOneWithoutVentasInput
    productos?: ProductoVentaCreateNestedManyWithoutVentaInput
    envios?: EnvioCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateInput = {
    id?: number
    clienteId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    productos?: ProductoVentaUncheckedCreateNestedManyWithoutVentaInput
    envios?: EnvioUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    estadoVenta?: EstadoVentaUpdateOneRequiredWithoutVentasNestedInput
    productos?: ProductoVentaUpdateManyWithoutVentaNestedInput
    envios?: EnvioUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoVentaUncheckedUpdateManyWithoutVentaNestedInput
    envios?: EnvioUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaCreateManyInput = {
    id?: number
    clienteId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
  }

  export type VentaUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntidadCreateInput = {
    nombre: string
    tipo: $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioCreateNestedManyWithoutEntidadInput
    permisos?: EntidadCreateNestedManyWithoutRolesInput
    roles?: EntidadCreateNestedManyWithoutPermisosInput
  }

  export type EntidadUncheckedCreateInput = {
    id?: number
    nombre: string
    tipo: $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioUncheckedCreateNestedManyWithoutEntidadInput
    permisos?: EntidadUncheckedCreateNestedManyWithoutRolesInput
    roles?: EntidadUncheckedCreateNestedManyWithoutPermisosInput
  }

  export type EntidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioUpdateManyWithoutEntidadNestedInput
    permisos?: EntidadUpdateManyWithoutRolesNestedInput
    roles?: EntidadUpdateManyWithoutPermisosNestedInput
  }

  export type EntidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioUncheckedUpdateManyWithoutEntidadNestedInput
    permisos?: EntidadUncheckedUpdateManyWithoutRolesNestedInput
    roles?: EntidadUncheckedUpdateManyWithoutPermisosNestedInput
  }

  export type EntidadCreateManyInput = {
    id?: number
    nombre: string
    tipo: $Enums.TipoEntidad
  }

  export type EntidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
  }

  export type EntidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
  }

  export type EntidadUsuarioCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutPermisosInput
    entidad: EntidadCreateNestedOneWithoutEntidadUsuarioInput
  }

  export type EntidadUsuarioUncheckedCreateInput = {
    usuarioId: number
    entidadId: number
  }

  export type EntidadUsuarioUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutPermisosNestedInput
    entidad?: EntidadUpdateOneRequiredWithoutEntidadUsuarioNestedInput
  }

  export type EntidadUsuarioUncheckedUpdateInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type EntidadUsuarioCreateManyInput = {
    usuarioId: number
    entidadId: number
  }

  export type EntidadUsuarioUpdateManyMutationInput = {

  }

  export type EntidadUsuarioUncheckedUpdateManyInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    clave: string
    habilitado: boolean
    permisos?: EntidadUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    clave: string
    habilitado: boolean
    permisos?: EntidadUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    permisos?: EntidadUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    permisos?: EntidadUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    clave: string
    habilitado: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DireccionListRelationFilter = {
    every?: DireccionWhereInput
    some?: DireccionWhereInput
    none?: DireccionWhereInput
  }

  export type VentaListRelationFilter = {
    every?: VentaWhereInput
    some?: VentaWhereInput
    none?: VentaWhereInput
  }

  export type DireccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EmpleadoRelationFilter = {
    is?: EmpleadoWhereInput
    isNot?: EmpleadoWhereInput
  }

  export type DistribuidorRelationFilter = {
    is?: DistribuidorWhereInput
    isNot?: DistribuidorWhereInput
  }

  export type CompraProductoListRelationFilter = {
    every?: CompraProductoWhereInput
    some?: CompraProductoWhereInput
    none?: CompraProductoWhereInput
  }

  export type CompraProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompraCountOrderByAggregateInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    distribuidorId?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    descripcion?: SortOrder
  }

  export type CompraAvgOrderByAggregateInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    distribuidorId?: SortOrder
    monto?: SortOrder
  }

  export type CompraMaxOrderByAggregateInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    distribuidorId?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    descripcion?: SortOrder
  }

  export type CompraMinOrderByAggregateInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    distribuidorId?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    descripcion?: SortOrder
  }

  export type CompraSumOrderByAggregateInput = {
    id?: SortOrder
    empleadoId?: SortOrder
    distribuidorId?: SortOrder
    monto?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CompraRelationFilter = {
    is?: CompraWhereInput
    isNot?: CompraWhereInput
  }

  export type ProductoRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type CompraProductoCompraIdProductoIdCompoundUniqueInput = {
    compraId: number
    productoId: number
  }

  export type CompraProductoCountOrderByAggregateInput = {
    compraId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type CompraProductoAvgOrderByAggregateInput = {
    compraId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type CompraProductoMaxOrderByAggregateInput = {
    compraId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type CompraProductoMinOrderByAggregateInput = {
    compraId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type CompraProductoSumOrderByAggregateInput = {
    compraId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClienteRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type EnvioListRelationFilter = {
    every?: EnvioWhereInput
    some?: EnvioWhereInput
    none?: EnvioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnvioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DireccionCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    calle1?: SortOrder
    calle2?: SortOrder
    codigoPostal?: SortOrder
    provincia?: SortOrder
    localidad?: SortOrder
    detalle?: SortOrder
  }

  export type DireccionAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
  }

  export type DireccionMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    calle1?: SortOrder
    calle2?: SortOrder
    codigoPostal?: SortOrder
    provincia?: SortOrder
    localidad?: SortOrder
    detalle?: SortOrder
  }

  export type DireccionMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    calle1?: SortOrder
    calle2?: SortOrder
    codigoPostal?: SortOrder
    provincia?: SortOrder
    localidad?: SortOrder
    detalle?: SortOrder
  }

  export type DireccionSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CompraListRelationFilter = {
    every?: CompraWhereInput
    some?: CompraWhereInput
    none?: CompraWhereInput
  }

  export type CompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistribuidorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DistribuidorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DistribuidorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DistribuidorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DistribuidorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpleadoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cargo?: SortOrder
  }

  export type EmpleadoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpleadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cargo?: SortOrder
  }

  export type EmpleadoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cargo?: SortOrder
  }

  export type EmpleadoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VentaRelationFilter = {
    is?: VentaWhereInput
    isNot?: VentaWhereInput
  }

  export type RepartidorRelationFilter = {
    is?: RepartidorWhereInput
    isNot?: RepartidorWhereInput
  }

  export type DireccionRelationFilter = {
    is?: DireccionWhereInput
    isNot?: DireccionWhereInput
  }

  export type EstadoEnvioRelationFilter = {
    is?: EstadoEnvioWhereInput
    isNot?: EstadoEnvioWhereInput
  }

  export type RepartidorEnvioListRelationFilter = {
    every?: RepartidorEnvioWhereInput
    some?: RepartidorEnvioWhereInput
    none?: RepartidorEnvioWhereInput
  }

  export type RepartidorEnvioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnvioCountOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    repartidorId?: SortOrder
    direccionId?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaUltimaActualizacion?: SortOrder
  }

  export type EnvioAvgOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    repartidorId?: SortOrder
    direccionId?: SortOrder
    estado?: SortOrder
  }

  export type EnvioMaxOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    repartidorId?: SortOrder
    direccionId?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaUltimaActualizacion?: SortOrder
  }

  export type EnvioMinOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    repartidorId?: SortOrder
    direccionId?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaUltimaActualizacion?: SortOrder
  }

  export type EnvioSumOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    repartidorId?: SortOrder
    direccionId?: SortOrder
    estado?: SortOrder
  }

  export type EstadoEnvioCountOrderByAggregateInput = {
    id?: SortOrder
    descEstado?: SortOrder
  }

  export type EstadoEnvioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstadoEnvioMaxOrderByAggregateInput = {
    id?: SortOrder
    descEstado?: SortOrder
  }

  export type EstadoEnvioMinOrderByAggregateInput = {
    id?: SortOrder
    descEstado?: SortOrder
  }

  export type EstadoEnvioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstadoVentaCountOrderByAggregateInput = {
    id?: SortOrder
    descEstado?: SortOrder
  }

  export type EstadoVentaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstadoVentaMaxOrderByAggregateInput = {
    id?: SortOrder
    descEstado?: SortOrder
  }

  export type EstadoVentaMinOrderByAggregateInput = {
    id?: SortOrder
    descEstado?: SortOrder
  }

  export type EstadoVentaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductoVentaListRelationFilter = {
    every?: ProductoVentaWhereInput
    some?: ProductoVentaWhereInput
    none?: ProductoVentaWhereInput
  }

  export type ProductoVentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cantidad?: SortOrder
    medida?: SortOrder
    marca?: SortOrder
    precio?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    medida?: SortOrder
    precio?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cantidad?: SortOrder
    medida?: SortOrder
    marca?: SortOrder
    precio?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cantidad?: SortOrder
    medida?: SortOrder
    marca?: SortOrder
    precio?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    medida?: SortOrder
    precio?: SortOrder
  }

  export type ProductoVentaVentaIdProductoIdCompoundUniqueInput = {
    ventaId: number
    productoId: number
  }

  export type ProductoVentaCountOrderByAggregateInput = {
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type ProductoVentaAvgOrderByAggregateInput = {
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type ProductoVentaMaxOrderByAggregateInput = {
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type ProductoVentaMinOrderByAggregateInput = {
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type ProductoVentaSumOrderByAggregateInput = {
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type RepartidorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
  }

  export type RepartidorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RepartidorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
  }

  export type RepartidorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
  }

  export type RepartidorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnvioRelationFilter = {
    is?: EnvioWhereInput
    isNot?: EnvioWhereInput
  }

  export type RepartidorEnvioRepartidorIdEnvioIdCompoundUniqueInput = {
    repartidorId: number
    envioId: number
  }

  export type RepartidorEnvioCountOrderByAggregateInput = {
    repartidorId?: SortOrder
    envioId?: SortOrder
    estado?: SortOrder
  }

  export type RepartidorEnvioAvgOrderByAggregateInput = {
    repartidorId?: SortOrder
    envioId?: SortOrder
    estado?: SortOrder
  }

  export type RepartidorEnvioMaxOrderByAggregateInput = {
    repartidorId?: SortOrder
    envioId?: SortOrder
    estado?: SortOrder
  }

  export type RepartidorEnvioMinOrderByAggregateInput = {
    repartidorId?: SortOrder
    envioId?: SortOrder
    estado?: SortOrder
  }

  export type RepartidorEnvioSumOrderByAggregateInput = {
    repartidorId?: SortOrder
    envioId?: SortOrder
    estado?: SortOrder
  }

  export type EstadoVentaRelationFilter = {
    is?: EstadoVentaWhereInput
    isNot?: EstadoVentaWhereInput
  }

  export type VentaCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaUltimaActualizacion?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    estado?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaUltimaActualizacion?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaUltimaActualizacion?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    estado?: SortOrder
  }

  export type EnumTipoEntidadFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEntidad | EnumTipoEntidadFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEntidad[] | ListEnumTipoEntidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEntidad[] | ListEnumTipoEntidadFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEntidadFilter<$PrismaModel> | $Enums.TipoEntidad
  }

  export type EntidadUsuarioListRelationFilter = {
    every?: EntidadUsuarioWhereInput
    some?: EntidadUsuarioWhereInput
    none?: EntidadUsuarioWhereInput
  }

  export type EntidadListRelationFilter = {
    every?: EntidadWhereInput
    some?: EntidadWhereInput
    none?: EntidadWhereInput
  }

  export type EntidadUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntidadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
  }

  export type EntidadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
  }

  export type EntidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
  }

  export type EntidadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTipoEntidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEntidad | EnumTipoEntidadFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEntidad[] | ListEnumTipoEntidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEntidad[] | ListEnumTipoEntidadFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEntidadWithAggregatesFilter<$PrismaModel> | $Enums.TipoEntidad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoEntidadFilter<$PrismaModel>
    _max?: NestedEnumTipoEntidadFilter<$PrismaModel>
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EntidadRelationFilter = {
    is?: EntidadWhereInput
    isNot?: EntidadWhereInput
  }

  export type EntidadUsuarioUsuarioIdEntidadIdCompoundUniqueInput = {
    usuarioId: number
    entidadId: number
  }

  export type EntidadUsuarioCountOrderByAggregateInput = {
    usuarioId?: SortOrder
    entidadId?: SortOrder
  }

  export type EntidadUsuarioAvgOrderByAggregateInput = {
    usuarioId?: SortOrder
    entidadId?: SortOrder
  }

  export type EntidadUsuarioMaxOrderByAggregateInput = {
    usuarioId?: SortOrder
    entidadId?: SortOrder
  }

  export type EntidadUsuarioMinOrderByAggregateInput = {
    usuarioId?: SortOrder
    entidadId?: SortOrder
  }

  export type EntidadUsuarioSumOrderByAggregateInput = {
    usuarioId?: SortOrder
    entidadId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    clave?: SortOrder
    habilitado?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    clave?: SortOrder
    habilitado?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    clave?: SortOrder
    habilitado?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DireccionCreateNestedManyWithoutClienteInput = {
    create?: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput> | DireccionCreateWithoutClienteInput[] | DireccionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutClienteInput | DireccionCreateOrConnectWithoutClienteInput[]
    createMany?: DireccionCreateManyClienteInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type VentaCreateNestedManyWithoutClienteInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type DireccionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput> | DireccionCreateWithoutClienteInput[] | DireccionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutClienteInput | DireccionCreateOrConnectWithoutClienteInput[]
    createMany?: DireccionCreateManyClienteInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DireccionUpdateManyWithoutClienteNestedInput = {
    create?: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput> | DireccionCreateWithoutClienteInput[] | DireccionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutClienteInput | DireccionCreateOrConnectWithoutClienteInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutClienteInput | DireccionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: DireccionCreateManyClienteInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutClienteInput | DireccionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutClienteInput | DireccionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type VentaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutClienteInput | VentaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutClienteInput | VentaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutClienteInput | VentaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DireccionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput> | DireccionCreateWithoutClienteInput[] | DireccionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutClienteInput | DireccionCreateOrConnectWithoutClienteInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutClienteInput | DireccionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: DireccionCreateManyClienteInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutClienteInput | DireccionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutClienteInput | DireccionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutClienteInput | VentaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutClienteInput | VentaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutClienteInput | VentaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type EmpleadoCreateNestedOneWithoutComprasInput = {
    create?: XOR<EmpleadoCreateWithoutComprasInput, EmpleadoUncheckedCreateWithoutComprasInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutComprasInput
    connect?: EmpleadoWhereUniqueInput
  }

  export type DistribuidorCreateNestedOneWithoutComprasInput = {
    create?: XOR<DistribuidorCreateWithoutComprasInput, DistribuidorUncheckedCreateWithoutComprasInput>
    connectOrCreate?: DistribuidorCreateOrConnectWithoutComprasInput
    connect?: DistribuidorWhereUniqueInput
  }

  export type CompraProductoCreateNestedManyWithoutCompraInput = {
    create?: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput> | CompraProductoCreateWithoutCompraInput[] | CompraProductoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutCompraInput | CompraProductoCreateOrConnectWithoutCompraInput[]
    createMany?: CompraProductoCreateManyCompraInputEnvelope
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
  }

  export type CompraProductoUncheckedCreateNestedManyWithoutCompraInput = {
    create?: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput> | CompraProductoCreateWithoutCompraInput[] | CompraProductoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutCompraInput | CompraProductoCreateOrConnectWithoutCompraInput[]
    createMany?: CompraProductoCreateManyCompraInputEnvelope
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmpleadoUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<EmpleadoCreateWithoutComprasInput, EmpleadoUncheckedCreateWithoutComprasInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutComprasInput
    upsert?: EmpleadoUpsertWithoutComprasInput
    connect?: EmpleadoWhereUniqueInput
    update?: XOR<XOR<EmpleadoUpdateToOneWithWhereWithoutComprasInput, EmpleadoUpdateWithoutComprasInput>, EmpleadoUncheckedUpdateWithoutComprasInput>
  }

  export type DistribuidorUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<DistribuidorCreateWithoutComprasInput, DistribuidorUncheckedCreateWithoutComprasInput>
    connectOrCreate?: DistribuidorCreateOrConnectWithoutComprasInput
    upsert?: DistribuidorUpsertWithoutComprasInput
    connect?: DistribuidorWhereUniqueInput
    update?: XOR<XOR<DistribuidorUpdateToOneWithWhereWithoutComprasInput, DistribuidorUpdateWithoutComprasInput>, DistribuidorUncheckedUpdateWithoutComprasInput>
  }

  export type CompraProductoUpdateManyWithoutCompraNestedInput = {
    create?: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput> | CompraProductoCreateWithoutCompraInput[] | CompraProductoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutCompraInput | CompraProductoCreateOrConnectWithoutCompraInput[]
    upsert?: CompraProductoUpsertWithWhereUniqueWithoutCompraInput | CompraProductoUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: CompraProductoCreateManyCompraInputEnvelope
    set?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    disconnect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    delete?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    update?: CompraProductoUpdateWithWhereUniqueWithoutCompraInput | CompraProductoUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: CompraProductoUpdateManyWithWhereWithoutCompraInput | CompraProductoUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
  }

  export type CompraProductoUncheckedUpdateManyWithoutCompraNestedInput = {
    create?: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput> | CompraProductoCreateWithoutCompraInput[] | CompraProductoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutCompraInput | CompraProductoCreateOrConnectWithoutCompraInput[]
    upsert?: CompraProductoUpsertWithWhereUniqueWithoutCompraInput | CompraProductoUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: CompraProductoCreateManyCompraInputEnvelope
    set?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    disconnect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    delete?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    update?: CompraProductoUpdateWithWhereUniqueWithoutCompraInput | CompraProductoUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: CompraProductoUpdateManyWithWhereWithoutCompraInput | CompraProductoUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
  }

  export type CompraCreateNestedOneWithoutProductosInput = {
    create?: XOR<CompraCreateWithoutProductosInput, CompraUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CompraCreateOrConnectWithoutProductosInput
    connect?: CompraWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutComprasInput = {
    create?: XOR<ProductoCreateWithoutComprasInput, ProductoUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutComprasInput
    connect?: ProductoWhereUniqueInput
  }

  export type CompraUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CompraCreateWithoutProductosInput, CompraUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CompraCreateOrConnectWithoutProductosInput
    upsert?: CompraUpsertWithoutProductosInput
    connect?: CompraWhereUniqueInput
    update?: XOR<XOR<CompraUpdateToOneWithWhereWithoutProductosInput, CompraUpdateWithoutProductosInput>, CompraUncheckedUpdateWithoutProductosInput>
  }

  export type ProductoUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<ProductoCreateWithoutComprasInput, ProductoUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutComprasInput
    upsert?: ProductoUpsertWithoutComprasInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutComprasInput, ProductoUpdateWithoutComprasInput>, ProductoUncheckedUpdateWithoutComprasInput>
  }

  export type ClienteCreateNestedOneWithoutDireccionesInput = {
    create?: XOR<ClienteCreateWithoutDireccionesInput, ClienteUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutDireccionesInput
    connect?: ClienteWhereUniqueInput
  }

  export type EnvioCreateNestedManyWithoutDireccionInput = {
    create?: XOR<EnvioCreateWithoutDireccionInput, EnvioUncheckedCreateWithoutDireccionInput> | EnvioCreateWithoutDireccionInput[] | EnvioUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutDireccionInput | EnvioCreateOrConnectWithoutDireccionInput[]
    createMany?: EnvioCreateManyDireccionInputEnvelope
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
  }

  export type EnvioUncheckedCreateNestedManyWithoutDireccionInput = {
    create?: XOR<EnvioCreateWithoutDireccionInput, EnvioUncheckedCreateWithoutDireccionInput> | EnvioCreateWithoutDireccionInput[] | EnvioUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutDireccionInput | EnvioCreateOrConnectWithoutDireccionInput[]
    createMany?: EnvioCreateManyDireccionInputEnvelope
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClienteUpdateOneRequiredWithoutDireccionesNestedInput = {
    create?: XOR<ClienteCreateWithoutDireccionesInput, ClienteUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutDireccionesInput
    upsert?: ClienteUpsertWithoutDireccionesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutDireccionesInput, ClienteUpdateWithoutDireccionesInput>, ClienteUncheckedUpdateWithoutDireccionesInput>
  }

  export type EnvioUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<EnvioCreateWithoutDireccionInput, EnvioUncheckedCreateWithoutDireccionInput> | EnvioCreateWithoutDireccionInput[] | EnvioUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutDireccionInput | EnvioCreateOrConnectWithoutDireccionInput[]
    upsert?: EnvioUpsertWithWhereUniqueWithoutDireccionInput | EnvioUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: EnvioCreateManyDireccionInputEnvelope
    set?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    disconnect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    delete?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    update?: EnvioUpdateWithWhereUniqueWithoutDireccionInput | EnvioUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: EnvioUpdateManyWithWhereWithoutDireccionInput | EnvioUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
  }

  export type EnvioUncheckedUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<EnvioCreateWithoutDireccionInput, EnvioUncheckedCreateWithoutDireccionInput> | EnvioCreateWithoutDireccionInput[] | EnvioUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutDireccionInput | EnvioCreateOrConnectWithoutDireccionInput[]
    upsert?: EnvioUpsertWithWhereUniqueWithoutDireccionInput | EnvioUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: EnvioCreateManyDireccionInputEnvelope
    set?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    disconnect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    delete?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    update?: EnvioUpdateWithWhereUniqueWithoutDireccionInput | EnvioUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: EnvioUpdateManyWithWhereWithoutDireccionInput | EnvioUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
  }

  export type CompraCreateNestedManyWithoutDistribuidorInput = {
    create?: XOR<CompraCreateWithoutDistribuidorInput, CompraUncheckedCreateWithoutDistribuidorInput> | CompraCreateWithoutDistribuidorInput[] | CompraUncheckedCreateWithoutDistribuidorInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutDistribuidorInput | CompraCreateOrConnectWithoutDistribuidorInput[]
    createMany?: CompraCreateManyDistribuidorInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CompraUncheckedCreateNestedManyWithoutDistribuidorInput = {
    create?: XOR<CompraCreateWithoutDistribuidorInput, CompraUncheckedCreateWithoutDistribuidorInput> | CompraCreateWithoutDistribuidorInput[] | CompraUncheckedCreateWithoutDistribuidorInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutDistribuidorInput | CompraCreateOrConnectWithoutDistribuidorInput[]
    createMany?: CompraCreateManyDistribuidorInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CompraUpdateManyWithoutDistribuidorNestedInput = {
    create?: XOR<CompraCreateWithoutDistribuidorInput, CompraUncheckedCreateWithoutDistribuidorInput> | CompraCreateWithoutDistribuidorInput[] | CompraUncheckedCreateWithoutDistribuidorInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutDistribuidorInput | CompraCreateOrConnectWithoutDistribuidorInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutDistribuidorInput | CompraUpsertWithWhereUniqueWithoutDistribuidorInput[]
    createMany?: CompraCreateManyDistribuidorInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutDistribuidorInput | CompraUpdateWithWhereUniqueWithoutDistribuidorInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutDistribuidorInput | CompraUpdateManyWithWhereWithoutDistribuidorInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type CompraUncheckedUpdateManyWithoutDistribuidorNestedInput = {
    create?: XOR<CompraCreateWithoutDistribuidorInput, CompraUncheckedCreateWithoutDistribuidorInput> | CompraCreateWithoutDistribuidorInput[] | CompraUncheckedCreateWithoutDistribuidorInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutDistribuidorInput | CompraCreateOrConnectWithoutDistribuidorInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutDistribuidorInput | CompraUpsertWithWhereUniqueWithoutDistribuidorInput[]
    createMany?: CompraCreateManyDistribuidorInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutDistribuidorInput | CompraUpdateWithWhereUniqueWithoutDistribuidorInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutDistribuidorInput | CompraUpdateManyWithWhereWithoutDistribuidorInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type CompraCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<CompraCreateWithoutEmpleadoInput, CompraUncheckedCreateWithoutEmpleadoInput> | CompraCreateWithoutEmpleadoInput[] | CompraUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutEmpleadoInput | CompraCreateOrConnectWithoutEmpleadoInput[]
    createMany?: CompraCreateManyEmpleadoInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CompraUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<CompraCreateWithoutEmpleadoInput, CompraUncheckedCreateWithoutEmpleadoInput> | CompraCreateWithoutEmpleadoInput[] | CompraUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutEmpleadoInput | CompraCreateOrConnectWithoutEmpleadoInput[]
    createMany?: CompraCreateManyEmpleadoInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CompraUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<CompraCreateWithoutEmpleadoInput, CompraUncheckedCreateWithoutEmpleadoInput> | CompraCreateWithoutEmpleadoInput[] | CompraUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutEmpleadoInput | CompraCreateOrConnectWithoutEmpleadoInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutEmpleadoInput | CompraUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: CompraCreateManyEmpleadoInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutEmpleadoInput | CompraUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutEmpleadoInput | CompraUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type CompraUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<CompraCreateWithoutEmpleadoInput, CompraUncheckedCreateWithoutEmpleadoInput> | CompraCreateWithoutEmpleadoInput[] | CompraUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutEmpleadoInput | CompraCreateOrConnectWithoutEmpleadoInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutEmpleadoInput | CompraUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: CompraCreateManyEmpleadoInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutEmpleadoInput | CompraUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutEmpleadoInput | CompraUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type VentaCreateNestedOneWithoutEnviosInput = {
    create?: XOR<VentaCreateWithoutEnviosInput, VentaUncheckedCreateWithoutEnviosInput>
    connectOrCreate?: VentaCreateOrConnectWithoutEnviosInput
    connect?: VentaWhereUniqueInput
  }

  export type RepartidorCreateNestedOneWithoutEnviosDirectInput = {
    create?: XOR<RepartidorCreateWithoutEnviosDirectInput, RepartidorUncheckedCreateWithoutEnviosDirectInput>
    connectOrCreate?: RepartidorCreateOrConnectWithoutEnviosDirectInput
    connect?: RepartidorWhereUniqueInput
  }

  export type DireccionCreateNestedOneWithoutEnviosInput = {
    create?: XOR<DireccionCreateWithoutEnviosInput, DireccionUncheckedCreateWithoutEnviosInput>
    connectOrCreate?: DireccionCreateOrConnectWithoutEnviosInput
    connect?: DireccionWhereUniqueInput
  }

  export type EstadoEnvioCreateNestedOneWithoutEnviosInput = {
    create?: XOR<EstadoEnvioCreateWithoutEnviosInput, EstadoEnvioUncheckedCreateWithoutEnviosInput>
    connectOrCreate?: EstadoEnvioCreateOrConnectWithoutEnviosInput
    connect?: EstadoEnvioWhereUniqueInput
  }

  export type RepartidorEnvioCreateNestedManyWithoutEnvioInput = {
    create?: XOR<RepartidorEnvioCreateWithoutEnvioInput, RepartidorEnvioUncheckedCreateWithoutEnvioInput> | RepartidorEnvioCreateWithoutEnvioInput[] | RepartidorEnvioUncheckedCreateWithoutEnvioInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutEnvioInput | RepartidorEnvioCreateOrConnectWithoutEnvioInput[]
    createMany?: RepartidorEnvioCreateManyEnvioInputEnvelope
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
  }

  export type RepartidorEnvioUncheckedCreateNestedManyWithoutEnvioInput = {
    create?: XOR<RepartidorEnvioCreateWithoutEnvioInput, RepartidorEnvioUncheckedCreateWithoutEnvioInput> | RepartidorEnvioCreateWithoutEnvioInput[] | RepartidorEnvioUncheckedCreateWithoutEnvioInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutEnvioInput | RepartidorEnvioCreateOrConnectWithoutEnvioInput[]
    createMany?: RepartidorEnvioCreateManyEnvioInputEnvelope
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
  }

  export type VentaUpdateOneRequiredWithoutEnviosNestedInput = {
    create?: XOR<VentaCreateWithoutEnviosInput, VentaUncheckedCreateWithoutEnviosInput>
    connectOrCreate?: VentaCreateOrConnectWithoutEnviosInput
    upsert?: VentaUpsertWithoutEnviosInput
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutEnviosInput, VentaUpdateWithoutEnviosInput>, VentaUncheckedUpdateWithoutEnviosInput>
  }

  export type RepartidorUpdateOneRequiredWithoutEnviosDirectNestedInput = {
    create?: XOR<RepartidorCreateWithoutEnviosDirectInput, RepartidorUncheckedCreateWithoutEnviosDirectInput>
    connectOrCreate?: RepartidorCreateOrConnectWithoutEnviosDirectInput
    upsert?: RepartidorUpsertWithoutEnviosDirectInput
    connect?: RepartidorWhereUniqueInput
    update?: XOR<XOR<RepartidorUpdateToOneWithWhereWithoutEnviosDirectInput, RepartidorUpdateWithoutEnviosDirectInput>, RepartidorUncheckedUpdateWithoutEnviosDirectInput>
  }

  export type DireccionUpdateOneRequiredWithoutEnviosNestedInput = {
    create?: XOR<DireccionCreateWithoutEnviosInput, DireccionUncheckedCreateWithoutEnviosInput>
    connectOrCreate?: DireccionCreateOrConnectWithoutEnviosInput
    upsert?: DireccionUpsertWithoutEnviosInput
    connect?: DireccionWhereUniqueInput
    update?: XOR<XOR<DireccionUpdateToOneWithWhereWithoutEnviosInput, DireccionUpdateWithoutEnviosInput>, DireccionUncheckedUpdateWithoutEnviosInput>
  }

  export type EstadoEnvioUpdateOneRequiredWithoutEnviosNestedInput = {
    create?: XOR<EstadoEnvioCreateWithoutEnviosInput, EstadoEnvioUncheckedCreateWithoutEnviosInput>
    connectOrCreate?: EstadoEnvioCreateOrConnectWithoutEnviosInput
    upsert?: EstadoEnvioUpsertWithoutEnviosInput
    connect?: EstadoEnvioWhereUniqueInput
    update?: XOR<XOR<EstadoEnvioUpdateToOneWithWhereWithoutEnviosInput, EstadoEnvioUpdateWithoutEnviosInput>, EstadoEnvioUncheckedUpdateWithoutEnviosInput>
  }

  export type RepartidorEnvioUpdateManyWithoutEnvioNestedInput = {
    create?: XOR<RepartidorEnvioCreateWithoutEnvioInput, RepartidorEnvioUncheckedCreateWithoutEnvioInput> | RepartidorEnvioCreateWithoutEnvioInput[] | RepartidorEnvioUncheckedCreateWithoutEnvioInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutEnvioInput | RepartidorEnvioCreateOrConnectWithoutEnvioInput[]
    upsert?: RepartidorEnvioUpsertWithWhereUniqueWithoutEnvioInput | RepartidorEnvioUpsertWithWhereUniqueWithoutEnvioInput[]
    createMany?: RepartidorEnvioCreateManyEnvioInputEnvelope
    set?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    disconnect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    delete?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    update?: RepartidorEnvioUpdateWithWhereUniqueWithoutEnvioInput | RepartidorEnvioUpdateWithWhereUniqueWithoutEnvioInput[]
    updateMany?: RepartidorEnvioUpdateManyWithWhereWithoutEnvioInput | RepartidorEnvioUpdateManyWithWhereWithoutEnvioInput[]
    deleteMany?: RepartidorEnvioScalarWhereInput | RepartidorEnvioScalarWhereInput[]
  }

  export type RepartidorEnvioUncheckedUpdateManyWithoutEnvioNestedInput = {
    create?: XOR<RepartidorEnvioCreateWithoutEnvioInput, RepartidorEnvioUncheckedCreateWithoutEnvioInput> | RepartidorEnvioCreateWithoutEnvioInput[] | RepartidorEnvioUncheckedCreateWithoutEnvioInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutEnvioInput | RepartidorEnvioCreateOrConnectWithoutEnvioInput[]
    upsert?: RepartidorEnvioUpsertWithWhereUniqueWithoutEnvioInput | RepartidorEnvioUpsertWithWhereUniqueWithoutEnvioInput[]
    createMany?: RepartidorEnvioCreateManyEnvioInputEnvelope
    set?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    disconnect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    delete?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    update?: RepartidorEnvioUpdateWithWhereUniqueWithoutEnvioInput | RepartidorEnvioUpdateWithWhereUniqueWithoutEnvioInput[]
    updateMany?: RepartidorEnvioUpdateManyWithWhereWithoutEnvioInput | RepartidorEnvioUpdateManyWithWhereWithoutEnvioInput[]
    deleteMany?: RepartidorEnvioScalarWhereInput | RepartidorEnvioScalarWhereInput[]
  }

  export type EnvioCreateNestedManyWithoutEstadoEnvioInput = {
    create?: XOR<EnvioCreateWithoutEstadoEnvioInput, EnvioUncheckedCreateWithoutEstadoEnvioInput> | EnvioCreateWithoutEstadoEnvioInput[] | EnvioUncheckedCreateWithoutEstadoEnvioInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutEstadoEnvioInput | EnvioCreateOrConnectWithoutEstadoEnvioInput[]
    createMany?: EnvioCreateManyEstadoEnvioInputEnvelope
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
  }

  export type RepartidorEnvioCreateNestedManyWithoutEstadoEnvioInput = {
    create?: XOR<RepartidorEnvioCreateWithoutEstadoEnvioInput, RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput> | RepartidorEnvioCreateWithoutEstadoEnvioInput[] | RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutEstadoEnvioInput | RepartidorEnvioCreateOrConnectWithoutEstadoEnvioInput[]
    createMany?: RepartidorEnvioCreateManyEstadoEnvioInputEnvelope
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
  }

  export type EnvioUncheckedCreateNestedManyWithoutEstadoEnvioInput = {
    create?: XOR<EnvioCreateWithoutEstadoEnvioInput, EnvioUncheckedCreateWithoutEstadoEnvioInput> | EnvioCreateWithoutEstadoEnvioInput[] | EnvioUncheckedCreateWithoutEstadoEnvioInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutEstadoEnvioInput | EnvioCreateOrConnectWithoutEstadoEnvioInput[]
    createMany?: EnvioCreateManyEstadoEnvioInputEnvelope
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
  }

  export type RepartidorEnvioUncheckedCreateNestedManyWithoutEstadoEnvioInput = {
    create?: XOR<RepartidorEnvioCreateWithoutEstadoEnvioInput, RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput> | RepartidorEnvioCreateWithoutEstadoEnvioInput[] | RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutEstadoEnvioInput | RepartidorEnvioCreateOrConnectWithoutEstadoEnvioInput[]
    createMany?: RepartidorEnvioCreateManyEstadoEnvioInputEnvelope
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
  }

  export type EnvioUpdateManyWithoutEstadoEnvioNestedInput = {
    create?: XOR<EnvioCreateWithoutEstadoEnvioInput, EnvioUncheckedCreateWithoutEstadoEnvioInput> | EnvioCreateWithoutEstadoEnvioInput[] | EnvioUncheckedCreateWithoutEstadoEnvioInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutEstadoEnvioInput | EnvioCreateOrConnectWithoutEstadoEnvioInput[]
    upsert?: EnvioUpsertWithWhereUniqueWithoutEstadoEnvioInput | EnvioUpsertWithWhereUniqueWithoutEstadoEnvioInput[]
    createMany?: EnvioCreateManyEstadoEnvioInputEnvelope
    set?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    disconnect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    delete?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    update?: EnvioUpdateWithWhereUniqueWithoutEstadoEnvioInput | EnvioUpdateWithWhereUniqueWithoutEstadoEnvioInput[]
    updateMany?: EnvioUpdateManyWithWhereWithoutEstadoEnvioInput | EnvioUpdateManyWithWhereWithoutEstadoEnvioInput[]
    deleteMany?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
  }

  export type RepartidorEnvioUpdateManyWithoutEstadoEnvioNestedInput = {
    create?: XOR<RepartidorEnvioCreateWithoutEstadoEnvioInput, RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput> | RepartidorEnvioCreateWithoutEstadoEnvioInput[] | RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutEstadoEnvioInput | RepartidorEnvioCreateOrConnectWithoutEstadoEnvioInput[]
    upsert?: RepartidorEnvioUpsertWithWhereUniqueWithoutEstadoEnvioInput | RepartidorEnvioUpsertWithWhereUniqueWithoutEstadoEnvioInput[]
    createMany?: RepartidorEnvioCreateManyEstadoEnvioInputEnvelope
    set?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    disconnect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    delete?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    update?: RepartidorEnvioUpdateWithWhereUniqueWithoutEstadoEnvioInput | RepartidorEnvioUpdateWithWhereUniqueWithoutEstadoEnvioInput[]
    updateMany?: RepartidorEnvioUpdateManyWithWhereWithoutEstadoEnvioInput | RepartidorEnvioUpdateManyWithWhereWithoutEstadoEnvioInput[]
    deleteMany?: RepartidorEnvioScalarWhereInput | RepartidorEnvioScalarWhereInput[]
  }

  export type EnvioUncheckedUpdateManyWithoutEstadoEnvioNestedInput = {
    create?: XOR<EnvioCreateWithoutEstadoEnvioInput, EnvioUncheckedCreateWithoutEstadoEnvioInput> | EnvioCreateWithoutEstadoEnvioInput[] | EnvioUncheckedCreateWithoutEstadoEnvioInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutEstadoEnvioInput | EnvioCreateOrConnectWithoutEstadoEnvioInput[]
    upsert?: EnvioUpsertWithWhereUniqueWithoutEstadoEnvioInput | EnvioUpsertWithWhereUniqueWithoutEstadoEnvioInput[]
    createMany?: EnvioCreateManyEstadoEnvioInputEnvelope
    set?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    disconnect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    delete?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    update?: EnvioUpdateWithWhereUniqueWithoutEstadoEnvioInput | EnvioUpdateWithWhereUniqueWithoutEstadoEnvioInput[]
    updateMany?: EnvioUpdateManyWithWhereWithoutEstadoEnvioInput | EnvioUpdateManyWithWhereWithoutEstadoEnvioInput[]
    deleteMany?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
  }

  export type RepartidorEnvioUncheckedUpdateManyWithoutEstadoEnvioNestedInput = {
    create?: XOR<RepartidorEnvioCreateWithoutEstadoEnvioInput, RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput> | RepartidorEnvioCreateWithoutEstadoEnvioInput[] | RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutEstadoEnvioInput | RepartidorEnvioCreateOrConnectWithoutEstadoEnvioInput[]
    upsert?: RepartidorEnvioUpsertWithWhereUniqueWithoutEstadoEnvioInput | RepartidorEnvioUpsertWithWhereUniqueWithoutEstadoEnvioInput[]
    createMany?: RepartidorEnvioCreateManyEstadoEnvioInputEnvelope
    set?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    disconnect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    delete?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    update?: RepartidorEnvioUpdateWithWhereUniqueWithoutEstadoEnvioInput | RepartidorEnvioUpdateWithWhereUniqueWithoutEstadoEnvioInput[]
    updateMany?: RepartidorEnvioUpdateManyWithWhereWithoutEstadoEnvioInput | RepartidorEnvioUpdateManyWithWhereWithoutEstadoEnvioInput[]
    deleteMany?: RepartidorEnvioScalarWhereInput | RepartidorEnvioScalarWhereInput[]
  }

  export type VentaCreateNestedManyWithoutEstadoVentaInput = {
    create?: XOR<VentaCreateWithoutEstadoVentaInput, VentaUncheckedCreateWithoutEstadoVentaInput> | VentaCreateWithoutEstadoVentaInput[] | VentaUncheckedCreateWithoutEstadoVentaInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutEstadoVentaInput | VentaCreateOrConnectWithoutEstadoVentaInput[]
    createMany?: VentaCreateManyEstadoVentaInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutEstadoVentaInput = {
    create?: XOR<VentaCreateWithoutEstadoVentaInput, VentaUncheckedCreateWithoutEstadoVentaInput> | VentaCreateWithoutEstadoVentaInput[] | VentaUncheckedCreateWithoutEstadoVentaInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutEstadoVentaInput | VentaCreateOrConnectWithoutEstadoVentaInput[]
    createMany?: VentaCreateManyEstadoVentaInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type VentaUpdateManyWithoutEstadoVentaNestedInput = {
    create?: XOR<VentaCreateWithoutEstadoVentaInput, VentaUncheckedCreateWithoutEstadoVentaInput> | VentaCreateWithoutEstadoVentaInput[] | VentaUncheckedCreateWithoutEstadoVentaInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutEstadoVentaInput | VentaCreateOrConnectWithoutEstadoVentaInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutEstadoVentaInput | VentaUpsertWithWhereUniqueWithoutEstadoVentaInput[]
    createMany?: VentaCreateManyEstadoVentaInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutEstadoVentaInput | VentaUpdateWithWhereUniqueWithoutEstadoVentaInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutEstadoVentaInput | VentaUpdateManyWithWhereWithoutEstadoVentaInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutEstadoVentaNestedInput = {
    create?: XOR<VentaCreateWithoutEstadoVentaInput, VentaUncheckedCreateWithoutEstadoVentaInput> | VentaCreateWithoutEstadoVentaInput[] | VentaUncheckedCreateWithoutEstadoVentaInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutEstadoVentaInput | VentaCreateOrConnectWithoutEstadoVentaInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutEstadoVentaInput | VentaUpsertWithWhereUniqueWithoutEstadoVentaInput[]
    createMany?: VentaCreateManyEstadoVentaInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutEstadoVentaInput | VentaUpdateWithWhereUniqueWithoutEstadoVentaInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutEstadoVentaInput | VentaUpdateManyWithWhereWithoutEstadoVentaInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type CompraProductoCreateNestedManyWithoutProductoInput = {
    create?: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput> | CompraProductoCreateWithoutProductoInput[] | CompraProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutProductoInput | CompraProductoCreateOrConnectWithoutProductoInput[]
    createMany?: CompraProductoCreateManyProductoInputEnvelope
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
  }

  export type ProductoVentaCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoVentaCreateWithoutProductoInput, ProductoVentaUncheckedCreateWithoutProductoInput> | ProductoVentaCreateWithoutProductoInput[] | ProductoVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoVentaCreateOrConnectWithoutProductoInput | ProductoVentaCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoVentaCreateManyProductoInputEnvelope
    connect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
  }

  export type CompraProductoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput> | CompraProductoCreateWithoutProductoInput[] | CompraProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutProductoInput | CompraProductoCreateOrConnectWithoutProductoInput[]
    createMany?: CompraProductoCreateManyProductoInputEnvelope
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
  }

  export type ProductoVentaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoVentaCreateWithoutProductoInput, ProductoVentaUncheckedCreateWithoutProductoInput> | ProductoVentaCreateWithoutProductoInput[] | ProductoVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoVentaCreateOrConnectWithoutProductoInput | ProductoVentaCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoVentaCreateManyProductoInputEnvelope
    connect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
  }

  export type CompraProductoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput> | CompraProductoCreateWithoutProductoInput[] | CompraProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutProductoInput | CompraProductoCreateOrConnectWithoutProductoInput[]
    upsert?: CompraProductoUpsertWithWhereUniqueWithoutProductoInput | CompraProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CompraProductoCreateManyProductoInputEnvelope
    set?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    disconnect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    delete?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    update?: CompraProductoUpdateWithWhereUniqueWithoutProductoInput | CompraProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CompraProductoUpdateManyWithWhereWithoutProductoInput | CompraProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
  }

  export type ProductoVentaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoVentaCreateWithoutProductoInput, ProductoVentaUncheckedCreateWithoutProductoInput> | ProductoVentaCreateWithoutProductoInput[] | ProductoVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoVentaCreateOrConnectWithoutProductoInput | ProductoVentaCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoVentaUpsertWithWhereUniqueWithoutProductoInput | ProductoVentaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoVentaCreateManyProductoInputEnvelope
    set?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    disconnect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    delete?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    connect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    update?: ProductoVentaUpdateWithWhereUniqueWithoutProductoInput | ProductoVentaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoVentaUpdateManyWithWhereWithoutProductoInput | ProductoVentaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoVentaScalarWhereInput | ProductoVentaScalarWhereInput[]
  }

  export type CompraProductoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput> | CompraProductoCreateWithoutProductoInput[] | CompraProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutProductoInput | CompraProductoCreateOrConnectWithoutProductoInput[]
    upsert?: CompraProductoUpsertWithWhereUniqueWithoutProductoInput | CompraProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CompraProductoCreateManyProductoInputEnvelope
    set?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    disconnect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    delete?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    update?: CompraProductoUpdateWithWhereUniqueWithoutProductoInput | CompraProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CompraProductoUpdateManyWithWhereWithoutProductoInput | CompraProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
  }

  export type ProductoVentaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoVentaCreateWithoutProductoInput, ProductoVentaUncheckedCreateWithoutProductoInput> | ProductoVentaCreateWithoutProductoInput[] | ProductoVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoVentaCreateOrConnectWithoutProductoInput | ProductoVentaCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoVentaUpsertWithWhereUniqueWithoutProductoInput | ProductoVentaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoVentaCreateManyProductoInputEnvelope
    set?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    disconnect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    delete?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    connect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    update?: ProductoVentaUpdateWithWhereUniqueWithoutProductoInput | ProductoVentaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoVentaUpdateManyWithWhereWithoutProductoInput | ProductoVentaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoVentaScalarWhereInput | ProductoVentaScalarWhereInput[]
  }

  export type VentaCreateNestedOneWithoutProductosInput = {
    create?: XOR<VentaCreateWithoutProductosInput, VentaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: VentaCreateOrConnectWithoutProductosInput
    connect?: VentaWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutVentasInput = {
    create?: XOR<ProductoCreateWithoutVentasInput, ProductoUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutVentasInput
    connect?: ProductoWhereUniqueInput
  }

  export type VentaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<VentaCreateWithoutProductosInput, VentaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: VentaCreateOrConnectWithoutProductosInput
    upsert?: VentaUpsertWithoutProductosInput
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutProductosInput, VentaUpdateWithoutProductosInput>, VentaUncheckedUpdateWithoutProductosInput>
  }

  export type ProductoUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<ProductoCreateWithoutVentasInput, ProductoUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutVentasInput
    upsert?: ProductoUpsertWithoutVentasInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutVentasInput, ProductoUpdateWithoutVentasInput>, ProductoUncheckedUpdateWithoutVentasInput>
  }

  export type RepartidorEnvioCreateNestedManyWithoutRepartidorInput = {
    create?: XOR<RepartidorEnvioCreateWithoutRepartidorInput, RepartidorEnvioUncheckedCreateWithoutRepartidorInput> | RepartidorEnvioCreateWithoutRepartidorInput[] | RepartidorEnvioUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutRepartidorInput | RepartidorEnvioCreateOrConnectWithoutRepartidorInput[]
    createMany?: RepartidorEnvioCreateManyRepartidorInputEnvelope
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
  }

  export type EnvioCreateNestedManyWithoutRepartidorInput = {
    create?: XOR<EnvioCreateWithoutRepartidorInput, EnvioUncheckedCreateWithoutRepartidorInput> | EnvioCreateWithoutRepartidorInput[] | EnvioUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutRepartidorInput | EnvioCreateOrConnectWithoutRepartidorInput[]
    createMany?: EnvioCreateManyRepartidorInputEnvelope
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
  }

  export type RepartidorEnvioUncheckedCreateNestedManyWithoutRepartidorInput = {
    create?: XOR<RepartidorEnvioCreateWithoutRepartidorInput, RepartidorEnvioUncheckedCreateWithoutRepartidorInput> | RepartidorEnvioCreateWithoutRepartidorInput[] | RepartidorEnvioUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutRepartidorInput | RepartidorEnvioCreateOrConnectWithoutRepartidorInput[]
    createMany?: RepartidorEnvioCreateManyRepartidorInputEnvelope
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
  }

  export type EnvioUncheckedCreateNestedManyWithoutRepartidorInput = {
    create?: XOR<EnvioCreateWithoutRepartidorInput, EnvioUncheckedCreateWithoutRepartidorInput> | EnvioCreateWithoutRepartidorInput[] | EnvioUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutRepartidorInput | EnvioCreateOrConnectWithoutRepartidorInput[]
    createMany?: EnvioCreateManyRepartidorInputEnvelope
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
  }

  export type RepartidorEnvioUpdateManyWithoutRepartidorNestedInput = {
    create?: XOR<RepartidorEnvioCreateWithoutRepartidorInput, RepartidorEnvioUncheckedCreateWithoutRepartidorInput> | RepartidorEnvioCreateWithoutRepartidorInput[] | RepartidorEnvioUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutRepartidorInput | RepartidorEnvioCreateOrConnectWithoutRepartidorInput[]
    upsert?: RepartidorEnvioUpsertWithWhereUniqueWithoutRepartidorInput | RepartidorEnvioUpsertWithWhereUniqueWithoutRepartidorInput[]
    createMany?: RepartidorEnvioCreateManyRepartidorInputEnvelope
    set?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    disconnect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    delete?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    update?: RepartidorEnvioUpdateWithWhereUniqueWithoutRepartidorInput | RepartidorEnvioUpdateWithWhereUniqueWithoutRepartidorInput[]
    updateMany?: RepartidorEnvioUpdateManyWithWhereWithoutRepartidorInput | RepartidorEnvioUpdateManyWithWhereWithoutRepartidorInput[]
    deleteMany?: RepartidorEnvioScalarWhereInput | RepartidorEnvioScalarWhereInput[]
  }

  export type EnvioUpdateManyWithoutRepartidorNestedInput = {
    create?: XOR<EnvioCreateWithoutRepartidorInput, EnvioUncheckedCreateWithoutRepartidorInput> | EnvioCreateWithoutRepartidorInput[] | EnvioUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutRepartidorInput | EnvioCreateOrConnectWithoutRepartidorInput[]
    upsert?: EnvioUpsertWithWhereUniqueWithoutRepartidorInput | EnvioUpsertWithWhereUniqueWithoutRepartidorInput[]
    createMany?: EnvioCreateManyRepartidorInputEnvelope
    set?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    disconnect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    delete?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    update?: EnvioUpdateWithWhereUniqueWithoutRepartidorInput | EnvioUpdateWithWhereUniqueWithoutRepartidorInput[]
    updateMany?: EnvioUpdateManyWithWhereWithoutRepartidorInput | EnvioUpdateManyWithWhereWithoutRepartidorInput[]
    deleteMany?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
  }

  export type RepartidorEnvioUncheckedUpdateManyWithoutRepartidorNestedInput = {
    create?: XOR<RepartidorEnvioCreateWithoutRepartidorInput, RepartidorEnvioUncheckedCreateWithoutRepartidorInput> | RepartidorEnvioCreateWithoutRepartidorInput[] | RepartidorEnvioUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: RepartidorEnvioCreateOrConnectWithoutRepartidorInput | RepartidorEnvioCreateOrConnectWithoutRepartidorInput[]
    upsert?: RepartidorEnvioUpsertWithWhereUniqueWithoutRepartidorInput | RepartidorEnvioUpsertWithWhereUniqueWithoutRepartidorInput[]
    createMany?: RepartidorEnvioCreateManyRepartidorInputEnvelope
    set?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    disconnect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    delete?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    connect?: RepartidorEnvioWhereUniqueInput | RepartidorEnvioWhereUniqueInput[]
    update?: RepartidorEnvioUpdateWithWhereUniqueWithoutRepartidorInput | RepartidorEnvioUpdateWithWhereUniqueWithoutRepartidorInput[]
    updateMany?: RepartidorEnvioUpdateManyWithWhereWithoutRepartidorInput | RepartidorEnvioUpdateManyWithWhereWithoutRepartidorInput[]
    deleteMany?: RepartidorEnvioScalarWhereInput | RepartidorEnvioScalarWhereInput[]
  }

  export type EnvioUncheckedUpdateManyWithoutRepartidorNestedInput = {
    create?: XOR<EnvioCreateWithoutRepartidorInput, EnvioUncheckedCreateWithoutRepartidorInput> | EnvioCreateWithoutRepartidorInput[] | EnvioUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutRepartidorInput | EnvioCreateOrConnectWithoutRepartidorInput[]
    upsert?: EnvioUpsertWithWhereUniqueWithoutRepartidorInput | EnvioUpsertWithWhereUniqueWithoutRepartidorInput[]
    createMany?: EnvioCreateManyRepartidorInputEnvelope
    set?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    disconnect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    delete?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    update?: EnvioUpdateWithWhereUniqueWithoutRepartidorInput | EnvioUpdateWithWhereUniqueWithoutRepartidorInput[]
    updateMany?: EnvioUpdateManyWithWhereWithoutRepartidorInput | EnvioUpdateManyWithWhereWithoutRepartidorInput[]
    deleteMany?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
  }

  export type RepartidorCreateNestedOneWithoutEnviosInput = {
    create?: XOR<RepartidorCreateWithoutEnviosInput, RepartidorUncheckedCreateWithoutEnviosInput>
    connectOrCreate?: RepartidorCreateOrConnectWithoutEnviosInput
    connect?: RepartidorWhereUniqueInput
  }

  export type EnvioCreateNestedOneWithoutRepartidoresEnviosInput = {
    create?: XOR<EnvioCreateWithoutRepartidoresEnviosInput, EnvioUncheckedCreateWithoutRepartidoresEnviosInput>
    connectOrCreate?: EnvioCreateOrConnectWithoutRepartidoresEnviosInput
    connect?: EnvioWhereUniqueInput
  }

  export type EstadoEnvioCreateNestedOneWithoutRepartidorEnviosInput = {
    create?: XOR<EstadoEnvioCreateWithoutRepartidorEnviosInput, EstadoEnvioUncheckedCreateWithoutRepartidorEnviosInput>
    connectOrCreate?: EstadoEnvioCreateOrConnectWithoutRepartidorEnviosInput
    connect?: EstadoEnvioWhereUniqueInput
  }

  export type RepartidorUpdateOneRequiredWithoutEnviosNestedInput = {
    create?: XOR<RepartidorCreateWithoutEnviosInput, RepartidorUncheckedCreateWithoutEnviosInput>
    connectOrCreate?: RepartidorCreateOrConnectWithoutEnviosInput
    upsert?: RepartidorUpsertWithoutEnviosInput
    connect?: RepartidorWhereUniqueInput
    update?: XOR<XOR<RepartidorUpdateToOneWithWhereWithoutEnviosInput, RepartidorUpdateWithoutEnviosInput>, RepartidorUncheckedUpdateWithoutEnviosInput>
  }

  export type EnvioUpdateOneRequiredWithoutRepartidoresEnviosNestedInput = {
    create?: XOR<EnvioCreateWithoutRepartidoresEnviosInput, EnvioUncheckedCreateWithoutRepartidoresEnviosInput>
    connectOrCreate?: EnvioCreateOrConnectWithoutRepartidoresEnviosInput
    upsert?: EnvioUpsertWithoutRepartidoresEnviosInput
    connect?: EnvioWhereUniqueInput
    update?: XOR<XOR<EnvioUpdateToOneWithWhereWithoutRepartidoresEnviosInput, EnvioUpdateWithoutRepartidoresEnviosInput>, EnvioUncheckedUpdateWithoutRepartidoresEnviosInput>
  }

  export type EstadoEnvioUpdateOneRequiredWithoutRepartidorEnviosNestedInput = {
    create?: XOR<EstadoEnvioCreateWithoutRepartidorEnviosInput, EstadoEnvioUncheckedCreateWithoutRepartidorEnviosInput>
    connectOrCreate?: EstadoEnvioCreateOrConnectWithoutRepartidorEnviosInput
    upsert?: EstadoEnvioUpsertWithoutRepartidorEnviosInput
    connect?: EstadoEnvioWhereUniqueInput
    update?: XOR<XOR<EstadoEnvioUpdateToOneWithWhereWithoutRepartidorEnviosInput, EstadoEnvioUpdateWithoutRepartidorEnviosInput>, EstadoEnvioUncheckedUpdateWithoutRepartidorEnviosInput>
  }

  export type ClienteCreateNestedOneWithoutVentasInput = {
    create?: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVentasInput
    connect?: ClienteWhereUniqueInput
  }

  export type EstadoVentaCreateNestedOneWithoutVentasInput = {
    create?: XOR<EstadoVentaCreateWithoutVentasInput, EstadoVentaUncheckedCreateWithoutVentasInput>
    connectOrCreate?: EstadoVentaCreateOrConnectWithoutVentasInput
    connect?: EstadoVentaWhereUniqueInput
  }

  export type ProductoVentaCreateNestedManyWithoutVentaInput = {
    create?: XOR<ProductoVentaCreateWithoutVentaInput, ProductoVentaUncheckedCreateWithoutVentaInput> | ProductoVentaCreateWithoutVentaInput[] | ProductoVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: ProductoVentaCreateOrConnectWithoutVentaInput | ProductoVentaCreateOrConnectWithoutVentaInput[]
    createMany?: ProductoVentaCreateManyVentaInputEnvelope
    connect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
  }

  export type EnvioCreateNestedManyWithoutVentaInput = {
    create?: XOR<EnvioCreateWithoutVentaInput, EnvioUncheckedCreateWithoutVentaInput> | EnvioCreateWithoutVentaInput[] | EnvioUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutVentaInput | EnvioCreateOrConnectWithoutVentaInput[]
    createMany?: EnvioCreateManyVentaInputEnvelope
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
  }

  export type ProductoVentaUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<ProductoVentaCreateWithoutVentaInput, ProductoVentaUncheckedCreateWithoutVentaInput> | ProductoVentaCreateWithoutVentaInput[] | ProductoVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: ProductoVentaCreateOrConnectWithoutVentaInput | ProductoVentaCreateOrConnectWithoutVentaInput[]
    createMany?: ProductoVentaCreateManyVentaInputEnvelope
    connect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
  }

  export type EnvioUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<EnvioCreateWithoutVentaInput, EnvioUncheckedCreateWithoutVentaInput> | EnvioCreateWithoutVentaInput[] | EnvioUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutVentaInput | EnvioCreateOrConnectWithoutVentaInput[]
    createMany?: EnvioCreateManyVentaInputEnvelope
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
  }

  export type ClienteUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVentasInput
    upsert?: ClienteUpsertWithoutVentasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutVentasInput, ClienteUpdateWithoutVentasInput>, ClienteUncheckedUpdateWithoutVentasInput>
  }

  export type EstadoVentaUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<EstadoVentaCreateWithoutVentasInput, EstadoVentaUncheckedCreateWithoutVentasInput>
    connectOrCreate?: EstadoVentaCreateOrConnectWithoutVentasInput
    upsert?: EstadoVentaUpsertWithoutVentasInput
    connect?: EstadoVentaWhereUniqueInput
    update?: XOR<XOR<EstadoVentaUpdateToOneWithWhereWithoutVentasInput, EstadoVentaUpdateWithoutVentasInput>, EstadoVentaUncheckedUpdateWithoutVentasInput>
  }

  export type ProductoVentaUpdateManyWithoutVentaNestedInput = {
    create?: XOR<ProductoVentaCreateWithoutVentaInput, ProductoVentaUncheckedCreateWithoutVentaInput> | ProductoVentaCreateWithoutVentaInput[] | ProductoVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: ProductoVentaCreateOrConnectWithoutVentaInput | ProductoVentaCreateOrConnectWithoutVentaInput[]
    upsert?: ProductoVentaUpsertWithWhereUniqueWithoutVentaInput | ProductoVentaUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: ProductoVentaCreateManyVentaInputEnvelope
    set?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    disconnect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    delete?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    connect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    update?: ProductoVentaUpdateWithWhereUniqueWithoutVentaInput | ProductoVentaUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: ProductoVentaUpdateManyWithWhereWithoutVentaInput | ProductoVentaUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: ProductoVentaScalarWhereInput | ProductoVentaScalarWhereInput[]
  }

  export type EnvioUpdateManyWithoutVentaNestedInput = {
    create?: XOR<EnvioCreateWithoutVentaInput, EnvioUncheckedCreateWithoutVentaInput> | EnvioCreateWithoutVentaInput[] | EnvioUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutVentaInput | EnvioCreateOrConnectWithoutVentaInput[]
    upsert?: EnvioUpsertWithWhereUniqueWithoutVentaInput | EnvioUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: EnvioCreateManyVentaInputEnvelope
    set?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    disconnect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    delete?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    update?: EnvioUpdateWithWhereUniqueWithoutVentaInput | EnvioUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: EnvioUpdateManyWithWhereWithoutVentaInput | EnvioUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
  }

  export type ProductoVentaUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<ProductoVentaCreateWithoutVentaInput, ProductoVentaUncheckedCreateWithoutVentaInput> | ProductoVentaCreateWithoutVentaInput[] | ProductoVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: ProductoVentaCreateOrConnectWithoutVentaInput | ProductoVentaCreateOrConnectWithoutVentaInput[]
    upsert?: ProductoVentaUpsertWithWhereUniqueWithoutVentaInput | ProductoVentaUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: ProductoVentaCreateManyVentaInputEnvelope
    set?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    disconnect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    delete?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    connect?: ProductoVentaWhereUniqueInput | ProductoVentaWhereUniqueInput[]
    update?: ProductoVentaUpdateWithWhereUniqueWithoutVentaInput | ProductoVentaUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: ProductoVentaUpdateManyWithWhereWithoutVentaInput | ProductoVentaUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: ProductoVentaScalarWhereInput | ProductoVentaScalarWhereInput[]
  }

  export type EnvioUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<EnvioCreateWithoutVentaInput, EnvioUncheckedCreateWithoutVentaInput> | EnvioCreateWithoutVentaInput[] | EnvioUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutVentaInput | EnvioCreateOrConnectWithoutVentaInput[]
    upsert?: EnvioUpsertWithWhereUniqueWithoutVentaInput | EnvioUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: EnvioCreateManyVentaInputEnvelope
    set?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    disconnect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    delete?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    update?: EnvioUpdateWithWhereUniqueWithoutVentaInput | EnvioUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: EnvioUpdateManyWithWhereWithoutVentaInput | EnvioUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
  }

  export type EntidadUsuarioCreateNestedManyWithoutEntidadInput = {
    create?: XOR<EntidadUsuarioCreateWithoutEntidadInput, EntidadUsuarioUncheckedCreateWithoutEntidadInput> | EntidadUsuarioCreateWithoutEntidadInput[] | EntidadUsuarioUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: EntidadUsuarioCreateOrConnectWithoutEntidadInput | EntidadUsuarioCreateOrConnectWithoutEntidadInput[]
    createMany?: EntidadUsuarioCreateManyEntidadInputEnvelope
    connect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
  }

  export type EntidadCreateNestedManyWithoutRolesInput = {
    create?: XOR<EntidadCreateWithoutRolesInput, EntidadUncheckedCreateWithoutRolesInput> | EntidadCreateWithoutRolesInput[] | EntidadUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: EntidadCreateOrConnectWithoutRolesInput | EntidadCreateOrConnectWithoutRolesInput[]
    connect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
  }

  export type EntidadCreateNestedManyWithoutPermisosInput = {
    create?: XOR<EntidadCreateWithoutPermisosInput, EntidadUncheckedCreateWithoutPermisosInput> | EntidadCreateWithoutPermisosInput[] | EntidadUncheckedCreateWithoutPermisosInput[]
    connectOrCreate?: EntidadCreateOrConnectWithoutPermisosInput | EntidadCreateOrConnectWithoutPermisosInput[]
    connect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
  }

  export type EntidadUsuarioUncheckedCreateNestedManyWithoutEntidadInput = {
    create?: XOR<EntidadUsuarioCreateWithoutEntidadInput, EntidadUsuarioUncheckedCreateWithoutEntidadInput> | EntidadUsuarioCreateWithoutEntidadInput[] | EntidadUsuarioUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: EntidadUsuarioCreateOrConnectWithoutEntidadInput | EntidadUsuarioCreateOrConnectWithoutEntidadInput[]
    createMany?: EntidadUsuarioCreateManyEntidadInputEnvelope
    connect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
  }

  export type EntidadUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<EntidadCreateWithoutRolesInput, EntidadUncheckedCreateWithoutRolesInput> | EntidadCreateWithoutRolesInput[] | EntidadUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: EntidadCreateOrConnectWithoutRolesInput | EntidadCreateOrConnectWithoutRolesInput[]
    connect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
  }

  export type EntidadUncheckedCreateNestedManyWithoutPermisosInput = {
    create?: XOR<EntidadCreateWithoutPermisosInput, EntidadUncheckedCreateWithoutPermisosInput> | EntidadCreateWithoutPermisosInput[] | EntidadUncheckedCreateWithoutPermisosInput[]
    connectOrCreate?: EntidadCreateOrConnectWithoutPermisosInput | EntidadCreateOrConnectWithoutPermisosInput[]
    connect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
  }

  export type EnumTipoEntidadFieldUpdateOperationsInput = {
    set?: $Enums.TipoEntidad
  }

  export type EntidadUsuarioUpdateManyWithoutEntidadNestedInput = {
    create?: XOR<EntidadUsuarioCreateWithoutEntidadInput, EntidadUsuarioUncheckedCreateWithoutEntidadInput> | EntidadUsuarioCreateWithoutEntidadInput[] | EntidadUsuarioUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: EntidadUsuarioCreateOrConnectWithoutEntidadInput | EntidadUsuarioCreateOrConnectWithoutEntidadInput[]
    upsert?: EntidadUsuarioUpsertWithWhereUniqueWithoutEntidadInput | EntidadUsuarioUpsertWithWhereUniqueWithoutEntidadInput[]
    createMany?: EntidadUsuarioCreateManyEntidadInputEnvelope
    set?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    disconnect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    delete?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    connect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    update?: EntidadUsuarioUpdateWithWhereUniqueWithoutEntidadInput | EntidadUsuarioUpdateWithWhereUniqueWithoutEntidadInput[]
    updateMany?: EntidadUsuarioUpdateManyWithWhereWithoutEntidadInput | EntidadUsuarioUpdateManyWithWhereWithoutEntidadInput[]
    deleteMany?: EntidadUsuarioScalarWhereInput | EntidadUsuarioScalarWhereInput[]
  }

  export type EntidadUpdateManyWithoutRolesNestedInput = {
    create?: XOR<EntidadCreateWithoutRolesInput, EntidadUncheckedCreateWithoutRolesInput> | EntidadCreateWithoutRolesInput[] | EntidadUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: EntidadCreateOrConnectWithoutRolesInput | EntidadCreateOrConnectWithoutRolesInput[]
    upsert?: EntidadUpsertWithWhereUniqueWithoutRolesInput | EntidadUpsertWithWhereUniqueWithoutRolesInput[]
    set?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    disconnect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    delete?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    connect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    update?: EntidadUpdateWithWhereUniqueWithoutRolesInput | EntidadUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: EntidadUpdateManyWithWhereWithoutRolesInput | EntidadUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: EntidadScalarWhereInput | EntidadScalarWhereInput[]
  }

  export type EntidadUpdateManyWithoutPermisosNestedInput = {
    create?: XOR<EntidadCreateWithoutPermisosInput, EntidadUncheckedCreateWithoutPermisosInput> | EntidadCreateWithoutPermisosInput[] | EntidadUncheckedCreateWithoutPermisosInput[]
    connectOrCreate?: EntidadCreateOrConnectWithoutPermisosInput | EntidadCreateOrConnectWithoutPermisosInput[]
    upsert?: EntidadUpsertWithWhereUniqueWithoutPermisosInput | EntidadUpsertWithWhereUniqueWithoutPermisosInput[]
    set?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    disconnect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    delete?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    connect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    update?: EntidadUpdateWithWhereUniqueWithoutPermisosInput | EntidadUpdateWithWhereUniqueWithoutPermisosInput[]
    updateMany?: EntidadUpdateManyWithWhereWithoutPermisosInput | EntidadUpdateManyWithWhereWithoutPermisosInput[]
    deleteMany?: EntidadScalarWhereInput | EntidadScalarWhereInput[]
  }

  export type EntidadUsuarioUncheckedUpdateManyWithoutEntidadNestedInput = {
    create?: XOR<EntidadUsuarioCreateWithoutEntidadInput, EntidadUsuarioUncheckedCreateWithoutEntidadInput> | EntidadUsuarioCreateWithoutEntidadInput[] | EntidadUsuarioUncheckedCreateWithoutEntidadInput[]
    connectOrCreate?: EntidadUsuarioCreateOrConnectWithoutEntidadInput | EntidadUsuarioCreateOrConnectWithoutEntidadInput[]
    upsert?: EntidadUsuarioUpsertWithWhereUniqueWithoutEntidadInput | EntidadUsuarioUpsertWithWhereUniqueWithoutEntidadInput[]
    createMany?: EntidadUsuarioCreateManyEntidadInputEnvelope
    set?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    disconnect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    delete?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    connect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    update?: EntidadUsuarioUpdateWithWhereUniqueWithoutEntidadInput | EntidadUsuarioUpdateWithWhereUniqueWithoutEntidadInput[]
    updateMany?: EntidadUsuarioUpdateManyWithWhereWithoutEntidadInput | EntidadUsuarioUpdateManyWithWhereWithoutEntidadInput[]
    deleteMany?: EntidadUsuarioScalarWhereInput | EntidadUsuarioScalarWhereInput[]
  }

  export type EntidadUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<EntidadCreateWithoutRolesInput, EntidadUncheckedCreateWithoutRolesInput> | EntidadCreateWithoutRolesInput[] | EntidadUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: EntidadCreateOrConnectWithoutRolesInput | EntidadCreateOrConnectWithoutRolesInput[]
    upsert?: EntidadUpsertWithWhereUniqueWithoutRolesInput | EntidadUpsertWithWhereUniqueWithoutRolesInput[]
    set?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    disconnect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    delete?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    connect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    update?: EntidadUpdateWithWhereUniqueWithoutRolesInput | EntidadUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: EntidadUpdateManyWithWhereWithoutRolesInput | EntidadUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: EntidadScalarWhereInput | EntidadScalarWhereInput[]
  }

  export type EntidadUncheckedUpdateManyWithoutPermisosNestedInput = {
    create?: XOR<EntidadCreateWithoutPermisosInput, EntidadUncheckedCreateWithoutPermisosInput> | EntidadCreateWithoutPermisosInput[] | EntidadUncheckedCreateWithoutPermisosInput[]
    connectOrCreate?: EntidadCreateOrConnectWithoutPermisosInput | EntidadCreateOrConnectWithoutPermisosInput[]
    upsert?: EntidadUpsertWithWhereUniqueWithoutPermisosInput | EntidadUpsertWithWhereUniqueWithoutPermisosInput[]
    set?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    disconnect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    delete?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    connect?: EntidadWhereUniqueInput | EntidadWhereUniqueInput[]
    update?: EntidadUpdateWithWhereUniqueWithoutPermisosInput | EntidadUpdateWithWhereUniqueWithoutPermisosInput[]
    updateMany?: EntidadUpdateManyWithWhereWithoutPermisosInput | EntidadUpdateManyWithWhereWithoutPermisosInput[]
    deleteMany?: EntidadScalarWhereInput | EntidadScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPermisosInput = {
    create?: XOR<UsuarioCreateWithoutPermisosInput, UsuarioUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPermisosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EntidadCreateNestedOneWithoutEntidadUsuarioInput = {
    create?: XOR<EntidadCreateWithoutEntidadUsuarioInput, EntidadUncheckedCreateWithoutEntidadUsuarioInput>
    connectOrCreate?: EntidadCreateOrConnectWithoutEntidadUsuarioInput
    connect?: EntidadWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutPermisosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPermisosInput, UsuarioUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPermisosInput
    upsert?: UsuarioUpsertWithoutPermisosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPermisosInput, UsuarioUpdateWithoutPermisosInput>, UsuarioUncheckedUpdateWithoutPermisosInput>
  }

  export type EntidadUpdateOneRequiredWithoutEntidadUsuarioNestedInput = {
    create?: XOR<EntidadCreateWithoutEntidadUsuarioInput, EntidadUncheckedCreateWithoutEntidadUsuarioInput>
    connectOrCreate?: EntidadCreateOrConnectWithoutEntidadUsuarioInput
    upsert?: EntidadUpsertWithoutEntidadUsuarioInput
    connect?: EntidadWhereUniqueInput
    update?: XOR<XOR<EntidadUpdateToOneWithWhereWithoutEntidadUsuarioInput, EntidadUpdateWithoutEntidadUsuarioInput>, EntidadUncheckedUpdateWithoutEntidadUsuarioInput>
  }

  export type EntidadUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EntidadUsuarioCreateWithoutUsuarioInput, EntidadUsuarioUncheckedCreateWithoutUsuarioInput> | EntidadUsuarioCreateWithoutUsuarioInput[] | EntidadUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EntidadUsuarioCreateOrConnectWithoutUsuarioInput | EntidadUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: EntidadUsuarioCreateManyUsuarioInputEnvelope
    connect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
  }

  export type EntidadUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EntidadUsuarioCreateWithoutUsuarioInput, EntidadUsuarioUncheckedCreateWithoutUsuarioInput> | EntidadUsuarioCreateWithoutUsuarioInput[] | EntidadUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EntidadUsuarioCreateOrConnectWithoutUsuarioInput | EntidadUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: EntidadUsuarioCreateManyUsuarioInputEnvelope
    connect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EntidadUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EntidadUsuarioCreateWithoutUsuarioInput, EntidadUsuarioUncheckedCreateWithoutUsuarioInput> | EntidadUsuarioCreateWithoutUsuarioInput[] | EntidadUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EntidadUsuarioCreateOrConnectWithoutUsuarioInput | EntidadUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: EntidadUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | EntidadUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EntidadUsuarioCreateManyUsuarioInputEnvelope
    set?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    disconnect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    delete?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    connect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    update?: EntidadUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | EntidadUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EntidadUsuarioUpdateManyWithWhereWithoutUsuarioInput | EntidadUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EntidadUsuarioScalarWhereInput | EntidadUsuarioScalarWhereInput[]
  }

  export type EntidadUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EntidadUsuarioCreateWithoutUsuarioInput, EntidadUsuarioUncheckedCreateWithoutUsuarioInput> | EntidadUsuarioCreateWithoutUsuarioInput[] | EntidadUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EntidadUsuarioCreateOrConnectWithoutUsuarioInput | EntidadUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: EntidadUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | EntidadUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EntidadUsuarioCreateManyUsuarioInputEnvelope
    set?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    disconnect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    delete?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    connect?: EntidadUsuarioWhereUniqueInput | EntidadUsuarioWhereUniqueInput[]
    update?: EntidadUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | EntidadUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EntidadUsuarioUpdateManyWithWhereWithoutUsuarioInput | EntidadUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EntidadUsuarioScalarWhereInput | EntidadUsuarioScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoEntidadFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEntidad | EnumTipoEntidadFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEntidad[] | ListEnumTipoEntidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEntidad[] | ListEnumTipoEntidadFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEntidadFilter<$PrismaModel> | $Enums.TipoEntidad
  }

  export type NestedEnumTipoEntidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEntidad | EnumTipoEntidadFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEntidad[] | ListEnumTipoEntidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEntidad[] | ListEnumTipoEntidadFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEntidadWithAggregatesFilter<$PrismaModel> | $Enums.TipoEntidad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoEntidadFilter<$PrismaModel>
    _max?: NestedEnumTipoEntidadFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DireccionCreateWithoutClienteInput = {
    calle1: string
    calle2?: string | null
    codigoPostal: string
    provincia: string
    localidad: string
    detalle?: string | null
    envios?: EnvioCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUncheckedCreateWithoutClienteInput = {
    id?: number
    calle1: string
    calle2?: string | null
    codigoPostal: string
    provincia: string
    localidad: string
    detalle?: string | null
    envios?: EnvioUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type DireccionCreateOrConnectWithoutClienteInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput>
  }

  export type DireccionCreateManyClienteInputEnvelope = {
    data: DireccionCreateManyClienteInput | DireccionCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type VentaCreateWithoutClienteInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    estadoVenta: EstadoVentaCreateNestedOneWithoutVentasInput
    productos?: ProductoVentaCreateNestedManyWithoutVentaInput
    envios?: EnvioCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutClienteInput = {
    id?: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    productos?: ProductoVentaUncheckedCreateNestedManyWithoutVentaInput
    envios?: EnvioUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutClienteInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput>
  }

  export type VentaCreateManyClienteInputEnvelope = {
    data: VentaCreateManyClienteInput | VentaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type DireccionUpsertWithWhereUniqueWithoutClienteInput = {
    where: DireccionWhereUniqueInput
    update: XOR<DireccionUpdateWithoutClienteInput, DireccionUncheckedUpdateWithoutClienteInput>
    create: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput>
  }

  export type DireccionUpdateWithWhereUniqueWithoutClienteInput = {
    where: DireccionWhereUniqueInput
    data: XOR<DireccionUpdateWithoutClienteInput, DireccionUncheckedUpdateWithoutClienteInput>
  }

  export type DireccionUpdateManyWithWhereWithoutClienteInput = {
    where: DireccionScalarWhereInput
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyWithoutClienteInput>
  }

  export type DireccionScalarWhereInput = {
    AND?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
    OR?: DireccionScalarWhereInput[]
    NOT?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
    id?: IntFilter<"Direccion"> | number
    clienteId?: IntFilter<"Direccion"> | number
    calle1?: StringFilter<"Direccion"> | string
    calle2?: StringNullableFilter<"Direccion"> | string | null
    codigoPostal?: StringFilter<"Direccion"> | string
    provincia?: StringFilter<"Direccion"> | string
    localidad?: StringFilter<"Direccion"> | string
    detalle?: StringNullableFilter<"Direccion"> | string | null
  }

  export type VentaUpsertWithWhereUniqueWithoutClienteInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutClienteInput, VentaUncheckedUpdateWithoutClienteInput>
    create: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutClienteInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutClienteInput, VentaUncheckedUpdateWithoutClienteInput>
  }

  export type VentaUpdateManyWithWhereWithoutClienteInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutClienteInput>
  }

  export type VentaScalarWhereInput = {
    AND?: VentaScalarWhereInput | VentaScalarWhereInput[]
    OR?: VentaScalarWhereInput[]
    NOT?: VentaScalarWhereInput | VentaScalarWhereInput[]
    id?: IntFilter<"Venta"> | number
    clienteId?: IntFilter<"Venta"> | number
    estado?: IntFilter<"Venta"> | number
    fechaInicio?: DateTimeFilter<"Venta"> | Date | string
    fechaUltimaActualizacion?: DateTimeFilter<"Venta"> | Date | string
  }

  export type EmpleadoCreateWithoutComprasInput = {
    nombre: string
    cargo: string
  }

  export type EmpleadoUncheckedCreateWithoutComprasInput = {
    id?: number
    nombre: string
    cargo: string
  }

  export type EmpleadoCreateOrConnectWithoutComprasInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutComprasInput, EmpleadoUncheckedCreateWithoutComprasInput>
  }

  export type DistribuidorCreateWithoutComprasInput = {
    nombre: string
  }

  export type DistribuidorUncheckedCreateWithoutComprasInput = {
    id?: number
    nombre: string
  }

  export type DistribuidorCreateOrConnectWithoutComprasInput = {
    where: DistribuidorWhereUniqueInput
    create: XOR<DistribuidorCreateWithoutComprasInput, DistribuidorUncheckedCreateWithoutComprasInput>
  }

  export type CompraProductoCreateWithoutCompraInput = {
    cantidad: number
    producto: ProductoCreateNestedOneWithoutComprasInput
  }

  export type CompraProductoUncheckedCreateWithoutCompraInput = {
    productoId: number
    cantidad: number
  }

  export type CompraProductoCreateOrConnectWithoutCompraInput = {
    where: CompraProductoWhereUniqueInput
    create: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput>
  }

  export type CompraProductoCreateManyCompraInputEnvelope = {
    data: CompraProductoCreateManyCompraInput | CompraProductoCreateManyCompraInput[]
    skipDuplicates?: boolean
  }

  export type EmpleadoUpsertWithoutComprasInput = {
    update: XOR<EmpleadoUpdateWithoutComprasInput, EmpleadoUncheckedUpdateWithoutComprasInput>
    create: XOR<EmpleadoCreateWithoutComprasInput, EmpleadoUncheckedCreateWithoutComprasInput>
    where?: EmpleadoWhereInput
  }

  export type EmpleadoUpdateToOneWithWhereWithoutComprasInput = {
    where?: EmpleadoWhereInput
    data: XOR<EmpleadoUpdateWithoutComprasInput, EmpleadoUncheckedUpdateWithoutComprasInput>
  }

  export type EmpleadoUpdateWithoutComprasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type EmpleadoUncheckedUpdateWithoutComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
  }

  export type DistribuidorUpsertWithoutComprasInput = {
    update: XOR<DistribuidorUpdateWithoutComprasInput, DistribuidorUncheckedUpdateWithoutComprasInput>
    create: XOR<DistribuidorCreateWithoutComprasInput, DistribuidorUncheckedCreateWithoutComprasInput>
    where?: DistribuidorWhereInput
  }

  export type DistribuidorUpdateToOneWithWhereWithoutComprasInput = {
    where?: DistribuidorWhereInput
    data: XOR<DistribuidorUpdateWithoutComprasInput, DistribuidorUncheckedUpdateWithoutComprasInput>
  }

  export type DistribuidorUpdateWithoutComprasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DistribuidorUncheckedUpdateWithoutComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CompraProductoUpsertWithWhereUniqueWithoutCompraInput = {
    where: CompraProductoWhereUniqueInput
    update: XOR<CompraProductoUpdateWithoutCompraInput, CompraProductoUncheckedUpdateWithoutCompraInput>
    create: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput>
  }

  export type CompraProductoUpdateWithWhereUniqueWithoutCompraInput = {
    where: CompraProductoWhereUniqueInput
    data: XOR<CompraProductoUpdateWithoutCompraInput, CompraProductoUncheckedUpdateWithoutCompraInput>
  }

  export type CompraProductoUpdateManyWithWhereWithoutCompraInput = {
    where: CompraProductoScalarWhereInput
    data: XOR<CompraProductoUpdateManyMutationInput, CompraProductoUncheckedUpdateManyWithoutCompraInput>
  }

  export type CompraProductoScalarWhereInput = {
    AND?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
    OR?: CompraProductoScalarWhereInput[]
    NOT?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
    compraId?: IntFilter<"CompraProducto"> | number
    productoId?: IntFilter<"CompraProducto"> | number
    cantidad?: IntFilter<"CompraProducto"> | number
  }

  export type CompraCreateWithoutProductosInput = {
    fecha: Date | string
    monto: number
    descripcion: string
    empleado: EmpleadoCreateNestedOneWithoutComprasInput
    distribuidor: DistribuidorCreateNestedOneWithoutComprasInput
  }

  export type CompraUncheckedCreateWithoutProductosInput = {
    id?: number
    empleadoId: number
    distribuidorId: number
    fecha: Date | string
    monto: number
    descripcion: string
  }

  export type CompraCreateOrConnectWithoutProductosInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutProductosInput, CompraUncheckedCreateWithoutProductosInput>
  }

  export type ProductoCreateWithoutComprasInput = {
    nombre: string
    cantidad: number
    medida: number
    marca: string
    precio: number
    ventas?: ProductoVentaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutComprasInput = {
    id?: number
    nombre: string
    cantidad: number
    medida: number
    marca: string
    precio: number
    ventas?: ProductoVentaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutComprasInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutComprasInput, ProductoUncheckedCreateWithoutComprasInput>
  }

  export type CompraUpsertWithoutProductosInput = {
    update: XOR<CompraUpdateWithoutProductosInput, CompraUncheckedUpdateWithoutProductosInput>
    create: XOR<CompraCreateWithoutProductosInput, CompraUncheckedCreateWithoutProductosInput>
    where?: CompraWhereInput
  }

  export type CompraUpdateToOneWithWhereWithoutProductosInput = {
    where?: CompraWhereInput
    data: XOR<CompraUpdateWithoutProductosInput, CompraUncheckedUpdateWithoutProductosInput>
  }

  export type CompraUpdateWithoutProductosInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    empleado?: EmpleadoUpdateOneRequiredWithoutComprasNestedInput
    distribuidor?: DistribuidorUpdateOneRequiredWithoutComprasNestedInput
  }

  export type CompraUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    distribuidorId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoUpsertWithoutComprasInput = {
    update: XOR<ProductoUpdateWithoutComprasInput, ProductoUncheckedUpdateWithoutComprasInput>
    create: XOR<ProductoCreateWithoutComprasInput, ProductoUncheckedCreateWithoutComprasInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutComprasInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutComprasInput, ProductoUncheckedUpdateWithoutComprasInput>
  }

  export type ProductoUpdateWithoutComprasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medida?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    ventas?: ProductoVentaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medida?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    ventas?: ProductoVentaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ClienteCreateWithoutDireccionesInput = {
    nombre: string
    telefono: string
    fechaRegistro: Date | string
    ventas?: VentaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutDireccionesInput = {
    id?: number
    nombre: string
    telefono: string
    fechaRegistro: Date | string
    ventas?: VentaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutDireccionesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutDireccionesInput, ClienteUncheckedCreateWithoutDireccionesInput>
  }

  export type EnvioCreateWithoutDireccionInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    venta: VentaCreateNestedOneWithoutEnviosInput
    repartidor: RepartidorCreateNestedOneWithoutEnviosDirectInput
    estadoEnvio: EstadoEnvioCreateNestedOneWithoutEnviosInput
    repartidoresEnvios?: RepartidorEnvioCreateNestedManyWithoutEnvioInput
  }

  export type EnvioUncheckedCreateWithoutDireccionInput = {
    id?: number
    ventaId: number
    repartidorId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    repartidoresEnvios?: RepartidorEnvioUncheckedCreateNestedManyWithoutEnvioInput
  }

  export type EnvioCreateOrConnectWithoutDireccionInput = {
    where: EnvioWhereUniqueInput
    create: XOR<EnvioCreateWithoutDireccionInput, EnvioUncheckedCreateWithoutDireccionInput>
  }

  export type EnvioCreateManyDireccionInputEnvelope = {
    data: EnvioCreateManyDireccionInput | EnvioCreateManyDireccionInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutDireccionesInput = {
    update: XOR<ClienteUpdateWithoutDireccionesInput, ClienteUncheckedUpdateWithoutDireccionesInput>
    create: XOR<ClienteCreateWithoutDireccionesInput, ClienteUncheckedCreateWithoutDireccionesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutDireccionesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutDireccionesInput, ClienteUncheckedUpdateWithoutDireccionesInput>
  }

  export type ClienteUpdateWithoutDireccionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    ventas?: VentaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutDireccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    ventas?: VentaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type EnvioUpsertWithWhereUniqueWithoutDireccionInput = {
    where: EnvioWhereUniqueInput
    update: XOR<EnvioUpdateWithoutDireccionInput, EnvioUncheckedUpdateWithoutDireccionInput>
    create: XOR<EnvioCreateWithoutDireccionInput, EnvioUncheckedCreateWithoutDireccionInput>
  }

  export type EnvioUpdateWithWhereUniqueWithoutDireccionInput = {
    where: EnvioWhereUniqueInput
    data: XOR<EnvioUpdateWithoutDireccionInput, EnvioUncheckedUpdateWithoutDireccionInput>
  }

  export type EnvioUpdateManyWithWhereWithoutDireccionInput = {
    where: EnvioScalarWhereInput
    data: XOR<EnvioUpdateManyMutationInput, EnvioUncheckedUpdateManyWithoutDireccionInput>
  }

  export type EnvioScalarWhereInput = {
    AND?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
    OR?: EnvioScalarWhereInput[]
    NOT?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
    id?: IntFilter<"Envio"> | number
    ventaId?: IntFilter<"Envio"> | number
    repartidorId?: IntFilter<"Envio"> | number
    direccionId?: IntFilter<"Envio"> | number
    estado?: IntFilter<"Envio"> | number
    fechaInicio?: DateTimeFilter<"Envio"> | Date | string
    fechaUltimaActualizacion?: DateTimeFilter<"Envio"> | Date | string
  }

  export type CompraCreateWithoutDistribuidorInput = {
    fecha: Date | string
    monto: number
    descripcion: string
    empleado: EmpleadoCreateNestedOneWithoutComprasInput
    productos?: CompraProductoCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutDistribuidorInput = {
    id?: number
    empleadoId: number
    fecha: Date | string
    monto: number
    descripcion: string
    productos?: CompraProductoUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutDistribuidorInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutDistribuidorInput, CompraUncheckedCreateWithoutDistribuidorInput>
  }

  export type CompraCreateManyDistribuidorInputEnvelope = {
    data: CompraCreateManyDistribuidorInput | CompraCreateManyDistribuidorInput[]
    skipDuplicates?: boolean
  }

  export type CompraUpsertWithWhereUniqueWithoutDistribuidorInput = {
    where: CompraWhereUniqueInput
    update: XOR<CompraUpdateWithoutDistribuidorInput, CompraUncheckedUpdateWithoutDistribuidorInput>
    create: XOR<CompraCreateWithoutDistribuidorInput, CompraUncheckedCreateWithoutDistribuidorInput>
  }

  export type CompraUpdateWithWhereUniqueWithoutDistribuidorInput = {
    where: CompraWhereUniqueInput
    data: XOR<CompraUpdateWithoutDistribuidorInput, CompraUncheckedUpdateWithoutDistribuidorInput>
  }

  export type CompraUpdateManyWithWhereWithoutDistribuidorInput = {
    where: CompraScalarWhereInput
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyWithoutDistribuidorInput>
  }

  export type CompraScalarWhereInput = {
    AND?: CompraScalarWhereInput | CompraScalarWhereInput[]
    OR?: CompraScalarWhereInput[]
    NOT?: CompraScalarWhereInput | CompraScalarWhereInput[]
    id?: IntFilter<"Compra"> | number
    empleadoId?: IntFilter<"Compra"> | number
    distribuidorId?: IntFilter<"Compra"> | number
    fecha?: DateTimeFilter<"Compra"> | Date | string
    monto?: FloatFilter<"Compra"> | number
    descripcion?: StringFilter<"Compra"> | string
  }

  export type CompraCreateWithoutEmpleadoInput = {
    fecha: Date | string
    monto: number
    descripcion: string
    distribuidor: DistribuidorCreateNestedOneWithoutComprasInput
    productos?: CompraProductoCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutEmpleadoInput = {
    id?: number
    distribuidorId: number
    fecha: Date | string
    monto: number
    descripcion: string
    productos?: CompraProductoUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutEmpleadoInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutEmpleadoInput, CompraUncheckedCreateWithoutEmpleadoInput>
  }

  export type CompraCreateManyEmpleadoInputEnvelope = {
    data: CompraCreateManyEmpleadoInput | CompraCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type CompraUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: CompraWhereUniqueInput
    update: XOR<CompraUpdateWithoutEmpleadoInput, CompraUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<CompraCreateWithoutEmpleadoInput, CompraUncheckedCreateWithoutEmpleadoInput>
  }

  export type CompraUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: CompraWhereUniqueInput
    data: XOR<CompraUpdateWithoutEmpleadoInput, CompraUncheckedUpdateWithoutEmpleadoInput>
  }

  export type CompraUpdateManyWithWhereWithoutEmpleadoInput = {
    where: CompraScalarWhereInput
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type VentaCreateWithoutEnviosInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    estadoVenta: EstadoVentaCreateNestedOneWithoutVentasInput
    productos?: ProductoVentaCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutEnviosInput = {
    id?: number
    clienteId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    productos?: ProductoVentaUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutEnviosInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutEnviosInput, VentaUncheckedCreateWithoutEnviosInput>
  }

  export type RepartidorCreateWithoutEnviosDirectInput = {
    nombre: string
    telefono: string
    envios?: RepartidorEnvioCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorUncheckedCreateWithoutEnviosDirectInput = {
    id?: number
    nombre: string
    telefono: string
    envios?: RepartidorEnvioUncheckedCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorCreateOrConnectWithoutEnviosDirectInput = {
    where: RepartidorWhereUniqueInput
    create: XOR<RepartidorCreateWithoutEnviosDirectInput, RepartidorUncheckedCreateWithoutEnviosDirectInput>
  }

  export type DireccionCreateWithoutEnviosInput = {
    calle1: string
    calle2?: string | null
    codigoPostal: string
    provincia: string
    localidad: string
    detalle?: string | null
    cliente: ClienteCreateNestedOneWithoutDireccionesInput
  }

  export type DireccionUncheckedCreateWithoutEnviosInput = {
    id?: number
    clienteId: number
    calle1: string
    calle2?: string | null
    codigoPostal: string
    provincia: string
    localidad: string
    detalle?: string | null
  }

  export type DireccionCreateOrConnectWithoutEnviosInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutEnviosInput, DireccionUncheckedCreateWithoutEnviosInput>
  }

  export type EstadoEnvioCreateWithoutEnviosInput = {
    id: number
    descEstado: string
    repartidorEnvios?: RepartidorEnvioCreateNestedManyWithoutEstadoEnvioInput
  }

  export type EstadoEnvioUncheckedCreateWithoutEnviosInput = {
    id: number
    descEstado: string
    repartidorEnvios?: RepartidorEnvioUncheckedCreateNestedManyWithoutEstadoEnvioInput
  }

  export type EstadoEnvioCreateOrConnectWithoutEnviosInput = {
    where: EstadoEnvioWhereUniqueInput
    create: XOR<EstadoEnvioCreateWithoutEnviosInput, EstadoEnvioUncheckedCreateWithoutEnviosInput>
  }

  export type RepartidorEnvioCreateWithoutEnvioInput = {
    repartidor: RepartidorCreateNestedOneWithoutEnviosInput
    estadoEnvio: EstadoEnvioCreateNestedOneWithoutRepartidorEnviosInput
  }

  export type RepartidorEnvioUncheckedCreateWithoutEnvioInput = {
    repartidorId: number
    estado: number
  }

  export type RepartidorEnvioCreateOrConnectWithoutEnvioInput = {
    where: RepartidorEnvioWhereUniqueInput
    create: XOR<RepartidorEnvioCreateWithoutEnvioInput, RepartidorEnvioUncheckedCreateWithoutEnvioInput>
  }

  export type RepartidorEnvioCreateManyEnvioInputEnvelope = {
    data: RepartidorEnvioCreateManyEnvioInput | RepartidorEnvioCreateManyEnvioInput[]
    skipDuplicates?: boolean
  }

  export type VentaUpsertWithoutEnviosInput = {
    update: XOR<VentaUpdateWithoutEnviosInput, VentaUncheckedUpdateWithoutEnviosInput>
    create: XOR<VentaCreateWithoutEnviosInput, VentaUncheckedCreateWithoutEnviosInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutEnviosInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutEnviosInput, VentaUncheckedUpdateWithoutEnviosInput>
  }

  export type VentaUpdateWithoutEnviosInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    estadoVenta?: EstadoVentaUpdateOneRequiredWithoutVentasNestedInput
    productos?: ProductoVentaUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutEnviosInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoVentaUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type RepartidorUpsertWithoutEnviosDirectInput = {
    update: XOR<RepartidorUpdateWithoutEnviosDirectInput, RepartidorUncheckedUpdateWithoutEnviosDirectInput>
    create: XOR<RepartidorCreateWithoutEnviosDirectInput, RepartidorUncheckedCreateWithoutEnviosDirectInput>
    where?: RepartidorWhereInput
  }

  export type RepartidorUpdateToOneWithWhereWithoutEnviosDirectInput = {
    where?: RepartidorWhereInput
    data: XOR<RepartidorUpdateWithoutEnviosDirectInput, RepartidorUncheckedUpdateWithoutEnviosDirectInput>
  }

  export type RepartidorUpdateWithoutEnviosDirectInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    envios?: RepartidorEnvioUpdateManyWithoutRepartidorNestedInput
  }

  export type RepartidorUncheckedUpdateWithoutEnviosDirectInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    envios?: RepartidorEnvioUncheckedUpdateManyWithoutRepartidorNestedInput
  }

  export type DireccionUpsertWithoutEnviosInput = {
    update: XOR<DireccionUpdateWithoutEnviosInput, DireccionUncheckedUpdateWithoutEnviosInput>
    create: XOR<DireccionCreateWithoutEnviosInput, DireccionUncheckedCreateWithoutEnviosInput>
    where?: DireccionWhereInput
  }

  export type DireccionUpdateToOneWithWhereWithoutEnviosInput = {
    where?: DireccionWhereInput
    data: XOR<DireccionUpdateWithoutEnviosInput, DireccionUncheckedUpdateWithoutEnviosInput>
  }

  export type DireccionUpdateWithoutEnviosInput = {
    calle1?: StringFieldUpdateOperationsInput | string
    calle2?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutDireccionesNestedInput
  }

  export type DireccionUncheckedUpdateWithoutEnviosInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    calle1?: StringFieldUpdateOperationsInput | string
    calle2?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstadoEnvioUpsertWithoutEnviosInput = {
    update: XOR<EstadoEnvioUpdateWithoutEnviosInput, EstadoEnvioUncheckedUpdateWithoutEnviosInput>
    create: XOR<EstadoEnvioCreateWithoutEnviosInput, EstadoEnvioUncheckedCreateWithoutEnviosInput>
    where?: EstadoEnvioWhereInput
  }

  export type EstadoEnvioUpdateToOneWithWhereWithoutEnviosInput = {
    where?: EstadoEnvioWhereInput
    data: XOR<EstadoEnvioUpdateWithoutEnviosInput, EstadoEnvioUncheckedUpdateWithoutEnviosInput>
  }

  export type EstadoEnvioUpdateWithoutEnviosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
    repartidorEnvios?: RepartidorEnvioUpdateManyWithoutEstadoEnvioNestedInput
  }

  export type EstadoEnvioUncheckedUpdateWithoutEnviosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
    repartidorEnvios?: RepartidorEnvioUncheckedUpdateManyWithoutEstadoEnvioNestedInput
  }

  export type RepartidorEnvioUpsertWithWhereUniqueWithoutEnvioInput = {
    where: RepartidorEnvioWhereUniqueInput
    update: XOR<RepartidorEnvioUpdateWithoutEnvioInput, RepartidorEnvioUncheckedUpdateWithoutEnvioInput>
    create: XOR<RepartidorEnvioCreateWithoutEnvioInput, RepartidorEnvioUncheckedCreateWithoutEnvioInput>
  }

  export type RepartidorEnvioUpdateWithWhereUniqueWithoutEnvioInput = {
    where: RepartidorEnvioWhereUniqueInput
    data: XOR<RepartidorEnvioUpdateWithoutEnvioInput, RepartidorEnvioUncheckedUpdateWithoutEnvioInput>
  }

  export type RepartidorEnvioUpdateManyWithWhereWithoutEnvioInput = {
    where: RepartidorEnvioScalarWhereInput
    data: XOR<RepartidorEnvioUpdateManyMutationInput, RepartidorEnvioUncheckedUpdateManyWithoutEnvioInput>
  }

  export type RepartidorEnvioScalarWhereInput = {
    AND?: RepartidorEnvioScalarWhereInput | RepartidorEnvioScalarWhereInput[]
    OR?: RepartidorEnvioScalarWhereInput[]
    NOT?: RepartidorEnvioScalarWhereInput | RepartidorEnvioScalarWhereInput[]
    repartidorId?: IntFilter<"RepartidorEnvio"> | number
    envioId?: IntFilter<"RepartidorEnvio"> | number
    estado?: IntFilter<"RepartidorEnvio"> | number
  }

  export type EnvioCreateWithoutEstadoEnvioInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    venta: VentaCreateNestedOneWithoutEnviosInput
    repartidor: RepartidorCreateNestedOneWithoutEnviosDirectInput
    direccion: DireccionCreateNestedOneWithoutEnviosInput
    repartidoresEnvios?: RepartidorEnvioCreateNestedManyWithoutEnvioInput
  }

  export type EnvioUncheckedCreateWithoutEstadoEnvioInput = {
    id?: number
    ventaId: number
    repartidorId: number
    direccionId: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    repartidoresEnvios?: RepartidorEnvioUncheckedCreateNestedManyWithoutEnvioInput
  }

  export type EnvioCreateOrConnectWithoutEstadoEnvioInput = {
    where: EnvioWhereUniqueInput
    create: XOR<EnvioCreateWithoutEstadoEnvioInput, EnvioUncheckedCreateWithoutEstadoEnvioInput>
  }

  export type EnvioCreateManyEstadoEnvioInputEnvelope = {
    data: EnvioCreateManyEstadoEnvioInput | EnvioCreateManyEstadoEnvioInput[]
    skipDuplicates?: boolean
  }

  export type RepartidorEnvioCreateWithoutEstadoEnvioInput = {
    repartidor: RepartidorCreateNestedOneWithoutEnviosInput
    envio: EnvioCreateNestedOneWithoutRepartidoresEnviosInput
  }

  export type RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput = {
    repartidorId: number
    envioId: number
  }

  export type RepartidorEnvioCreateOrConnectWithoutEstadoEnvioInput = {
    where: RepartidorEnvioWhereUniqueInput
    create: XOR<RepartidorEnvioCreateWithoutEstadoEnvioInput, RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput>
  }

  export type RepartidorEnvioCreateManyEstadoEnvioInputEnvelope = {
    data: RepartidorEnvioCreateManyEstadoEnvioInput | RepartidorEnvioCreateManyEstadoEnvioInput[]
    skipDuplicates?: boolean
  }

  export type EnvioUpsertWithWhereUniqueWithoutEstadoEnvioInput = {
    where: EnvioWhereUniqueInput
    update: XOR<EnvioUpdateWithoutEstadoEnvioInput, EnvioUncheckedUpdateWithoutEstadoEnvioInput>
    create: XOR<EnvioCreateWithoutEstadoEnvioInput, EnvioUncheckedCreateWithoutEstadoEnvioInput>
  }

  export type EnvioUpdateWithWhereUniqueWithoutEstadoEnvioInput = {
    where: EnvioWhereUniqueInput
    data: XOR<EnvioUpdateWithoutEstadoEnvioInput, EnvioUncheckedUpdateWithoutEstadoEnvioInput>
  }

  export type EnvioUpdateManyWithWhereWithoutEstadoEnvioInput = {
    where: EnvioScalarWhereInput
    data: XOR<EnvioUpdateManyMutationInput, EnvioUncheckedUpdateManyWithoutEstadoEnvioInput>
  }

  export type RepartidorEnvioUpsertWithWhereUniqueWithoutEstadoEnvioInput = {
    where: RepartidorEnvioWhereUniqueInput
    update: XOR<RepartidorEnvioUpdateWithoutEstadoEnvioInput, RepartidorEnvioUncheckedUpdateWithoutEstadoEnvioInput>
    create: XOR<RepartidorEnvioCreateWithoutEstadoEnvioInput, RepartidorEnvioUncheckedCreateWithoutEstadoEnvioInput>
  }

  export type RepartidorEnvioUpdateWithWhereUniqueWithoutEstadoEnvioInput = {
    where: RepartidorEnvioWhereUniqueInput
    data: XOR<RepartidorEnvioUpdateWithoutEstadoEnvioInput, RepartidorEnvioUncheckedUpdateWithoutEstadoEnvioInput>
  }

  export type RepartidorEnvioUpdateManyWithWhereWithoutEstadoEnvioInput = {
    where: RepartidorEnvioScalarWhereInput
    data: XOR<RepartidorEnvioUpdateManyMutationInput, RepartidorEnvioUncheckedUpdateManyWithoutEstadoEnvioInput>
  }

  export type VentaCreateWithoutEstadoVentaInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    productos?: ProductoVentaCreateNestedManyWithoutVentaInput
    envios?: EnvioCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutEstadoVentaInput = {
    id?: number
    clienteId: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    productos?: ProductoVentaUncheckedCreateNestedManyWithoutVentaInput
    envios?: EnvioUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutEstadoVentaInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutEstadoVentaInput, VentaUncheckedCreateWithoutEstadoVentaInput>
  }

  export type VentaCreateManyEstadoVentaInputEnvelope = {
    data: VentaCreateManyEstadoVentaInput | VentaCreateManyEstadoVentaInput[]
    skipDuplicates?: boolean
  }

  export type VentaUpsertWithWhereUniqueWithoutEstadoVentaInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutEstadoVentaInput, VentaUncheckedUpdateWithoutEstadoVentaInput>
    create: XOR<VentaCreateWithoutEstadoVentaInput, VentaUncheckedCreateWithoutEstadoVentaInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutEstadoVentaInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutEstadoVentaInput, VentaUncheckedUpdateWithoutEstadoVentaInput>
  }

  export type VentaUpdateManyWithWhereWithoutEstadoVentaInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutEstadoVentaInput>
  }

  export type CompraProductoCreateWithoutProductoInput = {
    cantidad: number
    compra: CompraCreateNestedOneWithoutProductosInput
  }

  export type CompraProductoUncheckedCreateWithoutProductoInput = {
    compraId: number
    cantidad: number
  }

  export type CompraProductoCreateOrConnectWithoutProductoInput = {
    where: CompraProductoWhereUniqueInput
    create: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput>
  }

  export type CompraProductoCreateManyProductoInputEnvelope = {
    data: CompraProductoCreateManyProductoInput | CompraProductoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type ProductoVentaCreateWithoutProductoInput = {
    cantidad: number
    venta: VentaCreateNestedOneWithoutProductosInput
  }

  export type ProductoVentaUncheckedCreateWithoutProductoInput = {
    ventaId: number
    cantidad: number
  }

  export type ProductoVentaCreateOrConnectWithoutProductoInput = {
    where: ProductoVentaWhereUniqueInput
    create: XOR<ProductoVentaCreateWithoutProductoInput, ProductoVentaUncheckedCreateWithoutProductoInput>
  }

  export type ProductoVentaCreateManyProductoInputEnvelope = {
    data: ProductoVentaCreateManyProductoInput | ProductoVentaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CompraProductoUpsertWithWhereUniqueWithoutProductoInput = {
    where: CompraProductoWhereUniqueInput
    update: XOR<CompraProductoUpdateWithoutProductoInput, CompraProductoUncheckedUpdateWithoutProductoInput>
    create: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput>
  }

  export type CompraProductoUpdateWithWhereUniqueWithoutProductoInput = {
    where: CompraProductoWhereUniqueInput
    data: XOR<CompraProductoUpdateWithoutProductoInput, CompraProductoUncheckedUpdateWithoutProductoInput>
  }

  export type CompraProductoUpdateManyWithWhereWithoutProductoInput = {
    where: CompraProductoScalarWhereInput
    data: XOR<CompraProductoUpdateManyMutationInput, CompraProductoUncheckedUpdateManyWithoutProductoInput>
  }

  export type ProductoVentaUpsertWithWhereUniqueWithoutProductoInput = {
    where: ProductoVentaWhereUniqueInput
    update: XOR<ProductoVentaUpdateWithoutProductoInput, ProductoVentaUncheckedUpdateWithoutProductoInput>
    create: XOR<ProductoVentaCreateWithoutProductoInput, ProductoVentaUncheckedCreateWithoutProductoInput>
  }

  export type ProductoVentaUpdateWithWhereUniqueWithoutProductoInput = {
    where: ProductoVentaWhereUniqueInput
    data: XOR<ProductoVentaUpdateWithoutProductoInput, ProductoVentaUncheckedUpdateWithoutProductoInput>
  }

  export type ProductoVentaUpdateManyWithWhereWithoutProductoInput = {
    where: ProductoVentaScalarWhereInput
    data: XOR<ProductoVentaUpdateManyMutationInput, ProductoVentaUncheckedUpdateManyWithoutProductoInput>
  }

  export type ProductoVentaScalarWhereInput = {
    AND?: ProductoVentaScalarWhereInput | ProductoVentaScalarWhereInput[]
    OR?: ProductoVentaScalarWhereInput[]
    NOT?: ProductoVentaScalarWhereInput | ProductoVentaScalarWhereInput[]
    ventaId?: IntFilter<"ProductoVenta"> | number
    productoId?: IntFilter<"ProductoVenta"> | number
    cantidad?: IntFilter<"ProductoVenta"> | number
  }

  export type VentaCreateWithoutProductosInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    estadoVenta: EstadoVentaCreateNestedOneWithoutVentasInput
    envios?: EnvioCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutProductosInput = {
    id?: number
    clienteId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    envios?: EnvioUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutProductosInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutProductosInput, VentaUncheckedCreateWithoutProductosInput>
  }

  export type ProductoCreateWithoutVentasInput = {
    nombre: string
    cantidad: number
    medida: number
    marca: string
    precio: number
    compras?: CompraProductoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutVentasInput = {
    id?: number
    nombre: string
    cantidad: number
    medida: number
    marca: string
    precio: number
    compras?: CompraProductoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutVentasInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutVentasInput, ProductoUncheckedCreateWithoutVentasInput>
  }

  export type VentaUpsertWithoutProductosInput = {
    update: XOR<VentaUpdateWithoutProductosInput, VentaUncheckedUpdateWithoutProductosInput>
    create: XOR<VentaCreateWithoutProductosInput, VentaUncheckedCreateWithoutProductosInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutProductosInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutProductosInput, VentaUncheckedUpdateWithoutProductosInput>
  }

  export type VentaUpdateWithoutProductosInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    estadoVenta?: EstadoVentaUpdateOneRequiredWithoutVentasNestedInput
    envios?: EnvioUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    envios?: EnvioUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type ProductoUpsertWithoutVentasInput = {
    update: XOR<ProductoUpdateWithoutVentasInput, ProductoUncheckedUpdateWithoutVentasInput>
    create: XOR<ProductoCreateWithoutVentasInput, ProductoUncheckedCreateWithoutVentasInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutVentasInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutVentasInput, ProductoUncheckedUpdateWithoutVentasInput>
  }

  export type ProductoUpdateWithoutVentasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medida?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    compras?: CompraProductoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    medida?: FloatFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    compras?: CompraProductoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type RepartidorEnvioCreateWithoutRepartidorInput = {
    envio: EnvioCreateNestedOneWithoutRepartidoresEnviosInput
    estadoEnvio: EstadoEnvioCreateNestedOneWithoutRepartidorEnviosInput
  }

  export type RepartidorEnvioUncheckedCreateWithoutRepartidorInput = {
    envioId: number
    estado: number
  }

  export type RepartidorEnvioCreateOrConnectWithoutRepartidorInput = {
    where: RepartidorEnvioWhereUniqueInput
    create: XOR<RepartidorEnvioCreateWithoutRepartidorInput, RepartidorEnvioUncheckedCreateWithoutRepartidorInput>
  }

  export type RepartidorEnvioCreateManyRepartidorInputEnvelope = {
    data: RepartidorEnvioCreateManyRepartidorInput | RepartidorEnvioCreateManyRepartidorInput[]
    skipDuplicates?: boolean
  }

  export type EnvioCreateWithoutRepartidorInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    venta: VentaCreateNestedOneWithoutEnviosInput
    direccion: DireccionCreateNestedOneWithoutEnviosInput
    estadoEnvio: EstadoEnvioCreateNestedOneWithoutEnviosInput
    repartidoresEnvios?: RepartidorEnvioCreateNestedManyWithoutEnvioInput
  }

  export type EnvioUncheckedCreateWithoutRepartidorInput = {
    id?: number
    ventaId: number
    direccionId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    repartidoresEnvios?: RepartidorEnvioUncheckedCreateNestedManyWithoutEnvioInput
  }

  export type EnvioCreateOrConnectWithoutRepartidorInput = {
    where: EnvioWhereUniqueInput
    create: XOR<EnvioCreateWithoutRepartidorInput, EnvioUncheckedCreateWithoutRepartidorInput>
  }

  export type EnvioCreateManyRepartidorInputEnvelope = {
    data: EnvioCreateManyRepartidorInput | EnvioCreateManyRepartidorInput[]
    skipDuplicates?: boolean
  }

  export type RepartidorEnvioUpsertWithWhereUniqueWithoutRepartidorInput = {
    where: RepartidorEnvioWhereUniqueInput
    update: XOR<RepartidorEnvioUpdateWithoutRepartidorInput, RepartidorEnvioUncheckedUpdateWithoutRepartidorInput>
    create: XOR<RepartidorEnvioCreateWithoutRepartidorInput, RepartidorEnvioUncheckedCreateWithoutRepartidorInput>
  }

  export type RepartidorEnvioUpdateWithWhereUniqueWithoutRepartidorInput = {
    where: RepartidorEnvioWhereUniqueInput
    data: XOR<RepartidorEnvioUpdateWithoutRepartidorInput, RepartidorEnvioUncheckedUpdateWithoutRepartidorInput>
  }

  export type RepartidorEnvioUpdateManyWithWhereWithoutRepartidorInput = {
    where: RepartidorEnvioScalarWhereInput
    data: XOR<RepartidorEnvioUpdateManyMutationInput, RepartidorEnvioUncheckedUpdateManyWithoutRepartidorInput>
  }

  export type EnvioUpsertWithWhereUniqueWithoutRepartidorInput = {
    where: EnvioWhereUniqueInput
    update: XOR<EnvioUpdateWithoutRepartidorInput, EnvioUncheckedUpdateWithoutRepartidorInput>
    create: XOR<EnvioCreateWithoutRepartidorInput, EnvioUncheckedCreateWithoutRepartidorInput>
  }

  export type EnvioUpdateWithWhereUniqueWithoutRepartidorInput = {
    where: EnvioWhereUniqueInput
    data: XOR<EnvioUpdateWithoutRepartidorInput, EnvioUncheckedUpdateWithoutRepartidorInput>
  }

  export type EnvioUpdateManyWithWhereWithoutRepartidorInput = {
    where: EnvioScalarWhereInput
    data: XOR<EnvioUpdateManyMutationInput, EnvioUncheckedUpdateManyWithoutRepartidorInput>
  }

  export type RepartidorCreateWithoutEnviosInput = {
    nombre: string
    telefono: string
    enviosDirect?: EnvioCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorUncheckedCreateWithoutEnviosInput = {
    id?: number
    nombre: string
    telefono: string
    enviosDirect?: EnvioUncheckedCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorCreateOrConnectWithoutEnviosInput = {
    where: RepartidorWhereUniqueInput
    create: XOR<RepartidorCreateWithoutEnviosInput, RepartidorUncheckedCreateWithoutEnviosInput>
  }

  export type EnvioCreateWithoutRepartidoresEnviosInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    venta: VentaCreateNestedOneWithoutEnviosInput
    repartidor: RepartidorCreateNestedOneWithoutEnviosDirectInput
    direccion: DireccionCreateNestedOneWithoutEnviosInput
    estadoEnvio: EstadoEnvioCreateNestedOneWithoutEnviosInput
  }

  export type EnvioUncheckedCreateWithoutRepartidoresEnviosInput = {
    id?: number
    ventaId: number
    repartidorId: number
    direccionId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
  }

  export type EnvioCreateOrConnectWithoutRepartidoresEnviosInput = {
    where: EnvioWhereUniqueInput
    create: XOR<EnvioCreateWithoutRepartidoresEnviosInput, EnvioUncheckedCreateWithoutRepartidoresEnviosInput>
  }

  export type EstadoEnvioCreateWithoutRepartidorEnviosInput = {
    id: number
    descEstado: string
    envios?: EnvioCreateNestedManyWithoutEstadoEnvioInput
  }

  export type EstadoEnvioUncheckedCreateWithoutRepartidorEnviosInput = {
    id: number
    descEstado: string
    envios?: EnvioUncheckedCreateNestedManyWithoutEstadoEnvioInput
  }

  export type EstadoEnvioCreateOrConnectWithoutRepartidorEnviosInput = {
    where: EstadoEnvioWhereUniqueInput
    create: XOR<EstadoEnvioCreateWithoutRepartidorEnviosInput, EstadoEnvioUncheckedCreateWithoutRepartidorEnviosInput>
  }

  export type RepartidorUpsertWithoutEnviosInput = {
    update: XOR<RepartidorUpdateWithoutEnviosInput, RepartidorUncheckedUpdateWithoutEnviosInput>
    create: XOR<RepartidorCreateWithoutEnviosInput, RepartidorUncheckedCreateWithoutEnviosInput>
    where?: RepartidorWhereInput
  }

  export type RepartidorUpdateToOneWithWhereWithoutEnviosInput = {
    where?: RepartidorWhereInput
    data: XOR<RepartidorUpdateWithoutEnviosInput, RepartidorUncheckedUpdateWithoutEnviosInput>
  }

  export type RepartidorUpdateWithoutEnviosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    enviosDirect?: EnvioUpdateManyWithoutRepartidorNestedInput
  }

  export type RepartidorUncheckedUpdateWithoutEnviosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    enviosDirect?: EnvioUncheckedUpdateManyWithoutRepartidorNestedInput
  }

  export type EnvioUpsertWithoutRepartidoresEnviosInput = {
    update: XOR<EnvioUpdateWithoutRepartidoresEnviosInput, EnvioUncheckedUpdateWithoutRepartidoresEnviosInput>
    create: XOR<EnvioCreateWithoutRepartidoresEnviosInput, EnvioUncheckedCreateWithoutRepartidoresEnviosInput>
    where?: EnvioWhereInput
  }

  export type EnvioUpdateToOneWithWhereWithoutRepartidoresEnviosInput = {
    where?: EnvioWhereInput
    data: XOR<EnvioUpdateWithoutRepartidoresEnviosInput, EnvioUncheckedUpdateWithoutRepartidoresEnviosInput>
  }

  export type EnvioUpdateWithoutRepartidoresEnviosInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    venta?: VentaUpdateOneRequiredWithoutEnviosNestedInput
    repartidor?: RepartidorUpdateOneRequiredWithoutEnviosDirectNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutEnviosNestedInput
    estadoEnvio?: EstadoEnvioUpdateOneRequiredWithoutEnviosNestedInput
  }

  export type EnvioUncheckedUpdateWithoutRepartidoresEnviosInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    repartidorId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoEnvioUpsertWithoutRepartidorEnviosInput = {
    update: XOR<EstadoEnvioUpdateWithoutRepartidorEnviosInput, EstadoEnvioUncheckedUpdateWithoutRepartidorEnviosInput>
    create: XOR<EstadoEnvioCreateWithoutRepartidorEnviosInput, EstadoEnvioUncheckedCreateWithoutRepartidorEnviosInput>
    where?: EstadoEnvioWhereInput
  }

  export type EstadoEnvioUpdateToOneWithWhereWithoutRepartidorEnviosInput = {
    where?: EstadoEnvioWhereInput
    data: XOR<EstadoEnvioUpdateWithoutRepartidorEnviosInput, EstadoEnvioUncheckedUpdateWithoutRepartidorEnviosInput>
  }

  export type EstadoEnvioUpdateWithoutRepartidorEnviosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
    envios?: EnvioUpdateManyWithoutEstadoEnvioNestedInput
  }

  export type EstadoEnvioUncheckedUpdateWithoutRepartidorEnviosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
    envios?: EnvioUncheckedUpdateManyWithoutEstadoEnvioNestedInput
  }

  export type ClienteCreateWithoutVentasInput = {
    nombre: string
    telefono: string
    fechaRegistro: Date | string
    direcciones?: DireccionCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutVentasInput = {
    id?: number
    nombre: string
    telefono: string
    fechaRegistro: Date | string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutVentasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
  }

  export type EstadoVentaCreateWithoutVentasInput = {
    id: number
    descEstado: string
  }

  export type EstadoVentaUncheckedCreateWithoutVentasInput = {
    id: number
    descEstado: string
  }

  export type EstadoVentaCreateOrConnectWithoutVentasInput = {
    where: EstadoVentaWhereUniqueInput
    create: XOR<EstadoVentaCreateWithoutVentasInput, EstadoVentaUncheckedCreateWithoutVentasInput>
  }

  export type ProductoVentaCreateWithoutVentaInput = {
    cantidad: number
    producto: ProductoCreateNestedOneWithoutVentasInput
  }

  export type ProductoVentaUncheckedCreateWithoutVentaInput = {
    productoId: number
    cantidad: number
  }

  export type ProductoVentaCreateOrConnectWithoutVentaInput = {
    where: ProductoVentaWhereUniqueInput
    create: XOR<ProductoVentaCreateWithoutVentaInput, ProductoVentaUncheckedCreateWithoutVentaInput>
  }

  export type ProductoVentaCreateManyVentaInputEnvelope = {
    data: ProductoVentaCreateManyVentaInput | ProductoVentaCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type EnvioCreateWithoutVentaInput = {
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    repartidor: RepartidorCreateNestedOneWithoutEnviosDirectInput
    direccion: DireccionCreateNestedOneWithoutEnviosInput
    estadoEnvio: EstadoEnvioCreateNestedOneWithoutEnviosInput
    repartidoresEnvios?: RepartidorEnvioCreateNestedManyWithoutEnvioInput
  }

  export type EnvioUncheckedCreateWithoutVentaInput = {
    id?: number
    repartidorId: number
    direccionId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
    repartidoresEnvios?: RepartidorEnvioUncheckedCreateNestedManyWithoutEnvioInput
  }

  export type EnvioCreateOrConnectWithoutVentaInput = {
    where: EnvioWhereUniqueInput
    create: XOR<EnvioCreateWithoutVentaInput, EnvioUncheckedCreateWithoutVentaInput>
  }

  export type EnvioCreateManyVentaInputEnvelope = {
    data: EnvioCreateManyVentaInput | EnvioCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutVentasInput = {
    update: XOR<ClienteUpdateWithoutVentasInput, ClienteUncheckedUpdateWithoutVentasInput>
    create: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutVentasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutVentasInput, ClienteUncheckedUpdateWithoutVentasInput>
  }

  export type ClienteUpdateWithoutVentasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    direcciones?: DireccionUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    direcciones?: DireccionUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type EstadoVentaUpsertWithoutVentasInput = {
    update: XOR<EstadoVentaUpdateWithoutVentasInput, EstadoVentaUncheckedUpdateWithoutVentasInput>
    create: XOR<EstadoVentaCreateWithoutVentasInput, EstadoVentaUncheckedCreateWithoutVentasInput>
    where?: EstadoVentaWhereInput
  }

  export type EstadoVentaUpdateToOneWithWhereWithoutVentasInput = {
    where?: EstadoVentaWhereInput
    data: XOR<EstadoVentaUpdateWithoutVentasInput, EstadoVentaUncheckedUpdateWithoutVentasInput>
  }

  export type EstadoVentaUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoVentaUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    descEstado?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoVentaUpsertWithWhereUniqueWithoutVentaInput = {
    where: ProductoVentaWhereUniqueInput
    update: XOR<ProductoVentaUpdateWithoutVentaInput, ProductoVentaUncheckedUpdateWithoutVentaInput>
    create: XOR<ProductoVentaCreateWithoutVentaInput, ProductoVentaUncheckedCreateWithoutVentaInput>
  }

  export type ProductoVentaUpdateWithWhereUniqueWithoutVentaInput = {
    where: ProductoVentaWhereUniqueInput
    data: XOR<ProductoVentaUpdateWithoutVentaInput, ProductoVentaUncheckedUpdateWithoutVentaInput>
  }

  export type ProductoVentaUpdateManyWithWhereWithoutVentaInput = {
    where: ProductoVentaScalarWhereInput
    data: XOR<ProductoVentaUpdateManyMutationInput, ProductoVentaUncheckedUpdateManyWithoutVentaInput>
  }

  export type EnvioUpsertWithWhereUniqueWithoutVentaInput = {
    where: EnvioWhereUniqueInput
    update: XOR<EnvioUpdateWithoutVentaInput, EnvioUncheckedUpdateWithoutVentaInput>
    create: XOR<EnvioCreateWithoutVentaInput, EnvioUncheckedCreateWithoutVentaInput>
  }

  export type EnvioUpdateWithWhereUniqueWithoutVentaInput = {
    where: EnvioWhereUniqueInput
    data: XOR<EnvioUpdateWithoutVentaInput, EnvioUncheckedUpdateWithoutVentaInput>
  }

  export type EnvioUpdateManyWithWhereWithoutVentaInput = {
    where: EnvioScalarWhereInput
    data: XOR<EnvioUpdateManyMutationInput, EnvioUncheckedUpdateManyWithoutVentaInput>
  }

  export type EntidadUsuarioCreateWithoutEntidadInput = {
    usuario: UsuarioCreateNestedOneWithoutPermisosInput
  }

  export type EntidadUsuarioUncheckedCreateWithoutEntidadInput = {
    usuarioId: number
  }

  export type EntidadUsuarioCreateOrConnectWithoutEntidadInput = {
    where: EntidadUsuarioWhereUniqueInput
    create: XOR<EntidadUsuarioCreateWithoutEntidadInput, EntidadUsuarioUncheckedCreateWithoutEntidadInput>
  }

  export type EntidadUsuarioCreateManyEntidadInputEnvelope = {
    data: EntidadUsuarioCreateManyEntidadInput | EntidadUsuarioCreateManyEntidadInput[]
    skipDuplicates?: boolean
  }

  export type EntidadCreateWithoutRolesInput = {
    nombre: string
    tipo: $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioCreateNestedManyWithoutEntidadInput
    permisos?: EntidadCreateNestedManyWithoutRolesInput
  }

  export type EntidadUncheckedCreateWithoutRolesInput = {
    id?: number
    nombre: string
    tipo: $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioUncheckedCreateNestedManyWithoutEntidadInput
    permisos?: EntidadUncheckedCreateNestedManyWithoutRolesInput
  }

  export type EntidadCreateOrConnectWithoutRolesInput = {
    where: EntidadWhereUniqueInput
    create: XOR<EntidadCreateWithoutRolesInput, EntidadUncheckedCreateWithoutRolesInput>
  }

  export type EntidadCreateWithoutPermisosInput = {
    nombre: string
    tipo: $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioCreateNestedManyWithoutEntidadInput
    roles?: EntidadCreateNestedManyWithoutPermisosInput
  }

  export type EntidadUncheckedCreateWithoutPermisosInput = {
    id?: number
    nombre: string
    tipo: $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioUncheckedCreateNestedManyWithoutEntidadInput
    roles?: EntidadUncheckedCreateNestedManyWithoutPermisosInput
  }

  export type EntidadCreateOrConnectWithoutPermisosInput = {
    where: EntidadWhereUniqueInput
    create: XOR<EntidadCreateWithoutPermisosInput, EntidadUncheckedCreateWithoutPermisosInput>
  }

  export type EntidadUsuarioUpsertWithWhereUniqueWithoutEntidadInput = {
    where: EntidadUsuarioWhereUniqueInput
    update: XOR<EntidadUsuarioUpdateWithoutEntidadInput, EntidadUsuarioUncheckedUpdateWithoutEntidadInput>
    create: XOR<EntidadUsuarioCreateWithoutEntidadInput, EntidadUsuarioUncheckedCreateWithoutEntidadInput>
  }

  export type EntidadUsuarioUpdateWithWhereUniqueWithoutEntidadInput = {
    where: EntidadUsuarioWhereUniqueInput
    data: XOR<EntidadUsuarioUpdateWithoutEntidadInput, EntidadUsuarioUncheckedUpdateWithoutEntidadInput>
  }

  export type EntidadUsuarioUpdateManyWithWhereWithoutEntidadInput = {
    where: EntidadUsuarioScalarWhereInput
    data: XOR<EntidadUsuarioUpdateManyMutationInput, EntidadUsuarioUncheckedUpdateManyWithoutEntidadInput>
  }

  export type EntidadUsuarioScalarWhereInput = {
    AND?: EntidadUsuarioScalarWhereInput | EntidadUsuarioScalarWhereInput[]
    OR?: EntidadUsuarioScalarWhereInput[]
    NOT?: EntidadUsuarioScalarWhereInput | EntidadUsuarioScalarWhereInput[]
    usuarioId?: IntFilter<"EntidadUsuario"> | number
    entidadId?: IntFilter<"EntidadUsuario"> | number
  }

  export type EntidadUpsertWithWhereUniqueWithoutRolesInput = {
    where: EntidadWhereUniqueInput
    update: XOR<EntidadUpdateWithoutRolesInput, EntidadUncheckedUpdateWithoutRolesInput>
    create: XOR<EntidadCreateWithoutRolesInput, EntidadUncheckedCreateWithoutRolesInput>
  }

  export type EntidadUpdateWithWhereUniqueWithoutRolesInput = {
    where: EntidadWhereUniqueInput
    data: XOR<EntidadUpdateWithoutRolesInput, EntidadUncheckedUpdateWithoutRolesInput>
  }

  export type EntidadUpdateManyWithWhereWithoutRolesInput = {
    where: EntidadScalarWhereInput
    data: XOR<EntidadUpdateManyMutationInput, EntidadUncheckedUpdateManyWithoutRolesInput>
  }

  export type EntidadScalarWhereInput = {
    AND?: EntidadScalarWhereInput | EntidadScalarWhereInput[]
    OR?: EntidadScalarWhereInput[]
    NOT?: EntidadScalarWhereInput | EntidadScalarWhereInput[]
    id?: IntFilter<"Entidad"> | number
    nombre?: StringFilter<"Entidad"> | string
    tipo?: EnumTipoEntidadFilter<"Entidad"> | $Enums.TipoEntidad
  }

  export type EntidadUpsertWithWhereUniqueWithoutPermisosInput = {
    where: EntidadWhereUniqueInput
    update: XOR<EntidadUpdateWithoutPermisosInput, EntidadUncheckedUpdateWithoutPermisosInput>
    create: XOR<EntidadCreateWithoutPermisosInput, EntidadUncheckedCreateWithoutPermisosInput>
  }

  export type EntidadUpdateWithWhereUniqueWithoutPermisosInput = {
    where: EntidadWhereUniqueInput
    data: XOR<EntidadUpdateWithoutPermisosInput, EntidadUncheckedUpdateWithoutPermisosInput>
  }

  export type EntidadUpdateManyWithWhereWithoutPermisosInput = {
    where: EntidadScalarWhereInput
    data: XOR<EntidadUpdateManyMutationInput, EntidadUncheckedUpdateManyWithoutPermisosInput>
  }

  export type UsuarioCreateWithoutPermisosInput = {
    nombre: string
    email: string
    clave: string
    habilitado: boolean
  }

  export type UsuarioUncheckedCreateWithoutPermisosInput = {
    id?: number
    nombre: string
    email: string
    clave: string
    habilitado: boolean
  }

  export type UsuarioCreateOrConnectWithoutPermisosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPermisosInput, UsuarioUncheckedCreateWithoutPermisosInput>
  }

  export type EntidadCreateWithoutEntidadUsuarioInput = {
    nombre: string
    tipo: $Enums.TipoEntidad
    permisos?: EntidadCreateNestedManyWithoutRolesInput
    roles?: EntidadCreateNestedManyWithoutPermisosInput
  }

  export type EntidadUncheckedCreateWithoutEntidadUsuarioInput = {
    id?: number
    nombre: string
    tipo: $Enums.TipoEntidad
    permisos?: EntidadUncheckedCreateNestedManyWithoutRolesInput
    roles?: EntidadUncheckedCreateNestedManyWithoutPermisosInput
  }

  export type EntidadCreateOrConnectWithoutEntidadUsuarioInput = {
    where: EntidadWhereUniqueInput
    create: XOR<EntidadCreateWithoutEntidadUsuarioInput, EntidadUncheckedCreateWithoutEntidadUsuarioInput>
  }

  export type UsuarioUpsertWithoutPermisosInput = {
    update: XOR<UsuarioUpdateWithoutPermisosInput, UsuarioUncheckedUpdateWithoutPermisosInput>
    create: XOR<UsuarioCreateWithoutPermisosInput, UsuarioUncheckedCreateWithoutPermisosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPermisosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPermisosInput, UsuarioUncheckedUpdateWithoutPermisosInput>
  }

  export type UsuarioUpdateWithoutPermisosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EntidadUpsertWithoutEntidadUsuarioInput = {
    update: XOR<EntidadUpdateWithoutEntidadUsuarioInput, EntidadUncheckedUpdateWithoutEntidadUsuarioInput>
    create: XOR<EntidadCreateWithoutEntidadUsuarioInput, EntidadUncheckedCreateWithoutEntidadUsuarioInput>
    where?: EntidadWhereInput
  }

  export type EntidadUpdateToOneWithWhereWithoutEntidadUsuarioInput = {
    where?: EntidadWhereInput
    data: XOR<EntidadUpdateWithoutEntidadUsuarioInput, EntidadUncheckedUpdateWithoutEntidadUsuarioInput>
  }

  export type EntidadUpdateWithoutEntidadUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
    permisos?: EntidadUpdateManyWithoutRolesNestedInput
    roles?: EntidadUpdateManyWithoutPermisosNestedInput
  }

  export type EntidadUncheckedUpdateWithoutEntidadUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
    permisos?: EntidadUncheckedUpdateManyWithoutRolesNestedInput
    roles?: EntidadUncheckedUpdateManyWithoutPermisosNestedInput
  }

  export type EntidadUsuarioCreateWithoutUsuarioInput = {
    entidad: EntidadCreateNestedOneWithoutEntidadUsuarioInput
  }

  export type EntidadUsuarioUncheckedCreateWithoutUsuarioInput = {
    entidadId: number
  }

  export type EntidadUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: EntidadUsuarioWhereUniqueInput
    create: XOR<EntidadUsuarioCreateWithoutUsuarioInput, EntidadUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type EntidadUsuarioCreateManyUsuarioInputEnvelope = {
    data: EntidadUsuarioCreateManyUsuarioInput | EntidadUsuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EntidadUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EntidadUsuarioWhereUniqueInput
    update: XOR<EntidadUsuarioUpdateWithoutUsuarioInput, EntidadUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EntidadUsuarioCreateWithoutUsuarioInput, EntidadUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type EntidadUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EntidadUsuarioWhereUniqueInput
    data: XOR<EntidadUsuarioUpdateWithoutUsuarioInput, EntidadUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type EntidadUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: EntidadUsuarioScalarWhereInput
    data: XOR<EntidadUsuarioUpdateManyMutationInput, EntidadUsuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DireccionCreateManyClienteInput = {
    id?: number
    calle1: string
    calle2?: string | null
    codigoPostal: string
    provincia: string
    localidad: string
    detalle?: string | null
  }

  export type VentaCreateManyClienteInput = {
    id?: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
  }

  export type DireccionUpdateWithoutClienteInput = {
    calle1?: StringFieldUpdateOperationsInput | string
    calle2?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    envios?: EnvioUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    calle1?: StringFieldUpdateOperationsInput | string
    calle2?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
    envios?: EnvioUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    calle1?: StringFieldUpdateOperationsInput | string
    calle2?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    detalle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VentaUpdateWithoutClienteInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estadoVenta?: EstadoVentaUpdateOneRequiredWithoutVentasNestedInput
    productos?: ProductoVentaUpdateManyWithoutVentaNestedInput
    envios?: EnvioUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoVentaUncheckedUpdateManyWithoutVentaNestedInput
    envios?: EnvioUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompraProductoCreateManyCompraInput = {
    productoId: number
    cantidad: number
  }

  export type CompraProductoUpdateWithoutCompraInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutComprasNestedInput
  }

  export type CompraProductoUncheckedUpdateWithoutCompraInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CompraProductoUncheckedUpdateManyWithoutCompraInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type EnvioCreateManyDireccionInput = {
    id?: number
    ventaId: number
    repartidorId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
  }

  export type EnvioUpdateWithoutDireccionInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    venta?: VentaUpdateOneRequiredWithoutEnviosNestedInput
    repartidor?: RepartidorUpdateOneRequiredWithoutEnviosDirectNestedInput
    estadoEnvio?: EstadoEnvioUpdateOneRequiredWithoutEnviosNestedInput
    repartidoresEnvios?: RepartidorEnvioUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    repartidorId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    repartidoresEnvios?: RepartidorEnvioUncheckedUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateManyWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    repartidorId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompraCreateManyDistribuidorInput = {
    id?: number
    empleadoId: number
    fecha: Date | string
    monto: number
    descripcion: string
  }

  export type CompraUpdateWithoutDistribuidorInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    empleado?: EmpleadoUpdateOneRequiredWithoutComprasNestedInput
    productos?: CompraProductoUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutDistribuidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    productos?: CompraProductoUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateManyWithoutDistribuidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    empleadoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type CompraCreateManyEmpleadoInput = {
    id?: number
    distribuidorId: number
    fecha: Date | string
    monto: number
    descripcion: string
  }

  export type CompraUpdateWithoutEmpleadoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    distribuidor?: DistribuidorUpdateOneRequiredWithoutComprasNestedInput
    productos?: CompraProductoUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutEmpleadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    distribuidorId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    productos?: CompraProductoUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateManyWithoutEmpleadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    distribuidorId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type RepartidorEnvioCreateManyEnvioInput = {
    repartidorId: number
    estado: number
  }

  export type RepartidorEnvioUpdateWithoutEnvioInput = {
    repartidor?: RepartidorUpdateOneRequiredWithoutEnviosNestedInput
    estadoEnvio?: EstadoEnvioUpdateOneRequiredWithoutRepartidorEnviosNestedInput
  }

  export type RepartidorEnvioUncheckedUpdateWithoutEnvioInput = {
    repartidorId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type RepartidorEnvioUncheckedUpdateManyWithoutEnvioInput = {
    repartidorId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type EnvioCreateManyEstadoEnvioInput = {
    id?: number
    ventaId: number
    repartidorId: number
    direccionId: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
  }

  export type RepartidorEnvioCreateManyEstadoEnvioInput = {
    repartidorId: number
    envioId: number
  }

  export type EnvioUpdateWithoutEstadoEnvioInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    venta?: VentaUpdateOneRequiredWithoutEnviosNestedInput
    repartidor?: RepartidorUpdateOneRequiredWithoutEnviosDirectNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutEnviosNestedInput
    repartidoresEnvios?: RepartidorEnvioUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateWithoutEstadoEnvioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    repartidorId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    repartidoresEnvios?: RepartidorEnvioUncheckedUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateManyWithoutEstadoEnvioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    repartidorId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepartidorEnvioUpdateWithoutEstadoEnvioInput = {
    repartidor?: RepartidorUpdateOneRequiredWithoutEnviosNestedInput
    envio?: EnvioUpdateOneRequiredWithoutRepartidoresEnviosNestedInput
  }

  export type RepartidorEnvioUncheckedUpdateWithoutEstadoEnvioInput = {
    repartidorId?: IntFieldUpdateOperationsInput | number
    envioId?: IntFieldUpdateOperationsInput | number
  }

  export type RepartidorEnvioUncheckedUpdateManyWithoutEstadoEnvioInput = {
    repartidorId?: IntFieldUpdateOperationsInput | number
    envioId?: IntFieldUpdateOperationsInput | number
  }

  export type VentaCreateManyEstadoVentaInput = {
    id?: number
    clienteId: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
  }

  export type VentaUpdateWithoutEstadoVentaInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    productos?: ProductoVentaUpdateManyWithoutVentaNestedInput
    envios?: EnvioUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutEstadoVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoVentaUncheckedUpdateManyWithoutVentaNestedInput
    envios?: EnvioUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateManyWithoutEstadoVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompraProductoCreateManyProductoInput = {
    compraId: number
    cantidad: number
  }

  export type ProductoVentaCreateManyProductoInput = {
    ventaId: number
    cantidad: number
  }

  export type CompraProductoUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    compra?: CompraUpdateOneRequiredWithoutProductosNestedInput
  }

  export type CompraProductoUncheckedUpdateWithoutProductoInput = {
    compraId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CompraProductoUncheckedUpdateManyWithoutProductoInput = {
    compraId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoVentaUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    venta?: VentaUpdateOneRequiredWithoutProductosNestedInput
  }

  export type ProductoVentaUncheckedUpdateWithoutProductoInput = {
    ventaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoVentaUncheckedUpdateManyWithoutProductoInput = {
    ventaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type RepartidorEnvioCreateManyRepartidorInput = {
    envioId: number
    estado: number
  }

  export type EnvioCreateManyRepartidorInput = {
    id?: number
    ventaId: number
    direccionId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
  }

  export type RepartidorEnvioUpdateWithoutRepartidorInput = {
    envio?: EnvioUpdateOneRequiredWithoutRepartidoresEnviosNestedInput
    estadoEnvio?: EstadoEnvioUpdateOneRequiredWithoutRepartidorEnviosNestedInput
  }

  export type RepartidorEnvioUncheckedUpdateWithoutRepartidorInput = {
    envioId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type RepartidorEnvioUncheckedUpdateManyWithoutRepartidorInput = {
    envioId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type EnvioUpdateWithoutRepartidorInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    venta?: VentaUpdateOneRequiredWithoutEnviosNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutEnviosNestedInput
    estadoEnvio?: EstadoEnvioUpdateOneRequiredWithoutEnviosNestedInput
    repartidoresEnvios?: RepartidorEnvioUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateWithoutRepartidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    repartidoresEnvios?: RepartidorEnvioUncheckedUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateManyWithoutRepartidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoVentaCreateManyVentaInput = {
    productoId: number
    cantidad: number
  }

  export type EnvioCreateManyVentaInput = {
    id?: number
    repartidorId: number
    direccionId: number
    estado: number
    fechaInicio: Date | string
    fechaUltimaActualizacion: Date | string
  }

  export type ProductoVentaUpdateWithoutVentaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutVentasNestedInput
  }

  export type ProductoVentaUncheckedUpdateWithoutVentaInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoVentaUncheckedUpdateManyWithoutVentaInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type EnvioUpdateWithoutVentaInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    repartidor?: RepartidorUpdateOneRequiredWithoutEnviosDirectNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutEnviosNestedInput
    estadoEnvio?: EstadoEnvioUpdateOneRequiredWithoutEnviosNestedInput
    repartidoresEnvios?: RepartidorEnvioUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    repartidorId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    repartidoresEnvios?: RepartidorEnvioUncheckedUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateManyWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    repartidorId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaUltimaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntidadUsuarioCreateManyEntidadInput = {
    usuarioId: number
  }

  export type EntidadUsuarioUpdateWithoutEntidadInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type EntidadUsuarioUncheckedUpdateWithoutEntidadInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type EntidadUsuarioUncheckedUpdateManyWithoutEntidadInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type EntidadUpdateWithoutRolesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioUpdateManyWithoutEntidadNestedInput
    permisos?: EntidadUpdateManyWithoutRolesNestedInput
  }

  export type EntidadUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioUncheckedUpdateManyWithoutEntidadNestedInput
    permisos?: EntidadUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type EntidadUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
  }

  export type EntidadUpdateWithoutPermisosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioUpdateManyWithoutEntidadNestedInput
    roles?: EntidadUpdateManyWithoutPermisosNestedInput
  }

  export type EntidadUncheckedUpdateWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
    entidadUsuario?: EntidadUsuarioUncheckedUpdateManyWithoutEntidadNestedInput
    roles?: EntidadUncheckedUpdateManyWithoutPermisosNestedInput
  }

  export type EntidadUncheckedUpdateManyWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEntidadFieldUpdateOperationsInput | $Enums.TipoEntidad
  }

  export type EntidadUsuarioCreateManyUsuarioInput = {
    entidadId: number
  }

  export type EntidadUsuarioUpdateWithoutUsuarioInput = {
    entidad?: EntidadUpdateOneRequiredWithoutEntidadUsuarioNestedInput
  }

  export type EntidadUsuarioUncheckedUpdateWithoutUsuarioInput = {
    entidadId?: IntFieldUpdateOperationsInput | number
  }

  export type EntidadUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    entidadId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClienteCountOutputTypeDefaultArgs instead
     */
    export type ClienteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompraCountOutputTypeDefaultArgs instead
     */
    export type CompraCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompraCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DireccionCountOutputTypeDefaultArgs instead
     */
    export type DireccionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DireccionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DistribuidorCountOutputTypeDefaultArgs instead
     */
    export type DistribuidorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DistribuidorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmpleadoCountOutputTypeDefaultArgs instead
     */
    export type EmpleadoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnvioCountOutputTypeDefaultArgs instead
     */
    export type EnvioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnvioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstadoEnvioCountOutputTypeDefaultArgs instead
     */
    export type EstadoEnvioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstadoEnvioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstadoVentaCountOutputTypeDefaultArgs instead
     */
    export type EstadoVentaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstadoVentaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductoCountOutputTypeDefaultArgs instead
     */
    export type ProductoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RepartidorCountOutputTypeDefaultArgs instead
     */
    export type RepartidorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RepartidorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VentaCountOutputTypeDefaultArgs instead
     */
    export type VentaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VentaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntidadCountOutputTypeDefaultArgs instead
     */
    export type EntidadCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntidadCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClienteDefaultArgs instead
     */
    export type ClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompraDefaultArgs instead
     */
    export type CompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompraDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompraProductoDefaultArgs instead
     */
    export type CompraProductoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompraProductoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DireccionDefaultArgs instead
     */
    export type DireccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DireccionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DistribuidorDefaultArgs instead
     */
    export type DistribuidorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DistribuidorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmpleadoDefaultArgs instead
     */
    export type EmpleadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmpleadoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnvioDefaultArgs instead
     */
    export type EnvioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnvioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstadoEnvioDefaultArgs instead
     */
    export type EstadoEnvioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstadoEnvioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstadoVentaDefaultArgs instead
     */
    export type EstadoVentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstadoVentaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductoDefaultArgs instead
     */
    export type ProductoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductoVentaDefaultArgs instead
     */
    export type ProductoVentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductoVentaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RepartidorDefaultArgs instead
     */
    export type RepartidorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RepartidorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RepartidorEnvioDefaultArgs instead
     */
    export type RepartidorEnvioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RepartidorEnvioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VentaDefaultArgs instead
     */
    export type VentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VentaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntidadDefaultArgs instead
     */
    export type EntidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntidadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntidadUsuarioDefaultArgs instead
     */
    export type EntidadUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntidadUsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}