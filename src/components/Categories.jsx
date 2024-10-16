import React from 'react'
import styled from 'styled-components'
import CarouselPage from './CarouselPage'

function Categories() {
  return (
    <CategoriesSection>
        <div>
            <div className="line">
            </div>
            <section>
             <div className="categories_container">
             <div className="name">
              All categories
              </div>
              <div className="arrow">
              <i class="fa-solid fa-angle-down"></i>
              </div>
              <div className="categories_section">
                <div className="categories_name">
                Mobile Phones
                </div>

                <div className="categories_name">
                Cars
                </div>

                <div className="categories_name">
                Motorcycles
                </div>

                <div className="categories_name">
                House
                </div>

                <div className="categories_name">
                Video-Audios
                </div>

                <div className="categories_name">
                Tablets
                </div>

                <div className="categories_name">
                Land & Plots
                </div>
              </div>
             </div>
             <CarouselPage/>
           </section>
  
        </div>
   
   </CategoriesSection>
  )
}

export default Categories

const CategoriesSection = styled.div`
margin-top:110px;
.line{
    height:1px;
    width:100%;
color:#302f2f;
background-color:black;
}
.categories_container{
  display:flex;
  align-items: center;
  gap:12px;
  padding-top:8px;
}
.name{
  font-size:18px;
  font-weight:600;
  cursor: pointer;
}
.arrow{
  margin-top:4px;
  cursor: pointer;
}
.categories_section{
  display:flex;
  align-items:center;
  gap:24px;
  margin-left:16px;
}
.categories_name{
  cursor: pointer;
}
@media(max-width:2300px){
  margin-top:174px;
}
@media(max-width:600px){
  .categories_container{
    display:none;
  }
}
`