import { settingsContent } from "../../../design/constants";

export default function SettingsPage() {
  return (
    <main className="app-content">
      <div className="page-shell">
        <div className="page-header">
          <div>
            <div className="page-title">{settingsContent.title}</div>
            <div className="section-subtitle">{settingsContent.subtitle}</div>
          </div>
        </div>

        <div className="two-column">
          <div className="card">
            <div className="card-title">Workspace</div>
            <div className="card-meta">Visible to your entire team.</div>
            <div className="form-grid">
              <div className="form-field">
                <label>Workspace name</label>
                <input defaultValue={settingsContent.workspace.name} />
              </div>
              <div className="form-field">
                <label>Default currency</label>
                <select defaultValue={settingsContent.workspace.currency}>
                  <option>INR</option>
                  <option>USD</option>
                </select>
              </div>
              <div className="form-field">
                <label>Time zone</label>
                <select defaultValue={settingsContent.workspace.timezone}>
                  <option>Asia/Kolkata (IST)</option>
                  <option>UTC</option>
                </select>
              </div>
              <div className="form-field">
                <label>Low stock threshold</label>
                <input defaultValue={settingsContent.workspace.lowStock} />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary">Save workspace</button>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Sync engine</div>
            <div className="card-meta">Control how aggressively we sync listings and inventory.</div>
            <div className="form-grid">
              <div className="form-field">
                <label>Price sync cadence</label>
                <select defaultValue={settingsContent.syncEngine.priceCadence}>
                  <option>On change only</option>
                  <option>Every 15 minutes</option>
                  <option>Hourly</option>
                </select>
              </div>
              <div className="form-field">
                <label>Inventory sync cadence</label>
                <select defaultValue={settingsContent.syncEngine.inventoryCadence}>
                  <option>Near real-time</option>
                  <option>Every 5 minutes</option>
                  <option>Every 15 minutes</option>
                </select>
              </div>
              <div className="form-field">
                <label>Max parallel jobs per connection</label>
                <input defaultValue={settingsContent.syncEngine.parallelJobs} />
              </div>
              <div className="form-field">
                <label>Failure alert email</label>
                <input defaultValue={settingsContent.syncEngine.alertEmail} />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary">Save sync settings</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
