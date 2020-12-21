
export enum ColumnType {
  // TODO (nicoll): add all column types based on the schema building types - http://knexjs.org/#Schema-Building
  Increments = 'increments',
  Integer = 'integer',
  BigInteger = 'biginteger',
  Text = 'text',
  String = 'string',
  Float = 'float',
  Decimal = 'decimal',
  Custom = 'custom' // TODO (nicoll): this should allow them to enter their own type. see knex docs for specificType function
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
  [ColumnType.Increments, { description: 'An auto-incrementing column, usually you would use this as a primary key', hasUnsigned: true}]
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