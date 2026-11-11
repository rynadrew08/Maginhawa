import { RoutePath } from '../components/Navbar';
import { PRODUCTS, Product } from '../data/products';

interface ProductsPageProps {
  onNavigate: (route: RoutePath) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  // Top row: P1 (Marikina Mule), P2 (Pleated Penny Mule), P4 (Marikina Boots)
  // Bottom row: P3 (Soft Daily Loafers), P5 (Crocodile Tabi Loafers)
  const topRowIds = ['p1', 'p2', 'p4'];
  const bottomRowIds = ['p3', 'p5'];

  const topRow = topRowIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const bottomRow = bottomRowIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const renderProductCard = (product: Product) => (
    <button
      key={product.id}
      type="button"
      onClick={() => onNavigate(`/products/${product.id}` as RoutePath)}
      className="group flex flex-col items-center text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B1419]"
    >
      <div className="w-full aspect-[4/3] flex items-center justify-center p-2 img-float-hover">
        <img
          src={product.catalogImage}
          alt={product.catalogTitle}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <span className="mt-2 font-serif-editorial italic text-lg sm:text-xl text-[#231A18] transition-colors duration-200 group-hover:text-[#4B1419] group-hover:underline underline-offset-4">
        {product.catalogTitle}
      </span>
    </button>
  );

  return (
    <div className="page-fade-in">
      {/* Hero Banner */}
      <section className="relative bg-maroon overflow-hidden">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[460px]">
          <img
            src="/assets/aistudio/PRODUCTS_1_1016cef1.png"
            alt="Maginhawa Footwear Lineup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4B1419]/65 via-[#4B1419]/30 to-[#4B1419]/75" />
          <div className="absolute inset-0 flex flex-col justify-between py-8 sm:py-12 px-6 sm:px-12 max-w-[1160px] mx-auto">
            <h1 className="font-script text-5xl sm:text-7xl md:text-[82px] text-[#E6DCCF] drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] leading-none text-left heading-gradient-light">
              Step into Relief
            </h1>
            <p className="font-script text-4xl sm:text-6xl md:text-[72px] text-[#E6DCCF] drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] leading-none text-right heading-gradient-light">
              Step into Maginhawa
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="bg-parchment py-12 sm:py-16 md:py-20 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto">
          <h2 className="font-script text-5xl sm:text-6xl md:text-[68px] text-[#4B1419] text-center mb-10 sm:mb-14 leading-tight heading-gradient-dark">
            Featured Products
          </h2>

          {/* Top Row: 3 Products */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
            {topRow.map(renderProductCard)}
          </div>

          {/* Bottom Row: 2 Centered Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-[680px] mx-auto">
            {bottomRow.map(renderProductCard)}
          </div>
        </div>
      </section>
    </div>
  );
}
