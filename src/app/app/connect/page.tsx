import { connectionsContent } from "../../../design/constants";

function badgeClass(status: string) {
  if (status === "Active") return "badge badge-success";
  if (status === "Token expiring") return "badge badge-warning";
  if (status === "Paused") return "badge badge-muted";
  return "badge badge-muted";
}

export default function ConnectPage() {
  return (
    <main className="app-content">
      <div className="page-shell">
        <div className="page-header">
          <div>
            <div className="page-title">{connectionsContent.title}</div>
            <div className="section-subtitle">{connectionsContent.subtitle}</div>
          </div>
          <div className="page-controls">
            <button className="btn btn-primary">
              {connectionsContent.controls[0]}
            </button>
          </div>
        </div>

        <div className="two-column">
          <div className="card">
            <div className="card-title">Connected accounts</div>
            <div className="card-meta">All live seller accounts linked to this workspace.</div>
            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>Marketplace</th>
                    <th>Account label</th>
                    <th>Region</th>
                    <th>Status</th>
                    <th>Last sync</th>
                  </tr>
                </thead>
                <tbody>
                  {connectionsContent.connections.map((row) => (
                    <tr key={`${row.marketplace}-${row.label}-${row.region}`}>
                      <td>{row.marketplace}</td>
                      <td>{row.label}</td>
                      <td>{row.region}</td>
                      <td>
                        <span className={badgeClass(row.status)}>{row.status}</span>
                      </td>
                      <td>{row.lastSync}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Add a new connection</div>
            <div className="card-meta">Use OAuth or API keys depending on the marketplace.</div>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="mp">Marketplace</label>
                <select id="mp" defaultValue={connectionsContent.formDefaults.marketplace}>
                  <option>Amazon</option>
                  <option>Flipkart</option>
                  <option>Meesho</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="region">Region</label>
                <select id="region" defaultValue={connectionsContent.formDefaults.region}>
                  <option>IN</option>
                  <option>US</option>
                  <option>EU</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="label">Account label</label>
                <input
                  id="label"
                  defaultValue={connectionsContent.formDefaults.label}
                />
              </div>
              <div className="form-field">
                <label htmlFor="mode">Auth mode</label>
                <select id="mode" defaultValue={connectionsContent.formDefaults.mode}>
                  <option>OAuth (recommended)</option>
                  <option>API keys</option>
                </select>
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary">Begin connection</button>
              <button className="btn btn-outline">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
