import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./services.css";

const services = [
  {
    icon: "🤖",
    title: "Custom AI Agents",
    desc: "Fine‑tune open‑source LLMs (LLaMA, Mistral, Qwen) to your domain—customer support, sales, or internal knowledge bases."
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    desc: "Replace manual data entry, document processing, and repetitive tasks with AI‑powered pipelines that save time and reduce errors."
  },
  {
    icon: "☁️",
    title: "Private & Cost‑Efficient Deployment",
    desc: "Host models on your own GPU infrastructure or ours. Pay only for what you use—no per‑token fees from Big Tech."
  },
  {
    icon: "📊",
    title: "AI Strategy & Consulting",
    desc: "Identify high‑impact use cases, build roadmaps, and train your team to adopt AI responsibly and effectively."
  }
];

function Services() {
  return (
    <Container fluid className="services-wrapper">
      <Container>
        <h2 className="services-heading">What I Offer</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {services.map((s, idx) => (
            <Col key={idx}>
              <Card className="service-card h-100">
                <Card.Body>
                  <div className="service-icon">{s.icon}</div>
                  <Card.Title>{s.title}</Card.Title>
                  <Card.Text>{s.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="cost-comparison">
          <h4>Why go open‑source?</h4>
          <p>
            Proprietary APIs (OpenAI, Anthropic) charge per 1M tokens — up to <strong>$30</strong>.
            With open‑source, you can run the same quality models for <strong>under $3</strong> per 1M tokens
            on your own GPU, with full data privacy.
          </p>
        </div>
      </Container>
    </Container>
  );
}
export default Services;