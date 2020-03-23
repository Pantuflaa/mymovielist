import React,{ useState } from 'react';

import '../App.css';

import Carousel from 'react-bootstrap/Carousel';



 const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carr2" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block carr img-responsive"
          src="https://media.discordapp.net/attachments/361618001243668492/690699730199511081/SMB_Movie_Poster.png"
          alt="First slide"
         
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carr img-responsive"
          src="https://media.discordapp.net/attachments/361618001243668492/691389461506031676/91089194_819150318596699_4613583895756013568_n.png"
          alt="Second slide img-responsive"

        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carr img-responsive"
          src="https://media.discordapp.net/attachments/315005339613265923/690700069573361714/latest.png?width=330&height=475"
          alt="Third slide"
         
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

//render(<ControlledCarousel />);

export default ControlledCarousel;