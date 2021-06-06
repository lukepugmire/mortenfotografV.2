import Carousel from 'react-bootstrap/Carousel';
import  wheat  from "../../../imgs/homeCarousel/wheat.jpg";
import  beach from "../../../imgs/homeCarousel/beach.jpg";
import  car  from "../../../imgs/homeCarousel/car.jpg";
import  flowers  from "../../../imgs/homeCarousel/flowers.jpg";

export default function HomeCarousel() {
    return <Carousel fade interval={3000}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={wheat}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={beach}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={car}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={flowers}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
}
