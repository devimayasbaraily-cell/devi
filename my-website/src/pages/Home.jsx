import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBullseye, BsShieldCheck, BsPeople, BsCheckCircle, BsStarFill } from "react-icons/bs";
import TourPackageCard from "../components/TourPackageCard";
import { tourPackages, testimonials } from "../data/tourPackages";
import "../styles/Home.css";

/**
 * Home Page Component
 * - Landing page with hero section
 * - Features featured tour packages
 * - Shows customer testimonials
 * - Demonstrates useState and useEffect hooks
 * - Uses map() to render lists of components with keys
 * - Shows conditional rendering
 */
function Home() {
  // State to manage featured packages (first 3 packages)
  const [featuredPackages, setFeaturedPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect Hook: Runs once when component mounts
  // Simulates fetching data from an API
  useEffect(() => {
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      setFeaturedPackages(tourPackages.slice(0, 3));
      setIsLoading(false);
    }, 500);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs only once

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Bhutan Travel Explorer</h1>
          <p>Discover the Magic of the Last Shangri-La</p>
          <Link to="/packages" className="btn btn-hero">
            Explore Packages
          </Link>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Featured Packages Section */}
      <section className="featured-packages">
        <div className="container">
          <h2>Our Featured Packages</h2>
          <p className="section-subtitle">
            Choose from our carefully curated Bhutanese adventures
          </p>

          {/* Conditional Rendering: Show loading or packages */}
          {isLoading ? (
            <div className="loading">Loading amazing packages...</div>
          ) : (
            <div className="packages-grid">
              {/* Map function to render list of packages with keys */}
              {/* Keys are essential for React's reconciliation algorithm */}
              {featuredPackages.map((pkg) => (
                <TourPackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          )}

          {/* Call-to-Action Button */}
          <div className="cta-section">
            <Link to="/packages" className="btn btn-large">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <div className="container">
          <h2>Why Choose Bhutan Travel Explorer?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3><BsBullseye /> Expert Guides</h3>
              <p>Our experienced guides know Bhutan inside out</p>
            </div>
            <div className="benefit-card">
              <h3><BsShieldCheck /> Best Prices</h3>
              <p>Competitive prices with no hidden charges</p>
            </div>
            <div className="benefit-card">
              <h3><BsPeople /> Customer Support</h3>
              <p>24/7 support before, during, and after your trip</p>
            </div>
            <div className="benefit-card">
              <h3><BsCheckCircle /> Guaranteed Satisfaction</h3>
              <p>Your happiness is our priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Guests Say</h2>
          <div className="testimonials-grid">
            {/* Map through testimonials and render each one */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="rating">
                  {/* Render stars based on rating */}
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <BsStarFill key={i} />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.comment}"</p>
                <p className="testimonial-author">
                  - {testimonial.name} from {testimonial.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-final">
        <div className="container">
          <h2>Ready for Your Bhutanese Adventure?</h2>
          <p>Book your dream trip today and create memories that last a lifetime</p>
          <Link to="/booking" className="btn btn-large btn-light">
            Start Booking Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
