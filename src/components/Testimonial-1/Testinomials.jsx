import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/student-131.jpg";

const Testinomials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-75 rounded-pill" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4" id="id5">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Good Choice
                      </h6>
                      <p>
                        Believe Me...!
                        This Course is Simply Superb and great Quality and Content.
                        Try Once
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Bharat Reddy</h6>
                        <p className="text-primary">Tirupati, India</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Try it Out....!
                      </h6>
                      <p>
                      Really Comlete DSA and Development with great content
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Vinod Reddy</h6>
                        <p className="text-primary">Hyderabad, India</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Simply Cool
                      </h6>
                      <p>Before Starting this course I have big Zero Knowlegde in DSA. Now I am very Confident in Problem Solving</p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Yaswanth Vepanjeri</h6>
                        
                        <p className="text-primary">Hyderabad, India</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testinomials;
