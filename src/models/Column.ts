
export enum ColumnType {
  // TODO (nicoll): add all column types based on the schema building types - http://knexjs.org/#Schema-Building
  Increments = 'increments',
  Integer = 'integer',
  BigInteger = 'biginteger',
  Text = 'text',
  String = 'string',
  Float = 'float',
  Decimal = 'decimal',
  Boolean = 'boolean',
  Date = 'date',
  DateTime= "datetime",
  Time = 'time',
  TimeStamp = 'timestamp',
  Binary = 'binary',
  Enum = 'enum',
  Json = 'json',
  Jsonb = 'jsonb',
  Uuid = 'uuid',
  SpecificType = 'specificType',
  Custom = 'custom' ///Ask matthew -- which one is this? 
  
  
  /// TODO (nicoll): this should allow them to enter their own type. see knex docs for specificType function
}

export interface ColumnOption {
  description?: string
  hasPrecision?: boolean
  hasLength?: boolean
  hasScale?: boolean
  hasUnsigned?: boolean
  hasUseTz?: boolean
}

export const ColumnTypeOptions = new Map<ColumnType, ColumnOption>([
  [ColumnType.Increments, { description: 'An auto-incrementing column, usually you would use this as a primary key', hasUnsigned: true}],
  [ColumnType.Integer, { description: 'Adds an integer column', hasUnsigned: true}],
  [ColumnType.BigInteger, { description: 'Adds a bigint column, bigint data is returned as string', hasUnsigned: true}],
  [ColumnType.Text, { description: 'Adds a text column', hasUnsigned: true}],
  [ColumnType.String, { description: 'Adds a string column, default length 255', hasUnsigned: true}],
  [ColumnType.Float, { description: 'Adds a float column, optional precision (defaults to 8) and scale (defaults to 2)', hasUnsigned: true}],
  [ColumnType.Decimal, { description: 'Adds a decimal column, optional precision (defaults to 8) and scale (defaults to 2). Choosing NULL as precision creates a decimal column that can store numbers of any precision and scale. (Only supported for Oracle, SQLite, Postgres)', hasUnsigned: true}],
  [ColumnType.Boolean, { description: 'Adds a boolean', hasUnsigned: true}],
  [ColumnType.Date, { description: 'Adds a date column', hasUnsigned: true}],
  [ColumnType.DateTime, { description: 'Adds a datetime column, suppoorted by PostgreSQL creating a column with timezone', hasUnsigned: true}],
  [ColumnType.Time, { description: 'Adds a time column, optional precision for SQL (not supported on Amazon Redshift)', hasUnsigned: true}],
  [ColumnType.TimeStamp, { description: 'Adds a timeStamp column', hasUnsigned: true}],
  [ColumnType.Binary, { description: 'Adds a binary column, with optional length argument for MySQL', hasUnsigned: true}],
  [ColumnType.Enum, { description: 'Adds a enum column, unchecked varchar(255) on Amazon Redshift', hasUnsigned: true}],
  [ColumnType.Json, { description: 'Adds a json column, it uses the built-in json type in PostgreSQL, MySQL and SQLite', hasUnsigned: true}],
  [ColumnType.Jsonb, { description: 'Adds a jsonb column, it uses native jsonb', hasUnsigned: true}],
  [ColumnType.Uuid, { description: 'Adds an uuid column, it uses built-in uuid type in PostgreSQL and char(36) in other databases', hasUnsigned: true}],
  [ColumnType.SpecificType, { description: 'Creates your own column type', hasUnsigned: true}],
])


export interface Column {
  name: string
  type: ColumnType
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
}

export interface ForeignKey {
  columns: string[]
  references: {
    table: string
    column: string
  }
}