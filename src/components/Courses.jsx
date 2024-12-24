// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./courses.css"; 

// const Courses = () => {
//   const coursesData = [
//     {
//       title: "Web Development",
//       description: "Learn HTML, CSS, JavaScript, and React to build dynamic websites.",
//       duration: "6 Months",
//     },
//     {
//       title: "Data Science",
//       description: "Dive into data analysis, machine learning, and Python programming.",
//       duration: "8 Months",
//     },
//     {
//       title: "Digital Marketing",
//       description: "Master SEO, SEM, social media marketing, and analytics tools.",
//       duration: "3 Months",
//     },
//     {
//       title: "Graphic Design",
//       description: "Create stunning visuals with Photoshop, Illustrator, and Figma.",
//       duration: "4 Months",
//     },
//     {
//       title: "Cybersecurity",
//       description: "Learn how to secure systems and prevent cyber threats.",
//       duration: "5 Months",
//     },
//   ];

//   return (
//     <Container id=""className="courses-container py-5">
//       <div className="text-center mb-5">
//         <h1 className="courses-title">Explore Our Courses</h1>
//         <p className="courses-subtitle">
//           Choose from a variety of professional courses designed to boost your career.
//         </p>
//       </div>

//       <Row className="g-4">
//         {coursesData.map((course, index) => (
//           <Col xs={12} sm={6} md={4} lg={3} key={`course-${index}`}>
//             <Card className="course-card h-100 shadow-sm border-0">
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="course-card-title">{course.title}</Card.Title>
//                 <Card.Text className="course-card-text">{course.description}</Card.Text>
//                 <p className="course-duration text-muted">Duration: {course.duration}</p>
               
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Courses;




import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./courses.css";

const Courses = () => {
  const coursesData = [
    {
      title: "B.VOC in Medical Lab Technology",
 
    },
    {
        title: "B.VOC in Radiology & Medical Imaging Technology",
   
      },
      {
        title: "B.VOC in Optometry Technology",
   
      },
      {
        title: "B.VOC in Operation Theatre Technology",
   
      },
      {
        title: "B.VOC in Dialysis Technology",
   
      },
      {
        title: "B.VOC in Cardiac Care Technology",
   
      },
      {
        title: "B.VOC in Hospital Management",
   
      },
      {
        title: "B.VOC in Hospital Sterilization Technology",
   
      },
      {
        title: "B.VOC in Patient Care Management",
   
      },
      {
        title: "B.VOC in Physiotherapy ",
   
      },
      {
        title: "M.VOC in Medical Lab Technology",
   
      },
      {
        title: "M.VOC in Radiology & Medical Imaging Technology",
   
      },
      {
        title: "M.VOC in Optometry Technology",
   
      },
      {
        title: "M.VOC in Hospital Management",
   
      },
    // {
    //   title: "Data Science",
    //   description: "Dive into data analysis, machine learning, and Python programming.",
    //   duration: "8 Months",
    // },
    // {
    //   title: "Digital Marketing",
    //   description: "Master SEO, SEM, social media marketing, and analytics tools.",
    //   duration: "3 Months",
    // },
    // {
    //   title: "Graphic Design",
    //   description: "Create stunning visuals with Photoshop, Illustrator, and Figma.",
    //   duration: "4 Months",
    // },
    // {
    //   title: "Cybersecurity",
    //   description: "Learn how to secure systems and prevent cyber threats.",
    //   duration: "5 Months",
    // },
  ];

  return (
    <Container id="courses" className="courses-container py-5">
      <div className="text-center mb-5">
        <h1 className="courses-title">Explore Our Courses</h1>
        <p className="courses-subtitle">
          Choose from a variety of professional courses designed to boost your career.
        </p>
      </div>

      <Row className="g-4">
        {coursesData.map((course, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={`course-${index}`}>
            <Card className="course-card h-100 shadow-sm border-0">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="course-card-title">{course.title}</Card.Title>
                {/* <Card.Text className="course-card-text">{course.description}</Card.Text>
                <p className="course-duration text-muted">Duration: {course.duration}</p> */}
               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
