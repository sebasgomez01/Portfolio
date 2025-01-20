import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import readingTracker from "../../Assets/Projects/reading-tracker-visualization-computer.png";

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
              imgPath={readingTracker}
              isBlog={false}
              haveImg={true}
              title="Reading Tracker"
              description="Reading Tracker is a web application where users can save their readings to maintain a record. Basic CRUD 
              operations—Create, Read, Update, and Delete—can be performed on books.
              I used Java with Spring Boot for the backend, along with dependencies like Spring Security and Spring Data Rest, among others.
              Authentication is handled using JSON Web Tokens (JWT). The frontend is built with JavaScript using Vue, and the database is
              PostgreSQL. For deployment I use Docker and Nginx."
              ghLink="https://github.com/sebasgomez01/readingTracker"
              demoLink="https://reading-tracker.duckdns.org/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={false}
              isBlog={false}
              haveImg={false}
              title="Arda social network"
              description="Arda is a social network where users can share posts of different topics, 
              make comments, follow each other, among other functionalities.
              The techonologies that I used was Spring Boot for the backend with a MariaDB database,
              and React with Typescript for the frontend. The user interface was inspired in X/Twitter and Reddit.
              "
              ghLink="https://github.com/sebasgomez01/arda-project"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
