import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/student-12.png";
import "./Top1.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="mt-0 hero__content">
              <h4 className="alert alert-primary p-2 mt-3">Before thinking to buy any paid online courses just check our website to know what are all the free courses available</h4>
              <h2 className="mb-2 hero__title text-info">
                Never Stop Learnig <br /> Learn on your <br /> Best Possible Time
              </h2>
              <p className="mb-5 ">
              Getting Frustration with college Timings. 
              Not Getting Sufficeint Time For Learning.
              Not be able to Focus On DSA and Development At Same Time.
              Looking for Online Courses to Buy. Let's Check the Free Courses Available for you.
              Forget About the Non CS Subjects.Start Practicing DSA And Development.
              We are  here to Provide you the  best possible way to Learn in your free Time.
              </p>
            </div>
            
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="mt-5  rounded-pill w-100  h-75 hero__img " />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
