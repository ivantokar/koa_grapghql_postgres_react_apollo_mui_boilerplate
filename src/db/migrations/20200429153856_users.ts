import Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')

    await knex.schema.createTable('users', (table) => {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
        table.string('slug').unique().index().notNullable()
        table.string('email').unique().notNullable()
        table.string('password').nullable()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.enum('gender', ['male', 'female', 'other']).nullable()
        table.date('birthday').nullable()
        table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<any> {
    await knex.raw('drop extension if exists "uuid-ossp"')
    await knex.schema.dropTableIfExists('users')
}
