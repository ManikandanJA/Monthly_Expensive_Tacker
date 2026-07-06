import "./About.css";

function About() {
  return (
    <div className="about-page">

      <h1>About Us</h1>

      <p className="intro">
        Welcome to our Rental Cars & Bikes platform 🚗🏍️. 
        We provide affordable and convenient vehicle rental services 
        for your daily and travel needs.
      </p>

      <div className="about-section">
        <h3>🚀 Our Mission</h3>
        <p>
          Our mission is to make transportation easy, affordable, 
          and accessible for everyone. Whether it's a short trip 
          or a long journey, we’ve got you covered.
        </p>
      </div>

      <div className="about-section">
        <h3>💼 What We Offer</h3>
        <ul>
          <li>Wide range of cars and bikes</li>
          <li>Easy online booking</li>
          <li>Affordable pricing</li>
          <li>Instant booking confirmation</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>⭐ Why Choose Us?</h3>
        <p>
          We focus on customer satisfaction, smooth booking experience, 
          and reliable vehicles to ensure a hassle-free journey.
        </p>
      </div>

    </div>
  );
}

export default About;