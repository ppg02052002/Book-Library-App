import React, { useState } from 'react'
import axios from "axios";

const AddBooks = () => {
  const [Data, setData] = useState({
    title:"",
    author:"",
    image:"",
    price:0,
    genres:"",
    excerpt:"",
    available:false
  });

  const change = (e) => {
    // Destructuring
    const { name, value, type, checked } = e.target;
    // If the input is a checkbox, we can use checked for its value, otherwise we can use value
    const newValue = type === 'checkbox' ? checked : value;
    setData({ ...Data, [name]: newValue });
  };
  
  // console.log(Data);
  //submitting Data to database
  const submit = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:1000/api/v1/add",Data)
    .then((res) => alert(res.data.message));
    //after submitting data we should see empty fields
    setData({
      title:"",
      author:"",
      image:"",
      price:0,
      genres:"",
      excerpt:"",
      available:false
    })
  }
  return (
    <div className='bg-white d-flex justify-content-center align-items-center' style={{minHeight:"91.5vh" }}>
        {/* thiis is outer div */}
        <div className='container p-4'>

        <div className="mb-3">
        <label htmlFor="exampleformControlInput1" className="form-label">Book Title</label>
        <input type="text" className="form-control" id="exampleformControlInput1" placeholder="Enter Book Title"
         name='title' onChange={change} value={Data.title}/>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleformControlInput1" className="form-label">Author</label>
        <input type="text" className="form-control" id="exampleformControlInput1" placeholder="Enter Auther Name" 
        name='author' onChange={change} value={Data.author}/>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleformControlInput1" className="form-label">Book Image</label>
        <input type="text" className="form-control" id="exampleformControlInput1" placeholder="Enter URL Of Image" 
        name='image' onChange={change} value={Data.image}/>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleformControlInput1" className="form-label">Book Price</label>
        <input type="number" className="form-control" id="exampleformControlInput1" placeholder="Enter Book Price" 
        name='price' onChange={change} value={Data.price}/>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleformControlInput1" className="form-label">Book Genre</label>
        <input type="text" className="form-control" id="exampleformControlInput1" placeholder="Enter Genre/Category Of Book" 
        name='genres' onChange={change} value={Data.genres}/>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleformControlInput1" className="form-label">Book Excerpt/Description</label>
        <textarea type="text" className="form-control" id="exampleformControlInput1" placeholder="Enter Excerpt/Description Of Book" 
        name='excerpt' onChange={change} value={Data.excerpt}/>
        </div>

        <div className="form-check">
        <input className="form-check-input" type="checkbox" value={Data.available} id="flexCheckDefault" name='available' onChange={change} />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Available
        </label>
        </div>

        <button className='btn bg-success text-white my-2 position-center' onClick={submit}>Submit</button>
        </div>
    </div>
  )
}

export default AddBooks
