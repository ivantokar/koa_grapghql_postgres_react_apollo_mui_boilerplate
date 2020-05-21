import dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config()

const config: any = {
    app: {
        name: 'Project name',
        version: '1.0.0',
    },
    server: {
        port: process.env._PORT || 80,
        host: process.env._HOST || 'http://localhost',
    },
    static_dir: {
        index: `${process.env._STATIC_DIR}/index.html`,
        root: process.env._STATIC_DIR,
        options: {},
    },
    db: {
        development: {
            client: 'postgresql',
            connection: {
                database: 'db_name',
                user: 'postgres',
                password: 'tokar1985',
            },
            searchPath: ['knex', 'public'],
            migrations: {
                directory: resolve('./db/migrations'),
                tableName: 'migrations',
            },
            seeds: {
                directory: resolve('./db/seeds'),
            },
        },

        staging: {
            client: 'postgresql',
            connection: {
                database: 'pr',
                user: 'postgres',
                password: 'secret',
            },
            migrations: {
                directory: './db/migrations',
                tableName: 'migrations',
            },
            seeds: {
                directory: './db/seeds',
            },
        },

        production: {
            client: 'postgresql',
            connection: {
                database: 'db_name',
                user: 'postgres',
                password: 'secret',
            },
            migrations: {
                directory: './db/migrations',
                tableName: 'migrations',
            },
            seeds: {
                directory: './db/seeds',
            },
        },
    },
}

export default config
