import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./cover.css";

function Cover() {
  return (
    <div className="hero-wrapper">
      <Container fluid className="hero-container">
        <Row className="align-items-center hero-row">
          <Col md={8} className="hero-text">
            <h1 className="hero-title">AI Consulting for Every Business</h1>
            <p className="hero-subtitle">
              Unlock the power of open‑source AI models—deployed on your own infrastructure,
              at 70% lower cost than proprietary solutions.
            </p>
            <p className="hero-description">
              I help you automate workflows, build custom AI agents, and integrate intelligence
              into your products. Let’s make AI affordable and accessible.
            </p>
            <Button href="/services" className="hero-cta">Explore Services →</Button>
          </Col>
          <Col md={4} className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <span className="stat-label">Cost savings vs. OpenAI/Anthropic</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Open‑source stack (LLaMA, Mistral, etc.)</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Dedicated support & monitoring</span>
            </div>
          </Col>
        </Row>
      </Container>
      {/* You can keep the rest of your sections (Skills, Projects, etc.) below */}
      <div className="container" id="coverDiv">
        {/* Include Tools, Skills, Projects, Academic, Message as before, or move to separate pages */}
      </div>
    </div>
  );
}
export default Cover;