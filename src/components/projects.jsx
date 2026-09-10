import React, { useRef, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./projects.css";
import { allProjects } from "./portfolioData";

function Projects() {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollByCard = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector(".project-card");
    if (!card) return;
    const cardWidth = card.offsetWidth + 24;
    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="container-fluid projects-wrapper">
      <div className="projects-header">
        <h3 className="projects-heading">PROJECTS</h3>
        <div className="carousel-controls">
          <Button
            className="carousel-btn"
            onClick={() => scrollByCard("prev")}
            aria-label="Scroll left"
          >
            ←
          </Button>
          <Button
            className="carousel-btn"
            onClick={() => scrollByCard("next")}
            aria-label="Scroll right"
          >
            →
          </Button>
        </div>
      </div>

      <div className="carousel-track" ref={scrollRef}>
        {allProjects.map((data) => (
          <Card
            className="project-card"
            key={data.Title}
            onClick={() => openModal(data)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openModal(data);
            }}
          >
            <div className="project-media">
              {data.Image ? (
                <img src={data.Image} alt={data.Title} />
              ) : (
                <div className="project-media-placeholder">
                  <span>{data.Category}</span>
                </div>
              )}
            </div>

            <Card.Body className="project-card-body">
              <Card.Title className="project-card-title">
                {data.Title}
              </Card.Title>

              <div className="project-meta">
                <span className="meta-pill">{data.Category}</span>
              </div>

              <p className="project-skills">
                <strong>Skills:</strong> {data.Skills}
              </p>

              <p className="project-summary">{data.Summary}</p>

              <div className="project-actions">
                <span className="project-readmore">Read more →</span>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* ---- Detail Modal ---- */}
      <Modal
        show={!!selectedProject}
        onHide={closeModal}
        centered
        size="lg"
        className="project-modal"
        contentClassName="project-modal-content"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton className="project-modal-header">
              <Modal.Title className="project-modal-title">
                {selectedProject.Title}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="project-modal-body">
              <div className="project-modal-meta">
                <span className="meta-pill">{selectedProject.Category}</span>
              </div>

              <p className="project-modal-skills">
                <strong>Skills:</strong> {selectedProject.Skills}
              </p>

              <p className="project-modal-detail">{selectedProject.Detail}</p>

              {selectedProject.Highlights &&
                selectedProject.Highlights.length > 0 && (
                  <>
                    <h6 className="project-modal-subheading">Highlights</h6>
                    <ul className="project-modal-highlights">
                      {selectedProject.Highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </>
                )}
            </Modal.Body>

            <Modal.Footer className="project-modal-footer">
              {selectedProject.Links &&
                selectedProject.Links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-modal-link project-modal-${link.variant || "primary"}`}
                  >
                    {link.label} →
                  </a>
                ))}
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Projects;