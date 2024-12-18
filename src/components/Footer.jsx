import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"; // Import custom CSS file

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="gy-4">
          {/* About Section */}
          <Col md={4}>
            <h5>Medical Mission</h5>
            <p>
              Bringing healthcare solutions that matter. We provide expert
              medical guidance, community outreach, and resources to shape a
              healthier future.
            </p>
            <p>
              <strong style={{fontSize:"18px"}}>Email:</strong> support@medicalmission.org <br />
              <strong style={{fontSize:"18px"}}>Phone:</strong> +91 8750768101 <br />
              <strong style={{fontSize:"18px"}}>Location:</strong> Pillar No.687, Near DPS School,<br/>
              Old Faridabad-121002
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="text-white text-decoration-none">
                  Courses
                </a>
              </li>
              <li>
                <a href="/apply" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-white">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://twitter.com" className="text-white">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="https://instagram.com" className="text-white">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://linkedin.com" className="text-white">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Google Map */}
       
        {/* Copyright */}
        <Row className="cp-text-center mt-3">
          <Col>
            <p className="mb-0">
              © {new Date().getFullYear()} Medical Mission. All rights reserved.
              <br />
             
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
