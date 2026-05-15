import React from 'react';
import { AlertTriangle, CheckCircle2, Clock, RefreshCw } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { formatCurrency, invoices } from '../../data/mockData';

const Invoices = () => {
  const syncedAmount = invoices.filter((invoice) => invoice.tallySyncStatus === 'synced').reduce((sum, invoice) => sum + invoice.amount, 0);
  const pendingAmount = invoices.filter((invoice) => invoice.tallySyncStatus !== 'synced').reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="animate-fade-in">
      <div className="page-heading">
        <div>
          <h1>Tally Sync and Invoices</h1>
          <p className="text-muted">Concept dashboard for accounting sync, invoice visibility, payment status, and exception handling.</p>
        </div>
        <Button variant="outline" style={{ display: 'flex', gap: '0.5rem' }}>
          <RefreshCw size={18} /> Run Sync
        </Button>
      </div>

      <div className="dashboard-grid mb-4">
        <Card>
          <CheckCircle2 color="#4ade80" />
          <h3 className="metric-label mt-2">Synced Income</h3>
          <div className="metric-value">{formatCurrency(syncedAmount)}</div>
        </Card>
        <Card>
          <Clock color="#fbbf24" />
          <h3 className="metric-label mt-2">Queued / Review</h3>
          <div className="metric-value">{formatCurrency(pendingAmount)}</div>
        </Card>
        <Card>
          <AlertTriangle color="#f87171" />
          <h3 className="metric-label mt-2">Sync Exceptions</h3>
          <div className="metric-value">{invoices.filter((invoice) => invoice.tallySyncStatus === 'error').length}</div>
        </Card>
      </div>

      <Card className="table-card">
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Party</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Tally Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td><strong>{invoice.invoiceNo}</strong></td>
                  <td>{invoice.partyName}</td>
                  <td>{invoice.date}</td>
                  <td>{formatCurrency(invoice.amount)}</td>
                  <td><span className={`pill ${invoice.paymentStatus}`}>{invoice.paymentStatus}</span></td>
                  <td><span className={`pill ${invoice.tallySyncStatus}`}>{invoice.tallySyncStatus}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Invoices;
