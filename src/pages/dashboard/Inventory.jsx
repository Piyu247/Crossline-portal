import React, { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import Card from '../../components/ui/Card';
import { getProductById, products, variants } from '../../data/mockData';

const getColorHex = (colorName) => {
  const map = {
    'Carbon Black': '#1a1a1a',
    'Champagne Gold': '#e6c280',
    'Tortoise': '#5c3a21',
    'Brushed Silver': '#c0c0c0',
    'Crystal Clear': '#e0f7fa',
    'Midnight Blue': '#191970'
  };
  return map[colorName] || '#888';
};

const Inventory = () => {
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');
  const [query, setQuery] = useState('');

  const categories = ['All', ...new Set(products.map((product) => product.category))];
  const statuses = ['All', 'verified', 'printed', 'generated', 'pending', 'scanned'];

  const filteredVariants = useMemo(() => variants.map((variant) => {
    const product = getProductById(variant.productId);
    return { ...variant, product };
  }).filter((row) => {
    const matchesCategory = category === 'All' || row.product?.category === category;
    const matchesStatus = status === 'All' || row.migrationStatus === status;
    const haystack = `${row.product?.model} ${row.color} ${row.size} ${row.sku}`.toLowerCase();
    return matchesCategory && matchesStatus && haystack.includes(query.toLowerCase());
  }), [category, query, status]);

  const groupedProducts = useMemo(() => {
    const groups = {};
    filteredVariants.forEach(variant => {
      if (!groups[variant.productId]) {
        groups[variant.productId] = {
          product: variant.product,
          variants: []
        };
      }
      groups[variant.productId].variants.push(variant);
    });
    return Object.values(groups);
  }, [filteredVariants]);

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
          <div className="filter-chip"><SlidersHorizontal size={16} /> {filteredVariants.length} variations</div>
        </div>
      </Card>

      <div className="inventory-grid">
        {groupedProducts.map(({ product, variants }) => (
          <div key={product.id} className="inventory-card">
            <div className="inventory-card-image">
              {product.image ? (
                <img src={product.image} alt={product.model} />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>No Image</div>
              )}
            </div>
            <div className="inventory-card-content">
              <div className="inventory-card-header">
                <div>
                  <h3>{product.model}</h3>
                  <span>{product.material}</span>
                </div>
                <span className="pill" style={{ color: 'var(--text-muted)' }}>{product.category}</span>
              </div>
              <div className="inventory-variant-list">
                {variants.map((variant) => (
                  <div key={variant.id} className="inventory-variant-item">
                    <div className="inventory-variant-info">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ 
                          display: 'inline-block', width: '10px', height: '10px', 
                          borderRadius: '50%', backgroundColor: getColorHex(variant.color),
                          border: '1px solid rgba(255,255,255,0.2)'
                        }} title={variant.color} />
                        <strong>{variant.color}</strong>
                      </div>
                      <small>{variant.size} • {variant.sku}</small>
                    </div>
                    <div className="inventory-variant-stock">
                      {variant.stockQty.toLocaleString('en-IN')}
                    </div>
                    <div className="inventory-variant-status">
                      <span className={`pill ${variant.migrationStatus}`}>{variant.migrationStatus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
