import * as mongoose from 'mongoose'
import * as connectRedis from 'connect-redis'
import * as session from 'express-session'
import * as Redis from 'ioredis'
import * as http from 'http'
import createApp from './app'
import { DB_URI, DB_OPTIONS, REDIS_OPTIONS, HTTP_PORT } from './config'

;(async () => {
  try {
    await mongoose.connect(DB_URI, DB_OPTIONS)

    const RedisStore = connectRedis(session)

    const store = new RedisStore({
      client: new Redis(REDIS_OPTIONS)
    })

    const { app, server } = createApp(store)

    const httpServer = http.createServer(app)
    server.installSubscriptionHandlers(httpServer)

    httpServer.listen(HTTP_PORT, () => {
      console.log(`http://localhost:${HTTP_PORT}${server.graphqlPath}`)
      console.log(`ws://localhost:${HTTP_PORT}${server.subscriptionsPath}`)
    })
  } catch (e) {
    console.error(e)
  }
})()