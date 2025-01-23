import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state: cartState } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-[#1d1d1f]'}`}>
        <div className="max-w-[980px] mx-auto px-4">
          <div className="flex items-center justify-between h-12 md:h-14">
            <button onClick={() => setIsNavOpen(true)} className="md:hidden">
              <Menu className="w-6 h-6 text-white" />
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white">
                <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" fill="currentColor"/>
                </svg>
              </Link>
              <Link to="/store" className="text-white/80 hover:text-white text-xs">Store</Link>
              <Link to="/mac" className="text-white/80 hover:text-white text-xs">Mac</Link>
              <Link to="/ipad" className="text-white/80 hover:text-white text-xs">iPad</Link>
              <Link to="/iphone" className="text-white/80 hover:text-white text-xs">iPhone</Link>
              <Link to="/watch" className="text-white/80 hover:text-white text-xs">Watch</Link>
              <Link to="/airpods" className="text-white/80 hover:text-white text-xs">AirPods</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-white/80 hover:text-white cursor-pointer" />
              <Link to="/cart" className="relative">
                <ShoppingBag className="w-5 h-5 text-white/80 hover:text-white" />
                {cartState.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cartState.items.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed inset-y-0 left-0 w-80 bg-white transform transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4 flex justify-between items-center border-b">
            <span className="font-semibold">Menu</span>
            <button onClick={() => setIsNavOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="py-4">
            <Link to="/store" className="block px-4 py-2 hover:bg-gray-100">Store</Link>
            <Link to="/mac" className="block px-4 py-2 hover:bg-gray-100">Mac</Link>
            <Link to="/ipad" className="block px-4 py-2 hover:bg-gray-100">iPad</Link>
            <Link to="/iphone" className="block px-4 py-2 hover:bg-gray-100">iPhone</Link>
            <Link to="/watch" className="block px-4 py-2 hover:bg-gray-100">Watch</Link>
            <Link to="/airpods" className="block px-4 py-2 hover:bg-gray-100">AirPods</Link>
          </div>
        </div>
      </div>

      <main className="pt-12 md:pt-14">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] text-[#6e6e73] text-sm py-8">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="border-b border-[#d2d2d7] pb-4 mb-4">
            <p>*Instant savings, otherwise referred to as instant cashback, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI where applicable. Minimum transaction value of ₹10001.00 applies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Shop and Learn</h3>
              <ul className="space-y-2">
                <li><Link to="/store" className="hover:underline">Store</Link></li>
                <li><Link to="/mac" className="hover:underline">Mac</Link></li>
                <li><Link to="/ipad" className="hover:underline">iPad</Link></li>
                <li><Link to="/iphone" className="hover:underline">iPhone</Link></li>
                <li><Link to="/watch" className="hover:underline">Watch</Link></li>
                <li><Link to="/airpods" className="hover:underline">AirPods</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Apple Music</a></li>
                <li><a href="#" className="hover:underline">Apple TV+</a></li>
                <li><a href="#" className="hover:underline">Apple Arcade</a></li>
                <li><a href="#" className="hover:underline">iCloud</a></li>
                <li><a href="#" className="hover:underline">Apple One</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Apple Store</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Ways to Buy</a></li>
                <li><a href="#" className="hover:underline">Apple Trade In</a></li>
                <li><a href="#" className="hover:underline">Recycling Programme</a></li>
                <li><a href="#" className="hover:underline">Order Status</a></li>
                <li><a href="#" className="hover:underline">Shopping Help</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">About Apple</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Newsroom</a></li>
                <li><a href="#" className="hover:underline">Apple Leadership</a></li>
                <li><a href="#" className="hover:underline">Career Opportunities</a></li>
                <li><a href="#" className="hover:underline">Investors</a></li>
                <li><a href="#" className="hover:underline">Ethics & Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}