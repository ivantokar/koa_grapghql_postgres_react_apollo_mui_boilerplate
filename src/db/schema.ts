import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from 'graphql'
import { User, UserType } from '@modules/users'
import config from '@config'
import Knex from 'knex'
import { hashPassword, makeSlug } from '@utils'

export const knex = Knex({
    ...config.db.development,
})

const Query: any = new GraphQLObjectType<any, any>({
    name: 'Query',
    fields: () => ({
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return knex<User>('users').where('id', args.id).first()
            },
        },
    }),
})

const Mutation: any = new GraphQLObjectType<any, any>({
    name: 'Mutation',
    fields: () => ({
        createUser: {
            type: UserType,
            args: {
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
                first_name: { type: GraphQLNonNull(GraphQLString) },
                last_name: { type: GraphQLString },
            },
            resolve: (parent, args) => {
                return knex<User>('users')
                    .returning(['id'])
                    .insert({
                        email: args.email.toLowerCase(),
                        password: hashPassword(args.password),
                        slug: makeSlug(`${args.first_name} ${args.last_name}`),
                        first_name: args.first_name,
                        last_name: args.last_name,
                    })
            },
        },
        //     updateUser: {
        //         type: UserType,
        //         args: {
        //             email: { type: GraphQLNonNull(GraphQLString) },
        //             password: { type: GraphQLNonNull(GraphQLString) },
        //             first_name: { type: GraphQLNonNull(GraphQLString) },
        //             last_name: { type: GraphQLString },
        //         },
        //         resolve: (parent, args) => {
        //             return knex<User>('users')
        //                 .returning(['id'])
        //                 .update({
        //                     email: args.email.toLowerCase(),
        //                     password: hashPassword(args.password),
        //                     slug: makeSlug(`${args.first_name} ${args.last_name}`),
        //                     first_name: args.first_name,
        //                     last_name: args.last_name,
        //                 })
        //         },
        //     },
    }),
})

const schema: any = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})

export default schema
