// AddProductForm.js
import React, { useEffect, useState } from 'react';
import ProductService from '../../services/ProductService';
import './AddProductForm.css';

const AddProductForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    setTimeout(() => {
      setMessage("")
    }, 60000);
  }, [message])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ProductService.addProduct({ title, category, price });
      // Reset form fields or show success message
          setTitle('');
          setCategory('');
          setPrice('');
          setMessage('Product added Successfully');
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
