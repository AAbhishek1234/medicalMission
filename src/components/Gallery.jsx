import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "./gallery.css";

const Gallery = () => {
  const galleryImages = [
    // "/Images/g1.jpg",
    // "/Images/g9.jpg",
    "/Images/gnew2.jpg",
    "/Images/gnew8.jpg",
    "/Images/g10.jpg",
    "/Images/g6.jpg",
    "/Images/g77.jpg",
    "/Images/gnew4.jpg",
    "/Images/gnew5.jpg",
    "/Images/g88.jpg",
    "/Images/gnew6.jpg",
    "/Images/gnew7.jpg",
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleShow = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container id="gallery" className="gallery-container py-5">
      <h1 className="text-center mb-5 gallery-title" style={{fontFamily: 'Merriweather'}}>Our Gallery</h1>
      <Row className="g-4">
        {galleryImages.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <div
              className="gallery-image-wrapper"
              onClick={() => handleShow(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
              />
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal for Full-Screen View */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body>
          <img
            src={modalImage}
            alt="Full-Size"
            className="d-block w-100"
            style={{ borderRadius: "10px" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Gallery;
