import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar, RoutePath } from './components/Navbar';
import { getProductById } from './data/products';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { LookbookPage } from './pages/LookbookPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductsPage } from './pages/ProductsPage';

const VALID_ROUTES: RoutePath[] = [
  '/',
  '/lookbook',
  '/products',
  '/products/p1',
  '/products/p2',
  '/products/p3',
  '/products/p4',
  '/products/p5',
  '/about',
];

function parseHashToRoute(): RoutePath {
  if (typeof window === 'undefined') return '/';
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const normalized = raw.toLowerCase() as RoutePath;
  return VALID_ROUTES.includes(normalized) ? normalized : '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(() =>
    parseHashToRoute(),
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHashToRoute();
      setCurrentRoute(next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (route: RoutePath) => {
    if (route === currentRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsTransitioning(true);
    setTimeout(() => {
      window.location.hash = route === '/' ? '' : `#${route}`;
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      setIsTransitioning(false);
    }, 150);
  };

  const renderPage = () => {
    if (currentRoute === '/') {
      return <HomePage onNavigate={navigate} />;
    }
    if (currentRoute === '/lookbook') {
      return <LookbookPage onNavigate={navigate} />;
    }
    if (currentRoute === '/products') {
      return <ProductsPage onNavigate={navigate} />;
    }
    if (currentRoute === '/about') {
      return <AboutPage />;
    }
    if (currentRoute.startsWith('/products/')) {
      const productId = currentRoute.replace('/products/', '');
      const product = getProductById(productId);
      if (product) {
        return <ProductDetailPage product={product} onNavigate={navigate} />;
      }
      return <ProductsPage onNavigate={navigate} />;
    }
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-maroon">
      <Navbar currentRoute={currentRoute} onNavigate={navigate} />
      <main
        className={`flex-1 transition-opacity duration-200 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
