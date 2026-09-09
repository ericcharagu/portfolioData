import React, { useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import "./message.css";
import LinkedIn from "../img/misc/linked.png";
import Gmail from "../img/misc/gmail.png";

function Message() {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedAlt, setIsClickedAlt] = useState(false);

  return (
    <div>
      {" "}
      <div className="container-fluid" id="messageDiv">
        <h3 className="messageTitle">CONNECT</h3>

        <h6 id="messageSub" style={{ fontFamily: "'Roboto Mono', monospace" }}>
          Send a message
        </h6>
        <p
          style={{
            fontFamily: "'Cousine', monospace",
            fontSize: "15px",
            textAlign: "left",
          }}
        >
          I am excited to dive into the unknown and explore the possibilities of
          the effects of leveraging the power data. If you have any questions or
          would like to discuss potential opportunities,let's connect.
        </p>
        <Row
          style={{
            width: "70%",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Col className="conLogos">
            <button
              onClick={() => setIsClickedAlt(!isClickedAlt)}
              style={{ border: "none", backgroundColor: "inherit" }}
            >
              <Image
                src={LinkedIn}
                rounded
                fluid
                style={{ margin: "auto" }}
                alt="https://icons8.com/icon/vWcULbkKy3DN/linkedin-2"
              />{" "}
              <p>LinkedIn</p>
              {isClickedAlt && (
                <div className="container-fluid">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/eric-charagu-150799181"
                    target="_blank"
                    className="conLink"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              )}
            </button>
          </Col>
          <Col>
            <button
              onClick={() => setIsClicked(!isClicked)}
              style={{ border: "none", backgroundColor: "inherit" }}
            >
              <Image
                src={Gmail}
                fluid
                alt="https://icons8.com/icon/qyRpAggnV0zH/gmail"
              />
              <p>Gmail</p>
              {isClicked && (
                <div className="container-fluid">
                  <p>charagumacharia@gmail.com</p>
                </div>
              )}
            </button>
          </Col>
        </Row>

        {/*         <Form id="messageForm" className="registerForm">
          <Row>
            <Col>
              <Form.Group className="formGroup">
                <Form.Label className="form-label">First Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />{" "}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="formGroup">
                {" "}
                <Form.Label className="form-label">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="formGroup">
            {" "}
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="formGroup">
            <Form.Label className="form-label">Message</Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              className="form-control"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="formGroup">
            <Row style={{ marginTop: "10px" }}>
              <Col>
                <button className="btn" onClick={clearForm} id="clearBtn">
                  Clear All
                </button>
              </Col>
              <Col>
                <button className="btn" onClick={handleMessage} id="sendBtn">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nLWUS0wTURiFG1youHCBO4kJrNwqsHJhjC4kLI1r1FSDKzYYEoyRhREiEoiJCyVBDRptqtW2wQdJDUJYYIMGpQ2iiLQzvXMf8+pj+pL+5jYB2zLCtNST3ExmFueb+z+OzfaflKG0hYqSI05oqKrGsLKyJ62q52REAmlZhoyiAAdVxTypaY0qosO6RKIT/m/RvpezgEUMeRClLZX/NUBNlrFTkiC9USVi3H/3OXW4xwnHbrhBCCG45fYDEXGwMnNF2Z+gtIMhEvq6uKrbR3y52suPwGYf3QCc6PfChH8pZjClvSzzjKY1ERGP6ZgaL6YDiZP93rzx+ikENHQ7QEMkxntkpSS707J8VhLwLBZw4ppjZu1A55Mi81IAfx9wf0wriA5taZ5g7KAcITc1hKOTn77Hztx5C7suPdhkbgbY2/EQZESMpKo2WG6kmbHtHwB+2u/5QBKkScuNLBdgs4/C/GJIz8pyaxEkSeUwXxrnh4Xc0V4X1Fw0L0vhOd7nyQP4s/B7c68LlAiReFWKbyKKtbxMGqaDWEBLCiLGq5mgbh95D4euPLN8A5t9FMZ8X4w4pt3bTlSCsfq0qp7HYcnLN3j5p6APe/yp1tvjcHpg3PQG/NR1PgY+3qDrddtCSoeB74fBWA8Ko7kkYzkOMith19j076rkFAqjOX6jUgDvY3g1Es9oWvOOIQZjV4c8/lQppG3wdeU5VaqMpjX9WBaipZCKcmqrHmmIxOq7nm4AGsvJKasiIvbwrV6HWMqpcpVm7IJzKhD7m1PYPKd2ogQPT4STfKJMc6paIqIUPnLdBfPBX9FNOVUtqYjcfT61sGaaU9VSVlHaeKhayqlKBQjtS1IWsppTfwCpEt3kNjObBgAAAABJRU5ErkJggg==" />
                </button>
              </Col>
            </Row>
          </Form.Group>
        </Form> */}
      </div>
    </div>
  );
}

export default Message;
