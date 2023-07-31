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
        <div className="col" style={{ float: "right", textAlign: "right" }}>
          <a href="/portfolio" style={{ textDecoration: "none" }}>
            Show All
          </a>
        </div>
      </div>
      {/*       <Carousel>
        <Carousel.Item>
          <div className="card" id="projectCard">
            <div className="card-body">
              <div className="card-title" id="projectCardTitle">
                <h4>Energy Consumption Model Predictor</h4>
              </div>
              <h6>Linear Regression Model</h6>
              <p>
                The energy consumption is estimated based on the different
                weather groups(1-5). These groups are based on the different
                conditions such as temperature, humidity, etc. Linear models are
                built for each group which can explain ~78% to 90% of the
                variance in the datasets
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card" id="projectCard">
            <div className="card-body">
              <div className="card-title" id="projectCardTitle">
                <h4>Heart Disease Model Predictor</h4>
              </div>
              <h6>Classification Model</h6>
              <p>
                Based on the patient's measured heart and vessel parameters, a
                classification model was chosen to predict the likelihood of a
                patient developing heart disease. The base model was tuned using
                the ROC curve to obtain the optimal threshold. The model
                adjusted with this threshold achieved recall and F1 values of
                ~79% and ~84% respectively on the training data.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card" id="projectCard">
            <div className="card-body">
              <div className="card-title" id="projectCardTitle">
                <h4>Weather Group Clustering</h4>
              </div>
              <h6>Clustering Model</h6>
              <p>
                Developed algorithim that groups weather conditions into 5
                distinct weather groups. 5 chosen afer analysis of all possible
                K-means clusters. Principal Component Analysis was done for
                beter visualisation and dimension reductionality.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel> */}
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

export default Projects;
