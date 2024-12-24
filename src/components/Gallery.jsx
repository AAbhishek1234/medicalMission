import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./gallery.css";

const Gallery = () => {
  const galleryImages = [
    "/Images/g1.jpg", // Replace with actual image paths
    "/Images/g2.jpg",
    "/Images/g9.jpg",
    "/Images/g88.jpg",
    "/Images/g10.jpg",
    "/Images/g6.jpg",
    "/Images/g77.jpg",
    "/Images/g4.jpg",
    
  ];

  return (
    <Container  id="gallery" className="gallery-container py-5">
      <h1 className="text-center mb-4 gallery-title" style={{fontWeight:"bold",fontSize:"2.5rem",color:"black"}}>Our Gallery</h1>
      <Row className="g-3">
        {galleryImages.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={3}>
            <div className="gallery-image-wrapper">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
