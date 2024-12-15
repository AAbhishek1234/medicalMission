import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./placement.css"; // Custom CSS file

const ScrollLoadingPlacement = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const companies = [
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com" },
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
    { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
    { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
    { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsLoading(false), 1000); // Loading spinner for 1.5s
          observer.unobserve(entry.target); // Stop observing after triggering
        }
      },
      { threshold: 0.3 } // 30% visibility triggers
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <Container
      fluid
      className="placement-section p-5"
      ref={sectionRef}
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center mb-4">
        <h1 className="fw-bold text-light animated-title">
          Our Placement Partners
        </h1>
        <p className="text-light fs-5">
          Empowering graduates to work with the world's top companies.
        </p>
      </div>

      {/* Show Spinner until Cards Load */}
      {isLoading && !isVisible ? (
        <div className="d-flex justify-content-center align-items-center loading-spinner">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <Row className="g-4 justify-content-center">
          {companies.map((company, index) => (
            <Col xs={6} sm={4} md={3} key={`company-${index}`}>
              <Card className="company-card text-center shadow border-0">
                <div className="company-logo-wrapper">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="img-fluid"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-dark">{company.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <p className="pp-text-light fs-5">
      Over 1100 healthcare organisations are joining hands with us to provide successful careers to our students after completing one of the many paramedical courses from MedicalMission.
        </p>
    </Container>
  );
};

export default ScrollLoadingPlacement;
