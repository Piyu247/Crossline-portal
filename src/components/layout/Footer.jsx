import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="editorial-footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src="/instagram/crossline-logo.jpg" alt="Crossline logo" />
          <p>Premium | Comfortable | Trendy eyewear for all, powered by a smarter wholesale operating system by Hind Corporation.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/">Campaign</Link>
          <Link to="/products">Collection</Link>
          <Link to="/contact">Retailer inquiry</Link>
          <Link to="/login">B2B portal</Link>
        </div>
        <div>
          <h4>Business</h4>
          <span>Import-export wholesale</span>
          <span>Maharashtra and India</span>
          <span>Barcode migration ready</span>
          <span>B2C expansion path</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Hind Corporation</span>
        <span>Crossline optical lens frames</span>
      </div>
    </footer>
  );
};

export default Footer;
