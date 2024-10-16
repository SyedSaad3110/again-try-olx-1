import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { locationData } from '../Data';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {

      const locationRef = useRef();
      const arrowRef = useRef();

      const [handlerValue , setHandlerValue] = useState("")


      const locationHandlerData = ()=>{
        locationRef.current.classList.toggle("active")
        arrowRef.current.classList.toggle("active")
        
      }

        const handlerValueChange =(e)=>{
             setHandlerValue(e)
        }

  return (

    <NavbarSection>
    <div className="header_container">
    <div className="logo_name">
        <NavLink to="/"><h2>O<span>|</span>X</h2></NavLink>
    </div>

    <div className="motors">
        <div className="motors_logo">
        <i class="fa-solid fa-car"></i>
        </div>
        <div className="name">
            <a className='a_logos' href="#"><h4>Motors</h4></a>
        </div>
    </div>

    <div className="property">
        <div className="property_logo">
        <i class="fa-regular fa-building"></i>
        </div>
        <div className="name">
            <a className='a_logos' href="#"><h4>Property</h4></a>
        </div>
    </div>
    </div>


      <div className="sec_container" >
        <div className="location_placeholder">
            <label htmlFor="">
            <i class="fa-solid fa-location-dot" ></i>
            </label>
    

            <div className="location_handler" id='location' ref={locationRef}>
            <div className="main_location">
            <i class="fa-solid fa-location-crosshairs"></i>
            <h5>Use current location</h5>
            </div>
            <div className="ads_location">
            <i class="fa-solid fa-location-dot"></i>
            <h5>See ads in all Pakistan</h5>
            </div>
            <div className="choose">
            <p>Choose Region</p>
            </div>
            <div className="all_location">
                {locationData.map((items, value)=>{
                    return <div className="ads_locations" key={value}>
                        <i class="fa-solid fa-location-dot"></i>
                        <h5 onClick={()=> handlerValueChange(items.name)}>{items.name}</h5>
                    </div>
                })}
            </div>
            </div>
            

        
            <input
             ref={arrowRef} 
            onClick={locationHandlerData}
            onChange={(e) => setHandlerValue(e.target.value)}
           value = {handlerValue}
            type="text" 
            placeholder= "Pakistan"
             />
            <div className="arrow">
            <i class="fa-solid fa-angle-down" ref={arrowRef} onClick={locationHandlerData}></i>
            </div>
        </div>
        <div className="search_placeholder">
            <input
             
             type="text"
             placeholder="Find Cars , Mobile Phones and more..."

                />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="login_name">
            <NavLink to="/login" style={{textDecoration:"none"}}><a className='a_logos' href="#"><h4>Login</h4></a></NavLink>

        </div>
        <div className="sell_container">
            <div className="sell_icons">
            <i class="fa-solid fa-plus"></i>
            </div>
            <div className="sell_name">
                <a className='a_logos'  href="#">Sell</a>
            </div>
        </div>
        <div>
        </div>
        {/* <CarouselPage/> */}
</div>

    </NavbarSection>
  )
}

export default Navbar

