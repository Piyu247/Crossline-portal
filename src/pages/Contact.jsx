import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="container animate-fade-in section">
      <div className="text-center mb-4">
        <h1 className="mb-2">Get in <span className="text-primary">Touch</span></h1>
        <p className="text-muted">Vendor partnerships, wholesale inquiries, and digital transformation discussions for Crossline.</p>
      </div>

      <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card style={{ flex: '1 1 400px', maxWidth: '600px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="flex flex-col gap-1">
              <label>Name / Company Name</label>
              <input 
                type="text" 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', color: 'white' }} 
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Email Address</label>
              <input 
                type="email" 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', color: 'white' }} 
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Inquiry Type</label>
              <select style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', color: 'white' }}>
                <option>Wholesale Partnership</option>
                <option>Vendor Portal Access</option>
                <option>Franchise / B2C Expansion</option>
                <option>Product Information</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Message</label>
              <textarea 
                rows={5}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', color: 'white', resize: 'vertical' }} 
              ></textarea>
            </div>
            <Button>Send Message</Button>
          </form>
        </Card>

        <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
          <h3 className="mb-3">Hind Corporation</h3>
          <ul className="text-muted" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li>
              <strong style={{ color: 'white', display: 'block', marginBottom: '0.25rem' }}>Hind Corporation</strong>
              Mumbai, Maharashtra<br/>
              India
            </li>
            <li>
              <strong style={{ color: 'white', display: 'block', marginBottom: '0.25rem' }}>Business Focus</strong>
              Crossline optical lens frames<br/>
              Import-export and wholesale distribution
            </li>
            <li>
              <strong style={{ color: 'white', display: 'block', marginBottom: '0.25rem' }}>Digital Roadmap</strong>
              B2B portal today<br/>
              B2C readiness after market validation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
