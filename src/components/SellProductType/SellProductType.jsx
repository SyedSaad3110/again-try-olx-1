import React, { useContext, useEffect, useRef, useState} from 'react'
import './SellProductType.css'
import { NavLink } from 'react-router-dom';
import { useFirebase } from './../Firebase/FirebaseContext';
import Loader from '../Loader/Loader';


function SellProductType({img , name,}) {
  const firebase = useFirebase();
  // useState
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sendMsg, setSendMsg] = useState("Post Now")
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [nametext, setNameText] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  // ref
  const searchRef = useRef();
  const fileInputRef = useRef(null);



  const searchBarActive = () => {
    searchRef.current.classList.toggle('active')
  };

  // ==============================================================

  const handlePlusClick = () => {
    fileInputRef.current.click();
  };


  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    // const newImages = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prevImages => [...prevImages, ...files].slice(0, 1));
  };

  const removeImage = (index) => {
    setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
  };
  // ===============================================================

  const handlerSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        await firebase.handlerCreateListing(brand, condition, title, description, location, price, nametext, mobileNumber, selectedImages);
        await new Promise((resolve) => setTimeout(resolve ,8000))
        setSelectedImages([]);
        setBrand('');
        setCondition('');
        setTitle('');
        setDescription('');
        setLocation('');
        setPrice('');
        setNameText('');
        setMobileNumber('');
        setLoading(false);
        setSendMsg("Success");
        
  };

  const handleTitleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 20) {
      setTitle(inputText); // Set description if within 32 characters
    } else {
      title(inputText.slice(0, 20)); // Limit to 32 characters if exceeded
    }
  };

  const handleDescriptionChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 40) {
      setDescription(inputText); // Set description if within 32 characters
    } else {
      setDescription(inputText.slice(0, 40)); // Limit to 32 characters if exceeded
    }
  };

  return (
    <>
    <section>
      
      <div className="main-sell-container">
        <div className="main-sell-container">

        <form action="" onSubmit={handlerSubmit}>
        <div className="left-arrow">
       <NavLink to='/sell'><i class="fa-solid fa-arrow-left" ></i></NavLink>
      </div>

        <div className="type-container">
            <div className="first-container">
              <div className="content">
                <h6>Category</h6>
                <div className="product-type">
                  <img src={img} alt="" />
                  <h6>{name}</h6>
                </div>
                <NavLink to='/sell' style={{textDecoration:'none'}} className='change-btn'><h6>Change</h6></NavLink>
              </div>
              <hr />
            </div>

            <div className="sec-content">
              <h6>Upload Img</h6>
              <div className="img-container">
              <div className="images" onClick={handlePlusClick}>
              <i class="fa-solid fa-plus"></i>
              </div>
              <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                  multiple
                  accept="image/*"
                />
                {selectedImages.map((image, index) => (
                <div className="camera-images" key={index}>
                   <div className="image-wrapper">
                      <img src={URL.createObjectURL(image)} alt="Selected" />
                     <button className="delete-btn" onClick={() => removeImage(index)}>x</button>
                </div>
            </div>
))}

                   {/* {Array.from({ length: 12 }).map((_, index) => (
                  <div className="camera-images" key={index}>
                    {selectedImages[index] ? (
                      <div className="image-wrapper">
                        <img src={selectedImages[index]} alt="Selected" />
                        <button className="delete-btn" onClick={() => removeImage(index)}>x</button>
                      </div>
                    ) : (
                      <i className="fa-solid fa-camera"></i>
                    )}
                  </div>
                ))} */}

              </div>

            </div>
            <hr />
            <div className="third-container">

              <div className="third-content">
                <h6>Brand*</h6>
                <div className="search-bar" >
                <i class="fa-solid fa-magnifying-glass"></i>
                <input 
                onClick={searchBarActive} 
                type="text" placeholder='Select Brand..'
                onChange={(e)=> setBrand(e.target.value)}
                value={brand}
                />
                </div>
              </div>
              <div className="third-content">
                <h6>Condition*</h6>
                <div className="search-bar" >
                <i class="fa-solid fa-magnifying-glass"></i>
                <input 
                onClick={searchBarActive} 
                type="text" placeholder='Select Condition..'
                onChange={(e)=> setCondition(e.target.value)}
                value={condition}
                />
                </div>
              </div>
            </div>
             
             <hr />

             <div className="fourth-container">

             <div className="fourth-content">
                <h6>Ad Title*</h6>
                <div className="fourth-content-bar search-bar" >
                <input 
                onClick={searchBarActive} 
                type="text" placeholder='Enter Title..'
                onChange={handleTitleChange }
                value={title}
                />
                <br />
                <div className="pointer text-pointer">
                <p>Title should contain at least 15 alphanumeric</p>
                <p>0/70</p>
                </div>
                </div>
              </div>

              <div className="fourth-content text-area search-bar">
                <h6>Description*</h6>
                <div className="text-area-bar" >
                <textarea 
                onClick={searchBarActive} 
                type="text" placeholder="Describe the item you're selling.."
                onChange={handleDescriptionChange}
                value={description}
                />
                <br />
                <div className="pointer">
                <p>Description should contain at least 40 alphanumeric</p>
                <p>0/4096</p>
                </div>
                </div>
              </div>

              <div className="fourth-content">
                <h6>Location*</h6>
                <div className="search-bar" >
                <i class="fa-solid fa-magnifying-glass"></i>
                <input 
                onClick={searchBarActive} 
                type="text" placeholder='Select Location..'
                onChange={(e)=> setLocation(e.target.value)}
                value={location}
                />
                </div>
              </div>

             </div>
          </div>

          <div className="sec-type-container fourth-container">
          <div className="fourth-content">
                <h6>Price*</h6>
                <div className="fourth-content-bar search-bar" >
                <input 
                onClick={searchBarActive} 
                type="Number" placeholder='Enter Price...'
                onChange={(e)=> setPrice(e.target.value)}
                value={price}
                />
                </div>
              </div>
          </div>

          <div className="sec-type-container fourth-container">

          <div className="fourth-content">
                <h6>Name*</h6>
                <div className="fourth-content-bar search-bar" >
                <input 
                onClick={searchBarActive} 
                type="text" placeholder='Enter Name...'
                onChange={(e)=> setNameText(e.target.value)}
                value={nametext}
                />
                </div>
              </div>

              <div className="fourth-content">
                <h6>Mobile Number*</h6>
                <div className="fourth-content-bar search-bar" >
                <input 
                onClick={searchBarActive} 
                type="text" 
                placeholder='Enter Mobile Number...'
                onChange={(e)=> setMobileNumber(e.target.value)}
                value={mobileNumber}
                />
                </div>
              </div>
              <hr />

              <div className="sell-btn">
              <button type='submit'>{sendMsg}</button>
              </div>
          </div>

          </form>
          { loading && <Loader/>}
        </div>
        
        </div>
    </section>
    
    
    </>
  )
}

export default SellProductType