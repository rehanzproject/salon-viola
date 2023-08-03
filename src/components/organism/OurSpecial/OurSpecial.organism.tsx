import card from "../../../assets/cardpict.png";
import cardpict from "../../../assets/picture.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function OurSpecial() {
  return (
    <Container fluid className="p-5 bg-body-tertiary ">
      <h1 className="text-warning">Our Special Offer</h1>
      <Row>
        <Col md={6}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. remaining essentially
            unchanged. It was popularised in the with the Lorem Ipsum is simply
            dummy text of the printing and essentially unchanged.
          </p>
          <img src={card} alt="" className="w-75" />
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img src={cardpict} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default OurSpecial;
