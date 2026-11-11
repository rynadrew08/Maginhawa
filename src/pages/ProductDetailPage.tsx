import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { RoutePath } from '../components/Navbar';
import { Product } from '../data/products';

interface ProductDetailPageProps {
  product: Product;
  onNavigate: (route: RoutePath) => void;
}

type AngleKey = 'main' | 'top' | 'side';

export function ProductDetailPage({ product, onNavigate }: ProductDetailPageProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [activeAngle, setActiveAngle] = useState<AngleKey>('main');
  const [isFading, setIsFading] = useState(false);

  // Reset selected color and angle when navigating to a different product
  useEffect(() => {
    setSelectedColorIndex(0);
    setActiveAngle('main');
  }, [product.id]);

  const currentColor = product.colors[selectedColorIndex] || product.colors[0];

  const handleColorSelect = (index: number) => {
    if (index === selectedColorIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setSelectedColorIndex(index);
      setActiveAngle('main');
      setIsFading(false);
    }, 150);
  };

  const handleAngleSelect = (angle: AngleKey) => {
    if (angle === activeAngle) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveAngle(angle);
      setIsFading(false);
    }, 120);
  };

  const angleSlots: { key: AngleKey; src: string; label: string }[] = [
    { key: 'main', src: currentColor.images.main, label: 'Three-quarter view' },
    { key: 'top', src: currentColor.images.top, label: 'Top view' },
    { key: 'side', src: currentColor.images.side, label: 'Side profile view' },
  ];

  const mainImageSrc = currentColor.images[activeAngle];
  const thumbnailSlots = angleSlots.filter((slot) => slot.key !== activeAngle);

  return (
    <div className="page-fade-in">
      {/* Product Line Heading Banner */}
      <section className="relative bg-maroon overflow-hidden">
        <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px]">
          <img
            src="/assets/aistudio/PRODUCT_LINE_HEADING_41ee023d.png"
            alt={`${product.modelLine} collection banner`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-[#4B1419]/45" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <h1 className="font-script text-5xl sm:text-7xl md:text-[86px] text-[#E6DCCF] drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] leading-none text-center heading-gradient-light">
              {product.bannerTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Single Product Display */}
      <section className="bg-parchment py-8 sm:py-12 md:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto">
          {/* Subtle Back to Products link */}
          <div className="mb-6">
            <button
              type="button"
              onClick={() => onNavigate('/products')}
              className="inline-flex items-center gap-2 font-nav text-[11px] sm:text-xs tracking-[0.14em] uppercase text-[#4B1419] hover:text-[#8E6A34] transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back to Products</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Main Image + 2 Clickable Thumbnails */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white p-4 sm:p-6 aspect-[4/3] flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  src={mainImageSrc}
                  alt={`${product.brandLine} ${product.modelLine} in ${currentColor.name}`}
                  referrerPolicy="no-referrer"
                  className={`max-w-full max-h-full object-contain transition-opacity duration-300 ease-in-out img-float-hover ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {thumbnailSlots.map((slot) => (
                  <button
                    key={slot.key}
                    type="button"
                    onClick={() => handleAngleSelect(slot.key)}
                    aria-label={`View ${slot.label}`}
                    className="bg-white p-3 sm:p-4 aspect-[4/3] flex items-center justify-center overflow-hidden cursor-pointer border border-transparent hover:border-[#4B1419]/30 transition-colors focus-visible:outline-2 focus-visible:outline-[#4B1419]"
                  >
                    <img
                      src={slot.src}
                      alt={`${product.modelLine} ${slot.label}`}
                      referrerPolicy="no-referrer"
                      className={`max-w-full max-h-full object-contain transition-opacity duration-300 ease-in-out img-float-hover ${
                        isFading ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Product Specifications & Color Selector */}
            <div className="lg:col-span-5 text-[#231A18] pt-1">
              <div className="text-center lg:text-left mb-6">
                <p className="font-serif-editorial text-4xl sm:text-5xl leading-none text-[#231A18] heading-gradient-dark inline-block">
                  {product.brandLine}
                </p>
                <h2 className="font-serif-editorial italic text-2xl sm:text-3xl text-[#231A18] mt-1">
                  {product.modelLine}
                </h2>
              </div>

              <div className="space-y-5 font-serif-editorial">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2">Description</h3>
                  <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
                    {product.description.map((line, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span aria-hidden="true">•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-1.5">Material</h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {product.material}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-1">Price</h3>
                  <p className="text-base sm:text-lg font-medium tabular-nums pl-4">
                    {product.price}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <h3 className="font-bold text-lg sm:text-xl">Color</h3>
                    <span className="text-sm italic text-[#4B1419]">
                      {currentColor.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 pl-2">
                    {product.colors.map((color, idx) => {
                      const isSelected = idx === selectedColorIndex;
                      return (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => handleColorSelect(idx)}
                          aria-label={`Select color ${color.name}`}
                          aria-pressed={isSelected}
                          title={color.name}
                          style={{ backgroundColor: color.hex }}
                          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? 'ring-2 ring-offset-2 ring-offset-[#E3D6C3] ring-[#4B1419] scale-105'
                              : 'ring-1 ring-black/20 hover:ring-[#4B1419]/60'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
