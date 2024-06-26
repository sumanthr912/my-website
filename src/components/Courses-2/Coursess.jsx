import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/student-15.png";
import courseImg2 from "../../assests/images/student-16.png";
import courseImg3 from "../../assests/images/student-17.jpg";
import "./Courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Complete CSS",
    lesson: 12,
    students: 125,
    rating: 4.8,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "JavaScript In-Depth",
    lesson: 1,
    students: 560,
    rating: 4.7,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Computer Networks ",
    lesson: 1,
    students: 120,
    rating: 5.0,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          
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

             
           
