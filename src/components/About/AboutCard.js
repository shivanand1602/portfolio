import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Shivanand Pandey </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />I am a junior year pursuing BTech in Computer Science and Engineering in Madan Mohan Malaviya University of Technology, Gorakhpur.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "light blue" }}>
            "Never Accept less than the best"{" "}
          </p>
          <footer className="blockquote-footer">Shivanand Pandey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
