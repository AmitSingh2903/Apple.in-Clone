import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your bag is empty</h2>
        <p className="text-gray-600 mb-8">
          Find products you want to add to your bag.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Review your bag</h1>
      
      {/* Cart Items */}
      <div className="space-y-6">
        {state.items.map((item) => (
          <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  {item.variant && (
                    <p className="text-sm text-gray-600">{item.variant}</p>
                  )}
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <p className="font-medium">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-8 p-6 bg-white rounded-xl">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{state.total.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="pt-4 border-t flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{state.total.toLocaleString('en-IN')}</span>
          </div>
        </div>
        <button
          onClick={() => navigate('/checkout')}
          className="w-full mt-6 bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
        >
          Check Out
         ```
        </button>
      </div>
    </div>
  );
}

export default Cart;