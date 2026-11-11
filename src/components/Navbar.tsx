import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type RoutePath =
  | '/'
  | '/lookbook'
  | '/products'
  | '/products/p1'
  | '/products/p2'
  | '/products/p3'
  | '/products/p4'
  | '/products/p5'
  | '/about';

interface NavbarProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
}

export function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isProductsActive =
    currentRoute === '/products' || currentRoute.startsWith('/products/');

  const handleLinkClick = (route: RoutePath) => {
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-50 bg-maroon text-[#F5EFE6] border-b border-white/10">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        <button
          type="button"
          onClick={() => handleLinkClick('/')}
          className="font-serif-editorial text-xl sm:text-2xl tracking-[0.14em] uppercase font-normal text-[#F5EFE6] nav-link-hover cursor-pointer whitespace-nowrap shrink-0 text-left"
        >
          MAGINHAWA
        </button>

        <nav className="hidden sm:flex items-center gap-8 md:gap-11 font-nav text-[11px] md:text-xs tracking-[0.16em] uppercase font-semibold">
          <button
            type="button"
            onClick={() => handleLinkClick('/lookbook')}
            className={`nav-link-hover cursor-pointer whitespace-nowrap shrink-0 pb-1 border-b transition-colors ${
              currentRoute === '/lookbook'
                ? 'border-[#E2C799] text-[#E2C799]'
                : 'border-transparent text-[#F5EFE6]'
            }`}
          >
            LOOKBOOK
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('/products')}
            className={`nav-link-hover cursor-pointer whitespace-nowrap shrink-0 pb-1 border-b transition-colors ${
              isProductsActive
                ? 'border-[#E2C799] text-[#E2C799]'
                : 'border-transparent text-[#F5EFE6]'
            }`}
          >
            PRODUCTS
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('/about')}
            className={`nav-link-hover cursor-pointer whitespace-nowrap shrink-0 pb-1 border-b transition-colors ${
              currentRoute === '/about'
                ? 'border-[#E2C799] text-[#E2C799]'
                : 'border-transparent text-[#F5EFE6]'
            }`}
          >
            ABOUT US
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="sm:hidden p-2 text-[#F5EFE6] nav-link-hover cursor-pointer"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="sm:hidden bg-maroon-deep border-t border-white/10 px-6 py-4 flex flex-col gap-3 font-nav text-xs tracking-[0.16em] uppercase">
          <button
            type="button"
            onClick={() => handleLinkClick('/lookbook')}
            className={`text-left py-2 nav-link-hover cursor-pointer ${
              currentRoute === '/lookbook' ? 'text-[#E2C799]' : 'text-[#F5EFE6]'
            }`}
          >
            LOOKBOOK
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('/products')}
            className={`text-left py-2 nav-link-hover cursor-pointer ${
              isProductsActive ? 'text-[#E2C799]' : 'text-[#F5EFE6]'
            }`}
          >
            PRODUCTS
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('/about')}
            className={`text-left py-2 nav-link-hover cursor-pointer ${
              currentRoute === '/about' ? 'text-[#E2C799]' : 'text-[#F5EFE6]'
            }`}
          >
            ABOUT US
          </button>
        </div>
      )}
    </header>
  );
}
