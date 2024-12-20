import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./navbars.css";
import logo from "../components/mmlogo.png"; // Import your logo image

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    handleModalClose(); // Close the modal after form submission
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="MedicalMission Logo"
              width="150"
              height="auto"
              className="navbar-logo me-2" // Custom class for the logo image
            />
            <span className="navbar-logo-text">Medical Mission</span> {/* Custom class for the text */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link
                onClick={handleScrollToTop} // Scroll to top on click
                className="me-3"
                style={{ textDecoration: "none", color: "black", fontWeight: "normal" }}
              >
                Home
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="courses"
                  smooth={true}
                  duration={10}
                  offset={-60} // Offset for fixed navbar height
                  className="me-3"
                  style={{ textDecoration: "none", color: "black", fontWeight: "normal" }}
                >
                  Courses
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="team"
                  smooth={true}
                  duration={10}
                  offset={-60}
                  className="me-3"
                  style={{ textDecoration: "none", color: "black", fontWeight: "normal" }}
                >
                  Team
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="gallery"
                  smooth={true}
                  duration={10}
                  offset={-60}
                  className="me-3"
                  style={{ textDecoration: "none", color: "black", fontWeight: "normal" }}
                >
                  Gallery
                </Link>
              </Nav.Link>
            </Nav>
            <div className="d-flex flex-column flex-md-row align-items-left gap-2">
              <a
                href="tel:+91 8750768101"
                style={{
                  fontSize: "20px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                +91 8750768101
              </a>
              <Button variant="outline-danger" onClick={handleModalShow}>
                Apply Now
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Form */}
      <Modal
        show={showModal}
        onHide={handleModalClose}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">
            <span style={{ fontSize: "24px", fontWeight: "bold", color: "#DC3545" }}>
              Join Us Today!
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form onSubmit={handleFormSubmit}>
            {/* Name Field */}
            <Form.Group className="mb-4" controlId="formName">
              <div className="input-group">
                <span className="input-group-text bg-light border-0">
                  <FaUser style={{ color: "#DC3545" }} />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="form-control shadow-sm"
                  style={{ borderRadius: "30px" }}
                  required
                />
              </div>
            </Form.Group>

            {/* Phone Number Field */}
            <Form.Group className="mb-4" controlId="formPhone">
              <div className="input-group">
                <span className="input-group-text bg-light border-0">
                  <FaPhoneAlt style={{ color: "#DC3545" }} />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  className="form-control shadow-sm"
                  style={{ borderRadius: "30px" }}
                  required
                />
              </div>
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-4" controlId="formEmail">
              <div className="input-group">
                <span className="input-group-text bg-light border-0">
                  <FaEnvelope style={{ color: "#DC3545" }} />
                </span>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="form-control shadow-sm"
                  style={{ borderRadius: "30px" }}
                  required
                />
              </div>
            </Form.Group>

            {/* Submit Button */}
            <Button
              variant="primary"
              type="submit"
              className="w-100 py-2"
              style={{
                backgroundColor: "#DC3545",
                border: "none",
                borderRadius: "30px",
                fontWeight: "bold",
                fontSize: "18px",
                boxShadow: "0px 4px 10px rgba(220, 53, 69, 0.4)",
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;
