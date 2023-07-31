import { Table, Card, Col, Image } from "react-bootstrap";
import "./tools.css";
import pyLogo from "../img/skills/py.png";
import jupLogo from "../img/skills/jupyter.png";
import colLogo from "../img/skills/colab.png";
import reactLogo from "../img/skills/react.png";
import mlabLogo from "../img/skills/matlab.png";
import awsLogo from "../img/skills/aws.png";
import azureLogo from "../img/skills/azure.png";
import jsLogo from "../img/skills/js.png";
import tabLogo from "../img/skills/tabl.png";
function Tools() {
  return (
    <div className="container-fluid" style={{ marginTop: "50px" }}>
      <div className="row" id="skillRow">
        <h3>TOOLS</h3>
        <Col>
          <Image
            src={pyLogo}
            rounded
            fluid
            alt="https://www.flaticon.com/free-icons/python"
          />
          <p className="toolText">Python</p>
        </Col>
        <Col>
          <Image
            src={jupLogo}
            rounded
            fluid
            alt="https://icons8.com/icon/J0SgMWzAxqFj/jupyter"
          />
          <p className="toolText">Jupyter</p>
        </Col>
        <Col>
          <Image
            src={colLogo}
            rounded
            fluid
            alt="https://icons8.com/icon/J0SgMWzAxqFj/jupyter"
          />
          <p className="toolText">Google Collab</p>
        </Col>
        <Col>
          <Image
            src={reactLogo}
            rounded
            fluid
            alt="https://www.flaticon.com/free-icons/python"
          />
          <p className="toolText">React</p>
        </Col>
        <Col>
          <Image
            src={mlabLogo}
            rounded
            fluid
            alt="https://icons8.com/icon/r5Y16PcDkoWI/matlab"
          />
          <p className="toolText">MatLab</p>
        </Col>
        <Col>
          <Image
            src={awsLogo}
            rounded
            fluid
            alt="https://icons8.com/icon/33039/amazon-web-services"
          />
          <p className="toolText">Amazon Web Services(AWS)</p>
        </Col>
        <Col>
          <Image
            src={azureLogo}
            rounded
            fluid
            alt="https://icons8.com/icon/81727/azure"
          />
          <p className="toolText">Azure</p>
        </Col>
        <Col>
          <Image
            src={jsLogo}
            rounded
            fluid
            alt="https://icons8.com/icon/108784/javascript"
          />

          <p className="toolText">Javascript</p>
        </Col>
        <Col>
          <Image
            src={tabLogo}
            rounded
            fluid
            alt="https://icons8.com/icon/9Kvi1p1F0tUo/tableau-software"
          />

          <p className="toolText">Tableau</p>
        </Col>
      </div>
    </div>
  );
}
export default Tools;
