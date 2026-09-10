import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import "./services.css";

const services = [
  {
    title: "Custom AI Agents",
    desc: "Fine‑tune open‑source LLMs (LLaMA 3, Mistral, Qwen) on your domain data—customer support, sales, or internal knowledge bases.",
    metric: "Automates up to 10 human work‑hours per week per agent by handling repetitive queries, drafting responses, and escalating only complex cases."
  },
  {
    title: "Workflow Automation",
    desc: "Replace manual data entry, document processing, and repetitive back‑office tasks with AI‑powered pipelines.",
    metric: "Frees 10+ staff hours per week per workflow, reducing error rates by up to 80% and cutting processing time from hours to minutes."
  },
  {
    title: "Private & Cost‑Efficient Deployment",
    desc: "Host models on your own GPU infrastructure (or ours). Pay only for compute—no per‑token fees from Big Tech.",
    metric: "Reduces AI operating costs by 60–70% versus proprietary APIs, with full data privacy and no vendor lock‑in."
  },
  {
    title: "AI Strategy & Consulting",
    desc: "Identify high‑impact use cases, build roadmaps, and train your team to adopt AI responsibly and effectively.",
    metric: "Saves leadership 8–10 hours per week by replacing scattered pilots with a focused, measurable AI roadmap."
  }
];

/* --- Company Rates --- */
const vastTiers = [
  {
    modelSize: "0.6B – 2B params",
    gpu: "RTX 3060 12GB",
    minimumSeats:"0",
    packagePrice: "$75 – $145 / month",
    useCase: "Classification, extraction, simple Q&A"
  },
  {
    modelSize: "4B – 8B params",
    gpu: "RTX 4090 24GB",
    minimumSeats:"20",
    
    packagePrice: "$145 – $432 / month",
    useCase: "Summarisation, intent routing, RAG"
  },
  {
    modelSize: "8B – 27B params",
    gpu: "A6000 / L40S 48GB",
    minimumSeats:"20",
    
    packagePrice: "$432 – $795 / month",
    useCase: "Multi‑turn agents, code assist, analysis"
  },
  {
    modelSize: "27B – 70B+ params",
    gpu: "A100 80GB / H100 80GB",
    minimumSeats:"20",
    
    packagePrice: "$795 – $,1800 / month",
    useCase: "Complex reasoning, code generation, research"
  }
];

/* --- Proprietary AI enterprise pricing --- */
const proprietaryPricing = [
  {
    vendor: "Claude Enterprise",
    seatFee: "$20 / user / month (billed annually)",
    minSeats: "20 (self‑serve) / 50 (sales‑assisted)",
    includedUsage: "None — every token billed at API rates",
    usageRates: "$3 – $15 / 1M input · $15 – $75 / 1M output",
    annualFloor: "~$4,800 (20 seats, zero usage)"
  },
  {
    vendor: "OpenAI ChatGPT Enterprise",
    seatFee: "Quote‑only (reported $45 – $75 / user / month)",
    minSeats: "~150 seats",
    includedUsage: "Custom — negotiated per contract",
    usageRates: "Separate OpenAI API platform billing",
    annualFloor: "~$108,000 (150 seats, lowest reported)"
  }
];

