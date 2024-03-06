// AdminPage.js
import React from 'react';
import AdminProductsList from '../components/admin/AdminProductsList';
import AddProductForm from '../components/admin/AddProductForm';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css'

const AdminPage = (loggedIn) => {

const navigate = useNavigate();


const handleLogout = () => navigate('/login');
  return (
    <>
    
    <div className="app">
     <header className="app-header">
     <h1>Admin Page</h1>
     {loggedIn && (
          <p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </p>
        )}
     </header>
     <div className="app-content">
     <AdminProductsList />
      <AddProductForm />
     </div>
     <footer className="app-footer">
       <p>&copy; 2024 My App</p>
     </footer>
   </div>
   
    </>
     
  );
};

export default AdminPage;
