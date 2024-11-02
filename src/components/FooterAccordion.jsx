import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

function FooterAccordion() {
  return (
    <AccordionSection>
       <div className="accordion_container">
       <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Popular Categories</Accordion.Header>
        <Accordion.Body>
        <a href="#" className='context'>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Trending Searches</Accordion.Header>
        <Accordion.Body>
        <a href="#"className='context'>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </a>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>About Us</Accordion.Header>
        <Accordion.Body>
        <a href="#" className='context'>
            <a href="https://www.dubizzlegroup.com/">About</a>
            <br />
            <a href="https://blog.olx.com.pk/">Blog</a>
            <br />
            <a href="https://help.olx.com.pk/hc/en-us/articles/4403042207631-How-can-you-contact-Us">Contact Us</a>
            <br />
            <a href="https://www.surveygizmo.com/s3/4910980/WP-Business-Form?source=Website">OLX</a>
          </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>OLX</Accordion.Header>
        <Accordion.Body>
        <a href="#" className='context'>
            <a href="https://help.olx.com.pk/hc/en-us">Helps</a>
            <br />
            <a href="">Sitemap</a>
            <br />
            <a href="https://help.olx.com.pk/hc/en-us/articles/4402989977487-What-are-the-terms-of-use">Terms</a>
            <br />
            <a href="https://help.olx.com.pk/hc/en-us/categories/4402989237007-Legal-Privacy-information">Privacy</a>
          </a>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Follow us</Accordion.Header>
        <Accordion.Body>
        <a href="#">
            <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="apps_img">
              <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" />
              <span><img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" /></span>
            </div>
          </a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       </div>
    </AccordionSection>
  )
}

export default FooterAccordion

const AccordionSection = styled.div`
    a{
  color:#7e7575;
  transition: all ease-in-out .60s;
   }
     a:hover{
  color:#222;
  transition: all ease-in-out .10s;
    }
    a{
  list-style-type: none;
  text-decoration:none;
    }
    .icons{
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-evenly;
  gap:8px;
   }
    .icons i{
  width:25px;
  height:25px;
  color:#7e7575;
  transition: all ease-in-out .60s;
  border-radius: 50%;
  border: 2px solid #222;
  display:flex;
  align-items: center;
  justify-content: center;
   }
   .icons i:hover{
  color:#222;
  transition: all ease-in-out .10s;
  }
  .apps_img{
   margin-top:16px;
   display:flex;
   align-items:center;
   justify-content: space-evenly;
  }
  .apps_img img{
    height:130px;
    width:130px;
    max-width: 100%;
  }

`