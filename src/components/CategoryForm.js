import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addCategory, updateCategory, fetchCategoryById } from '../api/mockApi';

const CategoryForm = ({ onSave, initialData }) => {
  const [category, setCategory] = useState(initialData || { name: '', description: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchCategoryById(id).then(data => setCategory(data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateCategory(id, category).then(() => navigate('/categories'));
    } else {
      addCategory(category).then(() => navigate('/categories'));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-6 text-center">{id ? 'Edit Category' : 'Add Category'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={category.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 w-full mb-4 rounded"
          />
          <textarea
            name="description"
            value={category.description}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 w-full mb-4 rounded"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 w-full rounded hover:bg-green-600 transition duration-200"
          >
            {id ? 'Update Category' : 'Add Category'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
