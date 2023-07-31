import React from "react";
import { Table, Card, Col, Image, Row } from "react-bootstrap";
import "./skills.css";
import { allSkills } from "./skillsData";
function Skills() {
  return (
    <div className="container-fluid" style={{ marginTop: "50px" }}>
      <h3>SKILLS</h3>
      <Row xs={1} md={2} sm={2} className="g-4">
        {allSkills.map((data, key) => {
          return (
            <Col key={key}>
              <Card className="skillCard">
                <Card.Body>
                  <div className="row" style={{ height: "100%" }}>
                    <div className="col my-auto" id="skillTitleCol">
                      {" "}
                      <Card.Title className="skillTitle">
                        {data.Title}
                      </Card.Title>
                    </div>
                    <div className="col my-auto" id="skillDescCol">
                      <Card.Text className="skillDesc">{data.Desc}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Skills;
