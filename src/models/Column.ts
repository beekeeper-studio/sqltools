
// export enum ColumnType {
//   // TODO (nicoll): add all column types based on the schema building types - http://knexjs.org/#Schema-Building
//   Increments = 'increments',
//   Integer = 'integer',
//   BigInteger = 'biginteger',
//   Text = 'text',
//   String = 'string',
//   Float = 'float',
//   Decimal = 'decimal',
//   Boolean = 'boolean',
//   Date = 'date',
//   DateTime= "datetime",
//   Time = 'time',
//   TimeStamp = 'timestamp',
//   Binary = 'binary',
//   Enum = 'enum',
//   Json = 'json',
//   Jsonb = 'jsonb',
//   Uuid = 'uuid',
//   SpecificType = 'specificType',
  
  
  
// //   /// TODO (nicoll): this should allow them to enter their own type. see knex docs for specificType function
// }

export interface ColumnOption {
  name: string
  description?: string
  hasPrecision?: boolean
  hasLength?: boolean
  hasScale?: boolean
  hasUnsigned?: boolean
  hasUseTz?: boolean
  requiresValues?: boolean
}

export const ColumnTypeOptions: ColumnOption[] = [
  { name: "increments",  description: 'An auto-incrementing column, usually you would use this as a primary key', hasUnsigned: true},
  { name: 'integer', description: 'Adds an integer column', hasUnsigned: true},
  { name: 'biginteger', description: 'Adds a bigint column, bigint data is returned as string', hasUnsigned: true},
  { name: 'enum', requiresValues: true, description: 'Adds a enum column, unchecked varchar(255) on Amazon Redshift', hasUnsigned: true},
  { name: 'text', description: 'Adds a text column', hasUnsigned: true},
  { name: 'string', description: 'Adds a string column, default length 255', hasUnsigned: true},
  { name: 'Float',description: 'Adds a float column, optional precision (defaults to 8) and scale (defaults to 2)', hasUnsigned: true},
  { name: 'Decimal',  description: 'Adds a decimal column, optional precision (defaults to 8) and scale (defaults to 2). Choosing NULL as precision creates a decimal column that can store numbers of any precision and scale. (Only supported for Oracle, SQLite, Postgres)', hasUnsigned: true},
  { name: 'Boolean' , description: 'Adds a boolean', hasUnsigned: true},
  { name: 'Date', description: 'Adds a date column', hasUnsigned: true},
  { name: 'DateTime', description: 'Adds a datetime column, suppoorted by PostgreSQL creating a column with timezone', hasUnsigned: true},
  { name: 'Time', description: 'Adds a time column, optional precision for SQL (not supported on Amazon Redshift)', hasUnsigned: true},
  { name: 'TimeStamp', description: 'Adds a timeStamp column', hasUnsigned: true},
  { name: 'Binary', description: 'Adds a binary column, with optional length argument for MySQL', hasUnsigned: true},
  { name: 'Json', description: 'Adds a json column, it uses the built-in json type in PostgreSQL, MySQL and SQLite', hasUnsigned: true},
  { name: 'Jsonb', description: 'Adds a jsonb column, it uses native jsonb', hasUnsigned: true},
  { name: 'Uuid' , description: 'Adds an uuid column, it uses built-in uuid type in PostgreSQL and char(36) in other databases', hasUnsigned: true},
  { name: 'SpecificType' , description: 'Creates your own column type', hasUnsigned: true},
]
  




export interface Column {
  name: string
  type: string,
  nullable?: boolean
  comment?: string
  defaultValue?: any
  unique?: boolean
  primary?: boolean
  length?: number
  precision?: number
  scale?: number
  unsigned?: boolean
  useTz?: boolean
  values?: string[]
}

export interface ForeignKey {
  columns: string[]
  references: {
    table: string
    column: string
  }
}