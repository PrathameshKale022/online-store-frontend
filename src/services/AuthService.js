// AuthService.js
import axios from 'axios';

const BASE_URL = 'http://172.23.80.1:9092'; // Your backend API base URL

const AuthService = {
  login: async (username, password) => {
    if (username === 'admin' && password === 'password') {
      // Simulate saving authentication token to local storage
      return await axios.post(`${BASE_URL}/api/login`, { username, password });
    } else {
      throw new Error('Invalid credentials');
    }
   
  },

  logout: () => {
    // Clear authentication token from local storage
    localStorage.removeItem('token');
  },
  // Add other authentication related operations (logout, register, etc.)
  isAuthenticated: () => {
    // Check if authentication token exists in local storage
    return localStorage.getItem('token') !== null;
  }

};

export default AuthService;
