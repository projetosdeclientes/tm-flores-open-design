# TM Flores e Plantas

Site institucional da TM Flores e Plantas — floricultura em São Paulo.

## Deploy no Netlify

1. Conecte o repositório no Netlify
2. Configurações:
   - **Publish directory:** `/` (raiz do projeto)
   - **Build command:** não necessário (site estático)
3. O deploy é automático a cada push na branch `main`

## Estrutura

```
/
├── index.html              # Página inicial
├── plantas.html            # Listagem de plantas
├── buques.html             # Listagem de buquês
├── sobre.html              # Sobre nós
├── encomendas.html         # Encomendas / FAQ
├── produto.html            # Template de produto (JS dinâmico)
├── planta-*.html           # Páginas individuais de plantas
├── buque-*.html            # Páginas individuais de buquês
├── css/                    # Estilos modulares
├── js/                     # Scripts do site
├── products/images/        # Imagens dos produtos
└── about/images/           # Imagens da página sobre
```