const NavbarSection = styled.header`
position: fixed;
top:0;
right:auto;
left:auto;
z-index:1001;
background-color: #fff;
width:100%;
.header_container{
    max-width:420px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    gap:14px;
    padding:4px 8px;
    
}
    .logo_name a{
        color:#222;
        font-size:24px;
        font-weight:1000;
        list-style-type:  none;
        text-decoration: none;
    }
    .logo_name span{
        font-weight:900;
    }
    .motors , .property{
        display:flex;
        align-items: center;
        gap:12px;
    }
    .motors_logo , .property_logo{
        border-radius: 50%;
        color:black;
        width:40px;
        height:40px;
        background-color:#c3d3cf;
        font-size: 20px;
        display:flex;
        align-items: center;
        justify-content:center;
    }
   .motors:hover{
       color:blue
   }
    .name h4{
        font-size:20px;
        font-weight: 600;
    }
    .sec_container{
        display:flex;
        align-items:center;
        gap:30px;
        padding: 20px 4px;
        width:100%;
        /* min-width:1600px; */
    }
    .location_placeholder, .search_placeholder {
        position:relative;
    }
    .location_placeholder input::placeholder{
        padding:26px;
        font-size:18px;
    }
    .location_placeholder input{
        font-size:22px;
        border:2px solid black;
        border-radius: 2.5px;
        padding:7px 4px;
        /* width:100%; */
        min-width:110px;
    }
    .location_placeholder label{
        font-size: 18px;
        position:absolute;
        left:9px;
        top:12px;
      
    }
    .location_placeholder i{
       font-size:18px;
       cursor: pointer;
       

    }
    .arrow i{
      position:absolute;
      right:12px;
      top:14px;
      font-size:22px;
      cursor: pointer;
    }
    .search_placeholder input{
        font-size:22px;
        border:2px solid black;
        border-radius: 2.5px;
        padding:7px 4px;
        width:880px;
        max-width:100%;
    }
    .search_placeholder input::placeholder{
        padding:12px;
        font-size:18px;
    }
    .search_placeholder i{
        position:absolute;
        right:18px;
        top:17px;
        font-size:18px;
    }
    .login_name h4{
        font-size:18px;
        border-bottom:3.3px solid #222;
        cursor: pointer;
        width:100%;
    }
    .login_name h4:hover{
        border:none;
    }
    .sell_container{
        display:flex;
        align-items: center;
        justify-content: center;
        gap:6px;
        font-size:13px;
        width:130px;
        height:50px;
        padding:8px 12px;
        border-radius: 25px;
        border: 4px solid #1e967c;
    }
    .sell_icons i{
        font-size: 16px;
        color:#222;
        font-weight:900; 
        margin-top:4px;
    }
    .sell_name a{
        font-size:20px;
        font-weight:700;
        cursor: pointer;
    }
    .location_handler{
        position: absolute;
        top:50px;
        background-color: white;
        color:#222;
        border:2px solid #222;
        border-radius:4px;
        min-width:279px;
        min-height:337px;
        overflow-y: auto;
        max-height:100%;
        display: none;
        transition: all ease-in-out .90s;

    }
    .location_handler.active{
        display:block;
        transition: all ease-in-out .90s;
    }
    .arrow i.active{
       transform:rotate(180deg);
       transition:all ease-in-out .9s
    }
    .main_location{
        padding:26px 14px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        gap:1rem;
        white-space: nowrap;
        border-bottom: 1.6px solid #726a6a;
    }
    .main_location i{
        color:blue;
        font-size:24px;
    }
    .main_location h5{
        color:blue;
        font-size: 17px;
        margin-top:8px;
    }
    .ads_location{
        padding:18px 14px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        gap:1rem;
        white-space: nowrap;
        border-bottom: 1.6px solid #707070;
    }
    .ads_location i{
        font-size:24px;
        color:#363636;
    }
    .ads_location h5{
        color:#707070;
        font-size: 17px;
        margin-top:8px;
    }
    .ads_locations{
        padding:18px 14px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        gap:1rem;
        white-space: nowrap;
    }
    .ads_locations i{
        font-size:24px;
        color:#363636;
        cursor: pointer;
    }
    .ads_locations h5{
        color:#707070;
        font-size: 17px;
        margin-top:8px;
        cursor: pointer;
    }
    .choose{
        color:#707070;
        padding:12px 16px;;

    }
   /* .login_container{
    }
    .login_page{
        position:absolute;
        top:110px;
        left:35%;
        background-color: red;
        height:600px;
        width:100%;
        max-width:430px;
        display:flex;
        /* align-items:center; 
    }
    .login_page i{
        height: 80px;
        position:absolute;
        top:58px;
        right:15px;
        font-size:24px;
     }
    .logo_name a{
        position:absolute;
        top:90px;
        left:42%;
    }
    .logo_name h6{
        position:absolute;
        top:150px;
        left:18%;
        font-size:21px;
        font-weight:800;
        white-space:nowrap;
    } */


    @media(max-width:1449px){
        .search_placeholder input{
        width:800px;
    }
}
    @media(max-width:1369px){
        .search_placeholder input{
        width:700px;
    }
}
    @media(max-width:1280px){
        .search_placeholder input{
        width:600px;
    }
}
    @media(max-width:1159px){
        .search_placeholder input{
        width:500px;
    }
}
    @media(max-width:1079px){
        .search_placeholder input{
        width:400px;
    }
}
    @media(max-width:969px){
        .search_placeholder input{
        width:350px;
    }
}
    @media(max-width:930px){
        .search_placeholder input{
        display:none;
    }
    .search_placeholder i{
        display:none;
    }
    }
    @media(max-width:800px){
        .header_container{
    max-width:370px;
    width:100%;
    gap:9px;
    padding:2px 3px;
      }
      .sell_container{
        display:none;
        border:none;
    }
    }
    `