import { RoutePath } from './Navbar';

interface FooterProps {
  onNavigate: (route: RoutePath) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-maroon text-[#F5EFE6] py-8 sm:py-10 px-6 text-center">
      <div className="max-w-[1160px] mx-auto flex flex-col items-center justify-center gap-1.5">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="font-serif-editorial text-lg sm:text-xl tracking-[0.16em] uppercase text-[#F5EFE6] nav-link-hover cursor-pointer"
        >
          MAGINHAWA
        </button>
        <p className="font-serif-editorial text-xs sm:text-sm tracking-[0.18em] text-[#E6DCCF]/90">
          Chic. Classy. Comfortable.
        </p>
      </div>
    </footer>
  );
}
