import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error('Failed to load product');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (error)
    return (
      <p className="text-center text-red-600 font-semibold mt-10">{error}</p>
    );
  if (!product)
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-80 object-cover rounded-xl"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-cyan-900">{product.title}</h1>
          <p className="text-xl text-gray-800 mt-2 font-semibold">
            ₹{product.price}
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>
          <div className="mt-4 text-sm text-gray-500">
            <p>Brand: <span className="font-medium text-gray-700">{product.brand}</span></p>
            <p>Category: <span className="font-medium text-gray-700">{product.category}</span></p>
            <p>Rating: <span className="font-medium text-yellow-500">⭐ {product.rating}</span></p>
          </div>
        </div>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-6 bg-cyan-900 hover:bg-orange-300 text-white py-2 px-6 rounded-md shadow transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
