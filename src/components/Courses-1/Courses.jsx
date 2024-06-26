import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/student-20.jpg";
import courseImg3 from "../../assests/images/student-22.jpg";
import courseImg4 from "../../assests/images/student-17.jpg";
import courseImg5 from "../../assests/images/student-16.png";
import courseImg6 from "../../assests/images/student-15.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Complete HTML",
    lesson: 1,
    students: 780,
    rating: 4.6,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Become a Java Expert",
    lesson: 56,
    students: 460,
    rating: 4.4,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Matser ReactJS",
    lesson: 120,
    students: 148,
    rating: 4.9,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "Complete CSS",
    lesson: 12,
    students: 125,
    rating: 4.8,
    imgUrl: courseImg6,
  },

  {
    id: "05",
    title: "JavaScript In-Depth",
    lesson: 1,
    students: 560,
    rating: 4.7,
    imgUrl: courseImg5,
  },

  {
    id: "06",
    title: "Computer Networks ",
    lesson: 1,
    students: 120,
    rating: 5.0,
    imgUrl: courseImg4,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                { <h2 class="free" id="id2">Available Free Courses</h2> }
                </div>
                </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard  item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      
    </section>
  );
};

export default Courses;

             
           
