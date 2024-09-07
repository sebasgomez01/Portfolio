import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiLinux,
  DiCss3,
  DiHtml5,

} from "react-icons/di";
import {
  SiTypescript,
  SiSpring,
  SiSpringboot,
  SiMariadb,
  SiGnubash
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h3> Java </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <h3> Spring </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <h3> Spring Boot </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h3> C++ </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3> JavaScript </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3> React </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h3> TypeScript </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3> NodeJS </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <h3> Linux </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMariadb />
        <h3> MariaDB </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h3> Python </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3> Git </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h3> HTML </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h3> CSS </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash/>
        <h3> Bash </h3>
      </Col>
    </Row>
  );
}

export default Techstack;
