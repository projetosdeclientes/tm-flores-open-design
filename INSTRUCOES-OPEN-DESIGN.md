# Static Mirror — TM Flores

Este ZIP é o **output buildado completo** do site original (TanStack Start + SSR).
Todo o HTML aqui já foi pré-renderizado pelo build do Lovable.

## O que fazer

1. **Apague TUDO** do projeto atual no Open Design (raiz do repositório).
2. **Cole o conteúdo deste ZIP** na raiz — preservando a estrutura.
3. **NÃO rode `bun install`, `npm install`, `vite build`, nem nada de build.**
   O HTML, CSS e JS já estão prontos.
4. **Publique como site estático puro** (Netlify, Vercel, Cloudflare Pages,
   GitHub Pages — qualquer host estático funciona).

### Netlify
- Build command: (vazio — deixar em branco)
- Publish directory: `.` (raiz)
- O arquivo `_redirects` já está incluso e cuida do roteamento.

### Vercel
- Framework preset: **Other**
- Build command: (vazio)
- Output directory: `.`

## Estrutura

- `index.html`, `sobre/index.html`, `encomendas/index.html`,
  `buques/index.html`, `plantas/index.html` — páginas principais
- `buques/<slug>/index.html` (14 produtos) e `plantas/<slug>/index.html` (2 produtos)
- `assets/` — JS + CSS hasheados do build
- `css/`, `js/`, `products/`, `testimonials/`, `about/`, `logo.png` — assets estáticos
- `_redirects` — config de roteamento (Netlify)
- `_headers` — security headers

## Regra de ouro

Substitua **byte por byte**. Não reformatar, não otimizar, não converter,
não rodar prettier, não rodar build. Este é o resultado final.
