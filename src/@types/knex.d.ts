// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/table' {
  export interface Tables {
    transaction: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
