import * as Knex from 'knex'

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(() => {
            // Inserts seed entries
            return knex('users').insert([
                {
                    email: 'herbert@mail.com',
                    password: 'secret',
                    slug: 'herbert-wells',
                    first_name: 'Herbert',
                    last_name: 'Wells',
                },
                {
                    email: 'mark@mail.com',
                    password: 'secret',
                    slug: 'mark-twain',
                    first_name: 'Mark',
                    last_name: 'Twain',
                },
                {
                    email: 'ernest@mail.com',
                    password: 'secret',
                    slug: 'ernest-hemingway',
                    first_name: 'Ernest',
                    last_name: 'Hemingway',
                },
            ])
        })
}
