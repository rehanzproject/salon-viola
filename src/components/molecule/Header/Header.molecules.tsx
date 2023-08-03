import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CallIcon from "../../atom/Icons/CallIcon";
import EmailICon from "../../atom/Icons/EmailIcon";

function Header() {
  return (
    <Navbar className="bg-body-tertiary d-flex justify-content-start fs-5 ">
      <Container>
        <Navbar.Brand className="d-flex gap-2 fs-6">
          <EmailICon />{" "}
          <Navbar.Brand href="#home" className="fs-6 border-end border-2 px-2">rehanmaul111@gmail.com </Navbar.Brand>
          <CallIcon />
          <Navbar.Brand href="#nomer" className="fs-6">+62 83895104256</Navbar.Brand>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
