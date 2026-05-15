import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { RefreshCw, TrendingUp, Package, Users, ShieldCheck, ShoppingBag } from 'lucide-react';
import { formatCurrency, getProductById, invoices, variants, vendors } from '../../data/mockData';

const Overview = () => {
  const totalStock = variants.reduce((sum, item) => sum + item.stockQty, 0);
  const pendingBarcodeCount = variants.filter((item) => item.migrationStatus === 'pending').length;
  const monthlyRevenue = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const vendorCount = vendors.filter((vendor) => vendor.status === 'active').length;
  const retailReadyCount = new Set(
    variants
      .map((variant) => getProductById(variant.productId))
      .filter((product) => product?.retailReady)
      .map((product) => product.id)
  ).size;

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="mb-1">Crossline Command Center</h1>
          <p className="text-muted">A live prototype of Hind Corporation's B2B operations, Tally sync, and barcode migration program.</p>
        </div>
        <Button variant="outline" style={{ display: 'flex', gap: '0.5rem' }}>
          <RefreshCw size={18} /> Sync with Tally
        </Button>
      </div>

      <div className="dashboard-grid mb-4">
        <Card>
          <div className="flex justify-between items-start mb-2">
            <h3 className="metric-label">Synced Revenue</h3>
            <div className="icon-tile">
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="metric-value">{formatCurrency(monthlyRevenue)}</div>
          <div className="status-positive">3 invoices in current sync batch</div>
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <h3 className="metric-label">Active Vendors</h3>
            <div className="icon-tile">
              <Users size={20} />
            </div>
          </div>
          <div className="metric-value">{vendorCount}</div>
          <div className="status-positive">Role-based catalog access enabled</div>
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <h3 className="metric-label">Tracked Stock</h3>
            <div className="icon-tile">
              <Package size={20} />
            </div>
          </div>
          <div className="metric-value">{totalStock.toLocaleString('en-IN')}</div>
          <div className="status-warning">{pendingBarcodeCount} variations pending barcode generation</div>
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-2">
            <h3 className="metric-label">B2C Ready Lines</h3>
            <div className="icon-tile">
              <ShoppingBag size={20} />
            </div>
          </div>
          <div className="metric-value">{retailReadyCount}</div>
          <div className="status-positive">Prepared for six-month market test</div>
        </Card>
      </div>

      <div className="two-column-grid">
        <Card>
          <h3 className="mb-3">Recent Invoices and Tally Sync</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             {invoices.map((invoice) => (
               <div key={invoice.id} className="row-split">
                 <div>
                   <div style={{ fontWeight: 'bold' }}>{invoice.invoiceNo}</div>
                   <div className="text-sm text-muted">{invoice.partyName}</div>
                 </div>
                 <div className="text-right">
                   <div style={{ fontWeight: 'bold' }}>{formatCurrency(invoice.amount)}</div>
                   <span className={`pill ${invoice.tallySyncStatus}`}>{invoice.tallySyncStatus}</span>
                 </div>
               </div>
             ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3">Migration Health</h3>
          <p className="text-muted mb-3 text-sm">Variation-wise tracking is converting Tally's model-level records into scan-ready stock units.</p>
          <div className="migration-bar mb-3">
            <span style={{ width: '68%' }}></span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             {variants.slice(0, 4).map((item) => {
               const product = getProductById(item.productId);
               return (
               <div key={item.id} className="row-split">
                 <div>
                   <div style={{ fontWeight: 'bold' }}>{product?.model}</div>
                   <div className="text-sm text-muted">{item.color} / {item.size}</div>
                 </div>
                 <div className="flex items-center gap-3">
                   <span className={`pill ${item.migrationStatus}`}>{item.migrationStatus}</span>
                 </div>
               </div>
             )})}
          </div>
        </Card>
      </div>

      <Card className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck color="var(--primary)" />
          <h3>Role-Safe Demo</h3>
        </div>
        <p className="text-muted">
          Use the login screen to switch between administrator, staff, and vendor roles. The sidebar and dashboard views adjust to demonstrate controlled access for internal teams and wholesale partners.
        </p>
      </Card>
    </div>
  );
};

export default Overview;
