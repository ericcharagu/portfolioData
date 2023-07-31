import React from "react";
import "./footer.css";
import { Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <div className="container-fluid" id="footerDiv">
      <p
        style={{
          color: "rgb(250, 238, 238)",
          fontSize: "10px",
          paddingTop: "10px",
        }}
      >
        2023.All rights reserved. Created by Echara.{" "}
      </p>
    </div>
  );
}

export default Footer;
