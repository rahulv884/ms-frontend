import Link from "next/link";
import { brand, homeContent } from "../design/constants";

export default function Home() {
  return (
    <main className="app-content">
      <section className="hero">
        <div>
          <div className="hero-highlight">
            <span>{brand.heroHighlight}</span>
          </div>
          <h1 className="hero-title">{homeContent.title}</h1>
          <p className="hero-subtitle">{homeContent.subtitle}</p>
          <div className="hero-actions">
            {homeContent.actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`btn ${action.variant === "primary" ? "btn-primary" : "btn-outline"}`}
              >
                {action.label}
              </Link>
            ))}
          </div>
          <div className="hero-meta">
            {homeContent.meta.map((item) => (
              <span key={item}>
                <span className="dot" /> {item}
              </span>
            ))}
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
                <div className="logo-circle">
                  {homeContent.timeline.cards[0].logo}
                </div>
                <div className="hero-sync-card">
                  <div className="hero-sync-card-title">
                    {homeContent.timeline.cards[0].title}
                  </div>
                  <div className="hero-sync-card-meta">
                    <span>{homeContent.timeline.cards[0].priceChange}</span>
                    <span>{homeContent.timeline.cards[0].stock}</span>
                  </div>
                </div>
                <div className="sync-arrow">{homeContent.timeline.cards[0].arrow}</div>
              </div>
              <div className="hero-sync-row">
                <div className="logo-circle">
                  {homeContent.timeline.cards[1].logo}
                </div>
                <div className="hero-sync-card">
                  <div className="hero-sync-card-title">
                    {homeContent.timeline.cards[1].title}
                  </div>
                  <div className="hero-sync-card-meta">
                    <span>{homeContent.timeline.cards[1].queued}</span>
                    <span>
                      ETA <strong>{homeContent.timeline.cards[1].eta}</strong>
                    </span>
                  </div>
                </div>
                <div className="logo-circle flipkart">
                  {homeContent.timeline.cards[1].rightLogo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <Link href="/app/dashboard" className="btn btn-outline">
            View sample dashboard
          </Link>
        </div>
        <div className="feature-grid">
          {homeContent.features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-title">{feature.title}</div>
              <div className="feature-text">{feature.text}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
