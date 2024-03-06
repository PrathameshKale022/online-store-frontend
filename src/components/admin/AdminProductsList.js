// AdminProductsList.js
import React, { useState, useEffect } from 'react';
import ProductService from '../../services/ProductService';
import './AdminProductsList.css';

const AdminProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await ProductService.getAllProducts();
    setProducts(response.data);
  };

  return (
    <div className="product-list-container">
      <h2>Admin Products List</h2>
      <table className="product-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Average rating</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.average_rating}</td>
              <td>{product.price}</td>
              <td className="product-list-actions">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductsList;
