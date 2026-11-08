import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createContactHandler } from './api/contact.js'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    {
      name: 'local-contact-api',
      configureServer(server) {
        const handler = createContactHandler({ env: loadEnv(mode, server.config.root, '') })
        server.middlewares.use('/api/contact', (req, res, next) => {
          if (req.url?.split('?')[0] !== '/') return next()
          return handler(req, res)
        })
      },
    },
  ],
}))
