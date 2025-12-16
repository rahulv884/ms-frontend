export const theme = {
  colors: {
    navy: "#0A2540",
    softGray: "#F7F9FC",
    midGray: "#CBD4E1",
    teal: "#1C9393",
    white: "#FFFFFF",
    text: "#1F2933",
  },
  radii: {
    lg: "16px",
    md: "12px",
  },
  shadows: {
    soft: "0 18px 40px rgba(15, 35, 52, 0.10)",
    subtle: "0 10px 25px rgba(15, 35, 52, 0.08)",
  },
  layout: {
    maxWidth: 1120,
  },
};

export const brand = {
  name: "MarketSync",
  tagline: "Multi-channel listings",
  mark: "MS",
  footer: "© 2025 MarketSync — Multi-channel product & order sync",
  heroHighlight: "Unified Marketplace Console",
};

export const navLinks = [
  { href: "/app/dashboard", label: "Dashboard" },
  { href: "/app/products", label: "Products" },
  { href: "/app/listings", label: "Listings" },
  { href: "/app/orders", label: "Orders" },
  { href: "/app/connect", label: "Connections" },
  { href: "/app/settings", label: "Settings" },
];

export const headerCtas = {
  loginHref: "/login",
  primaryHref: "/login",
  primaryLabel: "Open Console",
};

export const homeContent = {
  title: "Sync Amazon, Flipkart & more from one clean dashboard.",
  subtitle:
    "MarketSync centralizes your catalog, variants, inventory and orders across every seller account and region — without spreadsheets, CSV uploads or painful manual updates.",
  actions: [
    { label: "Launch Console", href: "/app/dashboard", variant: "primary" },
    { label: "Connect Marketplaces", href: "/app/connect", variant: "outline" },
  ],
  meta: [
    "Live inventory sync",
    "Multi-region Amazon & Flipkart",
    "Built for teams of all sizes",
  ],
  timeline: {
    cards: [
      {
        logo: "MS",
        title: "Variant updated — Navy Hoodie / M",
        priceChange: "Price: ₹11,299 → ₹11,349",
        stock: "Stock: 48",
        arrow: "↗",
        rightLogo: "",
      },
      {
        logo: "A",
        title: "Amazon IN — 3 listings matched",
        queued: "Queued in 240ms",
        eta: "ETA 9s",
        rightLogo: "f",
      },
    ],
  },
  features: [
    {
      icon: "⌁",
      title: "Central catalog & variants",
      text: "Maintain one clean product & variant catalog and mirror it to every marketplace and seller account.",
    },
    {
      icon: "⚡",
      title: "Smart sync engine",
      text: "Incremental updates, retry queues, multi-region rules and conflict-safe inventory propagation.",
    },
    {
      icon: "☰",
      title: "Orders in one place",
      text: "See all orders, line items and stock impact across Amazon, Flipkart and more — from one view.",
    },
  ],
};

export const dashboardContent = {
  title: "Dashboard",
  subtitle: "Today’s performance across all marketplaces & accounts.",
  stats: [
    { title: "Net revenue", value: "₹11,48,920", meta: "+18.4% vs yesterday" },
    { title: "Orders", value: "326", meta: "Amazon • Flipkart • Meesho" },
    { title: "Listings in sync", value: "1,204", meta: "97.2% healthy • 34 warnings" },
    { title: "Inventory risk", value: "12 SKUs", meta: "Low stock across at least one channel" },
  ],
  syncJobs: [
    { time: "10:04", type: "Inventory", marketplace: "Amazon IN • Main", listing: "Navy Hoodie / M", status: "Synced" },
    { time: "10:01", type: "Price", marketplace: "Flipkart IN • Fashion", listing: "Running Shoes / 9", status: "Synced" },
    { time: "09:56", type: "Create listing", marketplace: "Amazon US • Apparel", listing: "Graphic Tee / L", status: "Warning" },
    { time: "09:52", type: "Order import", marketplace: "Amazon IN • Main", listing: "#IN-438291", status: "Completed" },
  ],
  channels: [
    { connection: "Amazon IN • Main", region: "IN", listings: "624", errors: "0", status: "success" },
    { connection: "Amazon IN • Outlet", region: "IN", listings: "188", errors: "3", status: "warning" },
    { connection: "Amazon US • Apparel", region: "US", listings: "240", errors: "1", status: "muted" },
    { connection: "Flipkart • Fashion", region: "IN", listings: "152", errors: "0", status: "success" },
  ],
};

export const productsContent = {
  title: "Products",
  subtitle: "Your master catalog — variants, images and inventory in one place.",
  controls: ["Import CSV", "New product"],
  rows: [
    {
      product: "Navy Essential Hoodie",
      sku: "HOODIE-NAVY",
      variants: "6",
      price: "₹11,299",
      inventory: "214",
      listings: "Amazon (3) • Flipkart (2)",
    },
    {
      product: "Everyday Running Shoe",
      sku: "RUN-SHOE",
      variants: "8",
      price: "₹12,799",
      inventory: "87",
      listings: "Amazon (2) • Meesho (1)",
    },
    {
      product: "Graphic Tee Pack",
      sku: "TEE-GRAPHIC",
      variants: "4",
      price: "₹1,899",
      inventory: "142",
      listings: "Amazon (1)",
    },
  ],
};

