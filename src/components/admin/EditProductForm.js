// EditProductForm.js
import React, { useState } from 'react';
import ProductService from '../services/ProductService';

const EditProductForm = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ProductService.editProduct(product.id, { name, description, price });
      // Reset form fields or show success message
    } catch (error) {
      console.error('Error editing product:', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProductForm;
