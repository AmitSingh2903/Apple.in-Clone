import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* iPhone 15 Pro */}
      <section className="relative h-[600px] md:h-[700px] bg-black text-white text-center">
        <div className="pt-14 space-y-2">
          <h2 className="text-4xl md:text-6xl font-semibold">iPhone 15 Pro</h2>
          <p className="text-xl md:text-2xl">Titanium. So strong. So light. So Pro.</p>
          <div className="flex items-center justify-center space-x-4 text-[#2997ff]">
            <Link to="/product/iphone-15-pro" className="inline-flex items-center hover:underline">
              Learn more <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/product/iphone-15-pro" className="inline-flex items-center hover:underline">
              Buy <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1695048133142-1a20484d2569"
          alt="iPhone 15 Pro"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
      </section>

      {/* iPhone 15 */}
      <section className="relative h-[600px] md:h-[700px] bg-white text-center">
        <div className="pt-14 space-y-2">
          <h2 className="text-4xl md:text-6xl font-semibold">iPhone 15</h2>
          <p className="text-xl md:text-2xl">New camera. New design. Newphoria.</p>
          <div className="flex items-center justify-center space-x-4 text-[#2997ff]">
            <Link to="/product/iphone-15" className="inline-flex items-center hover:underline">
              Learn more <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/product/iphone-15" className="inline-flex items-center hover:underline">
              Buy <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1695048132942-498d16c0a49c"
          alt="iPhone 15"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </section>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        {/* Watch */}
        <section className="relative h-[500px] bg-black text-white text-center rounded-xl overflow-hidden">
          <div className="pt-14 space-y-2 relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold">WATCH</h2>
            <p className="text-xl">SERIES 9</p>
            <p className="text-red-500">Smarter. Brighter. Mightier.</p>
            <div className="flex items-center justify-center space-x-4 text-[#2997ff]">
              <Link to="/product/watch-series-9" className="inline-flex items-center hover:underline">
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
              <Link to="/product/watch-series-9" className="inline-flex items-center hover:underline">
                Buy <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d"
            alt="Apple Watch"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </section>

        {/* MacBook Air */}
        <section className="relative h-[500px] bg-[#fbfbfd] text-center rounded-xl overflow-hidden">
          <div className="pt-14 space-y-2 relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold">MacBook Air 15"</h2>
            <p className="text-xl">Impressively big. Impossibly thin.</p>
            <div className="flex items-center justify-center space-x-4 text-[#2997ff]">
              <Link to="/product/macbook-air-15" className="inline-flex items-center hover:underline">
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
              <Link to="/product/macbook-air-15" className="inline-flex items-center hover:underline">
                Buy <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="MacBook Air"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </section>
      </div>
    </div>
  );
}

export default Home;