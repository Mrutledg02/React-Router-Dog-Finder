import React from "react";
import { Link } from "react-router-dom";

import './NotFound.css';

function NotFound() {
  return (
    <div className="NotFound">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/dogs" className="back-home-btn">Back to Home</Link>
    </div>
  );
}

export default NotFound;