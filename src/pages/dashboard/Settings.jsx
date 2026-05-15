import React from 'react';
import { Building2, KeyRound, QrCode } from 'lucide-react';
import Card from '../../components/ui/Card';

const Settings = () => (
  <div className="animate-fade-in">
    <div className="page-heading">
      <div>
        <h1>System Settings</h1>
        <p className="text-muted">Prototype controls for company profile, role permissions, and barcode rules.</p>
      </div>
    </div>

    <div className="settings-grid">
      <Card>
        <Building2 color="var(--primary)" />
        <h3 className="mt-2 mb-2">Company Profile</h3>
        <div className="stack">
          <label>Company name<input defaultValue="Hind Corporation" /></label>
          <label>Brand name<input defaultValue="Crossline" /></label>
          <label>Primary market<input defaultValue="B2B wholesale, Maharashtra and India" /></label>
        </div>
      </Card>
      <Card>
        <KeyRound color="var(--primary)" />
        <h3 className="mt-2 mb-2">Role Permissions</h3>
        <div className="permission-list">
          <label><input type="checkbox" defaultChecked /> Admin: all modules and financial data</label>
          <label><input type="checkbox" defaultChecked /> Staff: inventory, barcode, invoice operations</label>
          <label><input type="checkbox" defaultChecked /> Vendor: permitted catalog and stock view only</label>
        </div>
      </Card>
      <Card>
        <QrCode color="var(--primary)" />
        <h3 className="mt-2 mb-2">Barcode Rules</h3>
        <div className="stack">
          <label>Prefix<input defaultValue="890-CL" /></label>
          <label>Variation format<input defaultValue="MODEL-COLOR-SIZE" /></label>
          <label>Verification policy<input defaultValue="Scan once before stock confirmation" /></label>
        </div>
      </Card>
    </div>
  </div>
);

export default Settings;
