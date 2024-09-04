import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Hello! My name is <span className="purple">Sebastián</span>, and I enjoy creating and building things. 
              My interest in web development and understanding how it works was my first exposure 
              to programming. 
              <br/>
              <br/>
              During my <span className="purple">Computer Science </span> 
              studies in the <span className="purple">University of Buenos Aires</span>, 
              I gained solid foundations in 
              <span className="purple"> math, data structures and algorithms</span>, 
              and programming in different languages and 
              paradigms, such as functional, imperative, and object-oriented. 
              <br/>
              <br/>
              Currently, I'm focusing on developing full stack web applications 
              with <span className="purple">React</span> on the frontend and 
              <span className="purple"> Spring Boot</span> on the backend, 
              and I am looking for my first job experience in the world of programming.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play the guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Read books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch movies and anime
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;





/*
Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!

*/