import React from "react";
import { Card } from "react-bootstrap";
import "./portfolio.css";
import { allProjects } from "./portfolioData";
function Portfolio() {
  return (
    <div className="container">
      <h5>All Projects</h5>
      {allProjects.map((data, key) => {
        return (
          <Card className="projectCard" key={key}>
            <Card.Body>
              <Card.Title style={{ borderBottom: "1px solid black" }}>
                <h3>{data.Title}</h3>
              </Card.Title>{" "}
              <Card.Subtitle>
                <h5>Category:{data.Category}</h5>
              </Card.Subtitle>
              <h6>Skills:{data.Skills}</h6>
              <Card.Text>
                <p>{data.Summary}</p>
              </Card.Text>
              <Card.Footer className="projectCardFooter">
                <a
                  style={{ textDecoration: "None" }}
                  href={data.Dataset}
                  target="_blank"
                >
                  Dataset
                </a>
              </Card.Footer>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Portfolio;
