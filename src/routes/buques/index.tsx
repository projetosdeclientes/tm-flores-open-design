import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '@/data/products'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductCard } from '@/components/ProductCard'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/buques/')({
  component: BuquesPage,
})

function CategoryHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="category-hero bg-gradient-to-br from-cream to-lavender-ultra pt-40 pb-20 relative overflow-hidden text-center">
      <div className="container mx-auto px-6 relative z-10 category-hero-content opacity-100">
        <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-4 block">
          {eyebrow}
        </span>
        <h1 className="category-hero-title font-serif text-5xl md:text-8xl italic font-light text-purple-deep leading-tight mb-6">
          {title}
        </h1>
        <p className="category-hero-subtitle max-w-xl mx-auto text-lg text-text-medium leading-relaxed">
          {subtitle}
        </p>
      </div>
      
      <div className="category-hero-decoration absolute top-0 right-0 w-64 h-64 bg-purple-main/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
    </section>
  )
}

function ProductSection({ title, products, bgDark = false, initialCount = 8, paintReveal = false }: { title: string; products: any[]; bgDark?: boolean; initialCount?: number; paintReveal?: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(0, initialCount);

  if (products.length === 0) return null;

  return (
    <div className="mb-20 opacity-100">
      {paintReveal ? (
        <h2 className="font-serif text-3xl md:text-4xl mb-10 pb-4 border-b border-purple-main/10">
          <span className="paint-title-wrapper">
            <span className="paint-title italic" data-text={title}>{title}</span>
          </span>
        </h2>
      ) : (
        <h2 className="font-serif text-3xl md:text-4xl text-purple-deep mb-10 pb-4 border-b border-purple-main/10 italic">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-12">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      {products.length > initialCount && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => setShowAll(!showAll)}
            className={`group flex items-center gap-2 font-serif text-xl font-semibold transition-all duration-500 py-3 px-10 rounded-full shadow-lg hover:shadow-xl active:scale-95 ${
              bgDark 
                ? 'bg-white text-purple-deep border-2 border-white/90 hover:bg-purple-main hover:text-white hover:border-purple-main'
                : 'bg-purple-deep text-white border-2 border-purple-deep hover:bg-purple-main hover:border-purple-main'
            }`}
          >
            {showAll ? `Ver menos ${title}` : `Ver mais ${title}`}
          </button>
        </div>
      )}
    </div>
  );
}

function BuquesPage() {
  const buquesRosas = products.filter(p => p.category === 'buques');
  const buquesMistos = products.filter(p => p.category === 'buques-mistos');
  const buquesNoiva = products.filter(p => p.category === 'buques-noiva');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // IntersectionObserver: paint reveal só dispara quando título entra na viewport
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

    const wrappers = document.querySelectorAll('.paint-title-wrapper');
    wrappers.forEach(w => io.observe(w));

    return () => io.disconnect();
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <CategoryHero 
        eyebrow="Nossa coleção"
        title="Buquês"
        subtitle="Rosas frescas e composições exclusivas, selecionadas com cuidado para emocionar."
      />

      <section className="relative py-24 overflow-hidden buques-rosas-section" style={{
        backgroundImage: 'url(/products/images/buque-rosas-fundo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-white/45" />
        <div className="container mx-auto px-6 relative z-10">
          <ProductSection title="Buquês de Rosas" products={buquesRosas} paintReveal bgDark />
        </div>
      </section>

      <section className="py-24 bg-cream products-catalog-section relative z-10">
        <div className="container mx-auto px-6">
          <ProductSection title="Buquês Mistos" products={buquesMistos} />
        </div>
      </section>

      <section className="relative py-24 overflow-hidden buques-noiva-section" style={{
        backgroundImage: 'url(/products/images/buque-noiva-fundo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-6 relative z-10">
          <ProductSection title="Buquês de Noiva" products={buquesNoiva} paintReveal />
        </div>
      </section>

      <Footer />
    </main>
  )
}
