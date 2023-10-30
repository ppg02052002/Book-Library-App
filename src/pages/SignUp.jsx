import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './signup.css'

function SignUp() {
  const [Data, setData] = useState({
    username:"",
    email:"",
    password:""
  });

  const change = (e) => {
    // Destructuring
    const { name, value} = e.target;
    setData({ ...Data, [name]: value });
  };
  //for signup user
  async function submituser(e) {
    e.preventDefault();
    await axios.post("http://localhost:1000/api/v1/signupadduser",Data)
    .then((res) => alert(res.data.message));
    //after submitting data we should see empty fields
    setData({
      username:"",
      email:"",
      password:""
    })
  }

//for signup librarian
  async function submitlibrarian(e) {
    e.preventDefault();
    try {
      // ... your librarian registration code ...
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="signup-container">
      <h2>SignUp</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="inputUsername" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              onChange={change}
              name="username"
              value={Data.username}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              onChange={change}
              placeholder="Email"
              name="email"
              value={Data.email}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              onChange={change}
              placeholder="Password"
              name="password"
              value={Data.password}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-sm text-white my-2"
          onClick={submituser}
        >
          Sign Up As User
        </button>

        <button
          type="submit"
          className="btn btn-primary btn-sm text-white my-2"
          onClick={submitlibrarian}
        >
          Sign Up As Librarian
        </button>
      </form>
    </div>
  );
}

export default SignUp;