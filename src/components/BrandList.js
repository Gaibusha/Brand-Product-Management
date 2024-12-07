import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints, faTshirt } from '@fortawesome/free-solid-svg-icons';
import './BrandList.css';

const initialBrands = [
  { id: 1, name: 'StrideStyle', description: 'StrideStyle merges the art of movement with the finesse of fashion...', icon: faShoePrints },
  { id: 2, name: 'VogueVenture', description: 'VogueVenture is your gateway to the ultimate fashion adventure...', icon: faTshirt },
];

const BrandList = () => {
  const [brands, setBrands] = useState(initialBrands);

  const handleDelete = (id) => {
    setBrands(brands.filter(brand => brand.id !== id));
  };

  return (
    <div className="brand-list-container">
      <h1 className="brand-list-title">Brand List</h1>
      <Link to="/add-brand" className="add-brand-button">Add Brand</Link>
      <table className="brand-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Description</th>
            <th className="table-header">Icon</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.id} className="brand-row">
              <td className="table-cell">{brand.name}</td>
              <td className="table-cell">{brand.description}</td>
              <td className="table-cell">
                <FontAwesomeIcon icon={brand.icon} size="2x" className="brand-icon" />
              </td>
              <td className="table-cell">
                <Link to={`/edit-brand/${brand.id}`} className="edit-button">Edit</Link>
                <button onClick={() => handleDelete(brand.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrandList;
