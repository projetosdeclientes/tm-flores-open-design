# TM Flores — Fonte completa (referência 100% fiel)

Este pacote contém **o código-fonte real** do site de referência
(https://site-tm-flores-prototipo-v1.lovable.app).
Use-o como base ÚNICA. Não reinterprete, não recrie do zero, não
"adapte". Copie arquivo a arquivo.

## Stack
- TanStack Start v1 (React 19 + Vite 7)
- Tailwind v4 via `src/styles.css` (NÃO existe `tailwind.config.js`)
- Roteamento por arquivos em `src/routes/`
- Bun como package manager

## Como subir
```bash
bun install
bun run dev      # desenvolvimento
bun run build    # build de produção
```

## Estrutura crítica (NÃO ALTERAR)
- `src/routes/__root.tsx` — shell + meta + WhatsApp flutuante + orbs animados
- `src/routes/index.tsx` — home (hero, sobre, categorias, depoimentos)
- `src/routes/buques/index.tsx` + `src/routes/buques/$slug.tsx`
- `src/routes/plantas.index.tsx` + `src/routes/plantas.$slug.tsx`
- `src/routes/sobre.tsx`, `src/routes/encomendas.tsx`
- `src/pages/ProductPage.tsx` — página individual usada por TODOS os produtos
- `src/data/products.ts` — fonte única de verdade dos 20 produtos
- `public/js/hero-carousel.js` — carrossel do hero (autoplay + setas + swipe)
- `public/js/product-carousel.js`, `reveal.js`, `tilt-3d.js`, `main.js`
- `public/css/*` — tokens, base, components, animations, pages/*

## Erros encontrados na versão atual do Open Design (corrigir TODOS)

### 1. Hero não troca de imagem, setas não funcionam
Causa: o React não está chamando `initHeroCarousel()`. Em SPA, os scripts
de `public/js/*.js` precisam ser carregados via `<script>` tag no
`__root.tsx` (já está) **e** re-inicializados após cada montagem da rota
"/". Solução: ver `src/routes/index.tsx` — o `useEffect` chama
`window.initHeroCarousel?.()` após mount. Replique exatamente.

### 2. 404 ao abrir/atualizar `/buques/buque-8-rosas` (e outras subrotas)
Causa: falta SPA fallback no Netlify.
Solução: criar `public/_redirects` com:
```
/*    /index.html   200
```
(Já incluído neste pacote.)

### 3. Faltam 6 produtos de buquês de rosas
A versão OD só tem buque-1 até buque-7. Faltam:
`buque-8-rosas`, `buque-10-rosas`, `buque-12-rosas`,
`buque-15-rosas`, `buque-20-rosas`, `buque-25-rosas`.
Solução: usar `src/data/products.ts` deste pacote (já tem os 20).
As imagens estão em `public/products/images/`.

### 4. `/sobre` com espaço branco enorme no meio
Causa: grid `.about-story-grid` usando `items-start` em colunas de
alturas diferentes. Solução: usar `items-center` (já corrigido em
`src/routes/sobre.tsx` deste pacote).

### 5. Setas dos carrosséis de produtos não funcionam
Mesma causa do hero: `initProductCarousels()` precisa ser chamado após
mount. Ver `src/pages/ProductPage.tsx`.

### 6. Navbar não aparece / não tem efeito de scroll
A navbar inicia com `opacity-0 -translate-y-full` e revela no scroll.
Se a hidratação falhar, fica invisível. Corrigir item 2 (SPA fallback)
resolve a hidratação e a navbar passa a funcionar.

## Regra de ouro
**Visualmente idêntico** = mesmo HTML renderizado + mesmo CSS + mesmos
scripts JS rodando. Não basta copiar HTML estático — os scripts em
`public/js/` PRECISAM rodar no cliente.

## Validação obrigatória após aplicar
Rodar `bun run build && bun run preview` e tirar screenshots 1280×800 de:
- `/` (desktop e mobile 390×844)
- `/buques`, `/plantas`
- `/buques/buque-1-rosa`, `/buques/buque-8-rosas`, `/buques/buque-25-rosas`
- `/plantas/mini-anturio`
- `/sobre`, `/encomendas`

Comparar lado a lado com o site de referência. Diferença visual = erro.
