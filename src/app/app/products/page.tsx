import Link from "next/link";
import { productsContent } from "../../../design/constants";

export default function ProductsPage() {
  return (
    <main className="app-content">
      <div className="page-shell">
        <div className="page-header">
          <div>
            <div className="page-title">{productsContent.title}</div>
            <div className="section-subtitle">{productsContent.subtitle}</div>
          </div>
          <div className="page-controls">
            <button className="btn btn-outline">{productsContent.controls[0]}</button>
            <button className="btn btn-primary">{productsContent.controls[1]}</button>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Variants</th>
                <th>Base price</th>
                <th>Inventory</th>
                <th>Listings</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productsContent.rows.map((row) => (
                <tr key={row.sku}>
                  <td>{row.product}</td>
                  <td>{row.sku}</td>
                  <td>{row.variants}</td>
                  <td>{row.price}</td>
                  <td>{row.inventory}</td>
                  <td>{row.listings}</td>
                  <td>
                    <Link
                      href="/app/products/variant-editor"
                      className="btn btn-outline"
                      style={{ padding: "4px 10px", fontSize: "11px" }}
                    >
                      Edit variants
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
