import { Hono } from 'hono'

const app = new Hono()



export default {
    port: process.env.PORT, // using bun env
    fetch: app.fetch,
}
