import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../api/mockApi';

const ProductForm = ({ onSave, initialData = {} }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: initialData.name || '',
    description: initialData.description || '',
    category: initialData.category || '',
    price: initialData.price || '',
    image: initialData.image || '',
    brand: initialData.brand || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product).then(() => {
      onSave(product);
      navigate('/products');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">{initialData.name ? 'Edit Product' : 'Add Product'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea name="description" value={product.description} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image URL</label>
        <input type="text" name="image" value={product.image} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Brand</label>
        <input type="text" name="brand" value={product.brand} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default ProductForm;
