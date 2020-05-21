import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql'

export interface IUser {
    id: string
    slug: string
    email: string
    password: string
    first_name: string
    last_name: string
    gender: 'male' | 'female' | 'other'
    birthday: string
    created_at: string
    updated_at: string
}

export type User = IUser

export const UserType: any = new GraphQLObjectType<any, any>({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        slug: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        gender: { type: GraphQLString },
        birthday: { type: GraphQLString },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
    }),
})
