import Link from "next/link";
import { variantEditorContent } from "../../../../design/constants";

export default function ProductDetailPage() {
  return (
    <main className="app-content">
      <div className="page-shell">
        <div className="page-header">
          <div>
            <div className="page-title">{variantEditorContent.title}</div>
            <div className="section-subtitle">
              Quick view of product attributes. Use the variant editor for full control.
            </div>
          </div>
          <div className="page-controls">
            <Link href="/app/products/variant-editor" className="btn btn-primary">
              Edit variants
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Product summary</div>
          <div className="card-meta">Mirrors the reference design styling.</div>
          <div className="form-grid" style={{ marginTop: 12 }}>
            <div className="form-field">
              <label>Brand</label>
              <input defaultValue={variantEditorContent.attributes.brand} />
            </div>
            <div className="form-field">
              <label>Category</label>
              <input defaultValue={variantEditorContent.attributes.category} />
            </div>
            <div className="form-field">
              <label>Default tax code</label>
              <input defaultValue={variantEditorContent.attributes.taxCode} />
            </div>
            <div className="form-field">
              <label>Safety stock</label>
              <input defaultValue={variantEditorContent.attributes.safetyStock} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
