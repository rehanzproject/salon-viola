import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import number5 from "../../../assets/number5.png";
import sosmed from "../../../assets/sosmed.png";

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <Container fluid>
        <Row className="p-5">
          <Col md={3}>
            <img src={number5} alt="" width={50} />
            <p className="fs-6">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. remaining
              essentially unchanged. It was popularised in the with theLorem
              Ipsum is simply dummy text of the printing and eentially
              unchanged.
            </p>
            <img src={sosmed} alt="Socmed" className="w-75"/>
          </Col>
          <Col md={3}>
            <h5>Recent Post</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>FAQ</li>
              <li>Career</li>
              <li>Our Team</li>
              <li>Services</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Working Hours</h5>
            <ul className="list-unstyled">
              <li>Monday - Friday 8am - 6pm EST</li>
              <li>Monday - Friday 8am - 6pm EST</li>
              <li>Monday - Friday 8am - 6pm EST</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>90 St. Johns 8</li>
              <li>Contact luisv</li>
              <li>Phone</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
