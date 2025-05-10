
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model CouponUser
 * 
 */
export type CouponUser = $Result.DefaultSelection<Prisma.$CouponUserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  CUSTOMER: 'CUSTOMER',
  ORGANIZER: 'ORGANIZER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const TransactionStatus: {
  waiting_payment: 'waiting_payment',
  waiting_confirm: 'waiting_confirm',
  done: 'done',
  rejected: 'rejected',
  expired: 'expired',
  canceled: 'canceled'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const PointSource: {
  referral: 'referral',
  refund: 'refund',
  redeem: 'redeem'
};

export type PointSource = (typeof PointSource)[keyof typeof PointSource]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type PointSource = $Enums.PointSource

export const PointSource: typeof $Enums.PointSource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.couponUser`: Exposes CRUD operations for the **CouponUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CouponUsers
    * const couponUsers = await prisma.couponUser.findMany()
    * ```
    */
  get couponUser(): Prisma.CouponUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Coupon: 'Coupon',
    CouponUser: 'CouponUser',
    Event: 'Event',
    Voucher: 'Voucher',
    Transaction: 'Transaction',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "coupon" | "couponUser" | "event" | "voucher" | "transaction" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      CouponUser: {
        payload: Prisma.$CouponUserPayload<ExtArgs>
        fields: Prisma.CouponUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUserPayload>
          }
          findFirst: {
            args: Prisma.CouponUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUserPayload>
          }
          findMany: {
            args: Prisma.CouponUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUserPayload>[]
          }
          create: {
            args: Prisma.CouponUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUserPayload>
          }
          createMany: {
            args: Prisma.CouponUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CouponUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUserPayload>
          }
          update: {
            args: Prisma.CouponUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUserPayload>
          }
          deleteMany: {
            args: Prisma.CouponUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponUserPayload>
          }
          aggregate: {
            args: Prisma.CouponUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCouponUser>
          }
          groupBy: {
            args: Prisma.CouponUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponUserCountArgs<ExtArgs>
            result: $Utils.Optional<CouponUserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    coupon?: CouponOmit
    couponUser?: CouponUserOmit
    event?: EventOmit
    voucher?: VoucherOmit
    transaction?: TransactionOmit
    review?: ReviewOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    referrals: number
    coupons: number
    events: number
    reviews: number
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrals?: boolean | UserCountOutputTypeCountReferralsArgs
    coupons?: boolean | UserCountOutputTypeCountCouponsArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CouponCountOutputType
   */

  export type CouponCountOutputType = {
    users: number
  }

  export type CouponCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CouponCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponCountOutputType
     */
    select?: CouponCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponUserWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    reviews: number
    transactions: number
    vouchers: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | EventCountOutputTypeCountReviewsArgs
    transactions?: boolean | EventCountOutputTypeCountTransactionsArgs
    vouchers?: boolean | EventCountOutputTypeCountVouchersArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    points_balance: number | null
  }

  export type UserSumAggregateOutputType = {
    points_balance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    is_verified: boolean | null
    profile_picture: string | null
    referral_code: string | null
    referred_by_code: string | null
    points_balance: number | null
    points_expiry_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    is_verified: boolean | null
    profile_picture: string | null
    referral_code: string | null
    referred_by_code: string | null
    points_balance: number | null
    points_expiry_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    password: number
    role: number
    is_verified: number
    profile_picture: number
    referral_code: number
    referred_by_code: number
    points_balance: number
    points_expiry_date: number
    created_at: number
    updated_at: number
    is_deleted: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points_balance?: true
  }

  export type UserSumAggregateInputType = {
    points_balance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    role?: true
    is_verified?: true
    profile_picture?: true
    referral_code?: true
    referred_by_code?: true
    points_balance?: true
    points_expiry_date?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    role?: true
    is_verified?: true
    profile_picture?: true
    referral_code?: true
    referred_by_code?: true
    points_balance?: true
    points_expiry_date?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    role?: true
    is_verified?: true
    profile_picture?: true
    referral_code?: true
    referred_by_code?: true
    points_balance?: true
    points_expiry_date?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified: boolean
    profile_picture: string | null
    referral_code: string
    referred_by_code: string | null
    points_balance: number
    points_expiry_date: Date | null
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_verified?: boolean
    profile_picture?: boolean
    referral_code?: boolean
    referred_by_code?: boolean
    points_balance?: boolean
    points_expiry_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    referrer?: boolean | User$referrerArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    coupons?: boolean | User$couponsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_verified?: boolean
    profile_picture?: boolean
    referral_code?: boolean
    referred_by_code?: boolean
    points_balance?: boolean
    points_expiry_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "password" | "role" | "is_verified" | "profile_picture" | "referral_code" | "referred_by_code" | "points_balance" | "points_expiry_date" | "created_at" | "updated_at" | "is_deleted", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | User$referrerArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    coupons?: boolean | User$couponsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      referrer: Prisma.$UserPayload<ExtArgs> | null
      referrals: Prisma.$UserPayload<ExtArgs>[]
      coupons: Prisma.$CouponUserPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      email: string
      password: string
      role: $Enums.UserRole
      is_verified: boolean
      profile_picture: string | null
      referral_code: string
      referred_by_code: string | null
      points_balance: number
      points_expiry_date: Date | null
      created_at: Date
      updated_at: Date
      is_deleted: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrer<T extends User$referrerArgs<ExtArgs> = {}>(args?: Subset<T, User$referrerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referrals<T extends User$referralsArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupons<T extends User$couponsArgs<ExtArgs> = {}>(args?: Subset<T, User$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly profile_picture: FieldRef<"User", 'String'>
    readonly referral_code: FieldRef<"User", 'String'>
    readonly referred_by_code: FieldRef<"User", 'String'>
    readonly points_balance: FieldRef<"User", 'Int'>
    readonly points_expiry_date: FieldRef<"User", 'DateTime'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly is_deleted: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.referrer
   */
  export type User$referrerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.referrals
   */
  export type User$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.coupons
   */
  export type User$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    where?: CouponUserWhereInput
    orderBy?: CouponUserOrderByWithRelationInput | CouponUserOrderByWithRelationInput[]
    cursor?: CouponUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponUserScalarFieldEnum | CouponUserScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    discount_amount: number | null
  }

  export type CouponSumAggregateOutputType = {
    discount_amount: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    code: string | null
    discount_amount: number | null
    expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    code: string | null
    discount_amount: number | null
    expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    name: number
    description: number
    code: number
    discount_amount: number
    expired_at: number
    created_at: number
    updated_at: number
    is_deleted: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    discount_amount?: true
  }

  export type CouponSumAggregateInputType = {
    discount_amount?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    code?: true
    discount_amount?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    code?: true
    discount_amount?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    code?: true
    discount_amount?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    name: string | null
    description: string | null
    code: string
    discount_amount: number
    expired_at: Date | null
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    code?: boolean
    discount_amount?: boolean
    expired_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    users?: boolean | Coupon$usersArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>



  export type CouponSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    code?: boolean
    discount_amount?: boolean
    expired_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
  }

  export type CouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "code" | "discount_amount" | "expired_at" | "created_at" | "updated_at" | "is_deleted", ExtArgs["result"]["coupon"]>
  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Coupon$usersArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      users: Prisma.$CouponUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      description: string | null
      code: string
      discount_amount: number
      expired_at: Date | null
      created_at: Date
      updated_at: Date
      is_deleted: boolean
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
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
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Coupon$usersArgs<ExtArgs> = {}>(args?: Subset<T, Coupon$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Coupon model
   */
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly name: FieldRef<"Coupon", 'String'>
    readonly description: FieldRef<"Coupon", 'String'>
    readonly code: FieldRef<"Coupon", 'String'>
    readonly discount_amount: FieldRef<"Coupon", 'Int'>
    readonly expired_at: FieldRef<"Coupon", 'DateTime'>
    readonly created_at: FieldRef<"Coupon", 'DateTime'>
    readonly updated_at: FieldRef<"Coupon", 'DateTime'>
    readonly is_deleted: FieldRef<"Coupon", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupon.users
   */
  export type Coupon$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    where?: CouponUserWhereInput
    orderBy?: CouponUserOrderByWithRelationInput | CouponUserOrderByWithRelationInput[]
    cursor?: CouponUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponUserScalarFieldEnum | CouponUserScalarFieldEnum[]
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
  }


  /**
   * Model CouponUser
   */

  export type AggregateCouponUser = {
    _count: CouponUserCountAggregateOutputType | null
    _min: CouponUserMinAggregateOutputType | null
    _max: CouponUserMaxAggregateOutputType | null
  }

  export type CouponUserMinAggregateOutputType = {
    id: string | null
    expired_at: Date | null
    used: boolean | null
    user_id: string | null
    coupon_id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type CouponUserMaxAggregateOutputType = {
    id: string | null
    expired_at: Date | null
    used: boolean | null
    user_id: string | null
    coupon_id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type CouponUserCountAggregateOutputType = {
    id: number
    expired_at: number
    used: number
    user_id: number
    coupon_id: number
    created_at: number
    updated_at: number
    is_deleted: number
    _all: number
  }


  export type CouponUserMinAggregateInputType = {
    id?: true
    expired_at?: true
    used?: true
    user_id?: true
    coupon_id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type CouponUserMaxAggregateInputType = {
    id?: true
    expired_at?: true
    used?: true
    user_id?: true
    coupon_id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type CouponUserCountAggregateInputType = {
    id?: true
    expired_at?: true
    used?: true
    user_id?: true
    coupon_id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    _all?: true
  }

  export type CouponUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CouponUser to aggregate.
     */
    where?: CouponUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsers to fetch.
     */
    orderBy?: CouponUserOrderByWithRelationInput | CouponUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CouponUsers
    **/
    _count?: true | CouponUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponUserMaxAggregateInputType
  }

  export type GetCouponUserAggregateType<T extends CouponUserAggregateArgs> = {
        [P in keyof T & keyof AggregateCouponUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouponUser[P]>
      : GetScalarType<T[P], AggregateCouponUser[P]>
  }




  export type CouponUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponUserWhereInput
    orderBy?: CouponUserOrderByWithAggregationInput | CouponUserOrderByWithAggregationInput[]
    by: CouponUserScalarFieldEnum[] | CouponUserScalarFieldEnum
    having?: CouponUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponUserCountAggregateInputType | true
    _min?: CouponUserMinAggregateInputType
    _max?: CouponUserMaxAggregateInputType
  }

  export type CouponUserGroupByOutputType = {
    id: string
    expired_at: Date | null
    used: boolean
    user_id: string
    coupon_id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    _count: CouponUserCountAggregateOutputType | null
    _min: CouponUserMinAggregateOutputType | null
    _max: CouponUserMaxAggregateOutputType | null
  }

  type GetCouponUserGroupByPayload<T extends CouponUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponUserGroupByOutputType[P]>
            : GetScalarType<T[P], CouponUserGroupByOutputType[P]>
        }
      >
    >


  export type CouponUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expired_at?: boolean
    used?: boolean
    user_id?: boolean
    coupon_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couponUser"]>



  export type CouponUserSelectScalar = {
    id?: boolean
    expired_at?: boolean
    used?: boolean
    user_id?: boolean
    coupon_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
  }

  export type CouponUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expired_at" | "used" | "user_id" | "coupon_id" | "created_at" | "updated_at" | "is_deleted", ExtArgs["result"]["couponUser"]>
  export type CouponUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }

  export type $CouponUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CouponUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      coupon: Prisma.$CouponPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expired_at: Date | null
      used: boolean
      user_id: string
      coupon_id: string
      created_at: Date
      updated_at: Date
      is_deleted: boolean
    }, ExtArgs["result"]["couponUser"]>
    composites: {}
  }

  type CouponUserGetPayload<S extends boolean | null | undefined | CouponUserDefaultArgs> = $Result.GetResult<Prisma.$CouponUserPayload, S>

  type CouponUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponUserCountAggregateInputType | true
    }

  export interface CouponUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CouponUser'], meta: { name: 'CouponUser' } }
    /**
     * Find zero or one CouponUser that matches the filter.
     * @param {CouponUserFindUniqueArgs} args - Arguments to find a CouponUser
     * @example
     * // Get one CouponUser
     * const couponUser = await prisma.couponUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponUserFindUniqueArgs>(args: SelectSubset<T, CouponUserFindUniqueArgs<ExtArgs>>): Prisma__CouponUserClient<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CouponUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponUserFindUniqueOrThrowArgs} args - Arguments to find a CouponUser
     * @example
     * // Get one CouponUser
     * const couponUser = await prisma.couponUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponUserFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponUserClient<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CouponUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUserFindFirstArgs} args - Arguments to find a CouponUser
     * @example
     * // Get one CouponUser
     * const couponUser = await prisma.couponUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponUserFindFirstArgs>(args?: SelectSubset<T, CouponUserFindFirstArgs<ExtArgs>>): Prisma__CouponUserClient<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CouponUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUserFindFirstOrThrowArgs} args - Arguments to find a CouponUser
     * @example
     * // Get one CouponUser
     * const couponUser = await prisma.couponUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponUserFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponUserClient<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CouponUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CouponUsers
     * const couponUsers = await prisma.couponUser.findMany()
     * 
     * // Get first 10 CouponUsers
     * const couponUsers = await prisma.couponUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponUserWithIdOnly = await prisma.couponUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponUserFindManyArgs>(args?: SelectSubset<T, CouponUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CouponUser.
     * @param {CouponUserCreateArgs} args - Arguments to create a CouponUser.
     * @example
     * // Create one CouponUser
     * const CouponUser = await prisma.couponUser.create({
     *   data: {
     *     // ... data to create a CouponUser
     *   }
     * })
     * 
     */
    create<T extends CouponUserCreateArgs>(args: SelectSubset<T, CouponUserCreateArgs<ExtArgs>>): Prisma__CouponUserClient<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CouponUsers.
     * @param {CouponUserCreateManyArgs} args - Arguments to create many CouponUsers.
     * @example
     * // Create many CouponUsers
     * const couponUser = await prisma.couponUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponUserCreateManyArgs>(args?: SelectSubset<T, CouponUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CouponUser.
     * @param {CouponUserDeleteArgs} args - Arguments to delete one CouponUser.
     * @example
     * // Delete one CouponUser
     * const CouponUser = await prisma.couponUser.delete({
     *   where: {
     *     // ... filter to delete one CouponUser
     *   }
     * })
     * 
     */
    delete<T extends CouponUserDeleteArgs>(args: SelectSubset<T, CouponUserDeleteArgs<ExtArgs>>): Prisma__CouponUserClient<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CouponUser.
     * @param {CouponUserUpdateArgs} args - Arguments to update one CouponUser.
     * @example
     * // Update one CouponUser
     * const couponUser = await prisma.couponUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUserUpdateArgs>(args: SelectSubset<T, CouponUserUpdateArgs<ExtArgs>>): Prisma__CouponUserClient<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CouponUsers.
     * @param {CouponUserDeleteManyArgs} args - Arguments to filter CouponUsers to delete.
     * @example
     * // Delete a few CouponUsers
     * const { count } = await prisma.couponUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponUserDeleteManyArgs>(args?: SelectSubset<T, CouponUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CouponUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CouponUsers
     * const couponUser = await prisma.couponUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUserUpdateManyArgs>(args: SelectSubset<T, CouponUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CouponUser.
     * @param {CouponUserUpsertArgs} args - Arguments to update or create a CouponUser.
     * @example
     * // Update or create a CouponUser
     * const couponUser = await prisma.couponUser.upsert({
     *   create: {
     *     // ... data to create a CouponUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CouponUser we want to update
     *   }
     * })
     */
    upsert<T extends CouponUserUpsertArgs>(args: SelectSubset<T, CouponUserUpsertArgs<ExtArgs>>): Prisma__CouponUserClient<$Result.GetResult<Prisma.$CouponUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CouponUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUserCountArgs} args - Arguments to filter CouponUsers to count.
     * @example
     * // Count the number of CouponUsers
     * const count = await prisma.couponUser.count({
     *   where: {
     *     // ... the filter for the CouponUsers we want to count
     *   }
     * })
    **/
    count<T extends CouponUserCountArgs>(
      args?: Subset<T, CouponUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CouponUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponUserAggregateArgs>(args: Subset<T, CouponUserAggregateArgs>): Prisma.PrismaPromise<GetCouponUserAggregateType<T>>

    /**
     * Group by CouponUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUserGroupByArgs} args - Group by arguments.
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
      T extends CouponUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponUserGroupByArgs['orderBy'] }
        : { orderBy?: CouponUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CouponUser model
   */
  readonly fields: CouponUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CouponUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coupon<T extends CouponDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CouponDefaultArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CouponUser model
   */
  interface CouponUserFieldRefs {
    readonly id: FieldRef<"CouponUser", 'String'>
    readonly expired_at: FieldRef<"CouponUser", 'DateTime'>
    readonly used: FieldRef<"CouponUser", 'Boolean'>
    readonly user_id: FieldRef<"CouponUser", 'String'>
    readonly coupon_id: FieldRef<"CouponUser", 'String'>
    readonly created_at: FieldRef<"CouponUser", 'DateTime'>
    readonly updated_at: FieldRef<"CouponUser", 'DateTime'>
    readonly is_deleted: FieldRef<"CouponUser", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CouponUser findUnique
   */
  export type CouponUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    /**
     * Filter, which CouponUser to fetch.
     */
    where: CouponUserWhereUniqueInput
  }

  /**
   * CouponUser findUniqueOrThrow
   */
  export type CouponUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    /**
     * Filter, which CouponUser to fetch.
     */
    where: CouponUserWhereUniqueInput
  }

  /**
   * CouponUser findFirst
   */
  export type CouponUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    /**
     * Filter, which CouponUser to fetch.
     */
    where?: CouponUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsers to fetch.
     */
    orderBy?: CouponUserOrderByWithRelationInput | CouponUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponUsers.
     */
    cursor?: CouponUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponUsers.
     */
    distinct?: CouponUserScalarFieldEnum | CouponUserScalarFieldEnum[]
  }

  /**
   * CouponUser findFirstOrThrow
   */
  export type CouponUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    /**
     * Filter, which CouponUser to fetch.
     */
    where?: CouponUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsers to fetch.
     */
    orderBy?: CouponUserOrderByWithRelationInput | CouponUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponUsers.
     */
    cursor?: CouponUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponUsers.
     */
    distinct?: CouponUserScalarFieldEnum | CouponUserScalarFieldEnum[]
  }

  /**
   * CouponUser findMany
   */
  export type CouponUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    /**
     * Filter, which CouponUsers to fetch.
     */
    where?: CouponUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponUsers to fetch.
     */
    orderBy?: CouponUserOrderByWithRelationInput | CouponUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CouponUsers.
     */
    cursor?: CouponUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponUsers.
     */
    skip?: number
    distinct?: CouponUserScalarFieldEnum | CouponUserScalarFieldEnum[]
  }

  /**
   * CouponUser create
   */
  export type CouponUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    /**
     * The data needed to create a CouponUser.
     */
    data: XOR<CouponUserCreateInput, CouponUserUncheckedCreateInput>
  }

  /**
   * CouponUser createMany
   */
  export type CouponUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CouponUsers.
     */
    data: CouponUserCreateManyInput | CouponUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CouponUser update
   */
  export type CouponUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    /**
     * The data needed to update a CouponUser.
     */
    data: XOR<CouponUserUpdateInput, CouponUserUncheckedUpdateInput>
    /**
     * Choose, which CouponUser to update.
     */
    where: CouponUserWhereUniqueInput
  }

  /**
   * CouponUser updateMany
   */
  export type CouponUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CouponUsers.
     */
    data: XOR<CouponUserUpdateManyMutationInput, CouponUserUncheckedUpdateManyInput>
    /**
     * Filter which CouponUsers to update
     */
    where?: CouponUserWhereInput
    /**
     * Limit how many CouponUsers to update.
     */
    limit?: number
  }

  /**
   * CouponUser upsert
   */
  export type CouponUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    /**
     * The filter to search for the CouponUser to update in case it exists.
     */
    where: CouponUserWhereUniqueInput
    /**
     * In case the CouponUser found by the `where` argument doesn't exist, create a new CouponUser with this data.
     */
    create: XOR<CouponUserCreateInput, CouponUserUncheckedCreateInput>
    /**
     * In case the CouponUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUserUpdateInput, CouponUserUncheckedUpdateInput>
  }

  /**
   * CouponUser delete
   */
  export type CouponUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
    /**
     * Filter which CouponUser to delete.
     */
    where: CouponUserWhereUniqueInput
  }

  /**
   * CouponUser deleteMany
   */
  export type CouponUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CouponUsers to delete
     */
    where?: CouponUserWhereInput
    /**
     * Limit how many CouponUsers to delete.
     */
    limit?: number
  }

  /**
   * CouponUser without action
   */
  export type CouponUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponUser
     */
    select?: CouponUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponUser
     */
    omit?: CouponUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponUserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    price: number | null
    total_seats: number | null
    remaining_seats: number | null
  }

  export type EventSumAggregateOutputType = {
    price: number | null
    total_seats: number | null
    remaining_seats: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    organizer_id: string | null
    name: string | null
    description: string | null
    category: string | null
    location: string | null
    price: number | null
    start_date: Date | null
    end_date: Date | null
    total_seats: number | null
    remaining_seats: number | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    organizer_id: string | null
    name: string | null
    description: string | null
    category: string | null
    location: string | null
    price: number | null
    start_date: Date | null
    end_date: Date | null
    total_seats: number | null
    remaining_seats: number | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    organizer_id: number
    name: number
    description: number
    category: number
    location: number
    price: number
    start_date: number
    end_date: number
    total_seats: number
    remaining_seats: number
    created_at: number
    updated_at: number
    is_deleted: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    price?: true
    total_seats?: true
    remaining_seats?: true
  }

  export type EventSumAggregateInputType = {
    price?: true
    total_seats?: true
    remaining_seats?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    organizer_id?: true
    name?: true
    description?: true
    category?: true
    location?: true
    price?: true
    start_date?: true
    end_date?: true
    total_seats?: true
    remaining_seats?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    organizer_id?: true
    name?: true
    description?: true
    category?: true
    location?: true
    price?: true
    start_date?: true
    end_date?: true
    total_seats?: true
    remaining_seats?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    organizer_id?: true
    name?: true
    description?: true
    category?: true
    location?: true
    price?: true
    start_date?: true
    end_date?: true
    total_seats?: true
    remaining_seats?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    organizer_id: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date
    end_date: Date
    total_seats: number
    remaining_seats: number
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizer_id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    price?: boolean
    start_date?: boolean
    end_date?: boolean
    total_seats?: boolean
    remaining_seats?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Event$reviewsArgs<ExtArgs>
    transactions?: boolean | Event$transactionsArgs<ExtArgs>
    vouchers?: boolean | Event$vouchersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    organizer_id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    price?: boolean
    start_date?: boolean
    end_date?: boolean
    total_seats?: boolean
    remaining_seats?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizer_id" | "name" | "description" | "category" | "location" | "price" | "start_date" | "end_date" | "total_seats" | "remaining_seats" | "created_at" | "updated_at" | "is_deleted", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Event$reviewsArgs<ExtArgs>
    transactions?: boolean | Event$transactionsArgs<ExtArgs>
    vouchers?: boolean | Event$vouchersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      vouchers: Prisma.$VoucherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizer_id: string
      name: string
      description: string
      category: string
      location: string
      price: number
      start_date: Date
      end_date: Date
      total_seats: number
      remaining_seats: number
      created_at: Date
      updated_at: Date
      is_deleted: boolean
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Event$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Event$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Event$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchers<T extends Event$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, Event$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly organizer_id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly price: FieldRef<"Event", 'Int'>
    readonly start_date: FieldRef<"Event", 'DateTime'>
    readonly end_date: FieldRef<"Event", 'DateTime'>
    readonly total_seats: FieldRef<"Event", 'Int'>
    readonly remaining_seats: FieldRef<"Event", 'Int'>
    readonly created_at: FieldRef<"Event", 'DateTime'>
    readonly updated_at: FieldRef<"Event", 'DateTime'>
    readonly is_deleted: FieldRef<"Event", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.reviews
   */
  export type Event$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Event.transactions
   */
  export type Event$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Event.vouchers
   */
  export type Event$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    discount_amount: number | null
    usage_limit: number | null
    used_count: number | null
  }

  export type VoucherSumAggregateOutputType = {
    discount_amount: number | null
    usage_limit: number | null
    used_count: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    code: string | null
    discount_amount: number | null
    start_date: Date | null
    end_date: Date | null
    usage_limit: number | null
    used_count: number | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    code: string | null
    discount_amount: number | null
    start_date: Date | null
    end_date: Date | null
    usage_limit: number | null
    used_count: number | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    event_id: number
    code: number
    discount_amount: number
    start_date: number
    end_date: number
    usage_limit: number
    used_count: number
    created_at: number
    updated_at: number
    is_deleted: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    discount_amount?: true
    usage_limit?: true
    used_count?: true
  }

  export type VoucherSumAggregateInputType = {
    discount_amount?: true
    usage_limit?: true
    used_count?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    event_id?: true
    code?: true
    discount_amount?: true
    start_date?: true
    end_date?: true
    usage_limit?: true
    used_count?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    event_id?: true
    code?: true
    discount_amount?: true
    start_date?: true
    end_date?: true
    usage_limit?: true
    used_count?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    event_id?: true
    code?: true
    discount_amount?: true
    start_date?: true
    end_date?: true
    usage_limit?: true
    used_count?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: string
    event_id: string
    code: string
    discount_amount: number
    start_date: Date
    end_date: Date
    usage_limit: number
    used_count: number
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    code?: boolean
    discount_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    usage_limit?: boolean
    used_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>



  export type VoucherSelectScalar = {
    id?: boolean
    event_id?: boolean
    code?: boolean
    discount_amount?: boolean
    start_date?: boolean
    end_date?: boolean
    usage_limit?: boolean
    used_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "code" | "discount_amount" | "start_date" | "end_date" | "usage_limit" | "used_count" | "created_at" | "updated_at" | "is_deleted", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      code: string
      discount_amount: number
      start_date: Date
      end_date: Date
      usage_limit: number
      used_count: number
      created_at: Date
      updated_at: Date
      is_deleted: boolean
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
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
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Voucher model
   */
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'String'>
    readonly event_id: FieldRef<"Voucher", 'String'>
    readonly code: FieldRef<"Voucher", 'String'>
    readonly discount_amount: FieldRef<"Voucher", 'Int'>
    readonly start_date: FieldRef<"Voucher", 'DateTime'>
    readonly end_date: FieldRef<"Voucher", 'DateTime'>
    readonly usage_limit: FieldRef<"Voucher", 'Int'>
    readonly used_count: FieldRef<"Voucher", 'Int'>
    readonly created_at: FieldRef<"Voucher", 'DateTime'>
    readonly updated_at: FieldRef<"Voucher", 'DateTime'>
    readonly is_deleted: FieldRef<"Voucher", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    ticket_quantity: number | null
    locked_price: number | null
    total_price: number | null
  }

  export type TransactionSumAggregateOutputType = {
    ticket_quantity: number | null
    locked_price: number | null
    total_price: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    event_id: string | null
    ticket_quantity: number | null
    locked_price: number | null
    total_price: number | null
    status: $Enums.TransactionStatus | null
    payment_proof: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    event_id: string | null
    ticket_quantity: number | null
    locked_price: number | null
    total_price: number | null
    status: $Enums.TransactionStatus | null
    payment_proof: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: number
    payment_proof: number
    created_at: number
    updated_at: number
    is_deleted: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    ticket_quantity?: true
    locked_price?: true
    total_price?: true
  }

  export type TransactionSumAggregateInputType = {
    ticket_quantity?: true
    locked_price?: true
    total_price?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_quantity?: true
    locked_price?: true
    total_price?: true
    status?: true
    payment_proof?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_quantity?: true
    locked_price?: true
    total_price?: true
    status?: true
    payment_proof?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    ticket_quantity?: true
    locked_price?: true
    total_price?: true
    status?: true
    payment_proof?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    user_id: string
    event_id: string
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: $Enums.TransactionStatus
    payment_proof: string | null
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    ticket_quantity?: boolean
    locked_price?: boolean
    total_price?: boolean
    status?: boolean
    payment_proof?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type TransactionSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    ticket_quantity?: boolean
    locked_price?: boolean
    total_price?: boolean
    status?: boolean
    payment_proof?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "ticket_quantity" | "locked_price" | "total_price" | "status" | "payment_proof" | "created_at" | "updated_at" | "is_deleted", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      event_id: string
      ticket_quantity: number
      locked_price: number
      total_price: number
      status: $Enums.TransactionStatus
      payment_proof: string | null
      created_at: Date
      updated_at: Date
      is_deleted: boolean
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly user_id: FieldRef<"Transaction", 'String'>
    readonly event_id: FieldRef<"Transaction", 'String'>
    readonly ticket_quantity: FieldRef<"Transaction", 'Int'>
    readonly locked_price: FieldRef<"Transaction", 'Int'>
    readonly total_price: FieldRef<"Transaction", 'Int'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly payment_proof: FieldRef<"Transaction", 'String'>
    readonly created_at: FieldRef<"Transaction", 'DateTime'>
    readonly updated_at: FieldRef<"Transaction", 'DateTime'>
    readonly is_deleted: FieldRef<"Transaction", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    event_id: string | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    event_id: string | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    rating: number
    comment: number
    created_at: number
    updated_at: number
    is_deleted: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    user_id: string
    event_id: string
    rating: number
    comment: string | null
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "rating" | "comment" | "created_at" | "updated_at" | "is_deleted", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      event_id: string
      rating: number
      comment: string | null
      created_at: Date
      updated_at: Date
      is_deleted: boolean
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly user_id: FieldRef<"Review", 'String'>
    readonly event_id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly created_at: FieldRef<"Review", 'DateTime'>
    readonly updated_at: FieldRef<"Review", 'DateTime'>
    readonly is_deleted: FieldRef<"Review", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    role: 'role',
    is_verified: 'is_verified',
    profile_picture: 'profile_picture',
    referral_code: 'referral_code',
    referred_by_code: 'referred_by_code',
    points_balance: 'points_balance',
    points_expiry_date: 'points_expiry_date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    code: 'code',
    discount_amount: 'discount_amount',
    expired_at: 'expired_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const CouponUserScalarFieldEnum: {
    id: 'id',
    expired_at: 'expired_at',
    used: 'used',
    user_id: 'user_id',
    coupon_id: 'coupon_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted'
  };

  export type CouponUserScalarFieldEnum = (typeof CouponUserScalarFieldEnum)[keyof typeof CouponUserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    organizer_id: 'organizer_id',
    name: 'name',
    description: 'description',
    category: 'category',
    location: 'location',
    price: 'price',
    start_date: 'start_date',
    end_date: 'end_date',
    total_seats: 'total_seats',
    remaining_seats: 'remaining_seats',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    code: 'code',
    discount_amount: 'discount_amount',
    start_date: 'start_date',
    end_date: 'end_date',
    usage_limit: 'usage_limit',
    used_count: 'used_count',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    ticket_quantity: 'ticket_quantity',
    locked_price: 'locked_price',
    total_price: 'total_price',
    status: 'status',
    payment_proof: 'payment_proof',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    profile_picture: 'profile_picture',
    referral_code: 'referral_code',
    referred_by_code: 'referred_by_code'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CouponOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    code: 'code'
  };

  export type CouponOrderByRelevanceFieldEnum = (typeof CouponOrderByRelevanceFieldEnum)[keyof typeof CouponOrderByRelevanceFieldEnum]


  export const CouponUserOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    coupon_id: 'coupon_id'
  };

  export type CouponUserOrderByRelevanceFieldEnum = (typeof CouponUserOrderByRelevanceFieldEnum)[keyof typeof CouponUserOrderByRelevanceFieldEnum]


  export const EventOrderByRelevanceFieldEnum: {
    id: 'id',
    organizer_id: 'organizer_id',
    name: 'name',
    description: 'description',
    category: 'category',
    location: 'location'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  export const VoucherOrderByRelevanceFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    code: 'code'
  };

  export type VoucherOrderByRelevanceFieldEnum = (typeof VoucherOrderByRelevanceFieldEnum)[keyof typeof VoucherOrderByRelevanceFieldEnum]


  export const TransactionOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    payment_proof: 'payment_proof'
  };

  export type TransactionOrderByRelevanceFieldEnum = (typeof TransactionOrderByRelevanceFieldEnum)[keyof typeof TransactionOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    comment: 'comment'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    is_verified?: BoolFilter<"User"> | boolean
    profile_picture?: StringNullableFilter<"User"> | string | null
    referral_code?: StringFilter<"User"> | string
    referred_by_code?: StringNullableFilter<"User"> | string | null
    points_balance?: IntFilter<"User"> | number
    points_expiry_date?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    is_deleted?: BoolFilter<"User"> | boolean
    referrer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    coupons?: CouponUserListRelationFilter
    events?: EventListRelationFilter
    reviews?: ReviewListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    referral_code?: SortOrder
    referred_by_code?: SortOrderInput | SortOrder
    points_balance?: SortOrder
    points_expiry_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    referrer?: UserOrderByWithRelationInput
    referrals?: UserOrderByRelationAggregateInput
    coupons?: CouponUserOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    referral_code?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    is_verified?: BoolFilter<"User"> | boolean
    profile_picture?: StringNullableFilter<"User"> | string | null
    referred_by_code?: StringNullableFilter<"User"> | string | null
    points_balance?: IntFilter<"User"> | number
    points_expiry_date?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    is_deleted?: BoolFilter<"User"> | boolean
    referrer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    coupons?: CouponUserListRelationFilter
    events?: EventListRelationFilter
    reviews?: ReviewListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "email" | "referral_code">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    referral_code?: SortOrder
    referred_by_code?: SortOrderInput | SortOrder
    points_balance?: SortOrder
    points_expiry_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    full_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    profile_picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    referral_code?: StringWithAggregatesFilter<"User"> | string
    referred_by_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    points_balance?: IntWithAggregatesFilter<"User"> | number
    points_expiry_date?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    name?: StringNullableFilter<"Coupon"> | string | null
    description?: StringNullableFilter<"Coupon"> | string | null
    code?: StringFilter<"Coupon"> | string
    discount_amount?: IntFilter<"Coupon"> | number
    expired_at?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    created_at?: DateTimeFilter<"Coupon"> | Date | string
    updated_at?: DateTimeFilter<"Coupon"> | Date | string
    is_deleted?: BoolFilter<"Coupon"> | boolean
    users?: CouponUserListRelationFilter
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    users?: CouponUserOrderByRelationAggregateInput
    _relevance?: CouponOrderByRelevanceInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    name?: StringNullableFilter<"Coupon"> | string | null
    description?: StringNullableFilter<"Coupon"> | string | null
    discount_amount?: IntFilter<"Coupon"> | number
    expired_at?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    created_at?: DateTimeFilter<"Coupon"> | Date | string
    updated_at?: DateTimeFilter<"Coupon"> | Date | string
    is_deleted?: BoolFilter<"Coupon"> | boolean
    users?: CouponUserListRelationFilter
  }, "id" | "code">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    name?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    description?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    code?: StringWithAggregatesFilter<"Coupon"> | string
    discount_amount?: IntWithAggregatesFilter<"Coupon"> | number
    expired_at?: DateTimeNullableWithAggregatesFilter<"Coupon"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"Coupon"> | boolean
  }

  export type CouponUserWhereInput = {
    AND?: CouponUserWhereInput | CouponUserWhereInput[]
    OR?: CouponUserWhereInput[]
    NOT?: CouponUserWhereInput | CouponUserWhereInput[]
    id?: StringFilter<"CouponUser"> | string
    expired_at?: DateTimeNullableFilter<"CouponUser"> | Date | string | null
    used?: BoolFilter<"CouponUser"> | boolean
    user_id?: StringFilter<"CouponUser"> | string
    coupon_id?: StringFilter<"CouponUser"> | string
    created_at?: DateTimeFilter<"CouponUser"> | Date | string
    updated_at?: DateTimeFilter<"CouponUser"> | Date | string
    is_deleted?: BoolFilter<"CouponUser"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coupon?: XOR<CouponScalarRelationFilter, CouponWhereInput>
  }

  export type CouponUserOrderByWithRelationInput = {
    id?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    used?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    user?: UserOrderByWithRelationInput
    coupon?: CouponOrderByWithRelationInput
    _relevance?: CouponUserOrderByRelevanceInput
  }

  export type CouponUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CouponUserWhereInput | CouponUserWhereInput[]
    OR?: CouponUserWhereInput[]
    NOT?: CouponUserWhereInput | CouponUserWhereInput[]
    expired_at?: DateTimeNullableFilter<"CouponUser"> | Date | string | null
    used?: BoolFilter<"CouponUser"> | boolean
    user_id?: StringFilter<"CouponUser"> | string
    coupon_id?: StringFilter<"CouponUser"> | string
    created_at?: DateTimeFilter<"CouponUser"> | Date | string
    updated_at?: DateTimeFilter<"CouponUser"> | Date | string
    is_deleted?: BoolFilter<"CouponUser"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coupon?: XOR<CouponScalarRelationFilter, CouponWhereInput>
  }, "id">

  export type CouponUserOrderByWithAggregationInput = {
    id?: SortOrder
    expired_at?: SortOrderInput | SortOrder
    used?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    _count?: CouponUserCountOrderByAggregateInput
    _max?: CouponUserMaxOrderByAggregateInput
    _min?: CouponUserMinOrderByAggregateInput
  }

  export type CouponUserScalarWhereWithAggregatesInput = {
    AND?: CouponUserScalarWhereWithAggregatesInput | CouponUserScalarWhereWithAggregatesInput[]
    OR?: CouponUserScalarWhereWithAggregatesInput[]
    NOT?: CouponUserScalarWhereWithAggregatesInput | CouponUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CouponUser"> | string
    expired_at?: DateTimeNullableWithAggregatesFilter<"CouponUser"> | Date | string | null
    used?: BoolWithAggregatesFilter<"CouponUser"> | boolean
    user_id?: StringWithAggregatesFilter<"CouponUser"> | string
    coupon_id?: StringWithAggregatesFilter<"CouponUser"> | string
    created_at?: DateTimeWithAggregatesFilter<"CouponUser"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CouponUser"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"CouponUser"> | boolean
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    organizer_id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    price?: IntFilter<"Event"> | number
    start_date?: DateTimeFilter<"Event"> | Date | string
    end_date?: DateTimeFilter<"Event"> | Date | string
    total_seats?: IntFilter<"Event"> | number
    remaining_seats?: IntFilter<"Event"> | number
    created_at?: DateTimeFilter<"Event"> | Date | string
    updated_at?: DateTimeFilter<"Event"> | Date | string
    is_deleted?: BoolFilter<"Event"> | boolean
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
    transactions?: TransactionListRelationFilter
    vouchers?: VoucherListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_seats?: SortOrder
    remaining_seats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    organizer?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    vouchers?: VoucherOrderByRelationAggregateInput
    _relevance?: EventOrderByRelevanceInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    organizer_id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    price?: IntFilter<"Event"> | number
    start_date?: DateTimeFilter<"Event"> | Date | string
    end_date?: DateTimeFilter<"Event"> | Date | string
    total_seats?: IntFilter<"Event"> | number
    remaining_seats?: IntFilter<"Event"> | number
    created_at?: DateTimeFilter<"Event"> | Date | string
    updated_at?: DateTimeFilter<"Event"> | Date | string
    is_deleted?: BoolFilter<"Event"> | boolean
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
    transactions?: TransactionListRelationFilter
    vouchers?: VoucherListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_seats?: SortOrder
    remaining_seats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    organizer_id?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    category?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    price?: IntWithAggregatesFilter<"Event"> | number
    start_date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    total_seats?: IntWithAggregatesFilter<"Event"> | number
    remaining_seats?: IntWithAggregatesFilter<"Event"> | number
    created_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"Event"> | boolean
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: StringFilter<"Voucher"> | string
    event_id?: StringFilter<"Voucher"> | string
    code?: StringFilter<"Voucher"> | string
    discount_amount?: IntFilter<"Voucher"> | number
    start_date?: DateTimeFilter<"Voucher"> | Date | string
    end_date?: DateTimeFilter<"Voucher"> | Date | string
    usage_limit?: IntFilter<"Voucher"> | number
    used_count?: IntFilter<"Voucher"> | number
    created_at?: DateTimeFilter<"Voucher"> | Date | string
    updated_at?: DateTimeFilter<"Voucher"> | Date | string
    is_deleted?: BoolFilter<"Voucher"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    event?: EventOrderByWithRelationInput
    _relevance?: VoucherOrderByRelevanceInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    event_id?: StringFilter<"Voucher"> | string
    discount_amount?: IntFilter<"Voucher"> | number
    start_date?: DateTimeFilter<"Voucher"> | Date | string
    end_date?: DateTimeFilter<"Voucher"> | Date | string
    usage_limit?: IntFilter<"Voucher"> | number
    used_count?: IntFilter<"Voucher"> | number
    created_at?: DateTimeFilter<"Voucher"> | Date | string
    updated_at?: DateTimeFilter<"Voucher"> | Date | string
    is_deleted?: BoolFilter<"Voucher"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "code">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voucher"> | string
    event_id?: StringWithAggregatesFilter<"Voucher"> | string
    code?: StringWithAggregatesFilter<"Voucher"> | string
    discount_amount?: IntWithAggregatesFilter<"Voucher"> | number
    start_date?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    usage_limit?: IntWithAggregatesFilter<"Voucher"> | number
    used_count?: IntWithAggregatesFilter<"Voucher"> | number
    created_at?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"Voucher"> | boolean
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    user_id?: StringFilter<"Transaction"> | string
    event_id?: StringFilter<"Transaction"> | string
    ticket_quantity?: IntFilter<"Transaction"> | number
    locked_price?: IntFilter<"Transaction"> | number
    total_price?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    payment_proof?: StringNullableFilter<"Transaction"> | string | null
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    updated_at?: DateTimeFilter<"Transaction"> | Date | string
    is_deleted?: BoolFilter<"Transaction"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_quantity?: SortOrder
    locked_price?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    payment_proof?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: TransactionOrderByRelevanceInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    user_id?: StringFilter<"Transaction"> | string
    event_id?: StringFilter<"Transaction"> | string
    ticket_quantity?: IntFilter<"Transaction"> | number
    locked_price?: IntFilter<"Transaction"> | number
    total_price?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    payment_proof?: StringNullableFilter<"Transaction"> | string | null
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    updated_at?: DateTimeFilter<"Transaction"> | Date | string
    is_deleted?: BoolFilter<"Transaction"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_quantity?: SortOrder
    locked_price?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    payment_proof?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    user_id?: StringWithAggregatesFilter<"Transaction"> | string
    event_id?: StringWithAggregatesFilter<"Transaction"> | string
    ticket_quantity?: IntWithAggregatesFilter<"Transaction"> | number
    locked_price?: IntWithAggregatesFilter<"Transaction"> | number
    total_price?: IntWithAggregatesFilter<"Transaction"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    payment_proof?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"Transaction"> | boolean
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    user_id?: StringFilter<"Review"> | string
    event_id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    is_deleted?: BoolFilter<"Review"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    user_id?: StringFilter<"Review"> | string
    event_id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    is_deleted?: BoolFilter<"Review"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    user_id?: StringWithAggregatesFilter<"Review"> | string
    event_id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"Review"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrer?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferrerInput
    coupons?: CouponUserCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    referred_by_code?: string | null
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrals?: UserUncheckedCreateNestedManyWithoutReferrerInput
    coupons?: CouponUserUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrer?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferrerNestedInput
    coupons?: CouponUserUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_code?: NullableStringFieldUpdateOperationsInput | string | null
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrals?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    coupons?: CouponUserUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    referred_by_code?: string | null
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_code?: NullableStringFieldUpdateOperationsInput | string | null
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    code: string
    discount_amount: number
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    users?: CouponUserCreateNestedManyWithoutCouponInput
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    code: string
    discount_amount: number
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    users?: CouponUserUncheckedCreateNestedManyWithoutCouponInput
  }

  export type CouponUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: CouponUserUpdateManyWithoutCouponNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: CouponUserUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type CouponCreateManyInput = {
    id?: string
    name?: string | null
    description?: string | null
    code: string
    discount_amount: number
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type CouponUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponUserCreateInput = {
    id?: string
    expired_at?: Date | string | null
    used?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    user: UserCreateNestedOneWithoutCouponsInput
    coupon: CouponCreateNestedOneWithoutUsersInput
  }

  export type CouponUserUncheckedCreateInput = {
    id?: string
    expired_at?: Date | string | null
    used?: boolean
    user_id: string
    coupon_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type CouponUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCouponsNestedInput
    coupon?: CouponUpdateOneRequiredWithoutUsersNestedInput
  }

  export type CouponUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
    coupon_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponUserCreateManyInput = {
    id?: string
    expired_at?: Date | string | null
    used?: boolean
    user_id: string
    coupon_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type CouponUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
    coupon_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventCreateInput = {
    id?: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    organizer: UserCreateNestedOneWithoutEventsInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
    vouchers?: VoucherCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    organizer_id: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    organizer_id: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoucherCreateInput = {
    id?: string
    code: string
    discount_amount: number
    start_date: Date | string
    end_date: Date | string
    usage_limit: number
    used_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    event: EventCreateNestedOneWithoutVouchersInput
  }

  export type VoucherUncheckedCreateInput = {
    id?: string
    event_id: string
    code: string
    discount_amount: number
    start_date: Date | string
    end_date: Date | string
    usage_limit: number
    used_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type VoucherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutVouchersNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoucherCreateManyInput = {
    id?: string
    event_id: string
    code: string
    discount_amount: number
    start_date: Date | string
    end_date: Date | string
    usage_limit: number
    used_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type VoucherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionCreateInput = {
    id?: string
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: $Enums.TransactionStatus
    payment_proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    event: EventCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    user_id: string
    event_id: string
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: $Enums.TransactionStatus
    payment_proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    locked_price?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    locked_price?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionCreateManyInput = {
    id?: string
    user_id: string
    event_id: string
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: $Enums.TransactionStatus
    payment_proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    locked_price?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    locked_price?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    event: EventCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    user_id: string
    event_id: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewCreateManyInput = {
    id?: string
    user_id: string
    event_id: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CouponUserListRelationFilter = {
    every?: CouponUserWhereInput
    some?: CouponUserWhereInput
    none?: CouponUserWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CouponUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    profile_picture?: SortOrder
    referral_code?: SortOrder
    referred_by_code?: SortOrder
    points_balance?: SortOrder
    points_expiry_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points_balance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    profile_picture?: SortOrder
    referral_code?: SortOrder
    referred_by_code?: SortOrder
    points_balance?: SortOrder
    points_expiry_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    profile_picture?: SortOrder
    referral_code?: SortOrder
    referred_by_code?: SortOrder
    points_balance?: SortOrder
    points_expiry_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points_balance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CouponOrderByRelevanceInput = {
    fields: CouponOrderByRelevanceFieldEnum | CouponOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    discount_amount?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    discount_amount?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CouponScalarRelationFilter = {
    is?: CouponWhereInput
    isNot?: CouponWhereInput
  }

  export type CouponUserOrderByRelevanceInput = {
    fields: CouponUserOrderByRelevanceFieldEnum | CouponUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CouponUserCountOrderByAggregateInput = {
    id?: SortOrder
    expired_at?: SortOrder
    used?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type CouponUserMaxOrderByAggregateInput = {
    id?: SortOrder
    expired_at?: SortOrder
    used?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type CouponUserMinOrderByAggregateInput = {
    id?: SortOrder
    expired_at?: SortOrder
    used?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_seats?: SortOrder
    remaining_seats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    price?: SortOrder
    total_seats?: SortOrder
    remaining_seats?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_seats?: SortOrder
    remaining_seats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    organizer_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_seats?: SortOrder
    remaining_seats?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    price?: SortOrder
    total_seats?: SortOrder
    remaining_seats?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type VoucherOrderByRelevanceInput = {
    fields: VoucherOrderByRelevanceFieldEnum | VoucherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    discount_amount?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    code?: SortOrder
    discount_amount?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    discount_amount?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionOrderByRelevanceInput = {
    fields: TransactionOrderByRelevanceFieldEnum | TransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_quantity?: SortOrder
    locked_price?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    payment_proof?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    ticket_quantity?: SortOrder
    locked_price?: SortOrder
    total_price?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_quantity?: SortOrder
    locked_price?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    payment_proof?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    ticket_quantity?: SortOrder
    locked_price?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    payment_proof?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    ticket_quantity?: SortOrder
    locked_price?: SortOrder
    total_price?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserCreateNestedOneWithoutReferralsInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReferrerInput = {
    create?: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput> | UserCreateWithoutReferrerInput[] | UserUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferrerInput | UserCreateOrConnectWithoutReferrerInput[]
    createMany?: UserCreateManyReferrerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CouponUserCreateNestedManyWithoutUserInput = {
    create?: XOR<CouponUserCreateWithoutUserInput, CouponUserUncheckedCreateWithoutUserInput> | CouponUserCreateWithoutUserInput[] | CouponUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponUserCreateOrConnectWithoutUserInput | CouponUserCreateOrConnectWithoutUserInput[]
    createMany?: CouponUserCreateManyUserInputEnvelope
    connect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput> | UserCreateWithoutReferrerInput[] | UserUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferrerInput | UserCreateOrConnectWithoutReferrerInput[]
    createMany?: UserCreateManyReferrerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CouponUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CouponUserCreateWithoutUserInput, CouponUserUncheckedCreateWithoutUserInput> | CouponUserCreateWithoutUserInput[] | CouponUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponUserCreateOrConnectWithoutUserInput | CouponUserCreateOrConnectWithoutUserInput[]
    createMany?: CouponUserCreateManyUserInputEnvelope
    connect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutReferralsNestedInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    upsert?: UserUpsertWithoutReferralsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsInput, UserUpdateWithoutReferralsInput>, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput> | UserCreateWithoutReferrerInput[] | UserUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferrerInput | UserCreateOrConnectWithoutReferrerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferrerInput | UserUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: UserCreateManyReferrerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferrerInput | UserUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferrerInput | UserUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CouponUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<CouponUserCreateWithoutUserInput, CouponUserUncheckedCreateWithoutUserInput> | CouponUserCreateWithoutUserInput[] | CouponUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponUserCreateOrConnectWithoutUserInput | CouponUserCreateOrConnectWithoutUserInput[]
    upsert?: CouponUserUpsertWithWhereUniqueWithoutUserInput | CouponUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CouponUserCreateManyUserInputEnvelope
    set?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    disconnect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    delete?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    connect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    update?: CouponUserUpdateWithWhereUniqueWithoutUserInput | CouponUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CouponUserUpdateManyWithWhereWithoutUserInput | CouponUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CouponUserScalarWhereInput | CouponUserScalarWhereInput[]
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput> | UserCreateWithoutReferrerInput[] | UserUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferrerInput | UserCreateOrConnectWithoutReferrerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferrerInput | UserUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: UserCreateManyReferrerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferrerInput | UserUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferrerInput | UserUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CouponUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CouponUserCreateWithoutUserInput, CouponUserUncheckedCreateWithoutUserInput> | CouponUserCreateWithoutUserInput[] | CouponUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponUserCreateOrConnectWithoutUserInput | CouponUserCreateOrConnectWithoutUserInput[]
    upsert?: CouponUserUpsertWithWhereUniqueWithoutUserInput | CouponUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CouponUserCreateManyUserInputEnvelope
    set?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    disconnect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    delete?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    connect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    update?: CouponUserUpdateWithWhereUniqueWithoutUserInput | CouponUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CouponUserUpdateManyWithWhereWithoutUserInput | CouponUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CouponUserScalarWhereInput | CouponUserScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CouponUserCreateNestedManyWithoutCouponInput = {
    create?: XOR<CouponUserCreateWithoutCouponInput, CouponUserUncheckedCreateWithoutCouponInput> | CouponUserCreateWithoutCouponInput[] | CouponUserUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponUserCreateOrConnectWithoutCouponInput | CouponUserCreateOrConnectWithoutCouponInput[]
    createMany?: CouponUserCreateManyCouponInputEnvelope
    connect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
  }

  export type CouponUserUncheckedCreateNestedManyWithoutCouponInput = {
    create?: XOR<CouponUserCreateWithoutCouponInput, CouponUserUncheckedCreateWithoutCouponInput> | CouponUserCreateWithoutCouponInput[] | CouponUserUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponUserCreateOrConnectWithoutCouponInput | CouponUserCreateOrConnectWithoutCouponInput[]
    createMany?: CouponUserCreateManyCouponInputEnvelope
    connect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
  }

  export type CouponUserUpdateManyWithoutCouponNestedInput = {
    create?: XOR<CouponUserCreateWithoutCouponInput, CouponUserUncheckedCreateWithoutCouponInput> | CouponUserCreateWithoutCouponInput[] | CouponUserUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponUserCreateOrConnectWithoutCouponInput | CouponUserCreateOrConnectWithoutCouponInput[]
    upsert?: CouponUserUpsertWithWhereUniqueWithoutCouponInput | CouponUserUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: CouponUserCreateManyCouponInputEnvelope
    set?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    disconnect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    delete?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    connect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    update?: CouponUserUpdateWithWhereUniqueWithoutCouponInput | CouponUserUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: CouponUserUpdateManyWithWhereWithoutCouponInput | CouponUserUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: CouponUserScalarWhereInput | CouponUserScalarWhereInput[]
  }

  export type CouponUserUncheckedUpdateManyWithoutCouponNestedInput = {
    create?: XOR<CouponUserCreateWithoutCouponInput, CouponUserUncheckedCreateWithoutCouponInput> | CouponUserCreateWithoutCouponInput[] | CouponUserUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponUserCreateOrConnectWithoutCouponInput | CouponUserCreateOrConnectWithoutCouponInput[]
    upsert?: CouponUserUpsertWithWhereUniqueWithoutCouponInput | CouponUserUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: CouponUserCreateManyCouponInputEnvelope
    set?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    disconnect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    delete?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    connect?: CouponUserWhereUniqueInput | CouponUserWhereUniqueInput[]
    update?: CouponUserUpdateWithWhereUniqueWithoutCouponInput | CouponUserUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: CouponUserUpdateManyWithWhereWithoutCouponInput | CouponUserUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: CouponUserScalarWhereInput | CouponUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCouponsInput = {
    create?: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsInput
    connect?: UserWhereUniqueInput
  }

  export type CouponCreateNestedOneWithoutUsersInput = {
    create?: XOR<CouponCreateWithoutUsersInput, CouponUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CouponCreateOrConnectWithoutUsersInput
    connect?: CouponWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCouponsNestedInput = {
    create?: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsInput
    upsert?: UserUpsertWithoutCouponsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCouponsInput, UserUpdateWithoutCouponsInput>, UserUncheckedUpdateWithoutCouponsInput>
  }

  export type CouponUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CouponCreateWithoutUsersInput, CouponUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CouponCreateOrConnectWithoutUsersInput
    upsert?: CouponUpsertWithoutUsersInput
    connect?: CouponWhereUniqueInput
    update?: XOR<XOR<CouponUpdateToOneWithWhereWithoutUsersInput, CouponUpdateWithoutUsersInput>, CouponUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type VoucherCreateNestedManyWithoutEventInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type ReviewUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEventInput | TransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEventInput | TransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEventInput | TransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type VoucherUpdateManyWithoutEventNestedInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutEventInput | VoucherUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutEventInput | VoucherUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutEventInput | VoucherUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEventInput | TransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEventInput | TransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEventInput | TransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutEventInput | VoucherUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutEventInput | VoucherUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutEventInput | VoucherUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutVouchersInput = {
    create?: XOR<EventCreateWithoutVouchersInput, EventUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: EventCreateOrConnectWithoutVouchersInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutVouchersNestedInput = {
    create?: XOR<EventCreateWithoutVouchersInput, EventUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: EventCreateOrConnectWithoutVouchersInput
    upsert?: EventUpsertWithoutVouchersInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutVouchersInput, EventUpdateWithoutVouchersInput>, EventUncheckedUpdateWithoutVouchersInput>
  }

  export type EventCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTransactionsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type EventUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTransactionsInput
    upsert?: EventUpsertWithoutTransactionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTransactionsInput, EventUpdateWithoutTransactionsInput>, EventUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type EventCreateNestedOneWithoutReviewsInput = {
    create?: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput
    upsert?: EventUpsertWithoutReviewsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReviewsInput, EventUpdateWithoutReviewsInput>, EventUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutReferralsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrer?: UserCreateNestedOneWithoutReferralsInput
    coupons?: CouponUserCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferralsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    referred_by_code?: string | null
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    coupons?: CouponUserUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferralsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
  }

  export type UserCreateWithoutReferrerInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrals?: UserCreateNestedManyWithoutReferrerInput
    coupons?: CouponUserCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferrerInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrals?: UserUncheckedCreateNestedManyWithoutReferrerInput
    coupons?: CouponUserUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferrerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput>
  }

  export type UserCreateManyReferrerInputEnvelope = {
    data: UserCreateManyReferrerInput | UserCreateManyReferrerInput[]
    skipDuplicates?: boolean
  }

  export type CouponUserCreateWithoutUserInput = {
    id?: string
    expired_at?: Date | string | null
    used?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    coupon: CouponCreateNestedOneWithoutUsersInput
  }

  export type CouponUserUncheckedCreateWithoutUserInput = {
    id?: string
    expired_at?: Date | string | null
    used?: boolean
    coupon_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type CouponUserCreateOrConnectWithoutUserInput = {
    where: CouponUserWhereUniqueInput
    create: XOR<CouponUserCreateWithoutUserInput, CouponUserUncheckedCreateWithoutUserInput>
  }

  export type CouponUserCreateManyUserInputEnvelope = {
    data: CouponUserCreateManyUserInput | CouponUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    reviews?: ReviewCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
    vouchers?: VoucherCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    event: EventCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    event_id: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: $Enums.TransactionStatus
    payment_proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    event: EventCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    event_id: string
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: $Enums.TransactionStatus
    payment_proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReferralsInput = {
    update: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrer?: UserUpdateOneWithoutReferralsNestedInput
    coupons?: CouponUserUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_code?: NullableStringFieldUpdateOperationsInput | string | null
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    coupons?: CouponUserUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReferrerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferrerInput, UserUncheckedUpdateWithoutReferrerInput>
    create: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferrerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferrerInput, UserUncheckedUpdateWithoutReferrerInput>
  }

  export type UserUpdateManyWithWhereWithoutReferrerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferrerInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    is_verified?: BoolFilter<"User"> | boolean
    profile_picture?: StringNullableFilter<"User"> | string | null
    referral_code?: StringFilter<"User"> | string
    referred_by_code?: StringNullableFilter<"User"> | string | null
    points_balance?: IntFilter<"User"> | number
    points_expiry_date?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    is_deleted?: BoolFilter<"User"> | boolean
  }

  export type CouponUserUpsertWithWhereUniqueWithoutUserInput = {
    where: CouponUserWhereUniqueInput
    update: XOR<CouponUserUpdateWithoutUserInput, CouponUserUncheckedUpdateWithoutUserInput>
    create: XOR<CouponUserCreateWithoutUserInput, CouponUserUncheckedCreateWithoutUserInput>
  }

  export type CouponUserUpdateWithWhereUniqueWithoutUserInput = {
    where: CouponUserWhereUniqueInput
    data: XOR<CouponUserUpdateWithoutUserInput, CouponUserUncheckedUpdateWithoutUserInput>
  }

  export type CouponUserUpdateManyWithWhereWithoutUserInput = {
    where: CouponUserScalarWhereInput
    data: XOR<CouponUserUpdateManyMutationInput, CouponUserUncheckedUpdateManyWithoutUserInput>
  }

  export type CouponUserScalarWhereInput = {
    AND?: CouponUserScalarWhereInput | CouponUserScalarWhereInput[]
    OR?: CouponUserScalarWhereInput[]
    NOT?: CouponUserScalarWhereInput | CouponUserScalarWhereInput[]
    id?: StringFilter<"CouponUser"> | string
    expired_at?: DateTimeNullableFilter<"CouponUser"> | Date | string | null
    used?: BoolFilter<"CouponUser"> | boolean
    user_id?: StringFilter<"CouponUser"> | string
    coupon_id?: StringFilter<"CouponUser"> | string
    created_at?: DateTimeFilter<"CouponUser"> | Date | string
    updated_at?: DateTimeFilter<"CouponUser"> | Date | string
    is_deleted?: BoolFilter<"CouponUser"> | boolean
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    organizer_id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    price?: IntFilter<"Event"> | number
    start_date?: DateTimeFilter<"Event"> | Date | string
    end_date?: DateTimeFilter<"Event"> | Date | string
    total_seats?: IntFilter<"Event"> | number
    remaining_seats?: IntFilter<"Event"> | number
    created_at?: DateTimeFilter<"Event"> | Date | string
    updated_at?: DateTimeFilter<"Event"> | Date | string
    is_deleted?: BoolFilter<"Event"> | boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    user_id?: StringFilter<"Review"> | string
    event_id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    is_deleted?: BoolFilter<"Review"> | boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    user_id?: StringFilter<"Transaction"> | string
    event_id?: StringFilter<"Transaction"> | string
    ticket_quantity?: IntFilter<"Transaction"> | number
    locked_price?: IntFilter<"Transaction"> | number
    total_price?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    payment_proof?: StringNullableFilter<"Transaction"> | string | null
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    updated_at?: DateTimeFilter<"Transaction"> | Date | string
    is_deleted?: BoolFilter<"Transaction"> | boolean
  }

  export type CouponUserCreateWithoutCouponInput = {
    id?: string
    expired_at?: Date | string | null
    used?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    user: UserCreateNestedOneWithoutCouponsInput
  }

  export type CouponUserUncheckedCreateWithoutCouponInput = {
    id?: string
    expired_at?: Date | string | null
    used?: boolean
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type CouponUserCreateOrConnectWithoutCouponInput = {
    where: CouponUserWhereUniqueInput
    create: XOR<CouponUserCreateWithoutCouponInput, CouponUserUncheckedCreateWithoutCouponInput>
  }

  export type CouponUserCreateManyCouponInputEnvelope = {
    data: CouponUserCreateManyCouponInput | CouponUserCreateManyCouponInput[]
    skipDuplicates?: boolean
  }

  export type CouponUserUpsertWithWhereUniqueWithoutCouponInput = {
    where: CouponUserWhereUniqueInput
    update: XOR<CouponUserUpdateWithoutCouponInput, CouponUserUncheckedUpdateWithoutCouponInput>
    create: XOR<CouponUserCreateWithoutCouponInput, CouponUserUncheckedCreateWithoutCouponInput>
  }

  export type CouponUserUpdateWithWhereUniqueWithoutCouponInput = {
    where: CouponUserWhereUniqueInput
    data: XOR<CouponUserUpdateWithoutCouponInput, CouponUserUncheckedUpdateWithoutCouponInput>
  }

  export type CouponUserUpdateManyWithWhereWithoutCouponInput = {
    where: CouponUserScalarWhereInput
    data: XOR<CouponUserUpdateManyMutationInput, CouponUserUncheckedUpdateManyWithoutCouponInput>
  }

  export type UserCreateWithoutCouponsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrer?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferrerInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCouponsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    referred_by_code?: string | null
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrals?: UserUncheckedCreateNestedManyWithoutReferrerInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCouponsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
  }

  export type CouponCreateWithoutUsersInput = {
    id?: string
    name?: string | null
    description?: string | null
    code: string
    discount_amount: number
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type CouponUncheckedCreateWithoutUsersInput = {
    id?: string
    name?: string | null
    description?: string | null
    code: string
    discount_amount: number
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type CouponCreateOrConnectWithoutUsersInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutUsersInput, CouponUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutCouponsInput = {
    update: XOR<UserUpdateWithoutCouponsInput, UserUncheckedUpdateWithoutCouponsInput>
    create: XOR<UserCreateWithoutCouponsInput, UserUncheckedCreateWithoutCouponsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCouponsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCouponsInput, UserUncheckedUpdateWithoutCouponsInput>
  }

  export type UserUpdateWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrer?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferrerNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_code?: NullableStringFieldUpdateOperationsInput | string | null
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrals?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CouponUpsertWithoutUsersInput = {
    update: XOR<CouponUpdateWithoutUsersInput, CouponUncheckedUpdateWithoutUsersInput>
    create: XOR<CouponCreateWithoutUsersInput, CouponUncheckedCreateWithoutUsersInput>
    where?: CouponWhereInput
  }

  export type CouponUpdateToOneWithWhereWithoutUsersInput = {
    where?: CouponWhereInput
    data: XOR<CouponUpdateWithoutUsersInput, CouponUncheckedUpdateWithoutUsersInput>
  }

  export type CouponUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrer?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferrerInput
    coupons?: CouponUserCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    referred_by_code?: string | null
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrals?: UserUncheckedCreateNestedManyWithoutReferrerInput
    coupons?: CouponUserUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type ReviewCreateWithoutEventInput = {
    id?: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutEventInput = {
    id?: string
    user_id: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type ReviewCreateOrConnectWithoutEventInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewCreateManyEventInputEnvelope = {
    data: ReviewCreateManyEventInput | ReviewCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutEventInput = {
    id?: string
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: $Enums.TransactionStatus
    payment_proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutEventInput = {
    id?: string
    user_id: string
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: $Enums.TransactionStatus
    payment_proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type TransactionCreateOrConnectWithoutEventInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput>
  }

  export type TransactionCreateManyEventInputEnvelope = {
    data: TransactionCreateManyEventInput | TransactionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type VoucherCreateWithoutEventInput = {
    id?: string
    code: string
    discount_amount: number
    start_date: Date | string
    end_date: Date | string
    usage_limit: number
    used_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type VoucherUncheckedCreateWithoutEventInput = {
    id?: string
    code: string
    discount_amount: number
    start_date: Date | string
    end_date: Date | string
    usage_limit: number
    used_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type VoucherCreateOrConnectWithoutEventInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput>
  }

  export type VoucherCreateManyEventInputEnvelope = {
    data: VoucherCreateManyEventInput | VoucherCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrer?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferrerNestedInput
    coupons?: CouponUserUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_code?: NullableStringFieldUpdateOperationsInput | string | null
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrals?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    coupons?: CouponUserUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
  }

  export type ReviewUpdateManyWithWhereWithoutEventInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutEventInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutEventInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutEventInput, TransactionUncheckedUpdateWithoutEventInput>
    create: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutEventInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutEventInput, TransactionUncheckedUpdateWithoutEventInput>
  }

  export type TransactionUpdateManyWithWhereWithoutEventInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutEventInput>
  }

  export type VoucherUpsertWithWhereUniqueWithoutEventInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutEventInput, VoucherUncheckedUpdateWithoutEventInput>
    create: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutEventInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutEventInput, VoucherUncheckedUpdateWithoutEventInput>
  }

  export type VoucherUpdateManyWithWhereWithoutEventInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutEventInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    OR?: VoucherScalarWhereInput[]
    NOT?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    id?: StringFilter<"Voucher"> | string
    event_id?: StringFilter<"Voucher"> | string
    code?: StringFilter<"Voucher"> | string
    discount_amount?: IntFilter<"Voucher"> | number
    start_date?: DateTimeFilter<"Voucher"> | Date | string
    end_date?: DateTimeFilter<"Voucher"> | Date | string
    usage_limit?: IntFilter<"Voucher"> | number
    used_count?: IntFilter<"Voucher"> | number
    created_at?: DateTimeFilter<"Voucher"> | Date | string
    updated_at?: DateTimeFilter<"Voucher"> | Date | string
    is_deleted?: BoolFilter<"Voucher"> | boolean
  }

  export type EventCreateWithoutVouchersInput = {
    id?: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    organizer: UserCreateNestedOneWithoutEventsInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVouchersInput = {
    id?: string
    organizer_id: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVouchersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVouchersInput, EventUncheckedCreateWithoutVouchersInput>
  }

  export type EventUpsertWithoutVouchersInput = {
    update: XOR<EventUpdateWithoutVouchersInput, EventUncheckedUpdateWithoutVouchersInput>
    create: XOR<EventCreateWithoutVouchersInput, EventUncheckedCreateWithoutVouchersInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutVouchersInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutVouchersInput, EventUncheckedUpdateWithoutVouchersInput>
  }

  export type EventUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    organizer: UserCreateNestedOneWithoutEventsInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    vouchers?: VoucherCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTransactionsInput = {
    id?: string
    organizer_id: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTransactionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrer?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferrerInput
    coupons?: CouponUserCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    referred_by_code?: string | null
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrals?: UserUncheckedCreateNestedManyWithoutReferrerInput
    coupons?: CouponUserUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type EventUpsertWithoutTransactionsInput = {
    update: XOR<EventUpdateWithoutTransactionsInput, EventUncheckedUpdateWithoutTransactionsInput>
    create: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTransactionsInput, EventUncheckedUpdateWithoutTransactionsInput>
  }

  export type EventUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrer?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferrerNestedInput
    coupons?: CouponUserUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_code?: NullableStringFieldUpdateOperationsInput | string | null
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrals?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    coupons?: CouponUserUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventCreateWithoutReviewsInput = {
    id?: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    organizer: UserCreateNestedOneWithoutEventsInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
    vouchers?: VoucherCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutReviewsInput = {
    id?: string
    organizer_id: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReviewsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrer?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferrerInput
    coupons?: CouponUserCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    referred_by_code?: string | null
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    referrals?: UserUncheckedCreateNestedManyWithoutReferrerInput
    coupons?: CouponUserUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type EventUpsertWithoutReviewsInput = {
    update: XOR<EventUpdateWithoutReviewsInput, EventUncheckedUpdateWithoutReviewsInput>
    create: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReviewsInput, EventUncheckedUpdateWithoutReviewsInput>
  }

  export type EventUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrer?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferrerNestedInput
    coupons?: CouponUserUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    referred_by_code?: NullableStringFieldUpdateOperationsInput | string | null
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrals?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    coupons?: CouponUserUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyReferrerInput = {
    id?: string
    full_name: string
    email: string
    password: string
    role: $Enums.UserRole
    is_verified?: boolean
    profile_picture?: string | null
    referral_code: string
    points_balance?: number
    points_expiry_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type CouponUserCreateManyUserInput = {
    id?: string
    expired_at?: Date | string | null
    used?: boolean
    coupon_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    name: string
    description: string
    category: string
    location: string
    price: number
    start_date: Date | string
    end_date: Date | string
    total_seats: number
    remaining_seats: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    event_id: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    event_id: string
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: $Enums.TransactionStatus
    payment_proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type UserUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrals?: UserUpdateManyWithoutReferrerNestedInput
    coupons?: CouponUserUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    referrals?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    coupons?: CouponUserUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    referral_code?: StringFieldUpdateOperationsInput | string
    points_balance?: IntFieldUpdateOperationsInput | number
    points_expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    coupon?: CouponUpdateOneRequiredWithoutUsersNestedInput
  }

  export type CouponUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    coupon_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    coupon_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_seats?: IntFieldUpdateOperationsInput | number
    remaining_seats?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    locked_price?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    locked_price?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    locked_price?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponUserCreateManyCouponInput = {
    id?: string
    expired_at?: Date | string | null
    used?: boolean
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type CouponUserUpdateWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCouponsNestedInput
  }

  export type CouponUserUncheckedUpdateWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponUserUncheckedUpdateManyWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewCreateManyEventInput = {
    id?: string
    user_id: string
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type TransactionCreateManyEventInput = {
    id?: string
    user_id: string
    ticket_quantity: number
    locked_price: number
    total_price: number
    status: $Enums.TransactionStatus
    payment_proof?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type VoucherCreateManyEventInput = {
    id?: string
    code: string
    discount_amount: number
    start_date: Date | string
    end_date: Date | string
    usage_limit: number
    used_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type ReviewUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    locked_price?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    locked_price?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    locked_price?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoucherUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoucherUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoucherUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }



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