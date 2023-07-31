import React from "react";
import { Image, Row, Col, Card } from "react-bootstrap";
import "./cover.css";
import Skills from "./skills";
import logo from "../img/logo.png";
import Projects from "./projects";
import Tools from "./tools";
import Message from "./message";
import Footer from "./footer";
function Cover() {
  return (
    <div className="container-fluid">
      <div className="container" id="summaryDiv">
        <Row style={{ width: "70%" }}>
          <Col>
            <Card className="messageCard">
              <Card.Body>
                <Card.Title>
                  <h3>ERIC CHARAGU </h3>
                </Card.Title>
                <Card.Subtitle>
                  DATA SCIENCE AND BUSINESS ANALAYST
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
                    detail-oriented data analyst, I have honed my skills in
                    extracting valuable insights from complex datasets to drive
                    informed decision-making. This summary provides a glimpse
                    into my professional journey, showcasing the projects and
                    skills that demonstrate my expertise in the field of data
                    analysis.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* <h2 className="coverName">ERIC CHARAGU</h2>
            <h6>DATA SCIENCE AND BUSINESS ANALAYST</h6>
            <p style={{ fontFamily: "'Cousine', monospace", fontSize: "15px" }}>
              Welcome to my Data Analyst portfolio! As a passionate and
              detail-oriented data analyst, I have honed my skills in extracting
              valuable insights from complex datasets to drive informed
              decision-making. This summary provides a glimpse into my
              professional journey, showcasing the projects and skills that
              demonstrate my expertise in the field of data analysis.
            </p> */}
          </Col>
          <Col id="logoCol">
            <Image src={logo} />
          </Col>
        </Row>
      </div>
      <div className="container" id="coverDiv">
        <Tools />
        <Skills />
        <Projects />
        <Message />
      </div>
      <Footer />
    </div>
  );
}

export default Cover;
