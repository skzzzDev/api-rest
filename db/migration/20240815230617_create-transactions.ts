import type { Knex } from 'knex'

// o que a migration vai fazer no banco de dados?
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

// descreve o erro das situações ( geralmente em rollbacks e é o contrário do metodo up)
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
