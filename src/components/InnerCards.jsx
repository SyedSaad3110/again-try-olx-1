import React from 'react'
import styled from 'styled-components'

function InnerCards({img , id , price, country , text , time , cate}) {
  return (
   
    <InnerCardSection>

        <div className="left_container">
            <div className="box">
              <h5>Listed by private user</h5>

              <div className="second_main_container">
              <div className="img_tag">
              <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" />
              </div>
              <div className="content_container">
                <h6 className='p_context_name'>Mobile Shoping</h6>
                <h6>Member since Aug 2018</h6>
                  <h6 className='p_context_name'>see profile</h6>
              </div>
            </div>
             
            <div className="box_button_container">
            <div className="box_btn">
                  <div className="btn">
                  <i class="fa-solid fa-phone"></i>
                  <a href="#">Show Phone Number</a>
                    <a href="#"></a>
                  </div>
             </div>

             <div className="box_btn_second">
                  <div className="btn_second">
                  <i class="fa-regular fa-comment"></i>
                  <a href="#">Chat</a>
                    <a href="#"></a>
                  </div>
             </div>
            </div>
                  
            </div>

            <div className="box_location">
               <h5>Location</h5>
               <div className="location_context">
               <i class="fa-solid fa-location-dot" ></i>
               <p>{country}</p>
               </div>
            </div>   
        </div>




    <div className="inner_container">
        <div className="inner_cards">
         <img src={img} alt="" />
        </div>

       <div className="inner_cards_container">
       <div className="sec_container">
          <div className="price">
            <h3>{price}</h3>
          </div>
          <div className="icons">
          <i class="fa-solid fa-share-nodes"></i>
          <i class="fa-regular fa-heart"></i>
          </div>
        </div>
        <div className="text">
        <h4>{text}</h4>
        </div>

        <div className="country">
        <div className="lo_name">
        <i class="fa-solid fa-location-dot" ></i>
        <p>{country}</p>
        </div>
        <div className="week">
          <p>{time}</p>
        </div>
        </div>
       </div>

        <div className="thrd_container">
          <h4>Details</h4>
          <div className="main">
          <div className="brand_container">
              <div className="name">
              <p>Brand</p>
              <h6>Vivo</h6>
              </div>
          </div>
          <div className="brand_container">
               <div className="name">
              <p>Condition</p>
              <h6>New</h6>
              </div>
          </div>
        </div>
       </div>

       <div className="four_container">
        <div className="description_name">
          <h4>Description</h4>
        </div>
        <div className="tex">
          <p className='first'>{text}</p>
          <div className="second">
          <p>Fresh A++ Stock</p>
          <p>Mint Condition 10/10</p>
          <p>All stock are Tested First</p>
          </div>
         <div className="third">
         <p>Short Description :</p>
          <p>Sony Xperia 5 mark 3</p>
          <p>Sony Xperia 5 mark 3</p>
          <p>Sony Xperia 5 mark 3</p>
          <p>Sony Xperia 5 mark 3</p>
          <p>Sony Xperia 5 mark 3</p>
          <p>Sony Xperia 5 mark 3</p>
         </div>
         <div className="four">
          <p>Non PTA Sim Locked</p>
          <p>6 Pro 57k</p>
          <p>6 Pro 57k</p>
          <p>6 Pro 57k</p>
         </div>
        </div>
       </div>

    </div>
    
    </InnerCardSection>
  )
}

export default InnerCards

const InnerCardSection = styled.div`
.inner_container{
  display:flex;
  flex-direction: column;
  gap:10px;
  max-width:1000px;
  margin-top: 110px;
}
.inner_cards{
background-color: black;
display:flex;
align-items:center;
justify-content: center;
width:100%;
}
.inner_cards_container,.thrd_container,.four_container{
  border:2px solid #222;
  padding:14px 13px;
  width:100%;
}
.inner_cards img{
  height:550px;
}
.sec_container{
  display:flex;
  align-items: center;
  justify-content: space-between;
}
.price h3{
  font-size:42px;
  font-weight:700;
}
.icons{
  display:flex;
  gap:12px;
}
.icons i {
  font-size:26px;
}
.text h4{
  font-size:22px;
  font-weight:600;
  padding-top:16px;
  padding-bottom:10px;
}
.lo_name{
  display:flex;
  gap:8px;
  /* align-items:center; */
  padding:8px 0px;
}
.lo_name i{
  margin-top: 4px;
}
.country{
  display: flex;
  justify-content: space-between;
  align-items:center;
}
.thrd_container h4{
     font-size: 24px;
     font-weight: 700;
}
.main{
  display: flex;
  justify-content: space-evenly;
  padding: 12px 2px;
}
.brand_container{
  width:455px;
  height:36px;
  background-color: #e0dfdf;
}
.name{
  display: flex;
  justify-content: space-evenly;
  margin-top: 8px;
}
.name h6{
  font-weight: 700;
}
.four_container h4{
  font-size: 25px;
  font-weight: 630;
}
.first{
  padding: 16px 0px;
}
.second{
  padding-bottom: 12px;
}
.four{
  padding-top:12px;
}
.left_container{
  position:relative;
}
.box{
  position:absolute;
  right:18px;
  top:58px;
  min-width:470px;
  min-height: 280px;
  border-radius:4px;
  border:2px solid #222; 
  padding: 12px 14px;
}
.box h5{
  font-weight:670;
}
.second_main_container{
  display: flex;
  gap:8px;
  padding:18px 3px;

}
.second_main_container .img_tag img {
 border-radius: 50%;
 width:75px;
 height:75px;

}
.content_container{
  padding-top:4px;
  padding-bottom:4px;
}
.p_context_name{
  font-weight:640;
}
.box_button_container{
  display:flex;
  flex-direction:column;
  gap:8px;
}
.box_btn{
  max-width:440px;
  height:48px;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:6px;
  background-color: #222;
  border:2px solid #222;
  border-radius: 4px;
}
.btn{
  display:flex;
  align-items: center;
   font-size:22px;
  gap:8px;
}
.btn i{
color:#fff;
}
.btn a{
  color:#fff;
  text-decoration: none;
  font-size:18px;
  white-space:nowrap;
  font-weight:640;
}
.box_btn_second{
 max-width:440px;
  height:48px;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:6px;
  border:2px solid #222;
  border-radius: 4px;
}
.btn_second{
  display:flex;
  align-items: center;
   font-size:22px;
  gap:8px;
}
.btn_second i{
color:#222;
}
.btn_second a{
  color:#222;
  text-decoration: none;
  font-size:20px;
  white-space:nowrap;
  font-weight:640;
}
.box_btn_second:hover{
 border:4.4px solid #222;
}
.box_location{
 position:absolute;
  right:18px;
  top:360px;
  min-width:470px;
  min-height: 110px;
  border-radius:4px;
  border:2px solid #222; 
  padding: 12px 14px;
}
.box_location h5{
  font-size: 25px;
  font-weight:680;
}
.location_context{
  display: flex;
  gap:12px;
  align-items:center;
}
.location_context p {
  margin-top: 14px;
}
@media(max-width:1315px){
  .left_container{
    display: none;
  }
  .inner_cards img{
  height:500px;
}
}
@media(max-width:1315px){
  .inner_cards img{
  height:400px;
}
}
@media(max-width:1015px){
  .inner_cards img{
  height:300px;
}
}
@media(max-width:915px){
  .inner_cards img{
  height:250px;

}
}

  

`