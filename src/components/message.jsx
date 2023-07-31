import React, { useState } from "react";
import { Col, Row, FloatingLabel, Form, Alert } from "react-bootstrap";
import "./message.css";
function Message() {
  const clearForm = () => {
    document.getElementById("messageForm").reset();
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let handleMessage = async (e) => {
    e.preventDefault();
    console.log({ firstName });
    try {
      let res = await fetch("", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message,
        }),
      });

      alert("Your Email has been sent. I will be in touch shortly");
      document.getElementById("messageForm").reset();

      const resJson = await res.JSON();
      /*    if (res.status === 200) {
        setFirstName("");
        setLastName("");
        setEmail("");
      } else {
      } */
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {" "}
      <div className="container-fluid" id="messageDiv">
        <h3 className="messageTitle">CONTACT</h3>

        <h6 id="messageSub" style={{ fontFamily: "'Roboto Mono', monospace" }}>
          Send a message
        </h6>
        <p
          id="messageP"
          style={{ fontFamily: "'Cousine', monospace", fontSize: "15px" }}
        >
          I am excited to dive into the unknown and explore the possibilities of
          the effetcs of leveraging the power data. If you have any questions or
          would like to discuss potential opportunities, please feel free to
          contact me.
        </p>

        <Form
          onSubmit={handleMessage}
          id="messageForm"
          className="registerForm"
        >
          <Row>
            <Col>
              <Form.Group className="formGroup">
                <Form.Label className="form-label">FIRST NAME</Form.Label>
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
                <Form.Label className="form-label">LAST NAME</Form.Label>
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
            <Form.Label className="form-label">EMAIL</Form.Label>
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
        </Form>
      </div>
    </div>
  );
}

export default Message;
