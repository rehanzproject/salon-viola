import Container from "react-bootstrap/Container"
import PictureExperience from "../../molecule/PictureExperience/PictureExperience.organism"
function OurExperienceSpecialist() {
  return (
    <Container fluid className="d-flex text-center justify-content-center bg-body-tertiary mt-5 pt-5"> 
    <div id="experience">
        <h1 className="fw-bold">Our Experience Specialist</h1>
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
       <PictureExperience />
    </div>
    </Container>
  )
}

export default OurExperienceSpecialist