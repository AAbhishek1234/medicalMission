import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./team.css"; // Import the external CSS

const Team = () => {
  const alumniData = [
    {
      name: "UMESH BHARTI",
      designation: "Director",
      photo: "/Images/CEO.jpg",
    },
    {
      name: "Rashmi Chauhan",
      designation: "Administration Head",
      photo: "/Images/team3.jpg",
    },
    {
      name: "Rubasha Ahmad",
      designation: "Faculty Trainer",
      photo: "/Images/faculty2.jpg",
    },
    {
      name: "Md. Babar",
      designation: "Faculty Trainer",
      photo: "/Images/faculty1.jpg",
    },
    {
      name: "Ranjeet",
      designation: "Marketing Head",
      photo: "/Images/ranjeete.jpg",
    },
  ];

  return (
    <Container fluid className="team-container py-5" id="team">
      <div className="team-header text-center mb-5">
        <h1 className="team-title">Meet Our Team</h1>
      </div>

      <Row className="g-4">
        {alumniData.map((alumnus, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={`alumnus-${index}`}>
            <Card className="team-card">
              <Card.Img
                variant="top"
                src={alumnus.photo}
                alt={alumnus.name}
                className="team-card-img"
              />
              <Card.Body>
                <Card.Title className="team-card-title">
                  {alumnus.name}
                </Card.Title>
                <Card.Subtitle className="team-card-subtitle">
                  {alumnus.designation}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
