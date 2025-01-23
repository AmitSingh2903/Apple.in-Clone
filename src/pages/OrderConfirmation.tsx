import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

function OrderConfirmation() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      <h1 className="text-3xl font-semibold mb-4">Thank you for your order!</h1>
      <p className="text-gray-600 mb-8">
        We've received your order and will send you an email confirmation shortly.
      </p>
      <div className="space-y-4">
        <Link
          to="/"
          className="block w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
        >
          Continue Shopping
        </Link>
        <button
          onClick={() => window.print()}
          className="block w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;