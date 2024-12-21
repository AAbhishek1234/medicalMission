import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./navbars.css";
import logo from "../components/mmlogo.png"; 

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(""); // Track submission status

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // Update form data state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to send data to Google Sheets
  const sendToGoogleSheets = async (data) => {
    try {
      console.log("Data to be sent:", data);

      await fetch(
        "https://script.google.com/macros/s/AKfycbwE9_RvGBmjYYh4p8ROAnlxk3aeauduhPOY9dpvsLA34t7zISrzq4nky777dKhhQce05Q/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
        }
      );
      setSubmissionStatus("success"); // Set submission status to success
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error"); // Set submission status to error
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Ensure required fields are filled
    if (!formData.name || !formData.phone || !formData.email) {
      setSubmissionStatus("error"); // If fields are missing, show error
      return;
    }

    // Send form data to Google Sheets
    sendToGoogleSheets(formData);

    // Clear the form and close modal
    setFormData({ name: "", phone: "", email: "" });
    handleModalClose();
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
            <span className="navbar-logo-text">Medical Mission</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link className="me-3" style={{ textDecoration: "none", color: "black", fontWeight: "normal" }}>
                Home
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="courses"
                  smooth={true}
                  duration={10}
                  offset={-60}
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
              <a href="tel:+91 8750768101" style={{ fontSize: "20px", textDecoration: "none", color: "black" }}>
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
      <Modal show={showModal} onHide={handleModalClose} centered dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">
            <span style={{ fontSize: "24px", fontWeight: "bold", color: "#DC3545" }}>Join Us Today!</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          {submissionStatus === "success" && (
            <div className="alert alert-success" role="alert">
              Form submitted successfully! We will get in touch with you soon.
            </div>
          )}
          {submissionStatus === "error" && (
            <div className="alert alert-danger" role="alert">
              There was an error submitting the form. Please try again.
            </div>
          )}
          <Form onSubmit={handleFormSubmit}>
            {/* Name Field */}
            <Form.Group className="mb-4" controlId="formName">
              <div className="input-group">
                <span className="input-group-text bg-light border-0">
                  <FaUser style={{ color: "#DC3545" }} />
                </span>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
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
