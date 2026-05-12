import { useState } from "react";
import "../styles/Contact.css";

/**
 * Contact Page Component
 * - Displays contact information
 * - Contact form with validation and submission
 * - Demonstrates useState for form handling
 */
function Contact() {
  // State for contact form
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for form submission
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Handle input changes
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate contact form
  const validateContactForm = () => {
    const errors = {};

    if (!contactForm.name.trim()) {
      errors.name = "Name is required";
    }

    if (!contactForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!contactForm.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!contactForm.message.trim()) {
      errors.message = "Message is required";
    } else if (contactForm.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();

    const errors = validateContactForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Simulate sending email
    console.log("Contact Form Submitted:", contactForm);
    setFormSubmitted(true);

    // Reset form
    setTimeout(() => {
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Get In Touch</h1>
          <p>Have questions? We'd love to hear from you!</p>
        </div>

        <div className="contact-content">
          {/* Left Column: Contact Information */}
          <div className="contact-info-column">
            {/* Office Location */}
            <section className="info-section">
              <h2>Our Office</h2>
              <div className="info-card">
                <h3>📍 Thimphu Headquarters</h3>
                <p>
                  Bhutan Travel Explorer
                  <br />
                  Norzin Lam, Thimphu
                  <br />
                  Bhutan 11001
                </p>
                <p className="hours">
                  <strong>Office Hours:</strong>
                  <br />
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </section>

            {/* Contact Methods */}
            <section className="info-section">
              <h2>Contact Methods</h2>

              <div className="contact-method">
                <h3>📧 Email</h3>
                <p>General Inquiries: info@bhutantravelexplorer.com</p>
                <p>Bookings: bookings@bhutantravelexplorer.com</p>
                <p>Support: support@bhutantravelexplorer.com</p>
              </div>

              <div className="contact-method">
                <h3>📱 Phone</h3>
                <p>Main Line: +975-1-345-6789</p>
                <p>Reservations: +975-1-345-6790</p>
                <p>Emergency: +975-1-345-6791</p>
              </div>

              <div className="contact-method">
                <h3>💬 Live Chat</h3>
                <p>Available on our website 24/7</p>
                <p>Response time: Less than 5 minutes</p>
              </div>

              <div className="contact-method">
                <h3>🕐 Response Time</h3>
                <p>Email: Within 24 hours</p>
                <p>Phone: During business hours</p>
                <p>Live Chat: Immediate</p>
              </div>
            </section>

            {/* FAQs */}
            <section className="info-section">
              <h2>Frequently Asked Questions</h2>

              <div className="faq-item">
                <h4>Q: What is your cancellation policy?</h4>
                <p>
                  A: Full refund for cancellations up to 30 days before travel.
                  50% refund for 15-29 days before. No refund within 15 days.
                </p>
              </div>

              <div className="faq-item">
                <h4>Q: Do you offer group discounts?</h4>
                <p>
                  A: Yes! Groups of 10+ get special discounts. Contact us for
                  details.
                </p>
              </div>

              <div className="faq-item">
                <h4>Q: Can I customize my tour?</h4>
                <p>
                  A: Absolutely! We offer fully customizable itineraries to suit
                  your preferences.
                </p>
              </div>

              <div className="faq-item">
                <h4>Q: Do you arrange visas?</h4>
                <p>
                  A: Yes, we help with all visa arrangements for Bhutan travel.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <div className="form-wrapper">
              <h2>Send us a Message</h2>

              {/* Success Message */}
              {formSubmitted && (
                <div className="success-message">
                  <h3>✅ Message Sent Successfully!</h3>
                  <p>
                    Thank you for contacting us. We'll respond within 24 hours.
                  </p>
                </div>
              )}

              {/* Contact Form */}
              {!formSubmitted && (
                <form onSubmit={handleContactSubmit} className="contact-form">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      placeholder="John Doe"
                    />
                    {formErrors.name && (
                      <span className="error">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      placeholder="john@example.com"
                    />
                    {formErrors.email && (
                      <span className="error">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactChange}
                      placeholder="e.g., Custom Tour Inquiry"
                    />
                    {formErrors.subject && (
                      <span className="error">{formErrors.subject}</span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      placeholder="Tell us about your inquiry..."
                      rows="6"
                    ></textarea>
                    {formErrors.message && (
                      <span className="error">{formErrors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary btn-large">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <h2>Find Us On Map</h2>
          <div className="map-placeholder">
            <p>🗺️ Interactive map coming soon</p>
            <p>Visit us: Norzin Lam, Thimphu, Bhutan</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
