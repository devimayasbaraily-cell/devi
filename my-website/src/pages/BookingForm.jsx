import { useState } from "react";
import "../styles/BookingForm.css";

/**
 * Booking Form Page Component
 * - Demonstrates React form handling with controlled components
 * - Demonstrates:
 *   - useState hook for form data
 *   - Controlled form inputs (value and onChange)
 *   - Form validation
 *   - Event handling (onSubmit, onChange)
 *   - Conditional rendering (show success message)
 */
function BookingForm() {
  // State to manage form data
  // This is a "controlled component" - React controls the input values
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    packageName: "",
    travelDate: "",
    numberOfPeople: "1",
    dietaryRestrictions: "",
    specialRequests: "",
    agreeToTerms: false,
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // State to show success message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to manage submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes - update form data state
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // For checkboxes, use checked; for text inputs, use value
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    // Validation rules
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.packageName) {
      newErrors.packageName = "Please select a package";
    }

    if (!formData.travelDate) {
      newErrors.travelDate = "Travel date is required";
    }

    if (Number(formData.numberOfPeople) < 1) {
      newErrors.numberOfPeople = "Number of people must be at least 1";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to terms and conditions";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          packageName: "",
          travelDate: "",
          numberOfPeople: "1",
          dietaryRestrictions: "",
          specialRequests: "",
          agreeToTerms: false,
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="booking-form-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Book Your Adventure</h1>
          <p>Fill out the form below to reserve your Bhutanese experience</p>
        </div>

        <div className="form-container">
          {/* Success Message - Conditional Rendering */}
          {isSubmitted && (
            <div className="success-message">
              <h2>✅ Booking Successful!</h2>
              <p>Thank you for your booking! We'll contact you soon to confirm details.</p>
              <p className="confirmation-email">
                A confirmation email has been sent to <strong>{formData.email}</strong>
              </p>
            </div>
          )}

          {/* Booking Form */}
          {!isSubmitted && (
            <form onSubmit={handleSubmit} className="booking-form">
              <fieldset>
                <legend>Personal Information</legend>

                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <span className="error-message">{errors.fullName}</span>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1-234-567-8900"
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>
              </fieldset>

              <fieldset>
                <legend>Trip Details</legend>

                {/* Package Selection */}
                <div className="form-group">
                  <label htmlFor="packageName">
                    Select Package <span className="required">*</span>
                  </label>
                  <select
                    id="packageName"
                    name="packageName"
                    value={formData.packageName}
                    onChange={handleChange}
                  >
                    <option value="">-- Choose a Package --</option>
                    <option value="Thimphu Cultural Tour">
                      Thimphu Cultural Tour - $1,200
                    </option>
                    <option value="Paro Tiger Nest Trek">
                      Paro Tiger Nest Trek - $1,800
                    </option>
                    <option value="Punakha Valley Tour">
                      Punakha Valley Tour - $1,500
                    </option>
                    <option value="Dochula Pass Adventure">
                      Dochula Pass Adventure - $950
                    </option>
                  </select>
                  {errors.packageName && (
                    <span className="error-message">{errors.packageName}</span>
                  )}
                </div>

                {/* Travel Date */}
                <div className="form-group">
                  <label htmlFor="travelDate">
                    Preferred Travel Date <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                  />
                  {errors.travelDate && (
                    <span className="error-message">{errors.travelDate}</span>
                  )}
                </div>

                {/* Number of People */}
                <div className="form-group">
                  <label htmlFor="numberOfPeople">
                    Number of People <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    id="numberOfPeople"
                    name="numberOfPeople"
                    min="1"
                    max="20"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                  />
                  {errors.numberOfPeople && (
                    <span className="error-message">{errors.numberOfPeople}</span>
                  )}
                </div>
              </fieldset>

              <fieldset>
                <legend>Special Requirements</legend>

                {/* Dietary Restrictions */}
                <div className="form-group">
                  <label htmlFor="dietaryRestrictions">
                    Dietary Restrictions
                  </label>
                  <select
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                  >
                    <option value="">None</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten-free</option>
                    <option value="halal">Halal</option>
                    <option value="kosher">Kosher</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div className="form-group">
                  <label htmlFor="specialRequests">Special Requests</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any special requests or requirements?"
                    rows="4"
                  ></textarea>
                </div>
              </fieldset>

              {/* Terms and Conditions */}
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
                <label htmlFor="agreeToTerms">
                  I agree to the terms and conditions{" "}
                  <span className="required">*</span>
                </label>
                {errors.agreeToTerms && (
                  <span className="error-message">{errors.agreeToTerms}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Complete Booking"}
                </button>
                <button type="reset" className="btn btn-secondary">
                  Clear Form
                </button>
              </div>
            </form>
          )}

          {/* Info Section */}
          <aside className="booking-info">
            <h3>Booking Information</h3>
            <div className="info-box">
              <h4>What Happens Next?</h4>
              <ol>
                <li>We receive your booking request</li>
                <li>We confirm availability and send you details</li>
                <li>We collect payment (50% deposit)</li>
                <li>Final balance due 30 days before travel</li>
                <li>You receive travel documents and itinerary</li>
              </ol>
            </div>

            <div className="info-box">
              <h4>Cancellation Policy</h4>
              <p>
                <strong>Free cancellation</strong> up to 30 days before travel
              </p>
              <p>
                <strong>50% refund</strong> for cancellations 15-29 days before
              </p>
              <p>
                <strong>No refund</strong> for cancellations less than 15 days
              </p>
            </div>

            <div className="info-box">
              <h4>Questions?</h4>
              <p>📧 Email: info@bhutantravelexplorer.com</p>
              <p>📱 Phone: +975-1-345-6789</p>
              <p>💬 Chat with us anytime</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
