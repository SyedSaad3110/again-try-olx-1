import React from 'react'
import styled from 'styled-components'
// import FooterContext from './FooterContext'

function Footer() {
  return (
   <ImageSection>
    <section>
    <div className="image">
    <img src="https://s2.adform.net/Banners/65512640/65512640.jpg?bv=3" alt="" />
   </div>
    </section>
    <div className="last_container">
    <div className="sec_img">
      <img src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" alt="" />
    </div>
    <div className="olx_name">
    <h4>TRY THE OLX APP</h4>
    <p>Buy, sell and find just about anything using the app on your mobile</p>
    </div>
    <div className="line">
    
    </div>
    <div className="apps_store">
      <h5>Get your app today</h5>
     <span className='span_tag'><img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" />      <img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" /></span>
    </div>
   </div>
       <div className="footer_container">
        <div className="footer_content">
          <a href="#"><h5>Popular Categories</h5></a>
          <a href="#" className='context'>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </a>
        </div>

        <div className="footer_content">
          <a href="#"><h5>Trending Searches</h5></a>
          <a href="#"className='context'>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </a>
        </div>

        <div className="footer_content">
          <a href="#"><h5>About Us</h5></a>
          <a href="#" className='context'>
            <a href="https://www.dubizzlegroup.com/">About</a>
            <br />
            <a href="https://blog.olx.com.pk/">Blog</a>
            <br />
            <a href="https://help.olx.com.pk/hc/en-us/articles/4403042207631-How-can-you-contact-Us">Contact Us</a>
            <br />
            <a href="https://www.surveygizmo.com/s3/4910980/WP-Business-Form?source=Website">OLX</a>
          </a>
        </div>

        <div className="footer_content">
          <a href="#"><h5>OLX</h5></a>
          <a href="#" className='context'>
            <a href="https://help.olx.com.pk/hc/en-us">Helps</a>
            <br />
            <a href="">Sitemap</a>
            <br />
            <a href="https://help.olx.com.pk/hc/en-us/articles/4402989977487-What-are-the-terms-of-use">Terms</a>
            <br />
            <a href="https://help.olx.com.pk/hc/en-us/categories/4402989237007-Legal-Privacy-information">Privacy</a>
          </a>
        </div>

        <div className="footer_content" id="footer_last">
          <a href="#"><h5>Follow us</h5></a>
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
        </div>
      </div> 

       <div className="copy_right">
        <div className="p_tag">
        <p>Free Classifieds in Pakistan</p>
        </div>
        <div className="copy_tag">
        <p>&#169; 2006-2024 OLX </p>
        </div>
      </div> 
   </ImageSection>
  )
}

export default Footer

const ImageSection = styled.div`
.image{
    padding-top:28px;
    padding-bottom:7px;
    text-align:center;
}
image img{
  width:100%;
  white-space: inherit;
}
.last_container{
  background-color:#f5eeee;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 2px solid #d6c9c9;;
}
.olx_name{
  width:395.5px;
  height:200px;
  padding-top:40px;
}
.olx_name h4{
  font-size:34px;
  font-weight:700;
}
.olx_name p{
  font-size:19px;
  font-weight:350;
  margin-top:18px;
}
.line{
  width:2.5px;
  height:130px;
  border-radius:1.5px;
  background-color:#d6c9c9;
}
.apps_store{
  width:340px;
  height:150px;
  display:flex;
  flex-direction:column;
  margin-top:38px;
}
.apps_store img{
   width:120px;
   height:100px;
}
.span_tag{
  margin-top:-10px;
}
.footer_container{
  width:100%;
  height:194px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color: #f1e6e6;
  padding:18px 32px 32px 32px;
} 
 .footer_content{
  padding: 32px 12px;
  display:flex;
  align-items:center;
  flex-direction:column;
} 
.footer_content a{
  list-style-type: none;
  text-decoration:none;
}
.footer_content a h5{
  color:#222;
  font-weight:520;
  padding-bottom: 14px;;
}
li , a{
  color:#7e7575;
  transition: all ease-in-out .60s;
}
li ,a:hover{
  color:#222;
  transition: all ease-in-out .10s;
}
.icons{
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
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
  margin-top:5px;
}
.copy_right{
  background:#02312b;
  display:flex;
  align-items:center;
  justify-content:end;
  gap:11px;
  padding:14px;
}
.p_tag{
  color:#fff;
  font-size:14px;
  margin-top: 10px;
}
.copy_tag{
  color:#fff;
  font-size:14px;
  margin-top: 10px;
}
@media(max-width:1230px){
  .olx_name{
  display:none;
}
}
@media(max-width:1000px){
  .copy_right{
    justify-content:center;
  }
  .image img{
    display:none;
  }
  .line{
    display:none;
  }
}
@media(max-width:950px){
  .apps_store img{
   width:95px;
   height:80px;
}
.sec_img img{
  width:180px;
  height:180px;
  object-fit: cover;
}
}
@media(max-width:850px){
  #footer_last{
    display: none;
  }
}
@media(max-width:710px){
  .footer_content{
  padding-top: 70px;
} 
.apps_store img{
   width:75px;
   height:70px;
   white-space: nowrap;
}
}

`