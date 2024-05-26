import type { Knex } from "knex";




export async function up(knex: Knex): Promise<void> {

  return knex.schema.createTable('transactions', (table)=> {
    table.uuid('id').primary().notNullable();
    table.text('title').notNullable();
    table.decimal('amount', 10,2).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('transactions');
}

