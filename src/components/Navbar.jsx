import React, { useState } from "react";
import { Modal, Button, Form, Container, Navbar, Nav } from "react-bootstrap";
// import { FaPhoneAlt } from "react-icons/fa";
import "./navbars.css";

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  // Modal show/hide handlers
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.qualification) newErrors.qualification = "Qualification is required";
    if (!formData.address) newErrors.address = "Address is required";
    return newErrors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      handleClose(); // Close the modal
      //alert("Successfully Submitted!"); // Show success popup
      // Clear form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        qualification: "",
        address: "",
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="/">MedicalMission</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="me-3 fw-bold text-dark">Home</Nav.Link>
              <Nav.Link href="#" className="me-3 fw-bold text-dark">Courses</Nav.Link>
              <Nav.Link href="#" className="me-3 fw-bold text-dark">Campuses</Nav.Link>
              <Nav.Link href="#" className="me-3 fw-bold text-dark">Blogs</Nav.Link>
              <Nav.Link href="#" className="me-3 fw-bold text-dark">More</Nav.Link>
            </Nav>
            <div className="d-flex flex-column flex-md-row align-items-left gap-2">
  {/* <FaPhoneAlt className="me-2" /> */}
  {/* Make the phone number clickable */}
  <a href="tel:+917000000003" style={{ fontSize: "20px", textDecoration: "none", color: "black" }}>
    +91 7000000003
  </a>
  <Button variant="outline-danger" onClick={handleShow}>
    Apply Now
  </Button>
</div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Form Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Apply Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
 
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group> 
            <Form.Group className="mb-3">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                name="qualification"
                placeholder="Enter your qualification"
                value={formData.qualification}
                onChange={handleChange}
                isInvalid={!!errors.qualification}
              />
              <Form.Control.Feedback type="invalid">{errors.qualification}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Form.Group>

            <div className="text-end">
              <Button variant="danger" type="submit">Submit</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;
