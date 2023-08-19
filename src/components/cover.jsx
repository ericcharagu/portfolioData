import React from "react";
import { Image, Row, Col, Card } from "react-bootstrap";
import "./cover.css";
import Skills from "./skills";
import logo from "../img/logo.png";
import Projects from "./projects";
import Tools from "./tools";
import Message from "./message";
import Footer from "./footer";
import Academic from "./academic";
function Cover() {
  return (
    <div className="container-fluid">
      <div className="container-fluid" id="summaryDiv">
        <Card className="messageCard">
          {/* <Row id="coverRow" style={{ width: "70%" }}>
            <Col id="messageCol"> */}
          <Card.Body>
            <Card.Title>
              <h3>ERIC CHARAGU </h3>
            </Card.Title>
            <Card.Subtitle>
              <h6>DATA SCIENCE AND BUSINESS ANALAYST</h6>
            </Card.Subtitle>
            <Card.Text
              style={{
                borderTop: "1px solid  rgb(250, 238, 238)",
                marginTop: "19px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cousine', monospace",
                  fontSize: "15px",
                  marginTop: "15px",
                }}
              >
                Welcome to my Data Analyst portfolio! As a passionate and
                detail-oriented data analyst, I have developed my skills in
                extracting valuable insights from complex datasets to drive
                informed wholistic decisions.
              </p>
            </Card.Text>
          </Card.Body>
          {/* </Col>
            <Col id="logoCol">
              <Image src={logo} />
            </Col>
          </Row> */}
        </Card>
      </div>
      <div className="container" id="coverDiv">
        <Tools />
        <Skills />
        <Projects />
        <Academic />
        <Message />
      </div>
      <Footer />
    </div>
  );
}

export default Cover;
