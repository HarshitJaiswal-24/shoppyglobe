import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition-all duration-200">
      <div className="flex items-center gap-4 w-full">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-24 h-24 object-cover rounded-lg border"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
          <p className="text-gray-600 text-sm mt-1">₹{item.price} × {item.quantity}</p>
          <p className="text-lg font-bold text-cyan-900 mt-1">
            ₹{(item.price * item.quantity).toFixed(2)}
          </p>

          <div className="flex items-center gap-3 mt-3">
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-xl font-semibold"
            >
              −
            </button>
            <span className="text-lg font-medium">{item.quantity}</span>
            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-xl font-semibold"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
