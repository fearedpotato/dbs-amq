import { defineConfig } from 'prisma/config'
import 'dotenv/config'

export default defineConfig({
    schema: 'prisma/schema.json',
    datasource: {
        url: process.env.DATABASE_URL,
    },
})