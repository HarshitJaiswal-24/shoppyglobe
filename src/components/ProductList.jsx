import React, { useState } from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center text-lg mt-10 text-gray-600">🔄 Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500 font-semibold">❌ {error}</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="🔍 Search for amazing products..."
          className="w-full md:w-1/2 px-5 py-3 border-2 border-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded-xl text-gray-700 shadow-sm placeholder:text-gray-400 transition"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found matching "<span className="font-medium">{search}</span>"</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
