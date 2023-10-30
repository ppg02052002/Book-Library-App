import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{borderBottom: "1px solid white"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand text-white" href="#">Book Library App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link className="nav-item nav-link active text-white" to="/">
          Home
        </Link>
        <Link className="nav-item nav-link active text-white" to="/about">
          About
        </Link>
        <Link className="nav-item nav-link active text-white" to="/books">
          Books-List
        </Link>
        <Link className="nav-item nav-link active text-white" to="/addBooks">
          Add-Books
        </Link>
        <Link className="nav-item nav-link active text-white" to="/updateBooks">
          Update/Delete-Book
        </Link>
        <Link className="nav-item nav-link active text-white" to="/signUp">
          SignUp
        </Link>
        <Link className="nav-item nav-link active text-white" to="/login">
          Login
        </Link>
        
        </ul> 
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
