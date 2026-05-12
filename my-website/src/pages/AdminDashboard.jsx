import { useState } from "react";
import { tourPackages as initialPackages } from "../data/tourPackages";
import "../styles/AdminDashboard.css";

/**
 * Admin Dashboard Component
 * - Allows admins to manage tour packages
 * - Demonstrates advanced useState usage
 * - Add new packages
 * - Delete existing packages
 * - Edit package details
 * - Shows list of all packages with management options
 */
function AdminDashboard() {
  // State to manage all packages (copy of initial data)
  const [packages, setPackages] = useState(initialPackages);

  // State for form to add new package
  const [newPackage, setNewPackage] = useState({
    title: "",
    price: "",
    duration: "",
    description: "",
    image: "",
  });

  // State to manage form visibility
  const [showForm, setShowForm] = useState(false);

  // State for edit mode
  const [editingId, setEditingId] = useState(null);

  // State for search/filter
  const [searchTerm, setSearchTerm] = useState("");

  // Filter packages based on search
  const filteredPackages = packages.filter((pkg) =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPackage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate package data
  const validatePackage = (pkg) => {
    if (!pkg.title.trim()) return "Title is required";
    if (!pkg.price || Number(pkg.price) <= 0) return "Valid price is required";
    if (!pkg.duration.trim()) return "Duration is required";
    if (!pkg.description.trim()) return "Description is required";
    return null;
  };

  // Handle adding new package
  const handleAddPackage = (e) => {
    e.preventDefault();

    const error = validatePackage(newPackage);
    if (error) {
      alert(error);
      return;
    }

    // Create new package object
    const pkg = {
      id: Math.max(...packages.map((p) => p.id), 0) + 1,
      ...newPackage,
      price: Number(newPackage.price),
      image:
        newPackage.image ||
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      fullDescription: newPackage.description,
      highlights: ["Highlight 1", "Highlight 2"],
      itinerary: ["Day 1: Arrival", "Day 2: Exploration"],
    };

    // Add package to state
    setPackages([...packages, pkg]);

    // Reset form
    setNewPackage({
      title: "",
      price: "",
      duration: "",
      description: "",
      image: "",
    });
    setShowForm(false);

    // Show success message
    alert("Package added successfully!");
  };

  // Handle deleting a package
  const handleDeletePackage = (id) => {
    if (
      confirm(
        "Are you sure you want to delete this package? This action cannot be undone."
      )
    ) {
      setPackages(packages.filter((pkg) => pkg.id !== id));
      alert("Package deleted successfully!");
    }
  };

  // Handle editing a package
  const handleEditPackage = (id) => {
    const pkg = packages.find((p) => p.id === id);
    if (pkg) {
      setNewPackage({
        title: pkg.title,
        price: pkg.price.toString(),
        duration: pkg.duration,
        description: pkg.description,
        image: pkg.image,
      });
      setEditingId(id);
      setShowForm(true);
    }
  };

  // Handle updating package
  const handleUpdatePackage = (e) => {
    e.preventDefault();

    const error = validatePackage(newPackage);
    if (error) {
      alert(error);
      return;
    }

    setPackages(
      packages.map((pkg) =>
        pkg.id === editingId
          ? {
              ...pkg,
              title: newPackage.title,
              price: Number(newPackage.price),
              duration: newPackage.duration,
              description: newPackage.description,
              image:
                newPackage.image ||
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
            }
          : pkg
      )
    );

    setNewPackage({
      title: "",
      price: "",
      duration: "",
      description: "",
      image: "",
    });
    setEditingId(null);
    setShowForm(false);
    alert("Package updated successfully!");
  };

  // Calculate total revenue (for stats)
  const totalRevenue = packages.reduce((sum, pkg) => sum + pkg.price, 0);

  return (
    <div className="admin-dashboard">
      <div className="container">
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h1>🔐 Admin Dashboard</h1>
          <p>Manage tour packages, view statistics, and manage inventory</p>
        </div>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-card">
            <h3>Total Packages</h3>
            <p className="stat-value">{packages.length}</p>
          </div>
          <div className="stat-card">
            <h3>Average Price</h3>
            <p className="stat-value">
              ${packages.length > 0 ? Math.round(totalRevenue / packages.length) : 0}
            </p>
          </div>
          <div className="stat-card">
            <h3>Total Value</h3>
            <p className="stat-value">${totalRevenue}</p>
          </div>
          <div className="stat-card">
            <h3>Status</h3>
            <p className="stat-value" style={{ color: "#4CAF50" }}>
              ✅ Online
            </p>
          </div>
        </section>

        {/* Add/Edit Package Section */}
        <section className="package-form-section">
          <div className="form-header">
            <h2>{editingId ? "Edit Package" : "Add New Package"}</h2>
            {showForm && (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setNewPackage({
                    title: "",
                    price: "",
                    duration: "",
                    description: "",
                    image: "",
                  });
                }}
              >
                Cancel
              </button>
            )}
          </div>

          {!showForm ? (
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(true)}
            >
              + Add New Package
            </button>
          ) : (
            <form onSubmit={editingId ? handleUpdatePackage : handleAddPackage}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="title">Package Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newPackage.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Mountain Adventure Trek"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price">Price (USD) *</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={newPackage.price}
                    onChange={handleInputChange}
                    placeholder="e.g., 1500"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="duration">Duration *</label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={newPackage.duration}
                    onChange={handleInputChange}
                    placeholder="e.g., 5 Days"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image">Image URL</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={newPackage.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={newPackage.description}
                  onChange={handleInputChange}
                  placeholder="Describe the package..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                {editingId ? "Update Package" : "Add Package"}
              </button>
            </form>
          )}
        </section>

        {/* Packages List Section */}
        <section className="packages-list-section">
          <div className="list-header">
            <h2>All Packages ({filteredPackages.length})</h2>
            <input
              type="text"
              placeholder="Search packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {filteredPackages.length === 0 ? (
            <div className="no-packages">
              <p>No packages found. Create your first package!</p>
            </div>
          ) : (
            <div className="packages-table-wrapper">
              <table className="packages-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map through packages and display each one */}
                  {filteredPackages.map((pkg) => (
                    <tr key={pkg.id}>
                      <td>{pkg.id}</td>
                      <td className="package-title">{pkg.title}</td>
                      <td>{pkg.duration}</td>
                      <td className="price">${pkg.price}</td>
                      <td className="description">
                        {pkg.description.substring(0, 50)}...
                      </td>
                      <td className="actions">
                        <button
                          className="btn btn-small btn-warning"
                          onClick={() => handleEditPackage(pkg.id)}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="btn btn-small btn-danger"
                          onClick={() => handleDeletePackage(pkg.id)}
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Help Section */}
        <section className="help-section">
          <h2>Admin Help</h2>
          <div className="help-grid">
            <div className="help-card">
              <h3>Adding Packages</h3>
              <p>
                Click "Add New Package" to create a new tour package. Fill in all
                required fields and click submit.
              </p>
            </div>
            <div className="help-card">
              <h3>Editing Packages</h3>
              <p>
                Click the "Edit" button on any package to modify its details.
                Changes are saved immediately.
              </p>
            </div>
            <div className="help-card">
              <h3>Deleting Packages</h3>
              <p>
                Click "Delete" to remove a package. This action cannot be undone,
                so please be careful.
              </p>
            </div>
            <div className="help-card">
              <h3>Searching</h3>
              <p>
                Use the search box to find packages by title. Results update in
                real-time as you type.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
