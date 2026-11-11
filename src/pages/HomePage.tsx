import { RoutePath } from '../components/Navbar';

interface HomePageProps {
  onNavigate: (route: RoutePath) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="page-fade-in">
      {/* Section 1: Hero Banner — Marikina Leather */}
      <section className="relative bg-maroon overflow-hidden">
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px]">
          <img
            src="/assets/aistudio/HOME_PAGE_4.2_e1f44cb7.png"
            alt="Marikina Leather Mule"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4B1419]/65 via-[#4B1419]/30 to-[#4B1419]/80" />
          <div className="absolute inset-x-0 bottom-5 sm:bottom-8 px-6 text-center">
            <h1 className="font-script text-5xl sm:text-7xl md:text-[84px] text-[#E6DCCF] drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] leading-none select-none heading-gradient-light">
              Marikina Leather
            </h1>
          </div>
        </div>
      </section>

      {/* Section 2: Tailored to be chic */}
      <section className="bg-parchment py-12 sm:py-16 md:py-20 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-6">
            <button
              type="button"
              onClick={() => onNavigate('/lookbook')}
              aria-label="Explore Maginhawa Lookbook"
              className="block w-full cursor-pointer text-left"
            >
              <img
                src="/assets/aistudio/HOME_PAGE_2_d2e9548a.png"
                alt="Maginhawa footwear collection collage"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover img-float-hover shadow-sm"
              />
            </button>
          </div>
          <div className="md:col-span-6 text-[#231A18]">
            <h2 className="font-display-serif italic text-3xl sm:text-4xl md:text-[42px] mb-5 leading-tight heading-gradient-dark inline-block">
              Tailored to be chic
            </h2>
            <p className="font-serif-editorial text-base sm:text-lg md:text-[19px] leading-relaxed mb-5">
              Good shoes. Great impressions. Inspired by Marikina&apos;s rich shoemaking
              tradition, we bring you timeless formal footwear that combines Filipino
              craftsmanship with modern style.
            </p>
            <p className="font-serif-editorial text-base sm:text-lg md:text-[19px] leading-relaxed">
              Because every gentleman deserves to step out with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Maginhawa Brand Story */}
      <section className="bg-maroon text-[#F5EFE6] py-12 sm:py-16 md:py-20 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-6">
            <h2 className="font-display-serif italic text-3xl sm:text-4xl md:text-[42px] mb-4 heading-gradient-light inline-block">
              Maginhawa
            </h2>
            <p className="font-serif-editorial italic text-sm sm:text-base text-[#E6DCCF]/90 mb-5 leading-relaxed">
              We aspire to redefine everyday footwear through Filipino craftsmanship and
              timeless sophistication.
            </p>
            <p className="font-serif-editorial text-base sm:text-lg leading-relaxed text-[#F5EFE6]/95">
              where modern gentlemen experience the perfect balance of style, comfort, and
              versatility through thoughtfully crafted footwear. Rooted in Marikina&apos;s
              rich shoemaking heritage, we bring locally made quality and contemporary
              design together, making every step a reflection of confidence and effortless
              elegance.
            </p>
          </div>
          <div className="md:col-span-6">
            <button
              type="button"
              onClick={() => onNavigate('/products/p3')}
              aria-label="View Soft Leather Loafer"
              className="block w-full bg-white p-3 sm:p-4 cursor-pointer"
            >
              <img
                src="/assets/aistudio/HOME_PAGE_3_14c45ea0.png"
                alt="Gentleman wearing Maginhawa leather loafers"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover img-float-hover"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Footwear Showcase Grid */}
      <section className="bg-parchment py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          <div className="md:col-span-6">
            <button
              type="button"
              onClick={() => onNavigate('/products/p1')}
              aria-label="View Marikina Leather Mule"
              className="block w-full h-full cursor-pointer"
            >
              <img
                src="/assets/aistudio/HOME_PAGE_4.1_d3aa477b.png"
                alt="Marikina Leather Mule trio in black, burgundy, and espresso"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover img-float-hover"
              />
            </button>
          </div>
          <div className="md:col-span-6 grid grid-rows-2 gap-4 sm:gap-5">
            <button
              type="button"
              onClick={() => onNavigate('/products/p1')}
              aria-label="View Marikina Leather Mule in Burgundy"
              className="block w-full h-full cursor-pointer"
            >
              <img
                src="/assets/aistudio/HOME_PAGE_4.2_e1f44cb7.png"
                alt="Burgundy Marikina Leather Mule profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover img-float-hover"
              />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/products/p4')}
              aria-label="View Chelsea Boots"
              className="block w-full h-full cursor-pointer"
            >
              <img
                src="/assets/aistudio/HOME_PAGE_4.3_695a548f.png"
                alt="Cognac Tan Chelsea Boot profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover img-float-hover"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: "More Than Just a Pair of Shoes." */}
      <section className="bg-maroon text-[#F5EFE6] py-12 sm:py-16 md:py-20 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5">
            <button
              type="button"
              onClick={() => onNavigate('/products/p4')}
              aria-label="View Marikina Chelsea Boots"
              className="block w-full bg-white p-3 sm:p-4 cursor-pointer"
            >
              <img
                src="/assets/aistudio/HOME_PAGE_5_8106e2b9.png"
                alt="Maginhawa Chelsea Boots in motion"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover img-float-hover"
              />
            </button>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display-serif italic text-3xl sm:text-4xl md:text-[42px] mb-5 leading-tight heading-gradient-light inline-block">
              “More Than Just a Pair of Shoes.”
            </h2>
            <p className="font-serif-editorial text-base sm:text-lg leading-relaxed mb-6 text-[#F5EFE6]/95">
              Good footwear goes beyond appearance. At Maginhawa, we bring together
              thoughtful design, everyday comfort, and Filipino craftsmanship to create
              footwear that complements the modern gentleman&apos;s lifestyle.
            </p>
            <ul className="space-y-2.5 font-serif-editorial text-sm sm:text-base text-[#F5EFE6]/90">
              <li>
                • <span className="italic font-semibold">Chic Design</span> – Timeless
                silhouettes with a contemporary touch.
              </li>
              <li>
                • <span className="italic font-semibold">Classy Craftsmanship</span> –
                Locally made footwear inspired by Marikina&apos;s shoemaking heritage.
              </li>
              <li>
                • <span className="italic font-semibold">Everyday Comfort</span> –
                Versatile designs made to keep up with your daily routine.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Macro Leather Strip */}
      <section className="bg-parchment py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <button
            type="button"
            onClick={() => onNavigate('/products/p5')}
            aria-label="View Tabi Loafers in Burgundy"
            className="block w-full cursor-pointer"
          >
            <img
              src="/assets/aistudio/HOME_PAGE_6.1_e74b821c.png"
              alt="Burgundy crocodile-embossed leather detail"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/3] object-cover img-float-hover"
            />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/products/p2')}
            aria-label="View Pleated Penny Mule"
            className="block w-full cursor-pointer"
          >
            <img
              src="/assets/aistudio/HOME_PAGE_6.2_1b82196d.png"
              alt="Black crocodile-embossed leather detail"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/3] object-cover img-float-hover"
            />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/products/p5')}
            aria-label="View Tabi Loafers"
            className="block w-full cursor-pointer"
          >
            <img
              src="/assets/aistudio/HOME_PAGE_6.3_f2f4d7ae.png"
              alt="Brown crocodile-embossed leather detail"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/3] object-cover img-float-hover"
            />
          </button>
        </div>
      </section>
    </div>
  );
}
