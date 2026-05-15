import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LockKeyhole, ScanLine, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import { products, variants, formatCurrency } from '../data/mockData';

const swatchFor = (color) => {
  if (color.includes('Black')) return '#111111';
  if (color.includes('Gold')) return '#c9a45d';
  if (color.includes('Tortoise')) return '#7a4b31';
  if (color.includes('Silver')) return '#b8bec4';
  if (color.includes('Clear')) return '#d9eef0';
  if (color.includes('Blue')) return '#18345f';
  return '#d4af37';
};

const Products = () => {
  return (
    <div className="collection-page-v2 animate-fade-in">
      <section className="collection-hero-v2">
        <div className="container">
          <div className="campaign-kicker">
            <Sparkles size={16} />
            Premium | Comfortable | Trendy
          </div>
          <h1>Eyewear for all.</h1>
          <p>
            A collection system grounded in the real Crossline brand voice: lifestyle-first, variation-aware, and ready for protected B2B access.
          </p>
        </div>
      </section>

      <section className="catalog-toolbar-section">
        <div className="container catalog-toolbar">
          <div className="catalog-tabs">
            {['All', 'NewStyles', 'Mood', 'EyeCare', 'B2B Ready'].map((filter, index) => (
              <button className={index === 0 ? 'active' : ''} key={filter}>{filter}</button>
            ))}
          </div>
          <div className="catalog-lock">
            <LockKeyhole size={18} />
            Admin-controlled visibility
          </div>
        </div>
      </section>

      <section className="container product-showroom-grid">
        {products.map((product, index) => {
          const productVariants = variants.filter((variant) => variant.productId === product.id);
          const stock = productVariants.reduce((sum, variant) => sum + variant.stockQty, 0);

          return (
            <article className={`showroom-product ${index === 0 ? 'featured' : ''}`} key={product.id}>
              <Link to="/login" className="showroom-product-media">
                <img src={product.image} alt={`${product.model} optical frame`} />
                <span className="quick-view">Request access</span>
              </Link>
              <div className="showroom-product-info">
                <div>
                  <span className="product-index">{String(index + 1).padStart(2, '0')}</span>
                  <h2>{product.model}</h2>
                  <p>{product.material} / {product.collection}</p>
                </div>
                <div className="swatch-row">
                  {productVariants.map((variant) => (
                    <span
                      key={variant.id}
                      title={`${variant.color} ${variant.size}`}
                      style={{ backgroundColor: swatchFor(variant.color) }}
                    />
                  ))}
                </div>
                <div className="showroom-meta">
                  <div><small>Category</small><strong>{product.category}</strong></div>
                  <div><small>Variations</small><strong>{productVariants.length}</strong></div>
                  <div><small>Wholesale</small><strong>{formatCurrency(product.wholesalePrice)}</strong></div>
                  <div><small>Scan stock</small><strong>{stock.toLocaleString('en-IN')}</strong></div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="container showroom-access">
        <div>
          <ScanLine />
          <h2>Protected catalog. Barcode-ready operations.</h2>
          <p>
            Vendors see only what Hind Corporation permits. Staff sees the operational layer. Admins control every model, color, size, barcode, and invoice path.
          </p>
        </div>
        <Link to="/login">
          <Button size="lg" style={{ gap: '0.5rem' }}>
            Open B2B Portal <ArrowRight size={20} />
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Products;
