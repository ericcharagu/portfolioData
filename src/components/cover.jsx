import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./cover.css";
import Projects from "./projects";
import Message from "./message";
import Footer from "./footer";
import Services from "./services";

function Cover() {
  return (
    <div className="cover-page">
      {/* ===== HERO (blue background) ===== */}
      <section className="hero-wrapper">
        <Container fluid className="hero-container">
          <Row className="align-items-center hero-row">
            <Col md={8} className="hero-text">
              <h1 className="hero-title">AI Consulting for Every Business</h1>
              <p className="hero-subtitle">
                Unlock the power of open‑source AI models—deployed on your own
                infrastructure, at a min of 40% lower cost than proprietary solutions.
              </p>
              <p className="hero-description">
                I help you automate workflows, build custom AI agents, and
                integrate intelligence into your products. Let’s make AI
                affordable and accessible.
              </p>
              <Button href="/services" className="hero-cta">
                Explore Services →
              </Button>
            </Col>
            <Col md={4} className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">40%</span>
                <span className="stat-label">
                  Cost savings vs. OpenAI/Anthropic
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Open‑source stack</span>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== REST OF CONTENT (white background) ===== */}
      <section className="content-wrapper">
        <div className="container" id="coverDiv">
          <Services />
          <Projects />
        
          <Message />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Cover;
