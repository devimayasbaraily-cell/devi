import "../styles/Footer.css";

/**
 * Footer Component
 * - Reusable footer component used on every page
 * - Displays company info, contact details, and quick links
 * - Responsive design adapts to mobile and desktop
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Bhutan Travel Explorer is your gateway to experiencing the world's
            last Shangri-La. We create unforgettable memories in the land of
            thunder dragons.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#packages">Tour Packages</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📧 Email: info@bhutantravelexplorer.com</p>
          <p>📱 Phone: +975-1-345-6789</p>
          <p>📍 Address: Thimphu, Bhutan</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Bhutan Travel Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
