import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


function CarouselPage() {
  return (
<CarouselSection>
  {/* <section> */}
  <div>
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.olx.com.pk/thumbnails/437508562-800x600.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.olx.com.pk/thumbnails/437508562-800x600.webp"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
</div>
  {/* </section> */}
</CarouselSection>

  )
}

export default CarouselPage

const CarouselSection = styled.div`
 img{
    // height:calc(100vh - 70px); 
    height: 250px;
    width:100%;
    object-fit: cover;
    position:relative;
    top:20px;

 }
`