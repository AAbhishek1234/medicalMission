import React from "react";
import "./courses.css";

const Courses = () => {
  const coursesData = [
    { title: "Medical Lab Technology", bgColor: "#DFF6FF" },
    { title: "Radiology & Medical Imagine Technology", bgColor: "#FDE2E4" },
    { title: "Optometry Technology", bgColor: "#FFF1C1" },
    { title: "Operation Theatre Tech", bgColor: "#F7D6E0" },
    { title: "Dialysis Technology", bgColor: "#D3E4CD" },
    { title: "Cardiac Care Technology", bgColor: "#FFCCD5" },
    { title: "Hospital Management", bgColor: "#FFE4C4" },
    { title: " Hospital Sterilization Technology", bgColor: "#D4E8D4" },
    { title: "Patient Care Management", bgColor: "#E9F2F9" },
    { title: "Physiotherapy", bgColor: "#FFE5D9" },
    { title: "Auxiliary Nurse Midwifery", bgColor: "#FFE5D9" },
    { title: "General Nursing and Midwifery", bgColor: "#FFCCD5" },
    { title: "Community Medical Service & Essential Drugs", bgColor: "#D4E8D4" },
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
