import React, { useState } from 'react';

const BrandForm = ({ onSave, initialData = {} }) => {
  const [brand, setBrand] = useState({
    name: initialData.name || '',
    description: initialData.description || '',
    logo: initialData.logo || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrand((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(brand);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">{initialData.name ? 'Edit Brand' : 'Add Brand'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" name="name" value={brand.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea name="description" value={brand.description} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Logo URL</label>
        <input type="text" name="logo" value={brand.logo} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default BrandForm;
