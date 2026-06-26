# Atualização: Seção de Plantas + Remoção da logo flutuante

Aplique EXATAMENTE como está abaixo. Não interprete, não improvise, não otimize. Apenas:
1. DELETE o arquivo indicado.
2. SUBSTITUA INTEGRALMENTE o conteúdo dos 3 arquivos abaixo (apagar tudo do arquivo e colar o conteúdo novo).
3. CRIE a pasta `src/assets/plantas/` e adicione as 9 imagens anexadas neste chat.
4. Rode `bun install` (se necessário) e `bun run build` para validar.
5. Commit: `feat(plantas): landing institucional + remove logo flutuante da home`

---

## PASSO 1 — DELETAR

Apague o arquivo:
```
src/routes/plantas.$slug.tsx
```

---

## PASSO 2 — ADICIONAR IMAGENS

Crie a pasta `src/assets/plantas/` e salve nela estes 9 arquivos (anexados aqui no chat):

- `estufa-home.jpg`
- `orquideas.jpg`
- `suculentas.jpg`
- `anturios.jpg`
- `bromelias.jpg`
- `samambaias.jpg`
- `kalanchoes.jpg`
- `espada-sao-jorge.jpg`
- `plantas-raras.jpg`

---

## PASSO 3 — SUBSTITUIR INTEGRALMENTE `src/data/products.ts`

Apague TODO o conteúdo atual desse arquivo e cole o conteúdo abaixo:

```ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  category: 'buques' | 'plantas' | 'buques-mistos' | 'cestas-chocolates';
  tagline?: string;
  badge?: string;
}

export const products: Product[] = [
  { 
    id: "rosa-unitaria", 
    name: "Rosa Unitária", 
    description: "Uma rosa. Uma mensagem. Um sentimento profundo. Escolhida a dedo para garantir o frescor e a beleza.", 
    price: "R$ 10,00", 
    images: ["/products/images/rosa-unitaria-1.png", "/products/images/rosa-unitaria-2.png", "/products/images/rosa-unitaria-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-1-rosa", 
    name: "Buquê com 1 Rosa", 
    description: "Às vezes, um único gesto fala mais do que mil palavras. A expressão pura da delicadeza.", 
    price: "R$ 34,90", 
    images: ["/products/images/buque-1-rosa-1.png", "/products/images/buque-1-rosa-2.png", "/products/images/buque-1-rosa-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-2-rosas", 
    name: "Buquê com 2 Rosas", 
    description: "Simples, elegante e cheio de significado. Perfeito para gestos delicados e declarações sinceras.", 
    price: "R$ 54,90", 
    images: ["/products/images/buque-2-rosas-1.png", "/products/images/buque-2-rosas-2.png", "/products/images/buque-2-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-3-rosas", 
    name: "Buquê com 3 Rosas", 
    tagline: "Um gesto simples, mas cheio de emoção.",
    description: "Encante com um gesto cheio de significado. O Buquê Três Rosas representa um sentimento completo: amor, respeito e admiração. Composto por três rosas frescas e selecionadas, acompanhadas de folhagens verdes e acabamento refinado, é a escolha ideal para expressar carinho verdadeiro. Com embalagem delicada e um toque de sofisticação, esse buquê é perfeito para aniversários, agradecimentos, início de relacionamento ou apenas para surpreender alguém especial.", 
    price: "R$ 69,90", 
    images: ["/products/images/buque-3-rosas-1.png", "/products/images/buque-3-rosas-2.png", "/products/images/buque-3-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-4-rosas", 
    name: "Buquê com 4 Rosas", 
    tagline: "Um buquê discreto, mas cheio de significado — porque às vezes, menos é mais.",
    description: "Delicado e cheio de charme, o Buquê Quatro Rosas é perfeito para quem deseja expressar carinho com sutileza e bom gosto. Composto por quatro rosas frescas e vibrantes, acompanhadas por folhagens ornamentais e uma embalagem sofisticada, esse arranjo transmite atenção, afeto e intenção verdadeira. Ideal para surpreender em datas especiais, aniversários, pequenos gestos românticos ou simplesmente dizer que está pensando em alguém.", 
    price: "R$ 84,90", 
    images: ["/products/images/buque-4-rosas-1.png", "/products/images/buque-4-rosas-2.png", "/products/images/buque-4-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-5-rosas", 
    name: "Buquê com 5 Rosas", 
    tagline: "Cinco rosas, cinco motivos para encantar quem você ama.",
    description: "O Buquê Cinco Rosas é a combinação perfeita entre beleza, elegância e emoção. Com cinco rosas selecionadas cuidadosamente, acompanhadas de folhagens frescas e embaladas com delicadeza, esse arranjo transmite sentimentos sinceros com um charme único. Ideal para celebrar momentos especiais, surpreender alguém querido ou demonstrar carinho de forma delicada e marcante.", 
    price: "R$ 99,90", 
    images: ["/products/images/buque-5-rosas-1.png", "/products/images/buque-5-rosas-2.png", "/products/images/buque-5-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-6-rosas", 
    name: "Buquê com 6 Rosas", 
    tagline: "Simples, direto e cheio de estilo — como o amor deve ser.",
    description: "Seis rosas frescas e selecionadas com cuidado para expressar sentimentos de forma elegante e marcante. Com visual moderno e acabamento clean, este buquê é perfeito para presentear em momentos especiais ou surpreender no cotidiano. Acompanhado de folhagens naturais e embalado com papel decorativo contemporâneo e laço de cetim, ele transmite charme, afeto e estilo.", 
    price: "R$ 119,90", 
    images: ["/products/images/buque-6-rosas-1.png", "/products/images/buque-6-rosas-2.png", "/products/images/buque-6-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-7-rosas", 
    name: "Buquê com 7 Rosas", 
    tagline: "Simples, marcante e inesquecível — como quem recebe.",
    description: "Com 7 rosas frescas e selecionadas à mão, este buquê é a escolha ideal para transmitir sentimentos sinceros com delicadeza e elegância. Acompanhado de folhagens naturais e embalado em papel decorativo com acabamento em laço de cetim, ele une beleza, sofisticação e emoção em um só presente. Perfeito para aniversários, surpresas românticas, agradecimentos ou qualquer momento especial.", 
    price: "R$ 134,90", 
    images: ["/products/images/buque-7-rosas-1.png", "/products/images/buque-7-rosas-2.png", "/products/images/buque-7-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-8-rosas", 
    name: "Buquê com 8 Rosas", 
    tagline: "Mais que flores — uma forma de dizer o que palavras não conseguem.",
    description: "Elegante e cheio de significado, este buquê com 8 rosas frescas é perfeito para quem quer surpreender com estilo. Cada rosa é cuidadosamente selecionada e combinada with folhagens verdes que destacam sua beleza natural. A embalagem sofisticada e o laço em cetim completam o arranjo com um toque de charme. Ideal para momentos especiais como aniversários, celebrações, declarações de amor ou simplesmente para transformar o dia de alguém.", 
    price: "R$ 149,90", 
    images: ["/products/images/buque-8-rosas-1.png", "/products/images/buque-8-rosas-2.png", "/products/images/buque-8-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-10-rosas", 
    name: "Buquê com 10 Rosas", 
    tagline: "Mais do que flores — um gesto que emociona.",
    description: "Com 10 rosas frescas, vibrantes e selecionadas com rigor, este buquê é a escolha ideal para quem deseja causar uma impressão marcante. Cada flor representa carinho, admiração e intensidade, criando um arranjo visualmente forte e emocionalmente significativo. Finalizado com folhagens nobres, embalagem moderna e laço em cetim, é perfeito para aniversários, pedidos de desculpas, datas românticas ou conquistas importantes.", 
    price: "R$ 174,90", 
    images: ["/products/images/buque-10-rosas-1.png", "/products/images/buque-10-rosas-2.png", "/products/images/buque-10-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-12-rosas", 
    name: "Buquê com 12 Rosas", 
    tagline: "Um gesto clássico que diz tudo — sem precisar de palavras.",
    description: "O buquê com 12 rosas é um verdadeiro símbolo de amor, admiração e elegância. Cada rosa é cuidadosamente escolhida para compor um arranjo harmonioso e impactante, perfeito para declarações românticas, aniversários, pedidos de desculpas ou qualquer momento que mereça ser inesquecível. Acompanhado de folhagens verdes e acabamento refinado com papel decorativo e laço de cetim, esse buquê une tradição e sofisticação em um presente que impressiona.", 
    price: "R$ 234,90", 
    images: ["/products/images/buque-12-rosas-1.png", "/products/images/buque-12-rosas-2.png", "/products/images/buque-12-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-15-rosas", 
    name: "Buquê com 15 Rosas", 
    tagline: "Mais que flores — é sentimento entregue em forma de beleza.",
    description: "Impressione com intensidade e beleza. Este buquê é composto por 15 rosas frescas, selecionadas com cuidado para criar um arranjo marcante, romântico e cheio de significado. Ideal para celebrações especiais, aniversários, pedidos importantes ou para surpreender alguém que merece o melhor. Com folhagens verdes e acabamento sofisticado em papel decorativo e laço de cetim, ele une elegância e emoção em cada detalhe.", 
    price: "R$ 255,90", 
    images: ["/products/images/buque-15-rosas-1.png", "/products/images/buque-15-rosas-2.png", "/products/images/buque-15-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-20-rosas", 
    name: "Buquê com 20 Rosas", 
    tagline: "Presenteie com flores que impressionam e emocionam.",
    description: "Um presente grandioso para momentos que merecem ser inesquecíveis. Com 20 rosas frescas e deslumbrantes, este buquê transmite sentimentos profundos com intensidade, elegância e beleza. Ideal para celebrar o amor, marcar datas especiais ou surpreender com estilo e sofisticação. A composição é finalizada com folhagens selecionadas, embalagem refinada e laço em cetim, resultando em um arranjo de alto impacto visual e emocional.", 
    price: "R$ 299,90", 
    images: ["/products/images/buque-20-rosas-1.png", "/products/images/buque-20-rosas-2.png", "/products/images/buque-20-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-25-rosas", 
    name: "Buquê com 25 Rosas", 
    tagline: "Mais que flores — um verdadeiro espetáculo de sentimentos.",
    badge: "✦ Premium",
    description: "Um gesto imponente para quem deseja impressionar e emocionar. Este buquê reúne 25 rosas frescas e deslumbrantes, formando um arranjo exuberante, cheio de charme e significado. É perfeito para momentos únicos: pedidos de namoro, aniversários de relacionamento, declarações especiais ou para presentear alguém inesquecível. Com folhagens ornamentais e acabamento sofisticado em papel decorativo e laço de cetim, o buquê transmite luxo, romantismo e intensidade em cada detalhe.", 
    price: "R$ 354,90", 
    images: ["/products/images/buque-25-rosas-1.png", "/products/images/buque-25-rosas-2.png", "/products/images/buque-25-rosas-3.png"],
    category: 'buques'
  },
  {
    id: "buque-misto-rosas-cravos",
    name: "Buquê Misto Premium",
    description: "Buquê sofisticado com um mix harmonioso de rosas vermelhas vibrantes e cravos rosa delicados. A composição é complementada por ramos de gypsophila, que trazem leveza e volume ao arranjo. Envolto em uma embalagem elegante com acabamento em tela vermelha e um imponente laço acetinado.",
    price: "Sob consulta",
    images: ["/products/images/buque-misto-especial-1.png", "/products/images/buque-misto-especial-2.png", "/products/images/buque-misto-especial-3.png"],
    category: 'buques-mistos'
  },
  {
    id: "buque-misto-girassol",
    name: "Buquê Misto Alegria",
    description: "Um arranjo vibrante e cheio de vida que combina a energia solar dos girassóis com a delicadeza de margaridas e crisântemos em tons de branco, rosa e laranja. Esta composição multicolorida é envolta em uma embalagem verde oliva moderna e finalizada com um laço de ráfia natural, criando um contraste elegante e rústico.",
    price: "Sob consulta",
    images: ["/products/images/buque-misto-girassol-1.png", "/products/images/buque-misto-girassol-2.png", "/products/images/buque-misto-girassol-3.png"],
    category: 'buques-mistos'
  },
  {
    id: "buque-misto-encanto",
    name: "Buquê Misto Encanto",
    description: "Um arranjo exuberante e sofisticado que celebra a diversidade floral. Esta composição única destaca o contraste vibrante entre lírios em tons de rosa e amarelo, girassóis majestosos e alstroemérias coloridas. O mix é delicadamente finalizado com gypsophila branca e folhagens variadas, criando uma harmonia de cores e texturas envolta em uma embalagem clássica branca com laço de ráfia natural.",
    price: "Sob consulta",
    images: ["/products/images/buque-misto-encanto-1.png", "/products/images/buque-misto-encanto-2.png", "/products/images/buque-misto-encanto-3.png"],
    category: 'buques-mistos'
  },
  {
    id: "buque-misto-sol-radiante",
    name: "Buquê Misto Sol Radiante",
    description: "Uma composição luminosa e sofisticada que une o brilho majestoso de um girassol central à elegância clássica de rosas brancas impecáveis. Envolto em uma nuvem de gypsophila delicada e folhagens de eucalipto, este arranjo é finalizado em uma embalagem de papel Kraft texturizado com laço de cetim amarelo, transmitindo calor, pureza e alegria.",
    price: "Sob consulta",
    images: ["/products/images/buque-misto-sol-radiante-1.png", "/products/images/buque-misto-sol-radiante-2.png", "/products/images/buque-misto-sol-radiante-3.png"],
    category: 'buques-mistos'
  },
  {
    id: "cesta-cafe-chocolates",
    name: "Coração Ouro Branco & Sonho de Valsa",
    tagline: "Uma declaração doce em formato de coração com os bombons mais amados do Brasil.",
    description: "Caixa especial em formato de coração dividida em duas bandas irresistíveis: de um lado, os clássicos bombons Ouro Branco com seu recheio cremoso de chocolate branco e castanhas; do outro, os inconfundíveis Sonho de Valsa, com wafer crocante e recheio de avelãs. Uma combinação perfeita para presentear quem você ama em datas românticas, aniversários, Dia dos Namorados, Dia das Mães ou simplesmente para transformar um dia comum em um momento inesquecível.",
    price: "R$ 79,90",
    images: ["/products/images/cesta-cafe-chocolates-1.png"],
    category: 'cestas-chocolates'
  },
  {
    id: "coracao-pelucia-bombons",
    name: "Coração Encantado com Pelúcia e Bombons",
    tagline: "Um presente delicado, divertido e cheio de carinho para surpreender quem você ama.",
    description: "Cesta especial em formato de coração, montada com bombons selecionados Sonho de Valsa e Ouro Branco, laço decorativo, embalagem transparente e um toque especial de fofura com pelúcia temática. Uma opção charmosa e romântica para presentear em aniversários, Dia dos Namorados, Dia das Mães, datas comemorativas ou simplesmente para demonstrar carinho de um jeito doce e inesquecível.",
    price: "R$ 65,00",
    images: [
      "/products/images/coracao-pelucia-bombons-1.png",
      "/products/images/coracao-pelucia-bombons-2.png"
    ],
    category: 'cestas-chocolates'
  },
  {
    id: "cesta-amor-pelucia-bombons",
    name: "Cesta Amor com Pelúcia e Bombons",
    tagline: "Um gesto doce e carinhoso para encantar quem você ama.",
    description: "Encantadora e cheia de carinho, esta cesta de vime traz uma composição romântica com embalagem em celofane transparente, grande laço vermelho, ursinho de pelúcia marrom com coração vermelho escrito \"AMOR!\", chocolates Ferrero Rocher, item sabor morango e bombons embalados em tons vibrantes. O visual transmite afeto, cuidado e delicadeza em cada detalhe. Ideal para aniversários, Dia dos Namorados, declarações, agradecimentos ou para surpreender alguém especial.",
    price: "R$ 240,00",
    images: [
      "/products/images/cesta-amor-pelucia-bombons-1.png",
      "/products/images/cesta-amor-pelucia-bombons-2.png"
    ],
    category: 'cestas-chocolates'
  },
  {
    id: "cesta-chocolamor-pelucia-bombons",
    name: "Cesta Chocolamor com Pelúcia e Bombons",
    tagline: "Um presente doce e afetuoso — perfeito para agradecer com carinho.",
    description: "Encantadora e cheia de ternura, esta cesta de vime reúne ursinho de pelúcia bege com coração vermelho \"Te Amo\", chocolates Lacta Obrigado, Bis, Kinder Bueno White, Ferrero Rocher, Ouro Branco e bombons variados. A embalagem em celofane transparente e o grande laço pink deixam a composição delicada, alegre e especial. Ideal para aniversários, agradecimentos, declarações, Dia dos Namorados ou para surpreender alguém especial.",
    price: "R$ 160,00",
    images: [
      "/products/images/cesta-chocolamor-pelucia-bombons-1.png",
      "/products/images/cesta-chocolamor-pelucia-bombons-2.png"
    ],
    category: 'cestas-chocolates'
  },
  {
    id: "cesta-abraco-amor-doce",
    name: "Cesta Abraço de Amor Doce",
    tagline: "Um presente que traduz carinho em cada detalhe com delicadeza.",
    description: "Encantadora e afetiva, esta cesta de vime apresenta uma composição romântica com ursinho de pelúcia segurando coração vermelho escrito \"Amor\", acompanhada de chocolates Hershey's, Ouro Branco e Sonho de Valsa. O balão em formato de coração com a mensagem \"Te amo\" destaca a proposta apaixonada do presente. A embalagem em celofane transparente com laço decorativo completa o visual elegante e delicado. Ideal para aniversários, Dia dos Namorados, declarações de amor e momentos especiais de surpresa.",
    price: "R$ 99,90",
    images: [
      "/products/images/cesta-abraco-amor-doce-1.png",
      "/products/images/cesta-abraco-amor-doce-2.png"
    ],
    category: 'cestas-chocolates'
  },
  {
    id: "cesta-love-choco",
    name: "Cesta Love Choco",
    tagline: "Um presente doce e romântico para declarar amor com delicadeza.",
    description: "Encantadora e romântica, esta cesta de vime traz uma composição especial com ursinho de pelúcia amarelo segurando coração vermelho e xadrez com a palavra \"Amor\". A seleção de chocolates inclui caixa Lacta Te Adoro, barra de chocolate Suflair e bombons Sonho de Valsa. O acabamento em celofane transparente e o laço vermelho completam a apresentação com elegância. Ideal para aniversários, Dia dos Namorados, declarações de amor e surpresas especiais.",
    price: "R$ 140,00",
    images: [
      "/products/images/cesta-love-choco-1.png",
      "/products/images/cesta-love-choco-2.png"
    ],
    category: 'cestas-chocolates'
  },
];

```

