// SitePage.js
import React from 'react';
import ProductList from '../components/site/ProductList';
import CategoryFilter from '../components/site/CategoryFilter';
import SortDropdown from '../components/site/SortDropdown';
import RatingForm from '../components/site/RatingForm';
import './SitePage.css'; // Import the CSS file
import './AdminPage.css'
import { useNavigate } from 'react-router-dom';

const SitePage = (loggedIn) => {

    const navigate = useNavigate();


    const handleLogout = () => navigate('/login');


  return (
    
    <>
     <div className="app">
      <h1 className="app-header">Site Page
      <div>
      {loggedIn && (
          <p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </p>
        )}
      </div>
      </h1>
      
      <div className="app-content">
      <CategoryFilter />
      <SortDropdown />
      
      </div>
      <ul className="product-list">
      <ProductList />
      <RatingForm />
      </ul>
    </div>
    </>
  );
};

export default SitePage;
