import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsStars, BsCheckCircle, BsLightbulb } from "react-icons/bs";
import { tourPackages } from "../data/tourPackages";
import "../styles/PackageDetails.css";

/**
 * Package Details Page Component
 * - Dynamic route that displays detailed information about a specific package
 * - Demonstrates:
 *   - useParams hook to get dynamic route parameters
 *   - useNavigate hook for programmatic navigation
 *   - Conditional rendering based on data availability
 *   - useState for managing component state
 * 
 * Route: /package/:id
 * Example: /package/1 shows Thimphu Cultural Tour
 */
function PackageDetails() {
  // Get the package ID from URL parameters using useParams hook
  const { id } = useParams();
  
  // State to store the current package details
  const [packageDetails, setPackageDetails] = useState(null);
  
  // State for loading indicator
  const [isLoading, setIsLoading] = useState(true);
  
  // useNavigate hook for redirecting if package not found
  const navigate = useNavigate();

  // useEffect: Find and load the package details
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const pkg = tourPackages.find((p) => p.id === Number(id));
      
      if (pkg) {
        setPackageDetails(pkg);
      } else {
        // Redirect to packages page if package not found
        navigate("/packages");
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id, navigate]); // Re-run if id changes

  // Show loading state
  if (isLoading) {
    return <div className="loading-container"><div className="loading">Loading package details...</div></div>;
  }

  // If no package found, this shouldn't show (we redirect above)
  if (!packageDetails) {
    return (
      <div className="error-container">
        <h2>Package not found</h2>
        <Link to="/packages">Back to packages</Link>
      </div>
    );
  }

  // Event handler for booking button
  const handleBooking = () => {
    // In a real app, this would pass data to the booking form
    navigate("/booking");
  };

  return (
    <div className="package-details-page">
      <div className="container">
        {/* Back Button */}
        <Link to="/packages" className="back-button">
          ← Back to Packages
        </Link>

        {/* Package Header with Image */}
        <div className="package-header">
          <img src={packageDetails.image} alt={packageDetails.title} />
          <div className="package-overlay">
            <h1>{packageDetails.title}</h1>
          </div>
        </div>

        {/* Package Main Content */}
        <div className="package-content">
          {/* Left Column: Information */}
          <div className="details-column">
            {/* Price and Duration */}
            <div className="price-duration">
              <div className="price-box">
                <span className="label">Price Per Person</span>
                <span className="price">Nu {packageDetails.price}</span>
              </div>
              <div className="duration-box">
                <span className="label">Duration</span>
                <span className="duration">{packageDetails.duration}</span>
              </div>
            </div>

            {/* Description */}
            <section className="description-section">
              <h2>About This Package</h2>
              <p>{packageDetails.fullDescription}</p>
            </section>

            {/* Highlights */}
            <section className="highlights-section">
              <h2>Highlights</h2>
              <ul className="highlights-list">
                {packageDetails.highlights.map((highlight, index) => (
                  <li key={index}><BsStars /> {highlight}</li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section className="itinerary-section">
              <h2>Day-by-Day Itinerary</h2>
              <div className="itinerary-list">
                {packageDetails.itinerary.map((day, index) => (
                  <div key={index} className="itinerary-day">
                    <span className="day-number">Day {index + 1}</span>
                    <span className="day-description">{day}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included */}
            <section className="included-section">
              <h2>What's Included</h2>
              <ul className="included-list">
                <li><BsCheckCircle /> Professional English-speaking guide</li>
                <li><BsCheckCircle /> Accommodation in 3-4 star hotels</li>
                <li><BsCheckCircle /> All meals (breakfast, lunch, dinner)</li>
                <li><BsCheckCircle /> Transportation by private vehicle</li>
                <li><BsCheckCircle /> Entrance fees to monasteries and attractions</li>
                <li><BsCheckCircle /> Travel insurance</li>
              </ul>
            </section>
          </div>

          {/* Right Column: Booking Card */}
          <aside className="booking-column">
            <div className="booking-card">
              <h3>Ready to Book?</h3>
              
              <div className="booking-info">
                <div className="info-row">
                  <span>Package</span>
                  <strong>{packageDetails.title}</strong>
                </div>
                <div className="info-row">
                  <span>Duration</span>
                  <strong>{packageDetails.duration}</strong>
                </div>
                <div className="info-row">
                  <span>Price</span>
                  <strong>Nu {packageDetails.price}</strong>
                </div>
              </div>

              <button onClick={handleBooking} className="btn btn-primary btn-large">
                Book This Package
              </button>

              <div className="booking-note">
                <p>
                  <BsLightbulb /> <strong>Flexible booking:</strong> You can book now and pay
                  later. Contact us for custom dates and group discounts.
                </p>
              </div>

              {/* FAQs */}
              <div className="faqs">
                <h4>FAQs</h4>
                <div className="faq-item">
                  <strong>Q: What's the best time to visit?</strong>
                  <p>A: October-December and March-May for ideal weather.</p>
                </div>
                <div className="faq-item">
                  <strong>Q: Do I need a visa?</strong>
                  <p>A: We'll help you with visa arrangements.</p>
                </div>
                <div className="faq-item">
                  <strong>Q: Can I customize the itinerary?</strong>
                  <p>A: Yes! We offer flexible customization options.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Similar Packages Section */}
        <section className="similar-packages">
          <h2>You Might Also Like</h2>
          <div className="similar-grid">
            {tourPackages
              .filter((pkg) => pkg.id !== packageDetails.id)
              .slice(0, 3)
              .map((pkg) => (
                <div key={pkg.id} className="similar-package-card">
                  <img src={pkg.image} alt={pkg.title} />
                  <h4>{pkg.title}</h4>
                  <p>${pkg.price}</p>
                  <Link to={`/package/${pkg.id}`} className="btn btn-small">
                    View
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default PackageDetails;
