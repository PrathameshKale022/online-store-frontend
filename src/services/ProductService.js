// ProductService.js
import axios from 'axios';

const BASE_URL = 'http://172.23.80.1:9092'; // Your backend API base URL

const ProductService = {
  getAllProducts: async () => {
    return await axios.get(`${BASE_URL}/api/v1/productModule/products`);
  },
  addProduct: async(productdata) =>{
    return await axios.post(`${BASE_URL}/api/v1/productModule/admin/products`,productdata, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      }
      
    });
  }

  // Add other CRUD operations for products
};

export default ProductService;
