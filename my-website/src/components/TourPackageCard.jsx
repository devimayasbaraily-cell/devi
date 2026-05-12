import { Link } from "react-router-dom";
import "../styles/TourPackageCard.css";

/**
 * TourPackageCard Component
 * - Reusable component to display a single tour package
 * - Demonstrates Props concept: receives package data as props
 * - Shows image, title, price, duration, and description
 * - Includes link to package details page with dynamic routing
 * 
 * Props:
 * - package: Object containing tour package information
 *   - id: unique identifier
 *   - title: package name
 *   - price: cost in USD
 *   - duration: how long the tour is
 *   - description: brief description
 *   - image: image URL
 */
function TourPackageCard({ package: pkg }) {
  return (
    <div className="package-card">
      {/* Package Image */}
      <div className="package-image">
        <img src={pkg.image} alt={pkg.title} />
      </div>

      {/* Package Info */}
      <div className="package-info">
        {/* Title */}
        <h3 className="package-title">{pkg.title}</h3>

        {/* Duration and Price - displayed in a row */}
        <div className="package-meta">
          <span className="duration">⏱️ {pkg.duration}</span>
          <span className="price">${pkg.price}</span>
        </div>

        {/* Description */}
        <p className="package-description">{pkg.description}</p>

        {/* Action Buttons */}
        <div className="package-actions">
          {/* Link to detailed package page - Dynamic routing */}
          <Link to={`/package/${pkg.id}`} className="btn btn-primary">
            View Details
          </Link>
          {/* Link to booking form */}
          <Link to="/booking" className="btn btn-secondary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TourPackageCard;
