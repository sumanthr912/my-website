import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/student-4.jpeg";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className=" bg-primary w-100 h-60 rounded-pill " />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content ">
              <h2 id="id1">About Us</h2>
              <p >
                We are All Graduates from Lovely Professional University <meta property="og:video:width" content="385" />
                 with B.Tech in Computer Science and Engineering. We have Good Knowledge in Data Structures 
                 and Algorithms Using Java Language and we have Good Knowledge in Frontend Development Using 
                 ReactJS. There are many Students who start thier Placement Prparation very Late.Due To Insufficient Time 
                 they think regarding the paid online courses.The Cost of these paid Courses might be High.Our Mission is to provide the available free Courses to the Students.
               
              </p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