---

## PASSO 4 — SUBSTITUIR INTEGRALMENTE `src/routes/plantas.index.tsx`

Apague TODO o conteúdo atual e cole abaixo:

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useEffect } from 'react'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { Sparkles, Leaf, Heart } from 'lucide-react'
import orquideasImg from '@/assets/plantas/orquideas.jpg'
import suculentasImg from '@/assets/plantas/suculentas.jpg'
import anturiosImg from '@/assets/plantas/anturios.jpg'
import bromeliasImg from '@/assets/plantas/bromelias.jpg'
import samambaiasImg from '@/assets/plantas/samambaias.jpg'
import kalanchoesImg from '@/assets/plantas/kalanchoes.jpg'
import espadaImg from '@/assets/plantas/espada-sao-jorge.jpg'
import rarasImg from '@/assets/plantas/plantas-raras.jpg'

export const Route = createFileRoute('/plantas/')({
  component: PlantasPage,
})

const WHATSAPP_MESSAGE = 'Oii, tudo bem? Gostaria de saber as opções de plantas disponíveis!'
const WHATSAPP_URL = `https://wa.me/5511918475136?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const PLANT_TYPES: Array<{ image: string; name: string }> = [
  { image: orquideasImg, name: 'Orquídeas' },
  { image: suculentasImg, name: 'Suculentas' },
  { image: anturiosImg, name: 'Antúrios' },
  { image: bromeliasImg, name: 'Bromélias' },
  { image: samambaiasImg, name: 'Samambaias' },
  { image: kalanchoesImg, name: 'Kalanchoes' },
  { image: espadaImg, name: 'Espadas-de-São-Jorge' },
  { image: rarasImg, name: 'Plantas raras' },
]

function PlantasPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero — Estufa Romântica */}
      <section className="relative overflow-hidden pt-40 pb-24 md:pb-32 bg-gradient-to-br from-cream via-[#F5EFE6] to-[#EDE4D3]">
        {/* Folhagens decorativas */}
        <div aria-hidden="true" className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#A8C4A0]/20 blur-3xl" />
        <div aria-hidden="true" className="absolute top-10 -right-32 w-[28rem] h-[28rem] rounded-full bg-gold-main/10 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-purple-main/10 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl reveal-fade">
          <span className="inline-flex items-center gap-2 text-gold-main font-sans font-bold uppercase tracking-[0.25em] text-xs mb-6">
            <Leaf size={14} /> Estufa TM Flores
          </span>
          <h1 className="font-serif text-5xl md:text-7xl italic font-light text-purple-deep leading-[1.05] mb-6">
            Plantas <span className="text-[#6B8E5A]">vivas</span>,<br />
            cuidadas <span className="text-gold-main">à mão</span>.
          </h1>
          <p className="font-script text-3xl md:text-4xl text-purple-main mb-8 leading-snug">
            "Onde o verde encontra o romântico."
          </p>
          <p className="text-lg text-text-medium leading-relaxed max-w-xl mx-auto mb-10">
            Nossa coleção de plantas é viva e muda toda semana. Por isso, em vez de uma vitrine fixa,
            convidamos você a conversar com a gente: nos conte qual planta você está procurando e
            mostramos o que temos disponível agora — com foto, preço e cuidado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-whatsapp btn-magnetic inline-flex px-10 py-4"
          >
            <WhatsAppIcon size={20} className="mr-2" />
            Ver plantas disponíveis hoje
          </a>
        </div>
      </section>

      {/* Tipos de plantas que vendem */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-fade">
            <span className="text-gold-main font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
              O que costuma ter por aqui
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic font-light text-purple-deep leading-tight mb-4">
              Um pedacinho da nossa estufa
            </h2>
            <p className="text-text-medium leading-relaxed">
              Trabalhamos com plantas selecionadas a dedo, mudando conforme a estação e a disponibilidade
              dos nossos parceiros. Confira algumas das categorias que costumam morar com a gente:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {PLANT_TYPES.map((type) => (
              <article
                key={type.name}
                className="group relative bg-white rounded-3xl text-center border border-gold-main/10 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#A8C4A0] via-gold-main to-purple-main opacity-60 z-10"
                />
                <div className="aspect-square overflow-hidden bg-cream">
                  <img
                    src={type.image}
                    alt={type.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-purple-deep py-5 px-4">
                  {type.name}
                </h3>
              </article>
            ))}
          </div>

          <p className="text-center text-text-light text-sm mt-10 italic">
            Procurando outra espécie? Pergunte! Muitas vezes conseguimos encomendar para você.
          </p>
        </div>
      </section>

      {/* Como funciona o pedido */}
      <section className="py-24 bg-gradient-to-b from-[#F5EFE6] to-cream">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 reveal-fade">
            <span className="text-gold-main font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
              Simples assim
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic font-light text-purple-deep leading-tight">
              Como escolher sua planta
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger">
            {[
              {
                icon: <Sparkles size={24} className="text-gold-main" />,
                step: '01',
                title: 'Chame no WhatsApp',
                text: 'Nos diga qual planta você está procurando — ou descreva o ambiente, o estilo, o presente.',
              },
              {
                icon: <Leaf size={24} className="text-[#6B8E5A]" />,
                step: '02',
                title: 'Mostramos o estoque',
                text: 'Enviamos fotos reais das plantas disponíveis hoje, com preço, tamanho e dicas de cuidado.',
              },
              {
                icon: <Heart size={24} className="text-purple-main" />,
                step: '03',
                title: 'Sua planta chega cuidada',
                text: 'Embalada com carinho, pronta para presentear ou para decorar seu cantinho preferido.',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-3xl p-8 shadow-card border border-gold-main/10 relative"
              >
                <span className="absolute top-6 right-6 font-serif italic text-3xl text-purple-main/20">
                  {s.step}
                </span>
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-purple-deep mb-3">
                  {s.title}
                </h3>
                <p className="text-text-medium text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final — Estufa */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-purple-deep via-purple-main to-purple-deep rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden shadow-2xl reveal-scale">
            <div aria-hidden="true" className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-gold-main/20 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-[#A8C4A0]/20 blur-3xl" />

            <span className="relative text-5xl mb-6 block">🪴</span>
            <h2 className="relative font-serif text-3xl md:text-5xl italic font-light text-white leading-tight mb-6">
              Vamos achar a planta <span className="text-gold-main">perfeita</span> para você?
            </h2>
            <p className="relative text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
              Cada planta é única — e merece ser escolhida assim. Conte para a gente o que procura
              e te mostramos o que temos vivo, fresco e pronto pra ir embora com você hoje.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="relative btn btn-whatsapp btn-magnetic inline-flex px-10 py-4"
            >
              <WhatsAppIcon size={20} className="mr-2" />
              Falar com a floricultura
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
```

