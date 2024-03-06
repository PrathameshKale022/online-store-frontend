// LoginForm.js
import React, { useState } from 'react';

import './LoginForm.css'; // Import the CSS file
import AuthService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await AuthService.login(username, password);
      setError('');
      if(username === 'admin')
        navigate('/admin')
      else
        navigate('/site')
      //onLogin();

      
      // Redirect to home page or next page after successful login
    } catch (error) {
      console.error('Login failed:', error)
      setError('Invalid username or password');
      // Handle login error (display error message, etc.)
    }
  };

  return (<>
  
  <div className="form-container">
     <h2>Login</h2>
     {error && <p className="error-message">{error}</p>}
     <form onSubmit={handleSubmit}>
       <div>
         <label>Username:</label>
         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
       </div>
       <div>
         <label>Password:</label>
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       </div>
       <button type="submit">Login</button>
     </form>
   </div>
  </>
    
  );
};

export default LoginForm;
