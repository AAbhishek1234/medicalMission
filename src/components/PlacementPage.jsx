import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./placement.css";

const ScrollLoadingPlacement = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const companies = [
    "Fortis Hospital",
    "NIMS Hospital",
    "Dr. Poswal Orthopedic Hospital",
    "QRG Morengo Hospital",
    "Umang Super-speciality Hospital",
    "Manavta Hospital",
    "Gaurav Hospital",
    "Shivam Diagnostic Center",
    "Pawan Hospital",
    "Ashirwad Hospital",
    "Apex Hospital",
    "Sunshine Hospital",
    "Anshu Hospital",
    "Drishti Pathlab",
    "Vashistha Pathlab",
    "Focus Diagnostic Center",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsLoading(false), 1000);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
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
      className="placement-section py-4"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="text-center mb-5">
        <h1
          className="fw-bold"
          style={{
            fontSize: "2.5rem",
            color: "white",
          }}
        >
          Our Placement Partners
        </h1>
        <p className="fs-5 text-white">
          Partnering with top-tier organizations to deliver successful careers.
        </p>
      </div>

      {isLoading && !isVisible ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row className="g-4 justify-content-center">
          {companies.map((company, index) => (
            <Col xs={6} sm={6} md={4} lg={3} key={`company-${index}`}>
              <Card
                className="company-card text-center shadow-sm border-0"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  height: "100%",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title
                    className="fw-semibold"
                    style={{
                      fontSize: "1.2rem",
                      color: "#212529",
                      textTransform: "capitalize",
                    }}
                  >
                    {company}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <p
        className="pp-fs-5 text-center mt-5 text-muted"
        style={{ color: "white" }}
      >
        We are proud to collaborate with over 1100 healthcare organizations,
        empowering students with exceptional career opportunities in healthcare
        and diagnostics.
      </p>
    </Container>
  );
};

export default ScrollLoadingPlacement;
