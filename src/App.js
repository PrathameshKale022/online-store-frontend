import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Navigate,Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import SitePage from './pages/SitePage';
import AuthService from './services/AuthService';
import LoginForm from './components/site/LoginForm';
import { useState } from 'react';


const App = () => {
  // const [loggedIn, setLoggedIn] = useState(AuthService.isAuthenticated());
  const [loggedIn, setLoggedIn] = useState(false);
 

  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLoginSuccess = () => {
    // Redirect to AdminPage after successful login
    console.log("handleLoginSuccess called")
   
  };

  const handleLogout = () => {
    //AuthService.logout();
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        {/* <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<SitePage />} /> */}
        <Route path="/admin" element={<AdminPage loggedIn={loggedIn}/>}  />
        <Route path="/site" element={<SitePage loggedIn={loggedIn}/>} />
      </Routes>
      {loggedIn && (
          <p>
            <button onClick={handleLogout}>Logout</button>
          </p>
        )}
    </Router>
  );
};

// PrivateRoute component to protect routes based on user type
const PrivateRoute = ({ element: Element, userType }) => {
  // function to determine if user is authenticated
  const isAuthenticated = () => {
    // logic to check if user is authenticated here
    
    return true;
  };


  return (
    <Route
      element={isAuthenticated() ? <Element /> : <Navigate to="/login" />}
    />
  );
  // if (!isAuthenticated()) {
  //   return <Navigate to="/login" />;
  // }

  // if (userType === 'admin') {
  //   return <Element />;
  // } else {
  //   return <Navigate to="/" />;
  // }
};

export default App;
