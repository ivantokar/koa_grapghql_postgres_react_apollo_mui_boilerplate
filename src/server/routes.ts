import Router from '@koa/router'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
import schema from '@db/schema'
import { routes as authRoutes } from '@modules/auth'
import { createReadStream } from 'fs'
import config from '@config'

const router = new Router()

export default () => {
    router.use(mount(authRoutes()))

    router.get('/', async (ctx) => {
        ctx.type = 'html'
        ctx.body = createReadStream(config.static_dir.index)
    })

    router.get('/about', async (ctx) => {
        ctx.type = 'html'
        ctx.body = createReadStream(config.static_dir.index)
    })

    router.get('/terms', async (ctx) => {
        ctx.type = 'html'
        ctx.body = createReadStream(config.static_dir.index)
    })

    router.get('/faq', async (ctx) => {
        ctx.type = 'html'
        ctx.body = createReadStream(config.static_dir.index)
    })

    router.get('/cv/:username', async (ctx) => {
        ctx.type = 'html'
        ctx.body = createReadStream(config.static_dir.index)
    })

    router.all(
        '/graphql',
        graphqlHTTP({
            schema,
            graphiql: true,
        })
    )

    router.allowedMethods()

    return router.middleware()
}
