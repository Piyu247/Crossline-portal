import React from 'react';
import { LockKeyhole, UserCheck } from 'lucide-react';
import Card from '../../components/ui/Card';
import { formatCurrency, vendors } from '../../data/mockData';

const Vendors = () => (
  <div className="animate-fade-in">
    <div className="page-heading">
      <div>
        <h1>Vendor Management</h1>
        <p className="text-muted">Controlled access for wholesalers, retailers, and future franchise partners.</p>
      </div>
    </div>

    <div className="dashboard-grid mb-4">
      <Card>
        <UserCheck color="var(--primary)" />
        <h3 className="metric-label mt-2">Active Accounts</h3>
        <div className="metric-value">{vendors.filter((vendor) => vendor.status === 'active').length}</div>
      </Card>
      <Card>
        <LockKeyhole color="var(--primary)" />
        <h3 className="metric-label mt-2">Permission Groups</h3>
        <div className="metric-value">3</div>
      </Card>
      <Card>
        <h3 className="metric-label">Monthly B2B Value</h3>
        <div className="metric-value">{formatCurrency(vendors.reduce((sum, vendor) => sum + vendor.monthlyOrderValue, 0))}</div>
      </Card>
    </div>

    <div className="vendor-grid">
      {vendors.map((vendor) => (
        <Card key={vendor.id}>
          <div className="row-split mb-3">
            <div>
              <h3>{vendor.companyName}</h3>
              <p className="text-sm text-muted">{vendor.region}</p>
            </div>
            <span className={`pill ${vendor.status}`}>{vendor.status}</span>
          </div>
          <div className="stack">
            <div className="row-split">
              <span className="text-muted">Access level</span>
              <strong>{vendor.accessLevel}</strong>
            </div>
            <div>
              <span className="text-muted">Allowed categories</span>
              <div className="tag-row mt-2">
                {vendor.allowedCategories.map((category) => <span key={category}>{category}</span>)}
              </div>
            </div>
            <div className="row-split">
              <span className="text-muted">Monthly order value</span>
              <strong>{formatCurrency(vendor.monthlyOrderValue)}</strong>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default Vendors;
