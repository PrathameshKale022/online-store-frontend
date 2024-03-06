// ProductList.js
import React, { useState, useEffect } from 'react';
import ProductService from '../../services/ProductService';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await ProductService.getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.product_id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
