import Link from "next/link";

export default function Home() {
  return (
    <main className="app-content">
      {/* Hero Section */}
      <section className="hero">
        <div>
          <div className="hero-highlight">
            <span>Unified Marketplace Console</span>
          </div>
          <h1 className="hero-title">
            Sync Amazon, Flipkart & more from one clean dashboard.
          </h1>
          <p className="hero-subtitle">
            MarketSync centralizes your catalog, variants, inventory and orders
            across every seller account and region — without spreadsheets, CSV
            uploads or painful manual updates.
          </p>
          <div className="hero-actions">
            <Link href="/dashboard" className="btn btn-primary">
              Launch Console
            </Link>
            <Link href="/connect" className="btn btn-outline">
              Connect Marketplaces
            </Link>
          </div>
          <div className="hero-meta">
            <span>
              <span className="dot"></span> Live inventory sync
            </span>
            <span>Multi-region Amazon & Flipkart</span>
            <span>Built for teams of all sizes</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-title">Listing Sync Timeline</div>
              <div className="hero-card-badges">
                <div className="badge-pill">Real-time</div>
                <div className="badge-pill">Multi-vendor</div>
              </div>
            </div>
            <div className="hero-card-body">
              <div className="hero-sync-row">
                <div className="logo-circle">MS</div>
                <div className="hero-sync-card">
                  <div className="hero-sync-card-title">
                    Variant updated • Navy Hoodie / M
                  </div>
                  <div className="hero-sync-card-meta">
                    <span>Price: ₹1,299 → ₹1,349</span>
                    <span>Stock: 48</span>
                  </div>
                </div>
                <div className="sync-arrow">⟳</div>
              </div>
              <div className="hero-sync-row">
                <div className="logo-circle">A</div>
                <div className="hero-sync-card">
                  <div className="hero-sync-card-title">
                    Amazon IN • 3 listings matched
                  </div>
                  <div className="hero-sync-card-meta">
                    <span>Queued in 240ms</span>
                    <span>
                      ETA <strong>9s</strong>
                    </span>
                  </div>
                </div>
                <div className="logo-circle flipkart">f</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="section-header">
          <div>
            <div className="section-title">
              Everything you need to stay in sync
            </div>
            <div className="section-subtitle">
              Modern UI, minimal clicks, zero marketplace spreadsheets.
            </div>
          </div>
          <Link href="/dashboard" className="btn btn-outline">
            View sample dashboard
          </Link>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">📦</div>
            <div className="feature-title">Central catalog & variants</div>
            <div className="feature-text">
              Maintain one clean product & variant catalog and mirror it to
              every marketplace and seller account.
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-icon">⚡</div>
            <div className="feature-title">Smart sync engine</div>
            <div className="feature-text">
              Incremental updates, retry queues, multi-region rules and
              conflict-safe inventory propagation.
            </div>
          </article>
          <article className="feature-card">
            <div className="feature-icon">📊</div>
            <div className="feature-title">Orders in one place</div>
            <div className="feature-text">
              See all orders, line items and stock impact across Amazon,
              Flipkart and more — from one view.
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
