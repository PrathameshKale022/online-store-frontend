// DeleteProductButton.js
import React from 'react';
import ProductService from '../services/ProductService';

const DeleteProductButton = ({ productId }) => {
  const handleDelete = async () => {
    try {
      await ProductService.deleteProduct(productId);
      // Handle successful deletion (e.g., update state)
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteProductButton;
