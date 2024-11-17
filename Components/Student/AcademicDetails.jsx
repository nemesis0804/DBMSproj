// src/components/AcademicDetails.js
import React from 'react';
import './AcademicDetails.css'
import Navbar from './Navbar';

const AcademicDetails = () => {
  const student = {
    name: "John Doe",
    grade: "10th Grade",
    schoolYear: "2024",
    subjects: [
      { name: "Mathematics", grade: "A" },
      { name: "English", grade: "B+" },
      { name: "Science", grade: "A-" },
      { name: "Social Studies", grade: "A" },
      { name: "Physical Education", grade: "B" },
    ],
    overallGPA: "94.3%",
    attendance: "95%",
  };

  return (
    <div>
      <Navbar/>
    <div className="academic-details-container">
      <section className="academic-header">
        <h1>Student Academic Details</h1>
        <h2>{student.name}</h2>
        <p>{student.grade}, {student.schoolYear}</p>
      </section>

      <section className="academic-info">
        <h3>Subjects and Grades</h3>
        <table className="academic-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {student.subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.name}</td>
                <td>{subject.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* GPA and Attendance Section */}
      <section className="gpa-attendance">
        <div className="gpa">
          <h3>Annual Percentage</h3>
          <p>{student.overallGPA}</p>
        </div>
        <div className="attendance">
          <h3>Attendance</h3>
          <p>{student.attendance}</p>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AcademicDetails;
