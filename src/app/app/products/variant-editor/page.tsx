import Link from "next/link";
import { variantEditorContent } from "../../../../design/constants";

export default function VariantEditorPage() {
  return (
    <main className="app-content">
      <div className="page-shell">
        <div className="page-header">
          <div>
            <div className="page-title">{variantEditorContent.title}</div>
            <div className="section-subtitle">{variantEditorContent.subtitle}</div>
          </div>
          <div className="page-controls">
            <Link href={variantEditorContent.controls[0].href} className="btn btn-outline">
              {variantEditorContent.controls[0].label}
            </Link>
            <button className="btn btn-primary">{variantEditorContent.controls[1].label}</button>
          </div>
        </div>

        <div className="two-column">
          <div className="card">
            <div className="card-title">Variants</div>
            <div className="card-meta">Each row represents a unique sellable SKU.</div>
            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Color</th>
                    <th>Variant SKU</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Listings</th>
                  </tr>
                </thead>
                <tbody>
                  {variantEditorContent.variants.map((variant) => (
                    <tr key={variant.sku}>
                      <td>{variant.size}</td>
                      <td>{variant.color}</td>
                      <td>{variant.sku}</td>
                      <td>{variant.price}</td>
                      <td>{variant.stock}</td>
                      <td>{variant.listings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Attributes & inventory</div>
            <div className="card-meta">Edit shared attributes and inventory settings.</div>
            <div className="form-grid">
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
                <label>Safety stock (per variant)</label>
                <input defaultValue={variantEditorContent.attributes.safetyStock} />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary">Apply to all variants</button>
              <button className="btn btn-outline">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
