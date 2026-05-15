export const products = [
  {
    id: 'prod-cl-alpha',
    model: 'CL-Alpha',
    material: 'Italian Acetate',
    category: 'Acetate',
    collection: 'Executive',
    image: '/instagram/crossline-campaign-03.jpg',
    visibility: 'public',
    wholesalePrice: 1200,
    retailReady: true,
  },
  {
    id: 'prod-cl-aero',
    model: 'CL-Aero',
    material: 'Titanium Blend',
    category: 'Metal',
    collection: 'Ultra Light',
    image: '/instagram/crossline-campaign-04.jpg',
    visibility: 'vendor',
    wholesalePrice: 2500,
    retailReady: true,
  },
  {
    id: 'prod-cl-horizon',
    model: 'CL-Horizon',
    material: 'TR-90 Flex',
    category: 'TR-90',
    collection: 'Daily Comfort',
    image: '/instagram/crossline-campaign-02.jpg',
    visibility: 'public',
    wholesalePrice: 950,
    retailReady: false,
  },
  {
    id: 'prod-cl-nova',
    model: 'CL-Nova',
    material: 'Stainless Steel',
    category: 'Metal',
    collection: 'Premium',
    image: '/instagram/crossline-campaign-01.webp',
    visibility: 'private',
    wholesalePrice: 1800,
    retailReady: false,
  },
];

export const variants = [
  {
    id: 'var-alpha-black-52',
    productId: 'prod-cl-alpha',
    color: 'Carbon Black',
    size: '52mm',
    sku: 'CL-ALP-CBL-52',
    barcodeValue: '890CLALPCBL52',
    stockQty: 4200,
    migrationStatus: 'verified',
  },
  {
    id: 'var-alpha-gold-52',
    productId: 'prod-cl-alpha',
    color: 'Champagne Gold',
    size: '52mm',
    sku: 'CL-ALP-CGD-52',
    barcodeValue: '890CLALPCGD52',
    stockQty: 1900,
    migrationStatus: 'printed',
  },
  {
    id: 'var-alpha-tortoise-54',
    productId: 'prod-cl-alpha',
    color: 'Tortoise',
    size: '54mm',
    sku: 'CL-ALP-TOR-54',
    barcodeValue: '890CLALPTOR54',
    stockQty: 780,
    migrationStatus: 'generated',
  },
  {
    id: 'var-aero-silver-50',
    productId: 'prod-cl-aero',
    color: 'Brushed Silver',
    size: '50mm',
    sku: 'CL-AER-BSV-50',
    barcodeValue: '',
    stockQty: 320,
    migrationStatus: 'pending',
  },
  {
    id: 'var-horizon-clear-54',
    productId: 'prod-cl-horizon',
    color: 'Crystal Clear',
    size: '54mm',
    sku: 'CL-HOR-CLR-54',
    barcodeValue: '',
    stockQty: 210,
    migrationStatus: 'pending',
  },
  {
    id: 'var-nova-blue-52',
    productId: 'prod-cl-nova',
    color: 'Midnight Blue',
    size: '52mm',
    sku: 'CL-NOV-MBL-52',
    barcodeValue: '890CLNOVMBL52',
    stockQty: 0,
    migrationStatus: 'scanned',
  },
];

export const vendors = [
  {
    id: 'ven-01',
    companyName: 'Shree Optics Wholesale',
    region: 'Mumbai, Maharashtra',
    accessLevel: 'Gold Vendor',
    allowedCategories: ['Acetate', 'Metal', 'TR-90'],
    status: 'active',
    monthlyOrderValue: 640000,
  },
  {
    id: 'ven-02',
    companyName: 'Vision Trade Hub',
    region: 'Pune, Maharashtra',
    accessLevel: 'Silver Vendor',
    allowedCategories: ['Acetate', 'TR-90'],
    status: 'active',
    monthlyOrderValue: 315000,
  },
  {
    id: 'ven-03',
    companyName: 'OptiLine Retail Network',
    region: 'Nagpur, Maharashtra',
    accessLevel: 'Trial Vendor',
    allowedCategories: ['Acetate'],
    status: 'review',
    monthlyOrderValue: 118000,
  },
];

export const invoices = [
  {
    id: 'inv-01',
    invoiceNo: 'INV-2026-001',
    partyName: 'Shree Optics Wholesale',
    amount: 245000,
    paymentStatus: 'paid',
    tallySyncStatus: 'synced',
    date: '2026-05-14',
  },
  {
    id: 'inv-02',
    invoiceNo: 'INV-2026-002',
    partyName: 'Vision Trade Hub',
    amount: 184500,
    paymentStatus: 'pending',
    tallySyncStatus: 'queued',
    date: '2026-05-15',
  },
  {
    id: 'inv-03',
    invoiceNo: 'INV-2026-003',
    partyName: 'OptiLine Retail Network',
    amount: 92000,
    paymentStatus: 'partial',
    tallySyncStatus: 'error',
    date: '2026-05-15',
  },
];

export const tallyModelGroups = [
  {
    model: 'CL-Alpha',
    tallyStock: 6880,
    detectedColors: 3,
    detectedSizes: 2,
    generatedVariants: 3,
  },
  {
    model: 'CL-Aero',
    tallyStock: 320,
    detectedColors: 1,
    detectedSizes: 1,
    generatedVariants: 1,
  },
  {
    model: 'CL-Horizon',
    tallyStock: 210,
    detectedColors: 1,
    detectedSizes: 1,
    generatedVariants: 1,
  },
];

export const roleAccess = {
  admin: ['overview', 'inventory', 'barcodes', 'invoices', 'vendors', 'settings'],
  staff: ['overview', 'inventory', 'barcodes', 'invoices'],
  vendor: ['overview', 'inventory'],
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);

export const getProductById = (productId) => products.find((product) => product.id === productId);
