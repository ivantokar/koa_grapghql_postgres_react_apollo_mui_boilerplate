import Router from '@koa/router'
import config from '@config'
import { createReadStream } from 'fs'

const router = new Router()

export const routes = () => {
    router.get('/login', async (ctx) => {
        ctx.type = 'html'
        ctx.body = createReadStream(config.static_dir.index)
    })

    router.get('/sign-up', async (ctx) => {
        ctx.type = 'html'
        ctx.body = createReadStream(config.static_dir.index)
    })

    return router.middleware()
}
