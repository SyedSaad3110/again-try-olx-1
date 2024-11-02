import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { locationData } from '../Data';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useFirebase } from './Firebase/FirebaseContext';
function Navbar() {
    const firebase = useFirebase();
    // ==========================
      const locationRef = useRef();
      const arrowRef = useRef();
      const barRef = useRef();

// ==============================================================
      const [handlerValue , setHandlerValue] = useState("");
//  bar active
      const barActive = () => {
        barRef.current.classList.toggle('active')
      };
//   bar remove
      const barRemove = () => {
        barRef.current.classList.remove('active')
      }
//  location active & remove
      const locationHandlerData = ()=>{
        locationRef.current.classList.toggle("active")
        arrowRef.current.classList.toggle("active")
      };
//  handler change
        const handlerValueChange =(e)=>{
             setHandlerValue(e)
        };
        
// ====================================================

  return (

    <NavbarSection>
        <div className="nav_container">
    <div className="header_container">
        <div className="bar">
        <i onClick={barActive} class="fa-solid fa-bars"></i>
        </div>

    <div className="logo_name">
        <NavLink to="/" onClick={barRemove && window.scrollTo(0,0)}><h2>O<span>|</span>X</h2></NavLink>
    </div>

    <div className="motors">
        <div className="motors_logo">
        <NavLink to='/sell' style={{textDecoration:'none'}}><i class="fa-solid fa-car"></i></NavLink>
        </div>
        <div className="name">
            <NavLink to='/sell' style={{textDecoration:'none'}} onClick={barRemove}><a className='a_logos' href="#"><h4>Sell</h4></a></NavLink>
        </div>
    </div>

    <div className="property">
        <div className="property_logo">
       <NavLink  to='/sellinglist' style={{textDecoration:'none'}} ><i class="fa-regular fa-building"></i></NavLink>
        </div>
        <div className="name">
           <NavLink to='/sellinglist' style={{textDecoration:'none'}} ><a className='a_logos' href="#"><h4>Sell Product</h4></a></NavLink>
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
            <a className='a_logos' onClick={firebase.logout}><h4>Logout</h4></a>

        </div>
        <div className="sell_container">
            <div className="sell_icons">
            <i class="fa-solid fa-plus"></i>
            </div>
            <div className="sell_name">
              <NavLink style={{textDecoration:'none'}} to='/sell'><a className='a_logos'  to='/sell'>Sell</a></NavLink>
            </div>
        </div>
        <div>
        </div>
        {/* <CarouselPage/> */}
        
    <div className="bar-container" ref={barRef}>
       <div className="top-content">
        <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" />
        <div className="top-content-name">
        <p>Hello,</p>
        <h5>User</h5>
        </div>
       </div>

       <hr />

       <div className="bar_first_box">
        <div className="bar_content">
        <NavLink to='/sell' style={{textDecoration:'none', color:'black'}} onClick={barRemove}><i class="fa-solid fa-camera"></i></NavLink>
        <NavLink to='/sell' style={{textDecoration:'none', color:'black'}} onClick={barRemove}><p>Start Selling</p></NavLink>
        </div>
        <div className="bar_content">
        <i onClick={barRemove} class="fa-regular fa-heart"></i>
        <p onClick={barRemove}>Favourites & Saved</p>
        </div>
        <div className="bar_content">
        <NavLink to='/sellinglist' style={{textDecoration:'none', color:'black'}} onClick={barRemove}><i class="fa-regular fa-eye"></i></NavLink>
        <NavLink to='/sellinglist' style={{textDecoration:'none', color:'black'}} onClick={barRemove}><p>Selling Products</p></NavLink>
        </div>
        <div className="bar_content">
        <a href="https://help.olx.com.pk/hc/en-us" style={{color:'black'}}><i onClick={barRemove} class="fa-regular fa-circle-question"></i></a>
        <a href="https://help.olx.com.pk/hc/en-us" style={{color:'black' , textDecoration:'none'}}><p onClick={barRemove}>Help</p></a>
        </div>
        <div className="bar_content">
        <i onClick={barRemove} class="fa-solid fa-sliders"></i>
        <p onClick={barRemove}>Setting</p>
        </div>
        <div className="bar_content">
        <i onClick={firebase.logout} class="fa-solid fa-right-from-bracket"></i>
        <p onClick={firebase.logout}>Logout</p>
        </div>
       </div>
    </div>

</div>
</div>

    </NavbarSection>
  )
}

export default Navbar

const NavbarSection = styled.section`
.bar i{
    font-size: 22px;
    font-weight: 600;
    margin-top: 4px;
}
.bar{
    display:none;
}
.bar-container.active{
   left:0;
   transition: 0.5s ease-in-out linear;
}
.bar-container{
    width: 100%;
    height: 900px;
    position: absolute;
    background-color: #fff;
    top: 70px; 
    left:-650px;
    transition: 0.9s ease-in;
    visibility: hidden;
}
.top-content{
    display: flex;
    align-items: center;
    gap:22px;
    /* width:100%; */
    padding:16px;
}
.top-content-name p{
    color:black;
    font-weight:390;
}
.top-content-name h5{
    color:black;
    font-size:18px;
    font-weight:520;
    margin-top:-15px
}
.bar_content{
    display:flex;
    align-items:center;
    gap:18px;
    padding:10px 24px;
}
.bar_content p{
    margin-top:15px;
    font-weight:400;
}
/* ============================================ */

.top-content img{
    height: 60px;
    width:60px;
    border-radius:50%;
}
.nav_container{
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index:1001;
    background-color: #fff;
    width:100%;
    max-width:1540px;
    margin:0 auto;
    padding:10px 20px;
}
.header_container{
    max-width:420px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    gap:14px;
    padding:4px 8px;
}
.logo_name{
    margin-top:8px;
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
        font-weight:400;
    }
   .motors:hover{
       color:blue
   }
    .name h4{
        font-size:20px;
        font-weight: 460;
    }
    .sec_container{
        display:flex;
        align-items:center;
        gap:30px;
        padding: 20px 4px;
        width:100%;
        margin:0 auto;
    }
    .location_placeholder, .search_placeholder {
        position:relative;
        /* width:100%; */
    }
    .location_placeholder input{
        font-size:22px;
        border:2px solid black;
        border-radius: 3px;
        padding:7px 44px;
        max-width:100%;
        /* min-width:110px; */
        width:300px;
        font-weight: 380;
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
        border-radius: 3px;
        padding:7px 14px;
        padding-right:44px;
        width:880px;
        max-width:100%;
        font-weight: 380;
        overflow: hidden;
    }
    .search_placeholder input::placeholder{
        overflow: hidden;
        z-index: 1000;
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
        background-color: #fff;
        color:#222;
        border:2px solid #222;
        border-radius:4px;
        min-width:300px;
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
        font-size:20px;
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
    }
    @media(max-width:930px){
      .sec_container{
         gap:10px;
      }
    }
    @media(max-width:482px){
        .bar{
          display:block;
         }
         .login_name{
            display:none;
         }
         .bar-container{
         visibility: visible;
         }
         .sell_container{
            display:none;
         } 
         .sec_container{
        display:flex;
        justify-content:center;
        text-align:center;
    }
    }
    /* @media(max-width:470px){
          /* .sell_container{
            display:none;
         } 
    } */
    @media(max-width:442px){
        .property{
            display:none;
        }
    }
    `