import React, { useMemo, useState } from 'react';
import { CheckCircle2, Printer, QrCode, ScanLine } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { getProductById, tallyModelGroups, variants } from '../../data/mockData';

const nextBarcode = (variant) => `890${variant.sku.replaceAll('-', '')}`;

const Barcodes = () => {
  const [barcodeRows, setBarcodeRows] = useState(variants);

  const groupedProgress = useMemo(() => ({
    complete: barcodeRows.filter((row) => row.migrationStatus === 'verified').length,
    total: barcodeRows.length,
    pending: barcodeRows.filter((row) => row.migrationStatus === 'pending').length,
  }), [barcodeRows]);

  const generatePending = () => {
    setBarcodeRows((currentRows) => currentRows.map((row) => (
      row.migrationStatus === 'pending'
        ? { ...row, barcodeValue: nextBarcode(row), migrationStatus: 'generated' }
        : row
    )));
  };

  const markPrinted = (id) => {
    setBarcodeRows((currentRows) => currentRows.map((row) => (
      row.id === id ? { ...row, migrationStatus: 'printed' } : row
    )));
  };

  return (
    <div className="animate-fade-in">
      <div className="page-heading">
        <div>
          <h1>Barcode and QR Migration</h1>
          <p className="text-muted">A practical transition workflow for converting 200,000+ grouped products into unique variation-level scan records.</p>
        </div>
        <Button onClick={generatePending} style={{ display: 'flex', gap: '0.5rem' }}>
          <QrCode size={18} /> Generate Pending
        </Button>
      </div>

      <div className="dashboard-grid mb-4">
        <Card>
          <h3 className="metric-label">Migration Window</h3>
          <div className="metric-value">2-3 months</div>
          <p className="text-sm text-muted">Recommended staged verification while Tally remains the accounting source of truth.</p>
        </Card>
        <Card>
          <h3 className="metric-label">Verified Variations</h3>
          <div className="metric-value">{groupedProgress.complete}/{groupedProgress.total}</div>
          <div className="migration-bar mt-2"><span style={{ width: `${(groupedProgress.complete / groupedProgress.total) * 100}%` }} /></div>
        </Card>
        <Card>
          <h3 className="metric-label">Pending Generation</h3>
          <div className="metric-value">{groupedProgress.pending}</div>
          <p className="text-sm text-muted">Rows without a barcode value yet.</p>
        </Card>
      </div>

      <div className="two-column-grid mb-4">
        <Card>
          <h3 className="mb-3">Tally Grouped Model Records</h3>
          <div className="stack">
            {tallyModelGroups.map((group) => (
              <div className="row-split" key={group.model}>
                <div>
                  <strong>{group.model}</strong>
                  <div className="text-sm text-muted">{group.detectedColors} colors, {group.detectedSizes} sizes detected</div>
                </div>
                <div className="text-right">
                  <strong>{group.tallyStock.toLocaleString('en-IN')}</strong>
                  <div className="text-sm text-muted">{group.generatedVariants} variation rows</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3">Barcode Lifecycle</h3>
          <div className="lifecycle">
            <span><QrCode size={18} /> Pending</span>
            <span><CheckCircle2 size={18} /> Generated</span>
            <span><Printer size={18} /> Printed</span>
            <span><ScanLine size={18} /> Scanned</span>
            <span><CheckCircle2 size={18} /> Verified</span>
          </div>
        </Card>
      </div>

      <Card className="table-card">
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th>Variation</th>
                <th>SKU</th>
                <th>Barcode / QR Value</th>
                <th>Qty</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {barcodeRows.map((row) => {
                const product = getProductById(row.productId);
                return (
                  <tr key={row.id}>
                    <td>
                      <strong>{product?.model}</strong>
                      <span>{row.color} / {row.size}</span>
                    </td>
                    <td>{row.sku}</td>
                    <td>{row.barcodeValue || 'Awaiting generation'}</td>
                    <td>{row.stockQty.toLocaleString('en-IN')}</td>
                    <td><span className={`pill ${row.migrationStatus}`}>{row.migrationStatus}</span></td>
                    <td>
                      <Button size="sm" variant="secondary" onClick={() => markPrinted(row.id)} disabled={row.migrationStatus === 'pending'}>
                        Mark Printed
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Barcodes;
