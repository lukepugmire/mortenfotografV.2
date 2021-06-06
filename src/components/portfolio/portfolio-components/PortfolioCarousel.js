import Carousel from 'react-bootstrap/Carousel';

import img1 from "../../../imgs/carousel/img1.jpg";
import img2 from "../../../imgs/carousel/img2.jpg";
import img3 from "../../../imgs/carousel/img3.jpg";
import img4 from "../../../imgs/carousel/img4.jpg";
import img5 from "../../../imgs/carousel/img5.jpg";
import img6 from "../../../imgs/carousel/img6.jpg";
import img7 from "../../../imgs/carousel/img7.jpg";
import img8 from "../../../imgs/carousel/img8.jpg";
import img9 from "../../../imgs/carousel/img9.jpg";
import img10 from "../../../imgs/carousel/img10.jpg";
import img11 from "../../../imgs/carousel/img11.jpg";
import img12 from "../../../imgs/carousel/img12.jpg";
import img13 from "../../../imgs/carousel/img13.jpg";
import img14 from "../../../imgs/carousel/img14.jpg";
import img15 from "../../../imgs/carousel/img15.jpg";
import img16 from "../../../imgs/carousel/img16.jpg";

export default function PortfolioCarousel() {
    return <div className="portfolio_slider">
      <Carousel touch={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img7}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img9}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img10}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img11}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img12}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img13}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img14}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img15}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img16}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
}
