import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jewellers from "../../Assets/Projects/jewellers.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jewellers}
              isBlog={false}
              title="Divya Jewellers"
              description="I created a jewellry website usnig html, css, javaScript and bootstrap."
              link="https://www.divyajewellers.in/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
