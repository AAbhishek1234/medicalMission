import React from "react";
import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap";
import { FaLightbulb, FaBook, FaRocket, FaTrophy } from "react-icons/fa";
import './se.css';

const StudentTimeline = () => {
  return (
    <section className="timeline-section py-5">
      <Container>
        <h1 className="text-center mb-5 fw-bold" style={{ color: "black" }}>
          Student's Path to Excellence
        </h1>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaLightbulb size={30} />
                </div>
                <div className="timeline-content">
                  <h5>Step 1: Discover</h5>
                  <p>Explore new opportunities and open your mind to new possibilities.</p>
                  <ProgressBar now={20} variant="info" />
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaBook size={30} />
                </div>
                <div className="timeline-content">
                  <h5>Step 2: Learn</h5>
                  <p>Engage in courses, materials, and resources to build knowledge.</p>
                  <ProgressBar now={40} variant="warning" />
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaRocket size={30} />
                </div>
                <div className="timeline-content">
                  <h5>Step 3: Apply</h5>
                  <p>Put your knowledge into action, building projects or gaining experience.</p>
                  <ProgressBar now={60} variant="success" />
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaTrophy size={30} />
                </div>
                <div className="timeline-content">
                  <h5>Step 4: Achieve</h5>
                  <p>Reap the rewards of your hard work with success and recognition.</p>
                  <ProgressBar now={100} variant="danger" />
                </div>
              </div>
            </div>
          </Col>
        </Row>

       
      </Container>
    </section>
  );
};

export default StudentTimeline;
