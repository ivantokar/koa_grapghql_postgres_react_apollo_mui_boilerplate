import Router from '@koa/router'
// import config from '../../../config'
// import { createReadStream } from 'fs'

const router = new Router()

export const userRoutes = () => {
    // router.get('/user/:username', async (ctx) => {
    //     console.log(ctx.request.querystring)
    //     ctx.type = 'html'
    //     ctx.body = createReadStream(config.static_dir.index)
    // })
    return router.middleware()
}
