import React from "react";
import "./courses.css";

const Courses = () => {
  const coursesData = [
    { title: "B.VOC in Medical Lab Technology", bgColor: "#DFF6FF" },
    { title: "B.VOC in Radiology & Imaging Technology", bgColor: "#FDE2E4" },
    { title: "B.VOC in Optometry Technology", bgColor: "#FFF1C1" },
    { title: "B.VOC in Operation Theatre Tech", bgColor: "#F7D6E0" },
    { title: "B.VOC in Dialysis Technology", bgColor: "#D3E4CD" },
    { title: "B.VOC in Cardiac Care Technology", bgColor: "#FFCCD5" },
    { title: "B.VOC in Hospital Management", bgColor: "#FFE4C4" },
    { title: "B.VOC in Sterilization Technology", bgColor: "#D4E8D4" },
    { title: "B.VOC in Patient Care Management", bgColor: "#E9F2F9" },
    { title: "B.VOC in Physiotherapy", bgColor: "#FFE5D9" },
    { title: "M.VOC Medical Lab Technology", bgColor: "#D1E8E2" },
    { title: "M.VOC in Radiology & Medical Imagine Technology", bgColor: "#FFE7CC" },
    { title: "M.VOC in Optometry Technology", bgColor: "#FFF1C1" },
    { title: "M.VOC in Hospital Management", bgColor: "#E9F2F9" },

  ];

  return (
    <div id="courses" className="courses-container">
      <div className="courses-header">
        <h1>Our Courses</h1>
        <p>Explore a wide range of courses tailored for your career growth.</p>
      </div>
      <div className="courses-grid">
        {coursesData.map((course, index) => (
          <div
            key={index}
            className="course-card"
            style={{ backgroundColor: course.bgColor }}
          >
            <h2 style={{fontSize:"1.5rem"}}>{course.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
