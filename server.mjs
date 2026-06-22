import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 3000
const ROOT = path.join(__dirname, 'dist', 'client')

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.txt': 'text/plain',
  '.woff2': 'font/woff2'
}

http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url
  let fullPath = path.join(ROOT, filePath)

  fs.stat(fullPath, (err) => {
    if (err) {
      fullPath = path.join(ROOT, 'index.html')
    }
    fs.readFile(fullPath, (e, data) => {
      if (e) {
        res.writeHead(404)
        res.end('Not found')
        return
      }
      const ext = path.extname(fullPath)
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
      res.end(data)
    })
  })
}).listen(PORT, () => console.log(`Server on http://localhost:${PORT}`))
