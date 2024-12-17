import React, { useState } from "react";
import { Modal, Button, Form, Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import "./navbars.css";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const handleShow = () => {
    navigate("/apply");
  };


  return (
    <>
      
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
    </>
  );
};

export default CustomNavbar;
