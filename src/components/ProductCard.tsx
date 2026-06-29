import { ArrowLeft, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Link } from "@tanstack/react-router";
import { products as productsData } from "@/data/products";
import { useState } from "react";

function categoryToPath(category: string): string {
  const map: Record<string, string> = {
    buques: '/buques',
    'buques-mistos': '/buques',
    'buques-noiva': '/buques',
    plantas: '/plantas',
    'cestas-chocolates': '/cestas-chocolates',
  };
  return map[category] || '/buques';
}

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price?: string;
  priceLabel?: string;
  images: string[];
}

export function ProductCard({
  id,
  name,
  price,
  priceLabel,
  images,
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Simulando galeria se houver (por enquanto usamos a mesma imagem ou variações)
  // Usando a galeria de imagens do produto
  
  const minSwipeDistance = 50;

  const whatsappUrl = `https://wa.me/5511918475136?text=${encodeURIComponent(
    `Olá! Tenho interesse no ${name}. Poderia me ajudar?`
  )}`;

  const nextImage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && images.length > 1) nextImage();
    if (isRightSwipe && images.length > 1) prevImage();
  };

  return (
    <article className="product-card group flex flex-col cursor-pointer">
      <div 
        className="product-card-gallery relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Link 
          to={`${categoryToPath(productsData.find(p => p.id === id)?.category || 'buques')}/${id}` as any} 
          className="block w-full h-full"
        >
          <img
            src={images[currentImageIndex]}
            alt={name}
            className="product-card-image w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </Link>

        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 text-purple-deep flex items-center justify-center shadow-md transition-opacity"
            >
              <ArrowLeft size={16} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 text-purple-deep flex items-center justify-center shadow-md transition-opacity"
            >
              <ArrowRight size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImageIndex ? 'bg-gold-main w-3' : 'bg-white/60'}`} 
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="product-card-body flex flex-col flex-grow">
        <Link 
          to={`${categoryToPath(productsData.find(p => p.id === id)?.category || 'buques')}/${id}` as any} 
          className="block"
        >
          <h3 className="product-card-name font-serif text-lg font-semibold text-text-dark mb-1 group-hover:text-purple-main transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        
        <div className="mt-1 mb-3">
          {price && (
            <div className="product-card-price text-[17px] font-bold text-purple-deep font-sans">
              {priceLabel && (
                <span className="text-[13px] font-normal text-text-light mr-1">
                  {priceLabel}
                </span>
              )}
              {price}
            </div>
          )}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-2 product-card-actions">
          <Link
            to={`${categoryToPath(productsData.find(p => p.id === id)?.category || 'buques')}/${id}` as any}
            className="flex-1 justify-center text-[13px] py-2 px-4 border-[1.5px] border-purple-main text-purple-main rounded-full font-semibold flex items-center gap-1 hover:bg-purple-main hover:text-white transition-all text-center"
          >
            Ver produto<span className="hidden md:inline"> →</span>
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 justify-center text-[13px] py-2 px-4 bg-whatsapp text-white rounded-full font-semibold flex items-center gap-1 transition-all hover:scale-105 flex justify-center"
          >
            <WhatsAppIcon size={16} />
            <span className="product-card-wpp-text">WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function MoreCard({ to, label, icon }: { to: string; label: string; icon: string }) {
  return (
    <Link
      to={to}
      className="product-card-more flex flex-col items-center justify-center bg-lavender-ultra/30 border-2 border-dashed border-lavender rounded-2xl p-8 text-center group hover:bg-lavender-ultra/50 transition-all duration-300 w-[260px] h-full"
    >
      <span className="product-card-more-icon text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="font-serif text-xl font-bold text-purple-deep group-hover:text-purple-main">
        {label}
      </span>
      <span className="product-card-more-arrow mt-2 text-gold-main group-hover:translate-x-2 transition-transform duration-300">
        →
      </span>
    </Link>
  );
}
