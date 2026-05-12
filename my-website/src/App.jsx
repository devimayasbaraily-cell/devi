import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import TourPackages from "./pages/TourPackages";
import PackageDetails from "./pages/PackageDetails";
import BookingForm from "./pages/BookingForm";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import "./styles/App.css";

/**
 * Main App Component
 * 
 * This is the root component of the application.
 * It sets up the routing structure using React Router DOM.
 * 
 * Key Concepts Demonstrated:
 * 1. Component Composition: App includes Navbar, Footer, and page components
 * 2. React Router: BrowserRouter, Routes, and Route for navigation
 * 3. Dynamic Routes: /package/:id shows how to pass URL parameters
 * 4. Layout Structure: Navbar and Footer wrap all pages for consistency
 * 
 * Routes:
 * - / : Home page
 * - /about : About page
 * - /packages : All tour packages
 * - /package/:id : Individual package details (dynamic)
 * - /booking : Booking form
 * - /contact : Contact page
 * - /admin : Admin dashboard
 */
function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Navbar Component - visible on all pages */}
        <Navbar />

        {/* Main Content Area */}
        <main className="main-content">
          {/* Routes Definition */}
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* About Page */}
            <Route path="/about" element={<About />} />

            {/* Tour Packages Listing */}
            <Route path="/packages" element={<TourPackages />} />

            {/* Individual Package Details - Dynamic Route */}
            <Route path="/package/:id" element={<PackageDetails />} />

            {/* Booking Form */}
            <Route path="/booking" element={<BookingForm />} />

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* Admin Dashboard */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Catch-all for undefined routes (optional) */}
            <Route
              path="*"
              element={
                <div style={{ padding: "50px", textAlign: "center" }}>
                  <h1>404 - Page Not Found</h1>
                  <p>Sorry, the page you're looking for doesn't exist.</p>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer Component - visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/**
 * LEARNING GUIDE: Understanding the App.jsx Structure
 * 
 * 1. ROUTING WITH REACT ROUTER:
 *    - Router: Wraps the entire app to enable routing
 *    - Routes: Container for all route definitions
 *    - Route: Maps a path to a component
 * 
 * 2. COMPONENT STRUCTURE:
 *    - Navbar: Fixed navigation, appears on every page
 *    - main content area: Routes render here
 *    - Footer: Fixed footer, appears on every page
 * 
 * 3. DYNAMIC ROUTING:
 *    - Path="/package/:id" creates a dynamic route
 *    - :id is a URL parameter that can be accessed in PackageDetails component
 *    - Example: /package/1, /package/2, etc.
 * 
 * 4. ROUTE TYPES:
 *    - Static routes: /about, /contact
 *    - Dynamic routes: /package/:id
 *    - Catch-all route: * (for 404 pages)
 * 
 * 5. COMPONENT COMPOSITION:
 *    - Each route displays a different component
 *    - Navbar and Footer wrap all pages for consistency
 *    - main-content div contains the dynamic content
 */
