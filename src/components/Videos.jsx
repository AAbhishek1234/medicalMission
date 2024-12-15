import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./videos.css"; // Custom CSS file

const VideoCard = ({ videoSrc, name, title }) => {
  return (
    <Card className="h-100 shadow-sm video-card">
      <Card.Body className="text-center">
        {/* Video */}
        <div className="ratio ratio-16x9 mb-3">
          <iframe
            src={videoSrc}
            title={name}
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>

        {/* Name */}
        <Card.Title className="fw-bold">{name}</Card.Title>

        {/* Title */}
        <Card.Text className="text-muted">{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const VideoCardsSection = () => {
  const cardData = [
    {
      videoSrc: "https://www.youtube.com/embed/tgbNymZ7vqY",
      name: "John Doe",
      title: "Healthcare Specialist",
    },
    {
      videoSrc: "https://www.youtube.com/embed/tgbNymZ7vqY",
      name: "Jane Smith",
      title: "Paramedic Trainee",
    },
    {
      videoSrc: "https://www.youtube.com/embed/tgbNymZ7vqY",
      name: "Michael Johnson",
      title: "Medical Practitioner",
    },
  ];

  return (
    <Container className="py-5" style={{ marginTop: "-3rem" }}>
      {/* Section Heading */}
      
      {/* Mobile View (1 Card at a Time) */}
      <div className="d-lg-none">
        {cardData.map((card, index) => (
          <Row key={index} className="g-4 mb-3 justify-content-center">
            <Col xs={12} md={8}>
              <VideoCard {...card} />
            </Col>
          </Row>
        ))}
      </div>

      {/* Desktop View (3 Cards) */}
      <Row className="g-4 d-none d-lg-flex">
        {cardData.map((card, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <VideoCard {...card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VideoCardsSection;
