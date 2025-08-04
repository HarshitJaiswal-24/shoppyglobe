import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-cyan-900 border-b pb-2">🛍️ Your Shopping Cart</h2>

      {items.length === 0 ? (
        <div className="text-center mt-10 text-gray-500 text-lg">
          🛒 Your cart is empty. Start adding products!
        </div>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="mt-6 p-6 bg-white shadow rounded-lg flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">Total:</h3>
            <span className="text-2xl font-bold text-cyan-900">₹{totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full mt-4 py-3 bg-cyan-900 text-white font-semibold rounded-xl hover:bg-orange-300 transition duration-200">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
