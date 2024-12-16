import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data on submit:", formData);  
    sendToGoogleSheets(formData);

    // Show success alert first, then reset form
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      phone: '',
      email: '',
    });
  };

  const sendToGoogleSheets = async (data) => {
    try {
      console.log("Data to be sent:", data);  
  
      const response = await fetch('https://script.google.com/macros/s/AKfycbwE9_RvGBmjYYh4p8ROAnlxk3aeauduhPOY9dpvsLA34t7zISrzq4nky777dKhhQce05Q/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',  
      });
  
      console.log("Request sent, no response body available.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert('Error submitting form');
    }
  };
  
  return (
    <Container className="mt-5">
      <h2>Contact Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
