import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('admin');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('crosslineRole', role);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      {/* Left side visual */}
      <div className="login-visual">
        <img src="/instagram/login-bg.png" alt="Vintage luxury abstract" className="bg-image" />
        <div className="login-visual-overlay">
          <h1 className="login-quote">"Tradition in commerce, innovation in execution."</h1>
          <span className="login-quote-author">Crossline Portal</span>
        </div>
      </div>

      {/* Right side form */}
      <div className="login-form-container">
        <Link to="/" className="luxury-logo-link">
          <img src="/instagram/crossline-logo.jpg" alt="Crossline logo" style={{ width: '110px', borderRadius: '4px' }} />
        </Link>

        <div className="login-card">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 className="luxury-heading">Secure Access</h2>
            <p className="luxury-subtitle">Select your authorization level to enter the operations and management terminal.</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="luxury-input-group">
              <label className="luxury-label">Identification</label>
              <input 
                type="text" 
                required
                className="luxury-input"
                placeholder="Email ID or Vendor ID"
              />
            </div>
            
            <div className="luxury-input-group">
              <label className="luxury-label">Passphrase</label>
              <input 
                type="password" 
                required
                className="luxury-input"
                placeholder="Enter your secure passphrase"
              />
            </div>

            <div className="luxury-input-group" style={{ marginTop: '2rem' }}>
              <label className="luxury-label">Authorization Role</label>
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="luxury-select"
              >
                <option value="admin">Administrator (Full Access)</option>
                <option value="staff">Staff Member (Operations)</option>
                <option value="vendor">Vendor / Wholesaler (Restricted)</option>
              </select>
            </div>

            <button type="submit" className="luxury-button">
              Authenticate
            </button>
            
            <div className="luxury-footer">
              Unable to access? <a href="#">Request credentials</a> from systems.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
