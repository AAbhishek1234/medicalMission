// import React from "react";
// import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
// import image1 from "./dr.png"; 
// import image2 from "./nurse.png"; 

// const HeroSection = () => {
//   return (
//     <Container fluid className="hero-section bg-light">
//       <Row className="align-items-center text-center text-md-start">
//         <Col md={6} className="p-4">
//           <h1 className="display-4 fw-bold">Build a Progressive Career in</h1>
//           <h1 className="text-primary">Nursing</h1>
//           <div className="mt-4">
//             <Button variant="danger" className="me-2">
//               Enquire Now
//             </Button>
//             <Button variant="outline-danger">▶ Watch Video</Button>
//           </div>
//         </Col>

//         <Col md={6}>
//           <div style={{ width: "100%", height: "500px", overflow: "hidden" }}>
//             <Carousel fade controls={false} indicators={false} interval={3000}>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src={image1}
//                   alt="First Slide"
//                   style={{
//                     height: "500px",
//                     objectFit: "contain",
//                   }}
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src={image2}
//                   alt="Second Slide"
//                   style={{
//                     height: "500px",
//                     objectFit: "contain", 
//                   }}
//                 />
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HeroSection;









import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image1 from "./dr.png"; // First image path
import image2 from "./nurse.png"; // Second image path
import "./banner.css"; // Import custom CSS

const HeroSection = () => {
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Check window width for mobile view
  const isMobile = window.innerWidth <= 767;

  return (
    <Container fluid className="hero-section bg-light px-0">
      <Row className="align-items-center text-center text-md-start m-0">
        {/* Mobile View - Image First */}
        <Col xs={12} className="d-md-none mb-3">
          <div className="carousel-wrapper" style={{ height: isMobile ? "250px" : "auto" }}>
            <img
              src={images[currentIndex]} // Use currentIndex for image switching
              alt={`Slide ${currentIndex}`}
              className="img-fluid"
              style={{ objectFit: "cover", height: "100%" }} // Ensure image fits the container
            />
          </div>
        </Col>

        {/* Left Side Content */}
        <Col xs={12} md={6} className="p-4">
          <h1 className="display-4 fw-bold">Build a Progressive Career in</h1>
          <h1 className="text-primary">Nursing</h1>
          <div className="mt-4">
            <Button variant="danger" className="me-2">
              Enquire Now
            </Button>
            <Button variant="outline-danger">▶ Watch Video</Button>
          </div>
        </Col>

        {/* Right Side Image - Desktop View */}
        <Col
          md={6}
          className="d-none d-md-flex position-relative justify-content-center align-items-center"
        >
          <div
            className="carousel-wrapper"
            style={{ height: isMobile ? "250px" : "415px" }} // Adjust height for mobile view
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`carousel-image ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
