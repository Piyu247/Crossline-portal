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

      <Card className="table-card">
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Category</th>
                <th>Color</th>
                <th>Size</th>
                <th>SKU</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <strong>{row.product?.model}</strong>
                    <span>{row.product?.material}</span>
                  </td>
                  <td>{row.product?.category}</td>
                  <td>{row.color}</td>
                  <td>{row.size}</td>
                  <td>{row.sku}</td>
                  <td>{row.stockQty.toLocaleString('en-IN')}</td>
                  <td><span className={`pill ${row.migrationStatus}`}>{row.migrationStatus}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Inventory;
