import Link from "next/link";
import { brand, loginContent } from "../../design/constants";

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="brand">
          <div className="brand-mark">{brand.mark}</div>
          <div className="brand-text">
            <span className="brand-name" style={{ color: "white" }}>
              {brand.name}
            </span>
            <span className="brand-sub" style={{ color: "rgba(255,255,255,0.7)" }}>
              Unified marketplace console
            </span>
          </div>
        </div>
        <div className="auth-left-main">
          <h1>{loginContent.heroTitle}</h1>
          <p>{loginContent.heroText}</p>
        </div>
        <div style={{ fontSize: 11, opacity: 0.8 }}>
          {brand.footer}
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <div className="card-title">{loginContent.title}</div>
          <div className="card-meta" style={{ marginBottom: 14 }}>
            {loginContent.subtitle}
          </div>
          <div className="form-field">
            <label>Email</label>
            <input placeholder="you@company.com" />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <div className="form-actions" style={{ marginTop: 16 }}>
            <Link
              href="/app/dashboard"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Sign in
            </Link>
          </div>
          <div style={{ marginTop: 10, fontSize: 12, color: "#6B7280", textAlign: "center" }}>
            New here?{" "}
            <a href="#" style={{ color: "#1C9393" }}>
              {loginContent.requestAccessText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
