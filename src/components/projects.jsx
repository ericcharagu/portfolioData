import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
import "./projects.css";
import { allProjects } from "./portfolioData";

function Projects() {
  const items = useState(allProjects);
  const showItems = useState(3);
  /*  const handleShowMore = () => {
    showItems: showItems >= items.length ? showItems : showItems + 1;
  }; */
  const goNotebook = () => {
    window.location.href = "/pdf/renewable.html";
  };
  return (
    <div className="container-fluid" style={{ marginTop: "50px" }}>
      <h3>PROJECTS</h3>
      <div className="row">
        {/*  <div className="col" style={{ float: "right", textAlign: "right" }}>
          <button className="btn" id="allPro">
            {" "}
            <a
              href="/portfolio"
              style={{ textDecoration: "none", color: "rgb(250, 238, 238)" }}
            >
              Show All
            </a>
          </button>
        </div> */}
      </div>

      {allProjects.map((data, key) => {
        return (
          <Card className="projectCard" key={key}>
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
              </Card.Text>
              <Card.Footer className="projectCardFooter">
                <button className="btn" id="allPro">
                  <a
                    style={{
                      textDecoration: "None",
                      color: " rgb(250, 238, 238)",
                    }}
                    href={data.Dataset}
                    target="_blank"
                  >
                    Dataset
                  </a>
                </button>
              </Card.Footer>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Projects;
