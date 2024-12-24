import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./navbars.css";
import logo from "../components/mmlogo.png"; // Import your logo image

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track form submission state

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
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Ensure required fields are filled
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all the fields.");
      return;
    }

    // Send form data to Google Sheets
    sendToGoogleSheets(formData);

    // Set form submission success state to true
    setIsFormSubmitted(true);

    // Clear the form data
    setFormData({ name: "", phone: "", email: "" });

    // Close the modal after 1 second
    setTimeout(() => {
      setIsFormSubmitted(false);
      handleModalClose();
    }, 2500);
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
              <Nav.Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Scroll to the top smoothly
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
                  to="alumni"
                  smooth={true}
                  duration={10}
                  offset={-60}
                  className="me-3"
                  style={{ textDecoration: "none", color: "black", fontWeight: "normal" }}
                >
                  Alumni
                </Link>
                </Nav.Link>

              <Nav.Link>
                <Link
                  to="gallery"
                  smooth={true}
                  duration={10}
                  offset={-70}
                  className="me-3"
                  style={{ textDecoration: "none", color: "black", fontWeight: "normal" }}
                >
                  Gallery
                </Link>
              </Nav.Link>
            </Nav>
            <div className="d-flex flex-column flex-md-row align-items-left gap-2">
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
          {isFormSubmitted ? (
            <div className="text-center">
              <h5 className="text-success">Thank you for your submission!</h5>
              <p>Your details have been received, and we will contact you soon.</p>
            </div>
          ) : (
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
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;
 