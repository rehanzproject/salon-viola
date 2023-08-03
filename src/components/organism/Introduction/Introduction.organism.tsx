import image from '../../../assets/pictt.png'
import Container from "react-bootstrap/Container";
function Introduction() {
  return (
    <Container className="d-flex align-items-center justify-content-center flex-column flex-lg-row pt-4">
      <img
        src={image}
        className="img-fluid w-50 h-auto mb-3 mb-lg-0"
        alt="Spa"
      />
      <div className='p-5'>
        <h4>We Provide </h4>
        <h2>Welcome to Spa</h2>
        <p>
          Spread over two floors, our beautiful spa offer a soothing environment
          in which you can rest, relax and feel competely rejuvenated.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. remaining essentially
          unchanged. It was popularised in the with theLorem Ipsum is simply
          dummy text of the printing and eentially unchanged.
        </p>
      </div>
    </Container>
  );
}

export default Introduction;
