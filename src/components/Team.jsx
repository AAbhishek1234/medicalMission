import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./team.css";

const OurTeam = () => {
  const teamData = [
    {
      image: "/Images/CEO.jpg",
      title: "Chief Executive Officer",
      text: " ",
    },
    {
      image: "/Images/faculty3.jpg",
      title: "Administration Head",
      text: "A Thriving Community of Learners",
    },
    {
      image: "/Images/ranjeete.jpg",
      title: "Marketing Head hello sir",
      text: "Leading Through Expertise",
    },
    {
      image: "/Images/faculty1.jpg",
      title: "Radiology & Imaging Technology",
      text: "Pre-schools Across the Country",
    },
    {
      image: "/Images/faculty2.jpg",
      title: "Medical Lab Technology",
      text: "Recognized for Excellence in Education",
    },
  ];

  return (
    <Container
      id="team"
      className="te-py-4"
      style={{ paddingTop: "80px", marginTop: "-50px" }} // Adjustments for fixed navbar
    >
      <h1 className="m-text-center mb-4" style={{ fontWeight: "bold",color:"black",textAlign:"center" }}>
        Meet Our Team
      </h1>
      <Row className="g-4">
        {teamData.map((item, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <Card className="h-100 border-0 shadow-sm team-card">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                style={{
                  height: "250px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title
                  className="mb-2"
                  style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  {item.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurTeam;
