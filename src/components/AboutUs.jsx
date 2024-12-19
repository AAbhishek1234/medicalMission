import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLightbulb, FaBullseye, FaHandshake } from "react-icons/fa";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <Container fluid className="about-us-container py-5" id="about-us">
      <Row className="text-center">
        <Col>
          <h2 className="about-us-title mb-4">About Us</h2>
          <p className="about-us-description">
            Welcome to our educational platform, where passion for learning
            meets opportunity! We are committed to providing students, parents,
            and educators with resources that empower growth and inspire
            success.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {/* Mission Card */}
        <Col md={4} sm={12} className="mb-4">
          <Card className="shadow-sm border-light" >
            <Card.Body className="text-center">
              <FaLightbulb size={50} className="mb-3 text-warning" />
              <Card.Title className="h5">Mission</Card.Title>
              <Card.Text>
                Our mission is to combine modern technology and education to
                help students achieve their goals. We aim to provide tools and
                guidance to ensure success in every academic journey.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Vision Card */}
        <Col md={4} sm={12} className="mb-4">
          <Card className="shadow-sm border-light">
            <Card.Body className="text-center">
              <FaBullseye size={50} className="mb-3 text-danger" />
              <Card.Title className="h5">Vision</Card.Title>
              <Card.Text>
                Our vision is to create an education system that inspires and
                empowers learners. We focus on accessibility, innovation, and
                opportunities to transform dreams into achievements.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Values Card */}
        <Col md={4} sm={12} className="mb-4">
          <Card className="shadow-sm border-light">
            <Card.Body className="text-center">
              <FaHandshake size={50} className="mb-3 text-success" />
              <Card.Title className="h5">Our Values</Card.Title>
              <Card.Text>
                We value excellence, innovation, and community. By fostering a
                collaborative environment, we ensure that students and
                educators achieve their shared goals together.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
