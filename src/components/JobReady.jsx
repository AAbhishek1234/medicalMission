import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './jobready.css'; // Custom CSS file

const JobReady = () => {
  return (
    <Container fluid className="custom-container bg-white" >
      <Row className="align-items-center my-5">
        {/* Image First for Mobile, Second for Desktop */}
        <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }} className="custom-image-section text-center">
          <Card className="border-0">
            <Image
              src="/Images/wmremove-transformed.jpeg" // Replace with your actual image path
              alt="Healthcare Professional"
              className="custom-image"
              fluid
            />
          </Card>
        </Col>

        {/* Text Second for Mobile, First for Desktop */}
        <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }} className="custom-text-section">
          <div className="custom-section mb-4">
            <h3 className="custom-heading">Become <strong>Job-ready</strong></h3>
            <p className="custom-paragraph">
              Take advantage of our free English language and workplace skills classes, designed to equip you with everything you need to stand out and thrive at your workplace.
            </p>
          </div>
          <div className="custom-section mb-4">
            <h3 className="custom-heading">Become Part of a <strong>Prestigious Industry</strong></h3>
            <p className="custom-paragraph">
              Train with our network of 1100+ training partners in premier healthcare settings to gain invaluable industry experience that will shape your future career and enrich your professional journey.
            </p>
          </div>
          <div className="custom-section">
            <h3 className="custom-heading">Become a <strong>Lifelong Learner</strong></h3>
            <p className="custom-paragraph">
              Learn anytime and anywhere on our myCareer app. Access study material, get your doubts resolved and stay connected with your peers wherever you are.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JobReady;
