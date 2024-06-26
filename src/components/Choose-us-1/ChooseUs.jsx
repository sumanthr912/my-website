import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Features from "../Features-1/Features";
import chooseImg from "../../assests/images/java.jpg";
import "./choose-us.css";

import ReactPlayer from "react-player";


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

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2 className="text-primary" id="id3">Why Choose Us</h2>
              <p>
               We are Providing recorded lectures to learn with Quality Content. If you would like to learn 
               Data Stuctures and Algorithms, If you are a Beginner then you can start from scratch like 
               Declaring Variables, taking Input etc. If you are an Intermediate then you can directly jump 
               the DSA part. If you are willing to learn Frontend WebDevelopment then by this Course you can get 
               recorded video Lectures on Html, CSS, BootStrap ,JavaScript, JQuery and ReactJS. 
               
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=9D-vP-jcc-Y"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                 
                </span>
               
              )}
              <h4 className="text-warning">Click On the Above Play Button to See demo</h4>
            </div>
          </Col>
        </Row>
      </Container>
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
    <a href="mailto:balajireddy.contact@gmail.com" className="m-5">Send email</a>
           
  </section>
      
    </section>
    
  );
};

export default ChooseUs;
