import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Page not found</h1>
        <p className="lead">The page you're looking for doesn't exist or has moved.</p>
        <div className="btn-row">
          <Link to="/" className="btn btn-dark">
            Go to the home page
          </Link>
          <Link to="/services/" className="btn btn-outline">
            See our services
          </Link>
        </div>
      </div>
    </section>
  );
}
