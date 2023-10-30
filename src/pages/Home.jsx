import React from 'react'
import './Home.css'
import {Link} from "react-router-dom"
const Home = () => {
  const image = require("../images/book_img.jpg")
  return (
    <div className="Home-Page bg-white text-dark container-fluid d-flex justify-content-center align-item-center">
        <div className='row container bg-sucess'>
            <div
            className='col-lg-6 d-flex justify-content-center align-item-start flex-column'
            style={{height: "91.5vh"}}
            >
            <h2 style={{fontSize:"80px"}}>Books For You</h2>
            <Link to="/books" className='showBook my-4 '>Show Books</Link>
            </div>
            <div
            className='col-lg-6 d-flex justify-content-center align-item-end flex-column'
            style={{height: "91.5vh"}}
            > 
            <img className='img-fluid homeImg'
            src={image} alt="/"/>
            </div>
        </div>
    </div>
  )
}

export default Home
