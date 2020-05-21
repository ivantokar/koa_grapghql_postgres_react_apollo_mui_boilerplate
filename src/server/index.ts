import 'module-alias/register'
import Koa from 'koa'
import middlewares from './middlewares'
import config from '@config'

const app = new Koa()

middlewares(app)

app.listen(config.server.port, () => {
    console.log(
        `Server is listening on ${config.server.host}:${config.server.port}`
    )
})
