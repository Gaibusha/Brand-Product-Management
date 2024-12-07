import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ProductList.css';

const initialProducts = [
  { id: 1, name: 'Nike Air Force 1 \'07 LV8', category: 'Shoes', stock: 220, price: 122.27,imageUrl: '/images/nike-air-force-1.jpg' },
  { id: 2, name: 'Nike Sportswear Heritage86 Futura Washed', category: 'T-shirt', stock: 999, price: 15.95,imageUrl: '/images/nike-heritage86-futura-washed.jpg' },
  { id: 3, name: 'Nike Air Max Penny', category: 'Shoes', stock: 75, price: 182.50,imageUrl: '/images/nike-air-max-penny.jpg' },
  { id: 4, name: 'Nike Windrunner D.Y.E.', category: 'Jacket', stock: 30, price: 102.43,imageUrl: '/images/nike-windrunner-dye.jpg' },
  { id: 5, name: 'Nike Storm-FIT x Stüssy', category: 'Jacket', stock: 50, price: 9.54,imageUrl: '/images/nike-storm-fit-stussy.jpg' }
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Product List</h1>
      <Link to="/add-product" className="add-product-button">Add Product</Link>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <table className="product-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Category</th>
            <th className="table-header">Image</th>
            <th className="table-header">Stock</th>
            <th className="table-header">Price</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id} className="product-row">
              <td className="table-cell">{product.name}</td>
              <td className="table-cell">{product.category}</td>
              <td className="table-cell"> <img src={product.imageUrl} alt={product.name} className="product-image" /> </td>
              <td className="table-cell">{product.stock}</td>
              <td className="table-cell">${product.price.toFixed(2)}</td>
              <td className="table-cell">
                <Link to={`/edit-product/${product.id}`} className="action-button edit-button">
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </Link>
                <button onClick={() => handleDelete(product.id)} className="action-button delete-button">
                  <FontAwesomeIcon icon={faTrashAlt} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
