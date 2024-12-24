import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInView } from "react-intersection-observer";

// Counter Component
const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);

  return <span>{count}</span>;
};

const SuccessSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <Container fluid className="text-center py-5 bg-white" >
      {/* Heading */}
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="fw-bold" style={{ color: "black", marginTop:"-1rem" }}>
            Our Success So Far
          </h1>
          <p className="mm-text-muted" style={{ color: "black" }}>
            Medical Mission operates at the intersection of education and
            healthcare, offering various paramedical courses in India. Our
            approach and efforts have made a huge impact in the healthcare
            industry. Our commitment to creating a difference remains strong and
            firm.
          </p>
        </Col>
      </Row>

      {/* Counters */}
      <Row className="mt-5" ref={ref}>
        <Col xs={6} md={3} className="mb-4">
          <img
            src="/Images/stdnt.png"
            alt="Students Trained"
            style={{ width: "60px", height: "60px" }}
          />
          <h2 className="fw-bold">
            {inView ? <Counter start={4950} end={5000} duration={1000} /> : "8000"}
            +
          </h2>
          <p className="mm-text-muted">Students Trained</p>
        </Col>

        <Col xs={6} md={3} className="mb-4">
          <img
            src="/Images/jobpartner.png"
            alt="Job Partners"
            style={{ width: "60px", height: "60px" }}
          />
          <h2 className="fw-bold">
            {inView ? <Counter start={970} end={1000} duration={1000} /> : "1100"}
            +
          </h2>
          <p className="mm-text-muted">Job Partners</p>
        </Col>

        <Col xs={6} md={3} className="mb-4">
          <img
            src="/Images/campus.png"
            alt="Campuses"
            style={{ width: "60px", height: "60px" }}
          />
          <h2 className="fw-bold">
            {inView ? <Counter start={0} end={2} duration={2} /> : "2"}+
          </h2>
          <p className="mm-text-muted">Campuses Across India</p>
        </Col>

        <Col xs={6} md={3} className="mb-4">
          <img
            src="/Images/graph.png"
            alt="Placement Rate"
            style={{ width: "60px", height: "60px" }}
          />
          <h2 className="fw-bold">
            {inView ? <Counter start={0} end={98} duration={1000} /> : "98"}%
          </h2>
          <p className="mm-text-muted">Placement Rate</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessSection;
