import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-50 object-cover rounded-md mb-4"
      />

      <h2 className="text-lg font-bold text-gray-800 line-clamp-1">{product.title}</h2>
      <p className="text-cyan-900 text-md font-semibold mt-1">₹{product.price}</p>
      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>

      <div className="mt-auto flex justify-between items-center gap-2 pt-4">
        <Link
          to={`/product/${product.id}`}
          className="text-sm text-cyan-900 hover:text-cyan-700 font-medium underline"
        >
          View Details
        </Link>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-cyan-900 hover:bg-cyan-700 text-white px-4 py-1.5 rounded-lg text-sm shadow"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
