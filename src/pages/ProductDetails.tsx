import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const products = {
  'iphone-15-pro': {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    basePrice: 134900,
    description: 'iPhone 15 Pro. Titanium design, A17 Pro chip, Action button, and 48MP Main camera.',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
    variants: [
      { name: '128GB', price: 134900 },
      { name: '256GB', price: 144900 },
      { name: '512GB', price: 164900 },
      { name: '1TB', price: 184900 }
    ],
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium']
  },
  'iphone-15': {
    id: 'iphone-15',
    name: 'iPhone 15',
    basePrice: 79900,
    description: 'iPhone 15. Dynamic Island, 48MP Main camera, and USB-C.',
    image: 'https://images.unsplash.com/photo-1695048132942-498d16c0a49c',
    variants: [
      { name: '128GB', price: 79900 },
      { name: '256GB', price: 89900 },
      { name: '512GB', price: 109900 }
    ],
    colors: ['Pink', 'Yellow', 'Green', 'Blue', 'Black']
  },
  // Add more products...
};

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  const product = products[id as keyof typeof products];
  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${product.id}-${selectedVariant}-${selectedColor}`,
        name: product.name,
        price: product.variants[selectedVariant].price,
        quantity: 1,
        image: product.image,
        variant: `${product.variants[selectedVariant].name} - ${product.colors[selectedColor]}`
      }
    });
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square rounded-2xl overflow-hidden bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-semibold">{product.name}</h1>
            <p className="text-2xl text-gray-900 mt-2">
              From ₹{product.basePrice.toLocaleString('en-IN')}*
            </p>
          </div>

          <p className="text-gray-600">{product.description}</p>

          {/* Storage Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Storage</h3>
            <div className="grid grid-cols-2 gap-3">
              {product.variants.map((variant, index) => (
                <button
                  key={variant.name}
                  onClick={() => setSelectedVariant(index)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedVariant === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{variant.name}</div>
                  <div className="text-sm text-gray-500">
                    ₹{variant.price.toLocaleString('en-IN')}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Color</h3>
            <div className="grid grid-cols-2 gap-3">
              {product.colors.map((color, index) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(index)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedColor === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-500 text-white py-4 px-6 rounded-xl font-medium hover:bg-blue-600 transition-colors"
          >
            Add to Bag
          </button>

          {/* Delivery Info */}
          <div className="border-t pt-6">
            <p className="text-gray-600">
              Free delivery available. EMI starting from ₹{Math.round(product.variants[selectedVariant].price / 12).toLocaleString('en-IN')}/month.†
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;