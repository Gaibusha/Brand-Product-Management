import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories, deleteCategory } from '../api/mockApi';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(data => setCategories(data));
  }, []);

  const handleDelete = (id) => {
    deleteCategory(id).then(() => {
      setCategories(categories.filter(category => category.id !== id));
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Category List</h1>
      <Link to="/add-category" className="bg-blue-500 text-white px-4 py-2 mb-4 inline-block rounded hover:bg-blue-600">Add Category</Link>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Description</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="border px-4 py-2">{category.name}</td>
              <td className="border px-4 py-2">{category.description}</td>
              <td className="border px-4 py-2">
                <Link to={`/edit-category/${category.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600">Edit</Link>
                <button onClick={() => handleDelete(category.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
