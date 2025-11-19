import Link from "next/link";

const highlights = [
  "Live inventory sync",
  "Multi-region Amazon & Flipkart",
  "Designed for modern ops teams",
];

const featureCards = [
  {
    title: "Central catalog & variants",
    icon: "📦",
    copy: "Unify parent SKUs, colorways, and sizes without brittle spreadsheets.",
  },
  {
    title: "Smart sync engine",
    icon: "⚡",
    copy: "Queue updates, detect conflicts, and stream confirmations in seconds.",
  },
  {
    title: "Orders in one place",
    icon: "📊",
    copy: "Surface fulfillment priorities and late risk across every marketplace.",
  },
];

const howItWorks = [
  "Connect Amazon, Flipkart, and Meesho stores with guided OAuth flows.",
  "Import catalog + variants, dedupe conflicts, and map to unified SKUs.",
  "Trigger sync jobs with live timelines and alerting for every status change.",
];

const pricingHighlights = [
  { plan: "Starter", detail: "Up to 1,000 SKUs · ₹9,500/mo" },
  { plan: "Growth", detail: "10,000 SKUs · ₹25,000/mo" },
  { plan: "Scale", detail: "Unlimited marketplaces · Talk to sales" },
];

export default function Home() {
  return (
    <div className="space-y-24 py-16 sm:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-mid-gray/70 bg-white px-4 py-1 text-sm font-semibold text-navy shadow-subtle">
              <span className="h-2 w-2 rounded-full bg-teal" />
              Unified marketplace console
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold text-navy sm:text-5xl">
                Sync Amazon, Flipkart & more from one clean dashboard.
              </h1>
              <p className="text-lg text-slate-600">
                MarketSync centralizes product catalogs, variant pricing, and
                high-volume orders so your ops team never juggles logins again.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/app/dashboard"
                className="flex items-center justify-center rounded-full bg-teal px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-teal/90"
              >
                Launch console
              </Link>
              <Link
                href="/app/connect"
                className="flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-navy transition hover:border-navy/50"
              >
                Connect marketplaces
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/80 bg-white px-4 py-2 text-sm text-slate-600 shadow-subtle"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-navy via-navy to-slate-900 p-1 shadow-soft">
              <div className="space-y-6 rounded-2xl bg-white/95 p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Listing sync timeline
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white font-semibold">
                      MS
                    </div>
                    <div className="flex-1 rounded-xl border border-dashed border-mid-gray/70 bg-soft-gray px-5 py-4">
                      <p className="text-sm font-semibold text-navy">
                        Variant updated • Navy Hoodie / M
                      </p>
                      <div className="mt-2 text-xs text-slate-600">
                        <p>Price: ₹1,299 → ₹1,349</p>
                        <p>Stock: 48</p>
                      </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-slate-300 text-xl text-navy">
                      ⟳
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-200 text-lg font-semibold text-navy">
                      A
                    </div>
                    <div className="flex-1 rounded-xl border border-dashed border-mid-gray/70 bg-soft-gray px-5 py-4">
                      <p className="text-sm font-semibold text-navy">
                        Amazon IN • 3 listings matched
                      </p>
                      <div className="mt-2 text-xs text-slate-600">
                        <p>Queued in 240ms</p>
                        <p>ETA 9s</p>
                      </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-lg font-semibold text-white">
                      f
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="product"
        className="mx-auto max-w-6xl space-y-12 px-6"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-navy">
              Everything you need to stay in sync
            </h2>
            <p className="text-lg text-slate-600">
              Modern UI, minimal clicks, zero marketplace spreadsheets.
            </p>
          </div>
          <Link
            href="/app/dashboard"
            className="self-start rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-navy shadow-subtle transition hover:border-navy/50"
          >
            View sample dashboard
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/80 bg-white p-6 shadow-subtle"
            >
              <div className="text-3xl">{card.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-navy">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{card.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/80 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy">
            Launch MarketSync in an afternoon
          </h2>
          <div className="mt-6 space-y-4 text-slate-600">
            {howItWorks.map((step, index) => (
              <div key={step} className="flex gap-3 text-base">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-soft-gray text-sm font-semibold text-navy">
                  {index + 1}
                </span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/80 bg-white p-8 shadow-subtle">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal">
                Pricing
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-navy">
                Predictable pricing for every ops team
              </h2>
              <p className="mt-2 text-slate-600">
                Flat fees per catalog size. Unlimited users, workflows, and
                automation.
              </p>
            </div>
            <Link
              href="/app/connect"
              className="self-start rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-teal/90"
            >
              Talk to sales
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pricingHighlights.map((item) => (
              <div
                key={item.plan}
                className="rounded-xl border border-slate-100 bg-soft-gray px-5 py-4"
              >
                <p className="text-sm font-semibold text-teal">{item.plan}</p>
                <p className="text-lg font-medium text-navy">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
