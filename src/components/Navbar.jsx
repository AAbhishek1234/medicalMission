import React from "react";
import { Modal, Button, Form, Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./navbars.css";
import logo from "../components/mmlogo.png"; // Import your logo image

const CustomNavbar = () => {
  const navigate = useNavigate();
  const handleShow = () => {
    navigate("/apply");
  };

  return (
    <>
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-3">
        <Container>
          {/* Replaced the text with a logo */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
  <img
    src={logo} // Your logo image path
    alt="MedicalMission Logo" // Accessibility
    width="150" // Set desired width
    height="auto" // Maintain aspect ratio
    className="d-inline-block align-top me-2" // Align logo properly
  />
  <span className="logo-text">MedicalMission</span> {/* Add class for external styling */}
</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto" style={{color:"black"}}>
              <Nav.Link href="/" className="me-3 fw-bold text-dark">Home</Nav.Link>
              <Nav.Link href="#" className="me-3 fw-bold text-dark">Courses</Nav.Link>
              <Nav.Link href="#" className="me-3 fw-bold text-dark">Campuses</Nav.Link>
              <Nav.Link href="#" className="me-3 fw-bold text-dark">Team</Nav.Link>
              <Nav.Link href="#" className="me-3 fw-bold text-dark">Gallery</Nav.Link>
            </Nav>
            <div className="d-flex flex-column flex-md-row align-items-left gap-2">
              <a href="tel:+91 8750768101" style={{ fontSize: "20px", textDecoration: "none", color: "black" }}>
                +91 8750768101
              </a>
              <Button variant="outline-danger" onClick={handleShow}>
                Apply Now
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
