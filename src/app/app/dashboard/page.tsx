import { dashboardContent } from "../../../design/constants";

function badgeClass(status: string) {
  if (status === "Synced" || status === "Completed") return "badge badge-success";
  if (status === "Warning") return "badge badge-warning";
  return "badge badge-muted";
}

export default function DashboardPage() {
  return (
    <main className="app-content">
      <div className="page-shell">
        <div className="page-header">
          <div>
            <div className="page-title">{dashboardContent.title}</div>
            <div className="section-subtitle">{dashboardContent.subtitle}</div>
          </div>
          <div className="page-controls">
            <button className="btn btn-outline">Last 24 hours</button>
            <button className="btn btn-primary">Sync now</button>
          </div>
        </div>

        <div className="stats-grid">
          {dashboardContent.stats.map((stat) => (
            <div className="card" key={stat.title}>
              <div className="card-title">{stat.title}</div>
              <div className="metric-value">{stat.value}</div>
              <div className="metric-label">{stat.meta}</div>
            </div>
          ))}
        </div>

        <div className="two-column" style={{ marginTop: 20 }}>
          <div className="card">
            <div className="card-title">Recent sync activity</div>
            <div className="card-meta">Last 50 jobs across all connections.</div>
            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Marketplace</th>
                    <th>Listing</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardContent.syncJobs.map((job) => (
                    <tr key={`${job.time}-${job.listing}`}>
                      <td>{job.time}</td>
                      <td>{job.type}</td>
                      <td>{job.marketplace}</td>
                      <td>{job.listing}</td>
                      <td>
                        <span className={badgeClass(job.status)}>{job.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Channels</div>
            <div className="card-meta">Multi-region, multi-vendor health.</div>
            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>Connection</th>
                    <th>Region</th>
                    <th>Listings</th>
                    <th>Errors</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardContent.channels.map((channel) => (
                    <tr key={channel.connection}>
                      <td>{channel.connection}</td>
                      <td>{channel.region}</td>
                      <td>{channel.listings}</td>
                      <td>
                        <span
                          className={`badge ${
                            channel.status === "success"
                              ? "badge-success"
                              : channel.status === "warning"
                              ? "badge-warning"
                              : "badge-muted"
                          }`}
                        >
                          {channel.errors}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