/* --- Task complexity examples --- */
const taskComplexity = [
  {
    complexity: "Low – Classification & Extraction",
    examples: "Email intent routing, ticket tagging, invoice field extraction, sentiment detection, document parsing",
    recommended: "0.6B – 4B params"
  },
  {
    complexity: "Medium – Summarisation & Retrieval",
    examples: "Meeting summarisation, FAQ generation from knowledge bases, RAG‑powered Q&A, auto‑response drafting",
    recommended: "4B – 8B params"
  },
  {
    complexity: "High – Multi‑Turn Agents & Analysis",
    examples: "Customer support agents with tool use, SQL generation, data analysis pipelines, code review assistants",
    recommended: "8B – 27B params"
  },
  {
    complexity: "Very High – Complex Reasoning & Generation",
    examples: "Full code generation, scientific literature review, legal document drafting, multi‑step strategic planning",
    recommended: "27B – 70B+ params"
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
                  <Card.Title className="service-title">{s.title}</Card.Title>
                  <Card.Text className="service-desc">{s.desc}</Card.Text>
                  <div className="service-metric">{s.metric}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ---- Vast.ai GPU rental pricing ---- */}
        <div className="pricing-section">
          <h4 className="pricing-heading">Model Tiers </h4>
          <p className="pricing-intro">
            You pay only for compute time — no per‑token
            markups. Below are indicative rates for the GPU classes needed
            to serve each model size. Additional models such as Visual Language Models or Text to Speech Models are priced on demand and separately
          </p>

          <Table responsive bordered hover className="pricing-table">
            <thead>
              <tr>
                <th>Model Size</th>
                <th>Min GPU</th>
                <th>Minimum Seats</th>
                <th>Floor Pricing</th>
                {/* <th>Typical Use Case</th> */}
              </tr>
            </thead>
            <tbody>
              {vastTiers.map((tier, idx) => (
                <tr key={idx}>
                  <td>{tier.modelSize}</td>
                  <td>{tier.gpu}</td>
                  <td>{tier.minimumSeats}</td>
                  <td className="highlight-fee">{tier.packagePrice}</td>
                  {/* <td>{tier.useCase}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>

          <p className="pricing-note">
            *Rates shown are for individual GPUs. Some projects may require more than 1 based on the requirements.The above is a typical range for Small and Medium Enterprises(SMEs) who have less than 20 employees.
          </p>
        </div>

        {/* ---- Proprietary AI pricing comparison ---- */}
        <div className="pricing-section">
          <h4 className="pricing-heading">Proprietary Enterprise AI: What You're Really Paying</h4>
          <p className="pricing-intro">
            Claude Enterprise and OpenAI ChatGPT Enterprise both charge per‑seat fees with
            separate usage billing. Neither publishes a simple flat rate. Here's the breakdown.
          </p>

          <Table responsive bordered hover className="pricing-table proprietary-table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Seat Fee</th>
                <th>Minimum Seats</th>
                <th>Included Usage</th>
                <th>Usage Rates</th>
                <th>Annual Floor</th>
              </tr>
            </thead>
            <tbody>
              {proprietaryPricing.map((p, idx) => (
                <tr key={idx}>
                  <td><strong>{p.vendor}</strong></td>
                  <td>{p.seatFee}</td>
                  <td>{p.minSeats}</td>
                  <td>{p.includedUsage}</td>
                  <td>{p.usageRates}</td>
                  <td className="highlight-fee">{p.annualFloor}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <p className="pricing-note">
            * Claude Enterprise seat fee is $20/user/month billed annually. Usage is billed at
            standard API rates with no included allowance. OpenAI Enterprise is quote‑only;
            figures reflect market‑reported ranges. Both vendors require annual commitments.
          </p>
        </div>

        {/* ---- Task complexity vs model size ---- */}
        <div className="pricing-section">
          <h4 className="pricing-heading">Which Model Size Do You Need?</h4>
          <p className="pricing-intro">
            Not every task needs a 70B model. Matching task complexity to the smallest capable
            model dramatically reduces GPU costs. Here's a practical guide.
          </p>

          <Table responsive bordered hover className="pricing-table complexity-table">
            <thead>
              <tr>
                <th>Task Complexity</th>
                <th>Examples</th>
                <th>Recommended Model Size</th>
              </tr>
            </thead>
            <tbody>
              {taskComplexity.map((t, idx) => (
                <tr key={idx}>
                  <td><strong>{t.complexity}</strong></td>
                  <td>{t.examples}</td>
                  <td className="highlight-fee">{t.recommended}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <p className="pricing-note">
            * Smaller models (0.6B–8B) handle 70–80% of routine business tasks at a fraction
            of the GPU cost. Reserve 27B+ models for genuinely complex reasoning and generation.
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default Services;