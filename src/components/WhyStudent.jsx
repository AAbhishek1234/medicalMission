import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./whystudent.css";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Tanisha",
    text: "I learned a lot through fun activities and different teaching methods at Medical Mission.",
    company: "Placed with SSB Hospital",
    image: "/Images/TANISHA.png",
  },
  {
    id: 2,
    name: "Rakhi",
    text: "Medical Mission is dedicated to making students job-ready and they deliver on their promises.",
    company: "Placed with HealthCare India Pvt.Ltd",
    image: "/Images/rakhi.jpg",
  },
  {
    id: 3,
    name: "Sandeep Bhagel",
    text: "I used to be a very shy person. After joining Medical Mission, with each passing day my confidence level improved.",
    company: "Placed with MediTech Ltd.",
    image: "/Images/sandeep bhagel.jpg",
  },
  {
    id: 4,
    name: "Rani",
    text: "Medical Mission provided a supportive and friendly learning environment that made me feel comfortable.",
    company: "Placed with Standup India",
    image: "/Images/RANI.png",
  },
];

const StudentSlider = () => {
  return (
    <Container
      fluid
      className="py-5 px-4"
      style={{
        backgroundColor: "#F5F5F5",
        color: "#333",
      }}
    >
      <Row className="align-items-center justify-content-center">
        {/* Left Section: Heading and Text */}
        <Col md={5} xs={12} className="text-md-start text-center mb-4 mb-md-0">
          <h1
          className="why"
            style={{
              fontSize: "2.8rem",
              fontWeight: "bold",
              lineHeight: "1.3",
              color: "#283593",
            }}
          >
            Why Students Love<span style={{ color: "#FFC107" }}> Medical Mission</span>
          </h1>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              color: "black",
            }}
          >
            Join Medical Mission and experience excellence in healthcare
            education. Learn from the best and secure a bright future in the
            medical field.
          </p>
        </Col>

        {/* Right Section: Testimonial Slider */}
        <Col md={7} xs={12}>
          <Carousel
            indicators={true}
            controls={true}
            interval={3000}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div
                  className="d-flex flex-column align-items-center p-4"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "10px",
                    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                    color: "#333",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontStyle: "italic",
                      marginBottom: "1rem",
                      color: "#5F6368",
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "90px",
                      height: "90px",
                      objectFit: "fill",
                      border: "4px solid #FFC107",
                    }}
                  />
                  <h5
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      marginBottom: "0.3rem",
                      color: "#283593",
                    }}
                  >
                    {testimonial.name}
                  </h5>
                  <p style={{ fontSize: "0.9rem", color: "#777" }}>
                    {/* {testimonial.company} */}
                  </p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentSlider;
