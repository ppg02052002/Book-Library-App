import axios from 'axios';
import React, { useState } from 'react'

const BooksSectionEdit = ({data}) => {

  const [formData, setFormData] = useState({});
  const UpdateBook = (e) => {
    setFormData(e);
  };


  //deleting book func
  const deleteBook = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:1000/api/v1/deleteBook/${id}`);
      alert(res.data.message);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap my-3 mx-5 p-5'>
     {data && data.map((item,index)=>(
        <div className='mx-2 my-2' style={{width:"200px", height:"370px ", backgroundColor:"yellow", border:"1px solid black", borderRadius:"11px"}}>
            <div>
                <img style={{width:"200px", height:"240px", borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}} className="img-fluid" src={item.image} alt="/" />
            </div>
            {/* We can see at max 20 words of title */}
            <h6 style={{fontSize:"15px"}} className='text-dark px-2 my-1'>{item.title.slice(0,20)}...</h6>
            <h4 style={{fontSize:"13px", textAlign:'center',color:"blue" }} className=' px-2 my-1' ><b>{item.genres}</b></h4>
            <b style={{fontSize:"25px", color:"red"}} className='m-0 px-2'>Rs.{item.price}</b>
            <div className='d-flex justify-content-around align-items-center'>
                <button className='btn btn-primary' onClick={() => UpdateBook(item._id)}>UPDATE</button>
                <button className='btn btn-danger' onClick={() => deleteBook(item._id)}>DELETE</button>
            </div>
        </div>
     ))}
    </div>
  )
}

export default BooksSectionEdit
