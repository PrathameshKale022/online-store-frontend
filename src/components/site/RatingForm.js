// RatingForm.js
import React, { useState } from 'react';
import ProductService from '../../services/ProductService';


const RatingForm = ({ productId }) => {
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ProductService.rateProduct(productId, rating);
      // Handle successful rating (e.g., update state)
    } catch (error) {
      console.error('Error rating product:', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div>
      <h2>Rate Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
};

export default RatingForm;
