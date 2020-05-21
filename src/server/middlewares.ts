import serve from 'koa-static'
import favicon from 'koa-favicon'
import bodyParser from 'koa-bodyparser'
import mount from 'koa-mount'
import config from '@config'
import routes from './routes'
import cors from '@koa/cors'
import logger from 'koa-logger'

export default (app) => {
    app.use(cors())

    app.use(serve(config.static_dir.root))

    app.use(favicon(`${config.static_dir.root}/favicon.ico`))

    app.use(bodyParser())

    app.use(logger())

    app.use(mount(routes()))
}
