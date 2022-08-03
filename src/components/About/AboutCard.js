import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Divyadarshan Soni </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />I am a pursuing B.tech in Information Technologies in GIT
            Gandhinagar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Create NFTs
            </li>
            <li className="about-activity">
              <ImPointRight /> Envest in Crypto
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Push your self, because no one else is going to do it for you!"{" "}
          </p>
          <footer className="blockquote-footer">Divyadarshan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
