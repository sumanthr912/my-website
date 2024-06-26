import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Email-Support",
    desc: "you can drop an email to us regarding your issues with the course we will try our best to give fast",  
    icon: "ri-draft-line",
  },

  {
    title: "Placemnet Assistance",
    desc: "If you will be able to get ratings in codeForces, Codechef and Leetcode we will send the details of Off-Campus Hiring",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "After Successful completion of the course that you enrolled we will provide a free certificate to the mail",
  
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
