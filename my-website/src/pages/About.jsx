import { BsBullseye, BsStar, BsPerson } from "react-icons/bs";
import "../styles/About.css";

/**
 * About Page Component
 * - Displays company information
 * - Shows mission and vision statements
 * - Explains why customers should choose us
 * - Simple component with no state or hooks needed
 */
function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>About Bhutan Travel Explorer</h1>
          <p>Your trusted partner for authentic Bhutanese experiences</p>
        </div>

        {/* Company Story Section */}
        <section className="company-story">
          <h2>Our Story</h2>
          <p>
            Bhutan Travel Explorer was founded with a passion to share the
            untouched beauty and spiritual richness of Bhutan with the world.
            We believe in sustainable tourism that benefits local communities
            while preserving Bhutan's pristine environment.
          </p>
          <p>
            Since our founding, we've guided thousands of travelers to discover
            the magic of the Himalayas, the warmth of Bhutanese people, and the
            wisdom of Buddhist culture.
          </p>
        </section>

        {/* Mission and Vision */}
        <section className="mission-vision">
          <div className="mission">
            <h2><BsBullseye /> Our Mission</h2>
            <p>
              To provide unforgettable, responsible travel experiences that
              connect people with Bhutan's natural beauty, rich culture, and
              warm-hearted people.
            </p>
          </div>
          <div className="vision">
            <h2><BsStar /> Our Vision</h2>
            <p>
              To be the leading travel company that creates positive impact
              through sustainable tourism, promoting cultural preservation and
              environmental conservation.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <h3>Local Expertise</h3>
              <p>
                Our team includes local Bhutanese guides with deep knowledge of
                the country.
              </p>
            </div>
            <div className="reason-card">
              <h3>Authentic Experiences</h3>
              <p>
                We focus on authentic interactions with local communities, not
                just tourist spots.
              </p>
            </div>
            <div className="reason-card">
              <h3>Small Group Tours</h3>
              <p>
                We keep groups small to ensure personalized attention and
                meaningful connections.
              </p>
            </div>
            <div className="reason-card">
              <h3>Sustainable Tourism</h3>
              <p>
                We're committed to preserving Bhutan's environment for future
                generations.
              </p>
            </div>
            <div className="reason-card">
              <h3>Flexible Itineraries</h3>
              <p>
                Customize your tour based on your interests and preferences.
              </p>
            </div>
            <div className="reason-card">
              <h3>24/7 Support</h3>
              <p>
                Our team is always available to help before, during, and after
                your trip.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team">
          <h2>Our Team</h2>
          <p>
            Our dedicated team of travel experts, local guides, and support
            staff are committed to making your Bhutanese adventure unforgettable.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar"><BsPerson /></div>
              <h3>Tenzin Dorji</h3>
              <p>Founder & CEO</p>
              <p className="member-bio">
                Bhutanese travel expert with 15 years of experience
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar"><BsPerson /></div>
              <h3>Pema Thinley</h3>
              <p>Tour Operations Manager</p>
              <p className="member-bio">
                Expert at creating personalized travel experiences
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar"><BsPerson /></div>
              <h3>Karma Dorji</h3>
              <p>Lead Guide</p>
              <p className="member-bio">
                Passionate about sharing Bhutanese culture
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar"><BsPerson /></div>
              <h3>Sonam Choden</h3>
              <p>Customer Support</p>
              <p className="member-bio">24/7 assistance for all your travel needs</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="stat">
            <h3>5000+</h3>
            <p>Happy Travelers</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Tour Packages</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
