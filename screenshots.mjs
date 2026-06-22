import { createRequire } from 'node:module'
import { mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const puppeteer = require('puppeteer-core')

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, 'screenshots')
mkdirSync(OUT, { recursive: true })

const BASE = process.env.BASE_URL || 'http://localhost:4173'
const VIEWPORT = { width: 1280, height: 800 }

const ROUTES = [
  { path: '/', name: 'homepage' },
  { path: '/buques', name: 'buques' },
  { path: '/plantas', name: 'plantas' },
  { path: '/buques/buque-1-rosa', name: 'buque-1-rosa' },
  { path: '/buques/buque-8-rosas', name: 'buque-8-rosas' },
  { path: '/buques/buque-25-rosas', name: 'buque-25-rosas' },
  { path: '/plantas/mini-anturio', name: 'mini-anturio' },
  { path: '/sobre', name: 'sobre' },
  { path: '/encomendas', name: 'encomendas' },
]

const CHROME_PATH = `${process.env.USERPROFILE}\\AppData\\Local\\ms-playwright\\chromium-1228\\chrome-win64\\chrome.exe`

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

const page = await browser.newPage()
await page.setViewport(VIEWPORT)

const results = []

for (const route of ROUTES) {
  const url = `${BASE}${route.path}`
  const outPath = resolve(OUT, `${route.name}-1280x800.png`)
  console.log(`📸 ${url}`)
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
    await new Promise(r => setTimeout(r, 1000))
    await page.screenshot({ path: outPath, fullPage: false })
    results.push({ route: route.path, ok: true })
    console.log(`  ✔ saved`)
  } catch (err) {
    results.push({ route: route.path, ok: false, error: err.message })
    console.error(`  ✖ failed: ${err.message}`)
  }
}

await browser.close()

console.log('\n=== RESUMO ===')
for (const r of results) {
  const status = r.ok ? '✓' : '✗'
  console.log(`${status} ${r.route}${r.ok ? '' : ': ' + r.error}`)
}

const allOk = results.every(r => r.ok)
console.log(`\n${allOk ? '✅ TODOS OS 9 SCREENSHOTS GERADOS' : '❌ ALGUNS FALHARAM'}`)
console.log(`Pasta: ${OUT}`)
