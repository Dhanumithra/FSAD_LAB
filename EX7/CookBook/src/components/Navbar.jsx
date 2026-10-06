import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // 'mb-4' gives space below the navbar, while keeping top flush
    <nav 
      className="navbar navbar-expand-lg mb-4 shadow-sm" 
      style={{ 
        backgroundColor: '#fff0f3', 
        borderRadius: '12px',
        padding: '10px 20px',
        marginTop: 0 
      }}
    >
      <div className="container-fluid p-0">
        <Link className="navbar-brand fw-bold" to="/" style={{ color: '#8b3a52' }}>
          CookBook 🍳
        </Link>
        <div className="navbar-nav ms-auto flex-row gap-4">
          <Link className="nav-link fw-semibold" to="/" style={{ color: '#c25975' }}>
            Home
          </Link>
          <Link className="nav-link fw-semibold" to="/recipes" style={{ color: '#c25975' }}>
            Recipes
          </Link>
          <Link className="nav-link fw-semibold" to="/contact" style={{ color: '#c25975' }}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;