---

## PASSO 5 — SUBSTITUIR INTEGRALMENTE `src/routes/index.tsx`

Apague TODO o conteúdo atual e cole abaixo:

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '@/data/products'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductCard, MoreCard } from '@/components/ProductCard'
import { ArrowRight, Star } from 'lucide-react'
import { Leaf } from 'lucide-react'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { useEffect, useState } from 'react'
import estufaHome from '@/assets/plantas/estufa-home.jpg'


export const Route = createFileRoute('/')({
  component: Index,
})

function AnnouncementBar() {
  return (
    <div className="bg-purple-deep py-2 px-6 overflow-hidden border-b border-gold-main/20 announcement-bar hidden md:flex">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4 text-[11px] md:text-xs font-sans font-bold uppercase tracking-[0.2em] text-lavender-light text-center announcement-track">
          <span className="flex items-center gap-2 announcement-text">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-main animate-pulse announcement-pulse" />
            ✦ Buquê do seu jeito — mande a foto do que sonha e a gente faz acontecer.
            <Link to="/encomendas" className="text-gold-main hover:text-white transition-colors underline underline-offset-4 ml-2 announcement-link">
              Ver como funciona →
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}


function Hero() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2000&auto=format&fit=crop",
      eyebrow: "TM Flores e Plantas",
      headline: "Flores que *falam pelo coração*",
      cta: "Ver nossos buquês",
      link: "/buques",
      overlay: "bg-black/45"
    },
    {
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=2000&auto=format&fit=crop",
      eyebrow: "Para quem você ama",
      headline: "Um gesto *simples* que fica para sempre",
      cta: "Presentear agora",
      link: "/buques",
      overlay: "bg-black/35"
    },
    {
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000&auto=format&fit=crop",
      eyebrow: "Para os momentos únicos",
      headline: "Flores que marcam *histórias reais*",
      cta: "Fazer um pedido especial",
      link: "/encomendas",
      overlay: "bg-black/55"
    }
  ]

  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  return (
    <section 
      className="relative h-[65vh] min-h-[480px] md:h-[90vh] overflow-hidden bg-text-dark hero-carousel group/hero"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-silk hero-slide ${
            idx === current ? "opacity-100 scale-105 z-20" : "opacity-0 scale-100 z-10 pointer-events-none"
          }`}
        >
          <div className={`absolute inset-0 z-10 ${slide.overlay}`} />
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover hero-parallax-layer"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 hero-content">
            <span className="text-gold-main font-sans font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 hero-eyebrow drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {slide.eyebrow}
            </span>
            <h1 
              className="font-serif text-white text-[28px] md:text-7xl lg:text-8xl italic font-light leading-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 hero-headline drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
              dangerouslySetInnerHTML={{ __html: slide.headline.replace(/\*(.*?)\*/g, '<span class="text-gold-main drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">$1</span>') }}
            />
            <div className="flex justify-center w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              {slide.link.startsWith('http') ? (
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-whatsapp px-8 py-4 text-base hero-cta w-full max-w-[320px] md:w-auto relative z-50"
                >
                  <WhatsAppIcon size={20} />
                  {slide.cta}
                </a>
              ) : (
                <Link
                  to={slide.link as any}
                  className="bg-white text-text-dark px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gold-main hover:text-white transition-all shadow-xl hero-cta w-full max-w-[320px] md:w-auto text-center flex items-center justify-center relative z-50"
                >
                  {slide.cta}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/20 text-white flex items-center justify-center backdrop-blur-sm hover:bg-white hover:text-text-dark transition-all duration-300 md:opacity-0 md:group-hover/hero:opacity-100"
        aria-label="Slide anterior"
      >
        <ArrowRight size={24} className="rotate-180" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/20 text-white flex items-center justify-center backdrop-blur-sm hover:bg-white hover:text-text-dark transition-all duration-300 md:opacity-0 md:group-hover/hero:opacity-100"
        aria-label="Próximo slide"
      >
        <ArrowRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-3 hero-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="w-12 h-[44px] flex items-center justify-center cursor-pointer hero-dot-container group/dot"
            aria-label={`Ir para slide ${idx + 1}`}
          >
             <div className={`h-1 rounded-full transition-all duration-500 hero-dot ${
              idx === current ? "bg-gold-main w-16" : "bg-white/30 w-8 group-hover/dot:bg-white/60"
            }`} />
          </button>
        ))}
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, centered = true }: { eyebrow: string; title: string; centered?: boolean }) {
  return (
    <div className={`section-header mb-12 ${centered ? 'text-center' : 'text-left'} reveal-title`}>
      <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-3 block">
        {eyebrow}
      </span>
      <h2 className="section-title text-3xl md:text-5xl font-serif font-bold text-purple-deep leading-tight">
        {title}
      </h2>
    </div>
  )
}

function Index() {
  const maisVendidos = [
    products.find(p => p.id === "buque-misto-sol-radiante")!,
    products.find(p => p.id === "buque-6-rosas")!,
    products.find(p => p.id === "buque-12-rosas")!,
    products.find(p => p.id === "buque-misto-girassol")!
  ];

  const buquesHome = [
    products.find(p => p.id === "buque-1-rosa")!,
    products.find(p => p.id === "buque-misto-encanto")!,
    products.find(p => p.id === "buque-8-rosas")!,
    products.find(p => p.id === "buque-15-rosas")!
  ];




  return (
    <main className="min-h-screen">
      {/* Removed AnnouncementBar */}
      <Navbar />
      <Hero />

      {/* Seção: Mais Vendidos */}
      <section className="py-24 bg-cream products-section" id="maisVendidos">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Destaques" title="Mais Vendidos" />
          
          <div className="products-carousel-wrapper">
            <div className="flex overflow-x-auto pb-10 gap-3 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible products-carousel reveal-stagger px-4 md:px-0">
              {maisVendidos.map((product) => (
                <div key={product.id} className="snap-center min-w-[78vw] md:min-w-[260px] lg:min-w-0">
                  <ProductCard {...product} />
                </div>
              ))}
              <div className="snap-center lg:hidden min-w-[78vw]">
                <MoreCard to="/buques" label="Ver todos os buquês" icon="🌹" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção: Buquês */}
      <section className="py-24 bg-cream products-section border-t border-gold-main/5">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Coleção" title="Buquês" />
          
          <div className="products-carousel-wrapper">
            <div className="flex overflow-x-auto pb-10 gap-3 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible products-carousel reveal-stagger px-4 md:px-0">
              {buquesHome.map((product) => (
                <div key={product.id} className="snap-center min-w-[78vw] md:min-w-[260px] lg:min-w-0">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

          </div>
          <div className="mt-16 flex justify-center reveal-up">
            <Link 
              to="/buques" 
              className="group relative overflow-hidden bg-white border-2 border-purple-main/20 px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 active:scale-95"
            >
              <div className="absolute inset-0 bg-lavender-ultra/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="font-serif italic text-xl text-purple-deep font-semibold">Descobrir coleção completa</span>
                <div className="w-10 h-10 rounded-full bg-purple-deep flex items-center justify-center text-white group-hover:bg-gold-main transition-colors duration-300">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção: Plantas */}
      <section className="py-24 bg-cream products-section border-t border-gold-main/5">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Doçura" title="Cestas & Chocolates" />
          
          <div className="products-carousel-wrapper">
            <div className="flex overflow-x-auto pb-10 gap-3 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible products-carousel reveal-stagger px-4 md:px-0">
              {products
                .filter(p => p.category === 'cestas-chocolates')
                .slice(0, 4)
                .map((p) => (
                  <div key={p.id} className="snap-center min-w-[78vw] md:min-w-[260px] lg:min-w-0">
                    <ProductCard {...p} />
                  </div>
                ))}
              <div className="snap-center lg:hidden min-w-[78vw]">
                <MoreCard to="/cestas-chocolates" label="Ver todas as cestas" icon="🎁" />
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center reveal-up">
            <Link 
              to="/cestas-chocolates" 
              className="group relative overflow-hidden bg-white border-2 border-purple-main/20 px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 active:scale-95"
            >
              <div className="absolute inset-0 bg-lavender-ultra/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="font-serif italic text-xl text-purple-deep font-semibold">Descobrir cestas e chocolates</span>
                <div className="w-10 h-10 rounded-full bg-purple-deep flex items-center justify-center text-white group-hover:bg-gold-main transition-colors duration-300">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção: Plantas — Estufa Romântica (teaser) */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-cream via-[#F5EFE6] to-[#EDE4D3]">
        <div aria-hidden="true" className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#A8C4A0]/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-gold-main/10 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-right">
              <span className="inline-flex items-center gap-2 text-gold-main font-sans font-bold uppercase tracking-[0.25em] text-xs mb-5">
                <Leaf size={14} /> Estufa TM Flores
              </span>
              <h2 className="font-serif text-4xl md:text-6xl italic font-light text-purple-deep leading-[1.05] mb-6">
                Plantas <span className="text-[#6B8E5A]">vivas</span>,<br />
                cuidadas <span className="text-gold-main">à mão</span>.
              </h2>
              <p className="font-script text-3xl md:text-4xl text-purple-main mb-6 leading-snug">
                "Onde o verde encontra o romântico."
              </p>
              <p className="text-lg text-text-medium leading-relaxed mb-10 max-w-xl">
                Nossa coleção de plantas é viva e muda toda semana. Em vez de uma vitrine fixa,
                conversa com a gente: contamos o que temos disponível agora — com foto, preço e cuidado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511918475136?text=Oii%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20as%20op%C3%A7%C3%B5es%20de%20plantas%20dispon%C3%ADveis!"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-whatsapp btn-magnetic inline-flex justify-center px-8 py-4"
                >
                  <WhatsAppIcon size={20} className="mr-2" />
                  Ver plantas disponíveis
                </a>
                <Link
                  to="/plantas"
                  className="inline-flex items-center justify-center gap-3 bg-white border-2 border-purple-main/20 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <span className="font-serif italic text-lg text-purple-deep font-semibold">Conhecer a estufa</span>
                  <ArrowRight size={18} className="text-purple-deep" />
                </Link>
              </div>
            </div>

            <div className="relative reveal-left">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/5]">
                <img
                  src={estufaHome}
                  alt="Plantas da estufa TM Flores"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-6 right-6 bg-gold-gradient p-3 px-5 rounded-full shadow-xl text-text-dark font-sans font-bold text-xs uppercase tracking-widest">
                  Estoque vivo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Conheça a Loja */}
      <section className="py-24 bg-cream-warm store-teaser-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center store-teaser-grid">
            <div className="flex flex-col items-start store-teaser-content reveal-right lg:order-2">
              <SectionHeader eyebrow="Nossa história" title="Ainda não conhece a nossa loja?" centered={false} />
              <p className="text-lg text-text-medium mb-8 leading-relaxed store-teaser-text">
                Nascemos em 2024 com um sonho: levar beleza, emoção e cuidado para a vida das pessoas. 
                Cada buquê que sai daqui carrega uma história, um sentimento, uma memória.
              </p>
              <p className="font-script text-4xl text-purple-main mb-12 store-teaser-script">
                "Florescendo histórias e fortalecendo laços."
              </p>
              <Link 
                to="/sobre" 
                className="btn btn-primary btn-magnetic bg-purple-deep text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-purple-main transition-all shadow-xl group flex items-center gap-3"
              >
                Conheça nossa história
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative group store-teaser-image reveal-left lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl store-teaser-img-wrapper relative">
                <img 
                  src="/products/images/interior-loja.jpg" 
                  alt="Interior da Loja" 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105 store-teaser-img"
                />

                <div className="absolute bottom-6 right-6 bg-gold-gradient p-3 px-5 rounded-full shadow-xl text-text-dark font-sans font-bold text-xs uppercase tracking-widest store-teaser-badge">
                  Fundada em 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Depoimentos Preview */}
      <section className="py-24 bg-cream testimonials-preview-section">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Quem já recebeu" title="O que dizem sobre a gente" />
          
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 testimonials-grid reveal-stagger pb-8 scrollbar-hide snap-x px-4 md:px-0">
            {[1, 2, 3].map((num) => (
              <div key={num} className="testimonial-card bg-white p-4 rounded-2xl shadow-card border border-gold-main/5 flex flex-col gap-6 min-w-[85vw] md:min-w-0 snap-center overflow-hidden">
                <img 
                  src={`/testimonials/images/depoimento-0${num}.png`} 
                  alt={`Depoimento ${num}`}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            ))}
          </div>

          
          <div className="mt-16 text-center">
            <Link to="/sobre" className="text-purple-main font-bold uppercase text-xs tracking-widest hover:text-gold-main transition-colors flex items-center justify-center gap-2 underline underline-offset-4">
              Ver todos os depoimentos
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal-title, .reveal-stagger, .reveal-up, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
          observer.observe(el);
        });
      `}} />
      <Footer />
    </main>
  )
}
```

---

## VALIDAÇÃO FINAL

Após colar tudo:
- `bun run build` deve passar sem erro.
- Rotas a checar no preview:
  - `/` → seção "Nossa história" SEM logo flutuante na foto; seção "Estufa TM Flores" presente com foto da estufa entre "Cestas & Chocolates" e "Conheça a Loja".
  - `/plantas` → landing institucional com 8 cards de plantas (foto + nome) e CTA WhatsApp.
  - `/plantas/qualquer-coisa` → deve dar 404 (rota dinâmica foi removida).

Commit: `feat(plantas): landing institucional + remove logo flutuante da home`
