import React, { useEffect, useState } from 'react'
import axios from "axios"
import BooksSectionEdit from '../components/BookSectionEdit';
const Books = () => {
    const [Data,setData]=useState();
    useEffect(()=>{
        const fetch = async ()=>{
            //fetching data from express
            await axios.get("http://localhost:1000/api/v1/getBooks")
            .then((res) => setData(res.data.books));
        };
        fetch();
    })
  return (

    <div className='bg-white' style={{minHeight:"91.5vh"}}>
        <div className='d-flex justify-content-center align-items-center py-3'>
        <h4 className='text-dark'>Update/Delete Books</h4>
        </div>
        {Data ?
            <BooksSectionEdit data={Data}/>
        :
        <div>Loading....</div>}
        
    </div>
  );
};

export default Books
