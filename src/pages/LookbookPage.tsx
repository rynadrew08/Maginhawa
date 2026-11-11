import { CrossfadeImage } from '../components/CrossfadeImage';
import { RoutePath } from '../components/Navbar';
import {
  LOOKBOOK_BOOTS_FEATURE,
  LOOKBOOK_BOOTS_PAIR,
  LOOKBOOK_CASUAL_COLLAGE,
  LOOKBOOK_EFFORTLESS_COLLAGE,
  LOOKBOOK_HERO_IMAGES,
  LOOKBOOK_LOAFER_FEATURE,
  LOOKBOOK_LOAFER_PAIR,
  LOOKBOOK_LUXURY_FRAMES,
  LOOKBOOK_MULE_FEATURE,
  LOOKBOOK_RUNWAY_STRIP,
  LOOKBOOK_TABI_FEATURE,
  LOOKBOOK_TABI_PAIR,
  LOOKBOOK_TRIPTYCH_1,
  LOOKBOOK_TRIPTYCH_2,
  LOOKBOOK_TRIPTYCH_3,
} from '../data/lookbook';

interface LookbookPageProps {
  onNavigate: (route: RoutePath) => void;
}

export function LookbookPage({ onNavigate }: LookbookPageProps) {
  const goToProduct = (productId: string) => {
    onNavigate(`/products/${productId}` as RoutePath);
  };

  return (
    <div className="page-fade-in">
      {/* 1. Hero — Tradition gives us our foundation */}
      <section className="relative bg-maroon overflow-hidden">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[460px]">
          <CrossfadeImage
            images={LOOKBOOK_HERO_IMAGES}
            alt="Maginhawa Footwear Collection"
            intervalMs={3000}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover object-center opacity-75"
            onClick={() => onNavigate('/products')}
            ariaLabel="Browse Maginhawa Products"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-serif-editorial text-2xl sm:text-4xl md:text-[42px] text-[#F5EFE6] tracking-wide mb-2">
              Tradition gives us our foundation
            </h1>
            <p className="font-serif-editorial italic text-base sm:text-xl text-[#E6DCCF]">
              Innovation gives us a reason to keep moving forward
            </p>
          </div>
        </div>
      </section>

      {/* 2. Triptych — Style should never come at the expense of comfort */}
      <section className="bg-maroon text-[#F5EFE6] py-10 sm:py-14 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {LOOKBOOK_TRIPTYCH_1.map((frame, i) => (
              <CrossfadeImage
                key={i}
                images={frame.images}
                alt={frame.alt}
                offsetMs={frame.offsetMs}
                className="w-full aspect-[3/4] bg-white"
                onClick={() => goToProduct(frame.productId)}
              />
            ))}
          </div>
          <p className="text-center font-serif-editorial text-sm sm:text-base tracking-wide text-[#E6DCCF] mt-6">
            Style should never come at the expense of comfort
          </p>
        </div>
      </section>

      {/* 3. Editorial Spread — The best kind of luxury... */}
      <section className="bg-parchment py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto">
          <h2 className="font-serif-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#231A18] mb-6 max-w-xl heading-gradient-dark inline-block">
            The best kind of luxury is the kind you can live in every day...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            <div className="md:col-span-5">
              <CrossfadeImage
                images={LOOKBOOK_LUXURY_FRAMES[0].images}
                alt={LOOKBOOK_LUXURY_FRAMES[0].alt}
                offsetMs={LOOKBOOK_LUXURY_FRAMES[0].offsetMs}
                className="w-full aspect-[3/4]"
                onClick={() => goToProduct(LOOKBOOK_LUXURY_FRAMES[0].productId)}
              />
            </div>
            <div className="md:col-span-7">
              <CrossfadeImage
                images={LOOKBOOK_LUXURY_FRAMES[1].images}
                alt={LOOKBOOK_LUXURY_FRAMES[1].alt}
                offsetMs={LOOKBOOK_LUXURY_FRAMES[1].offsetMs}
                className="w-full aspect-[4/3]"
                onClick={() => goToProduct(LOOKBOOK_LUXURY_FRAMES[1].productId)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Asymmetric Collage — Not every occasion calls for something formal */}
      <section className="bg-maroon text-[#F5EFE6] py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            <CrossfadeImage
              images={LOOKBOOK_CASUAL_COLLAGE[0].images}
              alt={LOOKBOOK_CASUAL_COLLAGE[0].alt}
              offsetMs={LOOKBOOK_CASUAL_COLLAGE[0].offsetMs}
              className="w-full aspect-[4/3]"
              onClick={() => goToProduct(LOOKBOOK_CASUAL_COLLAGE[0].productId)}
            />
            <p className="font-serif-editorial italic text-sm sm:text-base text-[#E6DCCF] leading-relaxed">
              Not every occasion calls for something formal.
              <br />
              But every occasion deserves a little thought.
            </p>
          </div>
          <div className="md:col-span-4">
            <CrossfadeImage
              images={LOOKBOOK_CASUAL_COLLAGE[1].images}
              alt={LOOKBOOK_CASUAL_COLLAGE[1].alt}
              offsetMs={LOOKBOOK_CASUAL_COLLAGE[1].offsetMs}
              className="w-full aspect-[3/4]"
              onClick={() => goToProduct(LOOKBOOK_CASUAL_COLLAGE[1].productId)}
            />
          </div>
          <div className="md:col-span-4">
            <CrossfadeImage
              images={LOOKBOOK_CASUAL_COLLAGE[2].images}
              alt={LOOKBOOK_CASUAL_COLLAGE[2].alt}
              offsetMs={LOOKBOOK_CASUAL_COLLAGE[2].offsetMs}
              className="w-full aspect-[3/4]"
              onClick={() => goToProduct(LOOKBOOK_CASUAL_COLLAGE[2].productId)}
            />
          </div>
        </div>
      </section>

      {/* 5. Collage — Effortless style is not about doing less */}
      <section className="bg-parchment py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-2 md:grid-cols-12 gap-4 sm:gap-5 items-center">
          <div className="col-span-1 md:col-span-3">
            <CrossfadeImage
              images={LOOKBOOK_EFFORTLESS_COLLAGE[0].images}
              alt={LOOKBOOK_EFFORTLESS_COLLAGE[0].alt}
              offsetMs={LOOKBOOK_EFFORTLESS_COLLAGE[0].offsetMs}
              className="w-full aspect-square"
              onClick={() => goToProduct(LOOKBOOK_EFFORTLESS_COLLAGE[0].productId)}
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <CrossfadeImage
              images={LOOKBOOK_EFFORTLESS_COLLAGE[1].images}
              alt={LOOKBOOK_EFFORTLESS_COLLAGE[1].alt}
              offsetMs={LOOKBOOK_EFFORTLESS_COLLAGE[1].offsetMs}
              className="w-full aspect-square"
              onClick={() => goToProduct(LOOKBOOK_EFFORTLESS_COLLAGE[1].productId)}
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <CrossfadeImage
              images={LOOKBOOK_EFFORTLESS_COLLAGE[2].images}
              alt={LOOKBOOK_EFFORTLESS_COLLAGE[2].alt}
              offsetMs={LOOKBOOK_EFFORTLESS_COLLAGE[2].offsetMs}
              className="w-full aspect-[3/4]"
              onClick={() => goToProduct(LOOKBOOK_EFFORTLESS_COLLAGE[2].productId)}
            />
          </div>
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            <CrossfadeImage
              images={LOOKBOOK_EFFORTLESS_COLLAGE[3].images}
              alt={LOOKBOOK_EFFORTLESS_COLLAGE[3].alt}
              offsetMs={LOOKBOOK_EFFORTLESS_COLLAGE[3].offsetMs}
              className="w-full aspect-square"
              onClick={() => goToProduct(LOOKBOOK_EFFORTLESS_COLLAGE[3].productId)}
            />
            <p className="font-serif-editorial italic text-sm sm:text-base text-[#231A18] text-right leading-snug">
              Effortless style is not about doing less.
              <br />
              It is about choosing better.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Typographic Banner — LEATHER MULE */}
      <section className="bg-maroon text-[#F5EFE6] py-10 sm:py-14 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 overflow-hidden select-none">
            <div className="font-nav font-bold text-lg sm:text-2xl tracking-[0.12em] leading-[1.35] text-[#F5EFE6]/90 uppercase space-y-1">
              <p className="whitespace-nowrap">LEATHER MULE LEATHER MULE</p>
              <p className="whitespace-nowrap">LEATHER MULE LEATHER MULE</p>
              <p className="whitespace-nowrap">LEATHER MULE LEATHER MULE</p>
              <p className="whitespace-nowrap">LEATHER MULE LEATHER MULE</p>
              <p className="whitespace-nowrap">LEATHER MULE LEATHER MULE</p>
            </div>
          </div>
          <div className="md:col-span-7">
            <CrossfadeImage
              images={LOOKBOOK_MULE_FEATURE.images}
              alt={LOOKBOOK_MULE_FEATURE.alt}
              className="w-full aspect-[4/3]"
              onClick={() => goToProduct(LOOKBOOK_MULE_FEATURE.productId)}
            />
          </div>
        </div>
      </section>

      {/* 7. Triptych — Good style should feel as good as it looks */}
      <section className="bg-parchment py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto">
          <p className="font-serif-editorial italic text-lg sm:text-xl text-[#231A18] mb-5">
            Good style should feel as good as it looks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {LOOKBOOK_TRIPTYCH_2.map((frame, i) => (
              <CrossfadeImage
                key={i}
                images={frame.images}
                alt={frame.alt}
                offsetMs={frame.offsetMs}
                className="w-full aspect-[4/3]"
                onClick={() => goToProduct(frame.productId)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. 5-Column Runway Strip */}
      <section className="bg-maroon py-10 sm:py-14 px-5 sm:px-8">
        <div className="max-w-[1160px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {LOOKBOOK_RUNWAY_STRIP.map((frame, i) => (
            <CrossfadeImage
              key={i}
              images={frame.images}
              alt={frame.alt}
              offsetMs={frame.offsetMs}
              className="w-full aspect-[3/4] bg-white"
              onClick={() => goToProduct(frame.productId)}
            />
          ))}
        </div>
      </section>

      {/* 9. Triptych — The art of dressing well starts from the ground up */}
      <section className="bg-parchment py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {LOOKBOOK_TRIPTYCH_3.map((frame, i) => (
              <CrossfadeImage
                key={i}
                images={frame.images}
                alt={frame.alt}
                offsetMs={frame.offsetMs}
                className="w-full aspect-[3/4]"
                onClick={() => goToProduct(frame.productId)}
              />
            ))}
          </div>
          <p className="text-right font-serif-editorial italic text-base sm:text-lg text-[#231A18] mt-5">
            The art of dressing well starts from the ground up.
          </p>
        </div>
      </section>

      {/* 10. Typographic Banner — LOAFERS */}
      <section className="bg-maroon text-[#F5EFE6] py-10 sm:py-14 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6">
            <CrossfadeImage
              images={LOOKBOOK_LOAFER_FEATURE.images}
              alt={LOOKBOOK_LOAFER_FEATURE.alt}
              className="w-full aspect-[4/3] bg-white"
              onClick={() => goToProduct(LOOKBOOK_LOAFER_FEATURE.productId)}
            />
          </div>
          <div className="md:col-span-6 overflow-hidden select-none">
            <div className="font-nav font-bold text-lg sm:text-2xl tracking-[0.12em] leading-[1.35] text-[#F5EFE6]/90 uppercase space-y-1">
              <p className="whitespace-nowrap">LOAFERS LOAFERS LOAFERS</p>
              <p className="whitespace-nowrap">LOAFERS LOAFERS LOAFERS</p>
              <p className="whitespace-nowrap">LOAFERS LOAFERS LOAFERS</p>
              <p className="whitespace-nowrap">LOAFERS LOAFERS LOAFERS</p>
              <p className="whitespace-nowrap">LOAFERS LOAFERS LOAFERS</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Rooted in tradition. Designed for today. */}
      <section className="bg-parchment py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto space-y-6 text-center">
          <CrossfadeImage
            images={LOOKBOOK_LOAFER_PAIR[0].images}
            alt={LOOKBOOK_LOAFER_PAIR[0].alt}
            offsetMs={LOOKBOOK_LOAFER_PAIR[0].offsetMs}
            className="w-full max-w-[780px] mx-auto bg-white"
            imgClassName="w-full h-auto object-contain"
            onClick={() => goToProduct(LOOKBOOK_LOAFER_PAIR[0].productId)}
          />
          <p className="font-serif-editorial italic text-xl sm:text-2xl text-[#231A18]">
            Rooted in tradition. Designed for today.
          </p>
          <CrossfadeImage
            images={LOOKBOOK_LOAFER_PAIR[1].images}
            alt={LOOKBOOK_LOAFER_PAIR[1].alt}
            offsetMs={LOOKBOOK_LOAFER_PAIR[1].offsetMs}
            className="w-full max-w-[780px] mx-auto bg-white"
            imgClassName="w-full h-auto object-contain"
            onClick={() => goToProduct(LOOKBOOK_LOAFER_PAIR[1].productId)}
          />
        </div>
      </section>

      {/* 12. Typographic Banner — BOOTS */}
      <section className="bg-maroon text-[#F5EFE6] py-10 sm:py-14 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 overflow-hidden select-none">
            <div className="font-nav font-bold text-lg sm:text-2xl tracking-[0.12em] leading-[1.35] text-[#F5EFE6]/90 uppercase space-y-1">
              <p className="whitespace-nowrap">BOOTS BOOTS BOOTS BOOTS</p>
              <p className="whitespace-nowrap">BOOTS BOOTS BOOTS BOOTS</p>
              <p className="whitespace-nowrap">BOOTS BOOTS BOOTS BOOTS</p>
              <p className="whitespace-nowrap">BOOTS BOOTS BOOTS BOOTS</p>
              <p className="whitespace-nowrap">BOOTS BOOTS BOOTS BOOTS</p>
            </div>
          </div>
          <div className="md:col-span-7">
            <CrossfadeImage
              images={LOOKBOOK_BOOTS_FEATURE.images}
              alt={LOOKBOOK_BOOTS_FEATURE.alt}
              className="w-full aspect-[4/3]"
              onClick={() => goToProduct(LOOKBOOK_BOOTS_FEATURE.productId)}
            />
          </div>
        </div>
      </section>

      {/* 13. Not overdressed. Never underdressed. */}
      <section className="bg-parchment py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 text-center md:text-left">
            <p className="font-serif-editorial italic text-xl sm:text-2xl text-[#231A18] leading-snug">
              Not overdressed.
              <br />
              Never underdressed.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LOOKBOOK_BOOTS_PAIR.map((frame, i) => (
              <CrossfadeImage
                key={i}
                images={frame.images}
                alt={frame.alt}
                offsetMs={frame.offsetMs}
                className="w-full aspect-[4/3]"
                onClick={() => goToProduct(frame.productId)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 14. Typographic Banner — TABIS */}
      <section className="bg-maroon text-[#F5EFE6] py-10 sm:py-14 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6">
            <CrossfadeImage
              images={LOOKBOOK_TABI_FEATURE.images}
              alt={LOOKBOOK_TABI_FEATURE.alt}
              className="w-full aspect-[4/3]"
              onClick={() => goToProduct(LOOKBOOK_TABI_FEATURE.productId)}
            />
          </div>
          <div className="md:col-span-6 overflow-hidden select-none">
            <div className="font-nav font-bold text-lg sm:text-2xl tracking-[0.12em] leading-[1.35] text-[#F5EFE6]/90 uppercase space-y-1">
              <p className="whitespace-nowrap">TABIS TABIS TABIS TABIS</p>
              <p className="whitespace-nowrap">TABIS TABIS TABIS TABIS</p>
              <p className="whitespace-nowrap">TABIS TABIS TABIS TABIS</p>
              <p className="whitespace-nowrap">TABIS TABIS TABIS TABIS</p>
              <p className="whitespace-nowrap">TABIS TABIS TABIS TABIS</p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Made to be worn, not just admired. */}
      <section className="bg-parchment py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LOOKBOOK_TABI_PAIR.map((frame, i) => (
              <CrossfadeImage
                key={i}
                images={frame.images}
                alt={frame.alt}
                offsetMs={frame.offsetMs}
                className="w-full aspect-[3/4]"
                onClick={() => goToProduct(frame.productId)}
              />
            ))}
          </div>
          <div className="md:col-span-4 text-center md:text-right">
            <p className="font-serif-editorial italic text-xl sm:text-2xl text-[#231A18] leading-snug">
              Made to be worn,
              <br />
              not just admired.
            </p>
          </div>
        </div>
      </section>

      {/* 16. Closing Spread — and more collections coming soon... */}
      <section className="bg-parchment pt-4 pb-0">
        <p className="text-center font-serif-editorial italic text-sm sm:text-base text-[#231A18] mb-4">
          and more collections coming soon....
        </p>
        <div className="max-w-[1160px] mx-auto px-4">
          <button
            type="button"
            onClick={() => onNavigate('/products')}
            aria-label="Explore all Maginhawa products"
            className="block w-full cursor-pointer"
          >
            <img
              src="/assets/aistudio/LOOKBOOK_16_db9f3096.png"
              alt="Maginhawa footwear collection pile"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover img-float-hover"
            />
          </button>
        </div>
      </section>
    </div>
  );
}
