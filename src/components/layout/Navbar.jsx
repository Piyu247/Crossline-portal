import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, UserCircle } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  return (
    <header className="public-nav">
      <div className="container public-nav-inner">
        <Link to="/" className="brand-mark">
          <img src="/instagram/crossline-logo.jpg" alt="Crossline logo" />
          <small>Hind Corporation</small>
        </Link>

        <nav className="public-nav-links md-flex">
          <Link to="/">Home</Link>
          <Link to="/products">Collection</Link>
          <Link to="/contact">Retailers</Link>
        </nav>

        <div className="public-nav-actions">
          <Link to="/login">
            <Button variant="outline" size="sm" style={{ display: 'flex', gap: '0.5rem' }}>
              <UserCircle size={18} />
              B2B Portal
            </Button>
          </Link>
          <button className="md-hidden nav-menu-button">
            <Menu size={28} />
          </button>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-hidden { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
