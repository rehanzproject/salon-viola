import Carousel from "react-bootstrap/Carousel";
import pict from "../../../assets/poto.jpg"

function CarouselPicture() {
  return (
    <Carousel className="">
      <Carousel.Item interval={5000}>
        <img src={pict} className="w-100 h-25 d-block" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          src={pict}
          height={200}
          className="w-100 h-25 d-block"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pict}
          height={200}
          className="w-100 h-25 d-block"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPicture;
