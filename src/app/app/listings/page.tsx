import { listingsContent } from "../../../design/constants";

function statusClass(status: string) {
  if (status === "Active") return "badge badge-success";
  if (status === "Warning") return "badge badge-warning";
  return "badge badge-muted";
}

export default function ListingsPage() {
  return (
    <main className="app-content">
      <div className="page-shell">
        <div className="page-header">
          <div>
            <div className="page-title">{listingsContent.title}</div>
            <div className="section-subtitle">{listingsContent.subtitle}</div>
          </div>
        <div className="page-controls">
            <button className="btn btn-outline">{listingsContent.controls[0]}</button>
            <button className="btn btn-primary">{listingsContent.controls[1]}</button>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Variant SKU</th>
                <th>Marketplace</th>
                <th>Account</th>
                <th>Region</th>
                <th>Status</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Last sync</th>
              </tr>
            </thead>
            <tbody>
              {listingsContent.rows.map((row) => (
                <tr key={`${row.sku}-${row.marketplace}-${row.region}`}>
                  <td>{row.product}</td>
                  <td>{row.sku}</td>
                  <td>{row.marketplace}</td>
                  <td>{row.account}</td>
                  <td>{row.region}</td>
                  <td>
                    <span className={statusClass(row.status)}>{row.status}</span>
                  </td>
                  <td>{row.price}</td>
                  <td>{row.stock}</td>
                  <td>{row.lastSync}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
