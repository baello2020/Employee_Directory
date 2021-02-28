import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import backgroundImage from "./images/workplace.jpg";

const About = () => {
  return (
    <div>
      
      <Hero backgroundImage={backgroundImage}>
        <h1>Keep your team connected.</h1>
        <h2 >“If you can laugh together, you can work together.”
Robert Orben</h2>
      </Hero>
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Welcome to Employee Directory!</h1>
            <p>
            As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.
            </p>
            <br />
            <p>
            An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
