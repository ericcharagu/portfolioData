import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./projects.css";
import { allProjects } from "./portfolioData";
function Projects() {

  return (
    <div
      className="container-fluid"
      id="projectDiv"
      style={{ marginTop: "50px" }}
    >
      <h3>PROJECTS</h3>

      {allProjects.map((data, key) => {
        return (
          <Card className="projectCard" key={data.File}>
            <Card.Body>
              <Card.Title
                style={{
                  borderBottom: "1px solid black",
                  // textAlign: "center",
                }}
              >
                <h4>{data.Title}</h4>
              </Card.Title>{" "}
              <Card.Subtitle>
                <h6>
                  <strong>Category:</strong>
                  {data.Category}
                </h6>
              </Card.Subtitle>
              <h6>
                <strong>Skills:</strong>
                {data.Skills}
              </h6>
              <Card.Text>
                <p style={{ fontSize: "15px" }}>{data.Summary}</p>
                <Link key={data.File} to={data.File} target="_blank">
                  <button className="btn btn-success" id="projectLink">
                    Code
                  </button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Projects;
