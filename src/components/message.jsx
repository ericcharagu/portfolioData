import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./message.css";

function Message() {
  return (
    <section className="connect-section">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            {/* ---- Headline ---- */}
            <div className="connect-headline">
              <span className="connect-eyebrow">The window is closing</span>
              <h2 className="connect-title">
                Every week you wait, your competitors ship another AI feature.
              </h2>
              <p className="connect-sub">
                Companies adopting AI today are cutting costs by 40% and freeing up
                thousands of work‑hours a year. The ones waiting are paying for it in
                lost margin, slower delivery, and rising overhead.
              </p>
            </div>

            {/* ---- Stat strip ---- */}
            <div className="connect-stats">
              <div className="connect-stat">
                <span className="connect-stat-number">78%</span>
                <span className="connect-stat-label">
                  of businesses already use AI in at least one function
                </span>
              </div>
              <div className="connect-stat">
                <span className="connect-stat-number">10x</span>
                <span className="connect-stat-label">
                  faster time‑to‑value with a focused pilot vs. a blanket rollout
                </span>
              </div>
              <div className="connect-stat">
                <span className="connect-stat-number">40%</span>
                <span className="connect-stat-label">
                  average cost reduction by switching to open‑source models
                </span>
              </div>
            </div>

            {/* ---- Contact card ---- */}
            <div className="connect-card">
              <h4 className="connect-card-title">Let's talk about your first win.</h4>
              <p className="connect-card-text">
                A 30‑minute call is enough to map one process you can automate this
                quarter — and what it would cost to run on your own GPUs versus a
                proprietary API.
              </p>

              <div className="contact-rows">
                {/* Email */}
                <a
                  href="mailto:charagumacharia@gmail.com"
                  className="contact-row"
                >
                  <span className="contact-icon-wrap">
                    <img
                      src="https://img.icons8.com/fluency/48/new-post.png"
                      alt="Email"
                      className="contact-icon"
                    />
                  </span>
                  <span className="contact-info">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">
                      charagumacharia@gmail.com
                    </span>
                  </span>
                </a>

                {/* Phone */}
                <a href="tel:+254736391323" className="contact-row">
                  <span className="contact-icon-wrap">
                    <img
                      src="https://img.icons8.com/fluency/48/phone.png"
                      alt="Phone"
                      className="contact-icon"
                    />
                  </span>
                  <span className="contact-info">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+254 736391323</span>
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/254700000000?text=Hi%20Eric%2C%20I%27d%20like%20to%20talk%20about%20AI%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-row contact-row-wa"
                >
                  <span className="contact-icon-wrap">
                    <img
                      src="https://img.icons8.com/color/48/whatsapp--v1.png"
                      alt="WhatsApp"
                      className="contact-icon"
                    />
                  </span>
                  <span className="contact-info">
                    <span className="contact-label">WhatsApp</span>
                    <span className="contact-value">
                      Chat now — usually replies within an hour
                    </span>
                  </span>
                </a>
              </div>

              <a
                href="https://wa.me/254736391323?text=Hi%20Eric%2C%20I%27d%20like%20to%20talk%20about%20AI%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="connect-cta"
              >
                Start the conversation →
              </a>

              <p className="connect-footnote">
                No pitch decks. No sales sequences. Just a straight conversation
                about what AI can realistically do for your team this quarter.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Message;