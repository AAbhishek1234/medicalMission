// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import image1 from "./dr.png"; 
// import image2 from "./nurse.png";
// import "./banner.css"; 

// const HeroSection = () => {
//   const images = [image1, image2];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const isMobile = window.innerWidth <= 767;

//   return (
//     <Container fluid className="hero-section bg-light px-0">
//       <Row className="align-items-center text-center text-md-start m-0">
//         <Col xs={12} className="d-md-none mb-3">
//           <div className="carousel-wrapper" style={{ height: isMobile ? "250px" : "auto" }}>
//             <img
//               src={images[currentIndex]} 
//               alt={`Slide ${currentIndex}`}
//               className="img-fluid"
//               style={{ objectFit: "cover", height: "100%" }} 
//             />
//           </div>
//         </Col>

//         <Col xs={12} md={6} className="p-4">
//           <h1 className="display-4 fw-bold">Build a Progressive Career in</h1>
//           <h1 className="nur-text-primary" style={{color:"black"}}>Nursing</h1>
//           <div className="mt-4">
//             <a href="tel:+917000000003">
//               <Button variant="danger" className="me-2">
//                 Enquire Now
//               </Button>
//             </a>
//             <Button variant="outline-danger">▶ Watch Video</Button>
//           </div>
//         </Col>

//         <Col
//           md={6}
//           className="d-none d-md-flex position-relative justify-content-center align-items-center"
//         >
//           <div
//             className="carousel-wrapper"
//             style={{ height: isMobile ? "250px" : "415px" }} 
//           >
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Slide ${index}`}
//                 className={`carousel-image ${index === currentIndex ? "active" : ""}`}
//               />
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HeroSection;












import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image1 from "./dr.png";
import image2 from "./nurse.png";
import "./banner.css";

const HeroSection = () => {
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Automatic image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Dynamic resizing for mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="hero-section bg-light px-0">
      <Row className="align-items-center text-center text-md-start m-0">
        {/* Mobile Image Section */}
        <Col xs={12} className="d-md-none mb-3">
          <div
            className="carousel-wrapper"
            style={{ minHeight: "250px" }}
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="img-fluid"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
        </Col>

        {/* Text Content */}
        <Col xs={12} md={6} className="p-4">
          <h1 className="display-4 fw-bold">Build a Progressive Career in</h1>
          <h1 className="nur-text-primary" style={{ color: "black" }}>
            Nursing
          </h1>
          <div className="mt-4">
            <a href="tel:+917000000003">
              <Button variant="danger" className="me-2">
                Enquire Now
              </Button>
            </a>
            <Button variant="outline-danger">▶ Watch Video</Button>
          </div>
        </Col>

        {/* Desktop Carousel */}
        <Col
          md={6}
          className="d-none d-md-flex position-relative justify-content-center align-items-center"
        >
          <div className="carousel-wrapper" style={{ minHeight: "415px" }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`carousel-image ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
