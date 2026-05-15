import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Users, FileText, Settings, LogOut, QrCode } from 'lucide-react';
import { roleAccess } from '../data/mockData';
import Card from '../components/ui/Card';

const DashboardLayout = () => {
  const location = useLocation();
  const role = localStorage.getItem('crosslineRole') || 'admin';

  const navItems = [
    { id: 'overview', icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/dashboard' },
    { id: 'inventory', icon: <Package size={20} />, label: 'Inventory', path: '/dashboard/inventory' },
    { id: 'barcodes', icon: <QrCode size={20} />, label: 'Barcode Migration', path: '/dashboard/barcodes' },
    { id: 'invoices', icon: <FileText size={20} />, label: 'Tally & Invoices', path: '/dashboard/invoices' },
    { id: 'vendors', icon: <Users size={20} />, label: 'Vendor Access', path: '/dashboard/vendors' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Settings', path: '/dashboard/settings' },
  ].filter((item) => roleAccess[role]?.includes(item.id));

  const roleLabels = {
    admin: 'Administrator',
    staff: 'Staff Operator',
    vendor: 'Vendor / Wholesaler',
  };
  const currentModule = location.pathname.split('/')[2] || 'overview';
  const canAccessCurrentModule = roleAccess[role]?.includes(currentModule);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      <aside className="dashboard-sidebar">
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', letterSpacing: '2px', fontFamily: '"Playfair Display", serif' }}>CROSSLINE OS</h2>
          <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Role: {roleLabels[role]}</p>
        </div>

        <nav style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.path}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                padding: '0.75rem 1rem', 
                borderRadius: '8px',
                backgroundColor: location.pathname === item.path ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                color: location.pathname === item.path ? 'var(--primary)' : 'var(--text-main)',
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ padding: '1.5rem 1rem', borderTop: '1px solid var(--border-color)' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', color: '#f87171' }}>
            <LogOut size={20} />
            Logout
          </Link>
        </div>
      </aside>

      <main className="dashboard-main">
        <header style={{ height: '70px', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', padding: '0 2rem', justifyContent: 'flex-end', backgroundColor: 'var(--bg-dark)' }}>
           <div className="flex items-center gap-3">
             <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>
               {roleLabels[role]?.charAt(0)}
             </div>
             <div>
               <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>{roleLabels[role]}</div>
               <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Hind Corporation</div>
             </div>
           </div>
        </header>

        <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
          {canAccessCurrentModule ? (
            <Outlet />
          ) : (
            <Card>
              <h1 className="mb-2">Restricted Area</h1>
              <p className="text-muted">
                The selected {roleLabels[role]} role cannot access this module. Switch roles on the login screen to preview additional permissions.
              </p>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
