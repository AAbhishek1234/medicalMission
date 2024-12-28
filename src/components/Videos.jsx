import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./videos.css"; // Custom CSS file

const VideoCard = ({ videoSrc, isMobile }) => {
  return (
    <div
      className="text-center"
      style={{ marginBottom: isMobile ? "2rem" : "0" }}
    >
      <div
        className="ratio"
        style={{
          aspectRatio: "16/9",
          height: isMobile ? "auto" : "360px", // Auto height for mobile
        }}
      >
        <iframe
          src={videoSrc}
          title="YouTube Video"
          allowFullScreen
          className="rounded w-100 h-100"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

const VideoCardsSection = () => {
  const cardData = [
    {
      videoSrc: "https://www.youtube.com/embed/nrm8Rjgsy4k",
    },
  ];

  // Check if mobile view using screen size
  const isMobile = window.innerWidth <= 768;

  return (
    <Container className="py-5" style={{ backgroundColor: "white" }}>
      <Row className="align-items-center">
        {/* Left Section - Heading and Paragraph */}
        <Col
          xs={12}
          md={6}
          className={`text-md-start mb-4 mb-md-0 ${isMobile ? "text-center" : ""} order-1 order-md-1`}
        >
          <h1
            className="hding-fw-bold"
            style={{
              color: "black",
              marginBottom: "1rem",
            }}
          >
            Watch Us on YouTube
          </h1>
          <p
          className="parag"
            style={{
              color: "black",
              marginBottom: "1.5rem",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Discover the latest insights, tips, and updates from the world of
            healthcare and professional growth on our YouTube channel. Watch
            engaging videos that inspire, educate, and guide you toward building
            a successful career. From expert interviews to in-depth tutorials,
            we’ve got you covered. Subscribe now to stay connected and informed!
          </p>
        </Col>

        {/* Right Section - Video */}
        <Col xs={12} md={6} className="order-2 order-md-2">
          {cardData.map((card, index) => (
            <VideoCard key={index} videoSrc={card.videoSrc} isMobile={isMobile} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default VideoCardsSection;
