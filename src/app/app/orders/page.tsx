import { ordersContent } from "../../../design/constants";

function statusClass(status: string) {
  if (status === "Shipped") return "badge badge-success";
  if (status === "Awaiting pickup") return "badge badge-warning";
  return "badge badge-muted";
}

export default function OrdersPage() {
  return (
    <main className="app-content">
      <div className="page-shell">
        <div className="page-header">
          <div>
            <div className="page-title">{ordersContent.title}</div>
            <div className="section-subtitle">{ordersContent.subtitle}</div>
          </div>
          <div className="page-controls">
            <button className="btn btn-outline">{ordersContent.controls[0]}</button>
            <button className="btn btn-primary">{ordersContent.controls[1]}</button>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Marketplace</th>
                <th>Account</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {ordersContent.rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.marketplace}</td>
                  <td>{row.account}</td>
                  <td>{row.date}</td>
                  <td>{row.items}</td>
                  <td>{row.total}</td>
                  <td>
                    <span className={statusClass(row.status)}>{row.status}</span>
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