export const listingsContent = {
  title: "Listings",
  subtitle: "All channels, all seller accounts, one clean view.",
  controls: ["Filter", "Bulk sync"],
  rows: [
    {
      product: "Navy Essential Hoodie",
      sku: "HOODIE-NAVY-M",
      marketplace: "Amazon",
      account: "Main Store",
      region: "IN",
      status: "Active",
      price: "₹11,299",
      stock: "48",
      lastSync: "Just now",
    },
    {
      product: "Navy Essential Hoodie",
      sku: "HOODIE-NAVY-M",
      marketplace: "Flipkart",
      account: "Flipkart Fashion",
      region: "IN",
      status: "Active",
      price: "₹11,279",
      stock: "48",
      lastSync: "3 min ago",
    },
    {
      product: "Navy Essential Hoodie",
      sku: "HOODIE-NAVY-M",
      marketplace: "Amazon",
      account: "US Apparel",
      region: "US",
      status: "Warning",
      price: "$24.00",
      stock: "12",
      lastSync: "18 min ago",
    },
  ],
};

export const ordersContent = {
  title: "Orders",
  subtitle: "Unified order view across Amazon, Flipkart and Meesho.",
  controls: ["Import now", "Export report"],
  rows: [
    {
      id: "IN-438291",
      marketplace: "Amazon",
      account: "Main Store",
      date: "Today, 09:52",
      items: "3",
      total: "₹13,997",
      status: "Shipped",
    },
    {
      id: "FK-882110",
      marketplace: "Flipkart",
      account: "Flipkart Fashion",
      date: "Today, 09:21",
      items: "1",
      total: "₹11,279",
      status: "Awaiting pickup",
    },
    {
      id: "US-993011",
      marketplace: "Amazon",
      account: "US Apparel",
      date: "Yesterday, 21:10",
      items: "2",
      total: "$48.00",
      status: "Delivered",
    },
  ],
};

export const connectionsContent = {
  title: "Marketplace connections",
  subtitle:
    "Connect Amazon, Flipkart, Meesho and more — including multiple seller accounts per region.",
  controls: ["Add connection"],
  connections: [
    { marketplace: "Amazon", label: "Main Store", region: "IN", status: "Active", lastSync: "2 min ago" },
    { marketplace: "Amazon", label: "Outlet / Clearance", region: "IN", status: "Active", lastSync: "5 min ago" },
    { marketplace: "Amazon", label: "US Apparel", region: "US", status: "Token expiring", lastSync: "14 min ago" },
    { marketplace: "Flipkart", label: "Flipkart Fashion", region: "IN", status: "Active", lastSync: "1 min ago" },
    { marketplace: "Meesho", label: "Meesho India", region: "IN", status: "Paused", lastSync: "Yesterday" },
  ],
  formDefaults: {
    marketplace: "Amazon",
    region: "IN",
    label: "Amazon IN — Main Store",
    mode: "OAuth (recommended)",
  },
};

export const settingsContent = {
  title: "Settings",
  subtitle: "Workspace, tokens and sync behaviour.",
  workspace: {
    name: "MarketSync — Demo Store",
    currency: "INR",
    timezone: "Asia/Kolkata (IST)",
    lowStock: "5",
  },
  syncEngine: {
    priceCadence: "On change only",
    inventoryCadence: "Near real-time",
    parallelJobs: "8",
    alertEmail: "ops@marketsync.app",
  },
};

export const variantEditorContent = {
  title: "Navy Essential Hoodie",
  subtitle: "Edit variants, attributes and inventory before syncing to marketplaces.",
  controls: [
    { label: "Back to products", href: "/app/products", variant: "outline" },
    { label: "Save changes", href: "#", variant: "primary" },
  ],
  variants: [
    { size: "M", color: "Navy", sku: "HOODIE-NAVY-M", price: "₹11,299", stock: "48", listings: "Amazon (3) • Flipkart (1)" },
    { size: "L", color: "Navy", sku: "HOODIE-NAVY-L", price: "₹11,299", stock: "42", listings: "Amazon (3) • Flipkart (1)" },
    { size: "XL", color: "Navy", sku: "HOODIE-NAVY-XL", price: "₹11,349", stock: "38", listings: "Amazon (2)" },
  ],
  attributes: {
    brand: "MarketSync Originals",
    category: "Apparel / Hoodies",
    taxCode: "IN-GST-APPAREL-12%",
    safetyStock: "5",
  },
};

export const loginContent = {
  title: "Sign in",
  subtitle: "Use your workspace email to continue.",
  heroTitle: "One login for every marketplace.",
  heroText:
    "Sign in to orchestrate products, variants, inventory and orders across Amazon, Flipkart, Meesho and more. Built for growing teams that hate spreadsheets.",
  requestAccessText: "Request access",
};
