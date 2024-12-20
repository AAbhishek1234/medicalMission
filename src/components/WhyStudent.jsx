import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./whystudent.css"; // Add custom styles here

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Rajneesh",
    text: "I learned a lot through fun activities and different teaching methods at MedicalMission. ",
    company: "Placed with Orthotech India Pvt.Ltd",
    image: "/Images/carry.jpeg",
  },
  {
    id: 2,
    name: "Sneha",
    text: "I learned a lot through fun activities and different teaching methods at MedicalMission.",
    company: "Placed with HealthCare India Pvt.Ltd",
    image: "/Images/sg.jpg",
  },
  {
    id: 3,
    name: "Rahul",
    text: "I learned a lot through fun activities and different teaching methods at MedicalMission.",
    company: "Placed with MediTech Ltd.",
    image: "/Images/casual1.jpg",
  },
  {
    id: 4,
    name: "Upmanyu",
    text: "I learned a lot through fun activities and different teaching methods at MedicalMission.",
    company: "Placed with Standup India",
    image: "/Images/formal9.png",
  },
];

const StudentSlider = () => {
  return (
    <Container fluid className="py-5  text-center bg-white">
      {/* Heading */}
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <h1 className="fw-bold" style={{color:"black"}}>Why Students Love Medical Mission</h1>
          <p className="st-text-muted" style={{color:"black"}}>
            Medicalmission operates at the intersection of education and
            healthcare, offering various paramedical courses in India.
          </p>
        </Col>
      </Row>

      {/* Slider */}
      <Row className="justify-content-center" >
        <Col md={8} xs={12}>
          <Carousel
            indicators={false}
            controls={true}
            interval={2000}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className="d-flex flex-column align-items-center">
                  <p className="x-fs-5 text-muted text-center px-3">
                    {testimonial.text}
                  </p>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <h5 className="fw-bold mb-1">{testimonial.name}</h5>
                  <p className="tc-text-muted mb-0">{testimonial.company}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Buttons */}
     
    </Container>
  );
};

export default StudentSlider;
