import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./footer.css"; // Import custom CSS file

const Footer = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white py-4" style={{marginTop:"1rem"}}>
      <Container>
        <Row className="gy-4" >
          {/* About Section */}
          <Col md={4}>
            <h5>Medical Mission</h5>
            <p>
              Bringing healthcare solutions that matter. We provide expert
              medical guidance, community outreach, and resources to shape a
              healthier future.
            </p>
            <p>
              <strong style={{ fontSize: "18px" }}>Email:</strong>{" "}
              Medicalmission101@gmail.com <br />
              <strong style={{ fontSize: "18px" }}>Phone:</strong> +91 8750768101{" "}
              <br />
              <strong style={{ fontSize: "18px" }}>Location:</strong> Pillar
              No.687, Near DPS School,
              <br />
              Old Faridabad-121002
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                {/* Clicking on Home will scroll to the top of the page */}
                <a
                  href="#home" // The #home can be anything since we use scrollToTop function
                  onClick={scrollToTop}
                  className="text-white text-decoration-none"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="#team"
                  to="team" // This ID should be an actual section ID
                  smooth={true}
                  duration={10}
                  offset={-70}
                  className="text-white text-decoration-none"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                href="#courses"
                  to="courses" // This ID should be an actual section ID
                  smooth={true}
                  duration={10}
                  offset={-70}
                  className ="text-white text-decoration-none"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                href="#gallery"
                  to="gallery" // This ID should be an actual section ID
                  smooth={true}
                  duration={10}
                  offset={-70}
                  className="text-white text-decoration-none"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61551478131463" className="text-white">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://twitter.com" className="text-white">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-white">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://linkedin.com" className="text-white">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="cp-text-center mt-3">
          <Col>
            <p className="mb-0">
              © {new Date().getFullYear()} Medical Mission. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
