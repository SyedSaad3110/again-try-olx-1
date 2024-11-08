import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
// import { categories } from '../Data'
import { NavLink } from 'react-router-dom'

function Main({allcate, search}) {

  const [filteredCate, setFilteredCate] = useState(allcate);

  useEffect(() => {
    if (search) {
      const filtered = allcate.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCate(filtered);
    } else {
      setFilteredCate(allcate); 
    }
  }, [search, allcate]);


  return (
    <MainSection>
      <div className="main_container_section">
      <div className="name">
        <a href="#"><h4>All categories</h4></a>
       </div>
        <div className="categories_container">
          {/* <div className="categories_box"> */}
          {filteredCate.map((items, value)=>(
             <div className="content">
                  <div className="images" key={value}>
                    <NavLink to={`/product/${items.cate}`}><img src={items.img} alt="" /></NavLink>
                    <div className="context">
                    <h6>{items.name}</h6>
                    </div>
                  </div>
                 
             </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </MainSection>
  )
}

export default Main

const MainSection = styled.section`
.name a{
list-style:none;
text-decoration:none;
}
.name h4{
  font-size:30px;
  color:#222;
}
.categories_container{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:35px;
  padding:18px 26px 10px 10px;

}
.content{
  display:flex;
  align-items:center;
}
.images img{
  height:100px;
  width:100px;
}
.context h6{
  display: flex;
  justify-content:center;
  text-align:center;
  gap:35px;
  margin:10px 0 0;
  width:106px;
  height:60px;
  cursor:pointer;
}
@media(max-width:525px){
  .images img{
  height:70px;
  width:70px;
  border-radius:50%;
}
.context h6{
  display: inline-block;
  gap:25px;
  margin:6px 0 0;
  width:76px;
  height:50px;
}
.name h4{
  font-size:24px;
}
}
@media(max-width:485px){
  .categories_container{
      display: flex;
      flex-wrap: nowrap; 
      overflow-x: auto; 
      gap: 15px; 
      padding: 10px; 
      -webkit-overflow-scrolling: touch; 
  }
  .content{
    min-width: 120px;
  }
}


`