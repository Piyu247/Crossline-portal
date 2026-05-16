import React, { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import Card from '../../components/ui/Card';
import { getProductById, products, variants } from '../../data/mockData';

const Inventory = () => {
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');
  const [query, setQuery] = useState('');

  const categories = ['All', ...new Set(products.map((product) => product.category))];
  const statuses = ['All', 'verified', 'printed', 'generated', 'pending', 'scanned'];

  const rows = useMemo(() => variants.map((variant) => {
    const product = getProductById(variant.productId);
    return { ...variant, product };
  }).filter((row) => {
    const matchesCategory = category === 'All' || row.product?.category === category;
    const matchesStatus = status === 'All' || row.migrationStatus === status;
    const haystack = `${row.product?.model} ${row.color} ${row.size} ${row.sku}`.toLowerCase();
    return matchesCategory && matchesStatus && haystack.includes(query.toLowerCase());
  }), [category, query, status]);

  return (
    <div className="animate-fade-in">
      <div className="page-heading">
        <div>
          <h1>Inventory Control</h1>
          <p className="text-muted">Model, color, and size-level visibility for Crossline's migration from grouped Tally stock to barcode-ready inventory.</p>
        </div>
      </div>

      <Card className="mb-4">
        <div className="filter-bar">
          <label className="search-field">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search model, SKU, color..." />
          </label>
          <label>
            Category
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Migration
            <select value={status} onChange={(event) => setStatus(event.target.value)}>
              {statuses.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <div className="filter-chip"><SlidersHorizontal size={16} /> {rows.length} variations</div>
        </div>
      </Card>

      <div className="inventory-grid">
        {rows.map((row) => (
          <div key={row.id} className="inventory-card">
            <div className="inventory-card-image">
              {row.product?.image ? (
                <img src={row.product.image} alt={row.product.model} />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>No Image</div>
              )}
            </div>
            <div className="inventory-card-content">
              <div className="inventory-card-header">
                <div>
                  <h3>{row.product?.model}</h3>
                  <span>{row.product?.material}</span>
                </div>
                <span className={`pill ${row.migrationStatus}`}>{row.migrationStatus}</span>
              </div>
              <div className="inventory-card-meta">
                <div>
                  <small>Color</small>
                  <strong>{row.color}</strong>
                </div>
                <div>
                  <small>Size</small>
                  <strong>{row.size}</strong>
                </div>
              </div>
              <div className="inventory-card-footer">
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SKU: {row.sku}</span>
                </div>
                <div>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>{row.stockQty.toLocaleString('en-IN')}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.25rem' }}>in stock</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
