import { useState, useEffect } from "react";
import { BsCalendar, BsBriefcase, BsCash } from "react-icons/bs";
import TourPackageCard from "../components/TourPackageCard";
import { tourPackages } from "../data/tourPackages";
import "../styles/TourPackages.css";

/**
 * Tour Packages Page Component
 * - Displays all tour packages
 * - Demonstrates:
 *   - useState for managing component state
 *   - useEffect for side effects (simulating data fetch)
 *   - map() to render lists with keys
 *   - Component composition with TourPackageCard
 * - Uses filter/search functionality
 */
function TourPackages() {
  // State to store all packages
  const [packages, setPackages] = useState([]);
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");
  // State for loading indicator
  const [isLoading, setIsLoading] = useState(true);
  // State for price range filter
  const [maxPrice, setMaxPrice] = useState(2000);

  // useEffect: Simulate fetching packages from API
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setPackages(tourPackages);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []); // Runs only once when component mounts

  // Filter packages based on search term and price
  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = pkg.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice = pkg.price <= maxPrice;
    return matchesSearch && matchesPrice;
  });

  // Event handler for search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Event handler for price range slider
  const handlePriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <div className="tour-packages-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Tour Packages</h1>
          <p>Choose your perfect Bhutanese adventure</p>
        </div>

        {/* Filter Section */}
        <div className="filter-section">
          <h2>Filter Packages</h2>
          <div className="filters">
            {/* Search Filter */}
            <div className="filter-group">
              <label htmlFor="search">Search by Name:</label>
              <input
                type="text"
                id="search"
                placeholder="e.g., Tiger Nest..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* Price Range Filter */}
            <div className="filter-group">
              <label htmlFor="price">Max Price: ${maxPrice}</label>
              <input
                type="range"
                id="price"
                min="0"
                max="2000"
                step="100"
                value={maxPrice}
                onChange={handlePriceChange}
              />
              <div className="price-labels">
                <span>$0</span>
                <span>$2000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Packages Display */}
        {isLoading ? (
          <div className="loading">Loading tour packages...</div>
        ) : filteredPackages.length > 0 ? (
          <div className="packages-section">
            <h2>Available Packages ({filteredPackages.length})</h2>
            <div className="packages-grid">
              {/* Map: Render each package with a unique key */}
              {filteredPackages.map((pkg) => (
                <TourPackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        ) : (
          <div className="no-results">
            <h2>No packages found</h2>
            <p>Try adjusting your filters to see more packages.</p>
          </div>
        )}

        {/* Additional Info Section */}
        <section className="info-section">
          <h2>Planning Your Trip?</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3><BsCalendar /> Best Time to Visit</h3>
              <p>October to December and March to May offer perfect weather.</p>
            </div>
            <div className="info-card">
              <h3><BsBriefcase /> What to Pack</h3>
              <p>Comfortable hiking shoes, layers, and rain gear are essential.</p>
            </div>
            <div className="info-card">
              <h3><BsCash /> Payment Options</h3>
              <p>We accept all major credit cards and bank transfers.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TourPackages;
