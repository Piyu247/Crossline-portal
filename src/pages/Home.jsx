import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Barcode,
  Boxes,
  Building2,
  Eye,
  Globe2,
  PackageCheck,
  ShieldCheck,
  Store,
} from 'lucide-react';
import Button from '../components/ui/Button';

const collectionCards = [
  {
    label: 'NewStyles',
    title: 'Premium, comfortable, trendy',
    copy: 'The Crossline Instagram language is approachable, warm, and style-forward: eyewear for daily confidence.',
    image: '/instagram/crossline-campaign-03.jpg',
  },
  {
    label: 'Mood',
    title: 'Eyewear for all',
    copy: 'Lifestyle-led storytelling keeps the brand human while the B2B portal handles serious operations behind the scenes.',
    image: '/instagram/crossline-campaign-02.jpg',
  },
];

const Home = () => {
  return (
    <div className="home-reimagined animate-fade-in">
      <section className="campaign-hero">
        <div className="campaign-media">
          <img src="/instagram/crossline-hero-desktop.png" alt="Crossline premium optical frame campaign" />
          <div className="campaign-shade" />
        </div>

        <div className="container campaign-content">
          <div className="campaign-kicker">
            <Globe2 size={16} />
            Hind Corporation / Maharashtra / India
          </div>
          <h1>CROSSLINE</h1>
          <p>
            Premium | Comfortable | Trendy eyewear for all, built with an intelligent wholesale backbone for Hind Corporation.
          </p>
          <div className="campaign-actions">
            <Link to="/products">
              <Button size="lg" style={{ gap: '0.55rem' }}>
                View Collection <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg">Enter B2B Portal</Button>
            </Link>
          </div>
        </div>

        <div className="container campaign-footer">
          <span>200,000+ product migration</span>
          <span>Model · color · size barcode control</span>
          <span>#NewStyles · #Mood · #EyeCare</span>
        </div>
      </section>

      <section className="editorial-intro">
        <div className="container intro-grid">
          <div>
            <span className="section-label">New business language</span>
            <h2>Not just a website. A showroom, a catalog, and a command layer.</h2>
          </div>
          <p>
            Crossline already has a real social voice: playful, warm, comfortable, and trend-led. The website now carries that personality while quietly powering wholesale operations, vendor permissions, Tally sync, invoices, and barcode migration.
          </p>
        </div>
      </section>

      <section className="collection-editorial">
        <div className="container collection-editorial-grid">
          {collectionCards.map((card) => (
            <Link to={card.label === 'Optical' ? '/products' : '/login'} className="editorial-card" key={card.label}>
              <img src={card.image} alt={`${card.label} Crossline story`} />
              <div>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="brand-principles">
        <div className="container principle-grid">
          <div className="principle-card">
            <span>01</span>
            <Eye />
            <h3>Fashion-first presentation</h3>
            <p>Large imagery, minimal copy, and collection-led browsing make Crossline feel like a brand, not a stock list.</p>
          </div>
          <div className="principle-card">
            <span>02</span>
            <ShieldCheck />
            <h3>Permission-first trade</h3>
            <p>Admins decide what vendors, staff, and wholesalers can see, quote, order, or operate.</p>
          </div>
          <div className="principle-card">
            <span>03</span>
            <PackageCheck />
            <h3>Operational credibility</h3>
            <p>Every product variation can become barcode-ready without losing the Tally workflow during migration.</p>
          </div>
        </div>
      </section>

      <section className="trade-os-section">
        <div className="container trade-os-grid">
          <div>
            <span className="section-label">Crossline OS</span>
            <h2>Playful outside. Disciplined inside.</h2>
            <p className="text-muted">
              The public brand experience feels close to the Instagram identity, while the portal stays worker-friendly for stock, billing, vendors, and a staged 2-3 month barcode conversion.
            </p>
            <div className="trade-actions">
              <Link to="/login"><Button>Preview Dashboard</Button></Link>
              <Link to="/contact"><Button variant="secondary">Partner Inquiry</Button></Link>
            </div>
          </div>

          <div className="os-showcase">
            <div className="os-row">
              <div><Barcode /><strong>CL-ALP-CBL-52</strong><span>Carbon Black · 52mm · generated</span></div>
              <div><Boxes /><strong>6,880</strong><span>CL-Alpha tally stock split into variations</span></div>
            </div>
            <div className="os-timeline">
              <span className="active">Tally import</span>
              <span className="active">Variant map</span>
              <span className="active">QR generate</span>
              <span>Print</span>
              <span>Scan verify</span>
            </div>
            <div className="os-row">
              <div><Building2 /><strong>Admin</strong><span>Full catalog, invoices, settings</span></div>
              <div><Store /><strong>Vendor</strong><span>Approved stock and price visibility only</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="commerce-path">
        <div className="container commerce-grid">
          <div>
            <span className="section-label">Six-month growth path</span>
            <h2>Built for B2B now. Ready for B2C when the market proves it.</h2>
          </div>
          <div className="commerce-card">
            <span>01</span>
            <h3>Wholesale launch</h3>
            <p>Invite vendors, manage permissions, show stock, and keep operations staff comfortable.</p>
          </div>
          <div className="commerce-card">
            <span>02</span>
            <h3>Demand signal</h3>
            <p>Track interest by model, material, region, vendor, and category before opening consumer sales.</p>
          </div>
          <div className="commerce-card">
            <span>03</span>
            <h3>Direct storefront</h3>
            <p>Reuse the premium catalog language for a public shopping experience with trust and service hooks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
