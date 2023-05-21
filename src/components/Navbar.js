import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="navbar">
      {location.pathname !== '/' && (
        <button onClick={handleGoBack} className="back-button">
          Voltar
        </button>
      )}
      <h1>My Store</h1>
    </div>
  );
};

export default Navbar;
