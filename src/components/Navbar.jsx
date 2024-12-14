import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa'; // For phone icon
import './navbars.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="custom-logo">
          MedicalMission
        </Navbar.Brand>

        {/* Responsive Toggler */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            {/* Links */}
            <Nav.Link href="#" className="me-3 fw-bold text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="me-3 fw-bold text-dark">
              Courses
            </Nav.Link>
            <Nav.Link href="#" className="me-3 fw-bold text-dark">
              Campuses
            </Nav.Link>
            <Nav.Link href="#" className="me-3 fw-bold text-dark">
              Blogs
            </Nav.Link>
            <Nav.Link href="#" className="me-3 fw-bold text-dark">
              More
            </Nav.Link>
          </Nav>

          {/* Call to Action */}
          <div className="d-flex flex-column flex-lg-row align-items-lg-start gap-2 mt-3 mt-lg-0 custom-mobile-stack">
            {/* Contact Info */}
            <div className="d-flex align-items-center text-dark">
              <FaPhoneAlt className="me-2" />
              <span className="nv-fw-bold" style={{ fontSize: "20px", fontWeight: "normal" }}>
                +91 7000000003
              </span>
            </div>

            {/* Apply Now Button */}
            <Button variant="outline-danger" className="fw-bold px-4 custom-apply-btn">
              Apply Now
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
