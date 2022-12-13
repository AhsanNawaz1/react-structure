import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { signup } from "./../../shared/Redux/userSlice";
import { useDispatch } from "react-redux";
import { registerUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { toastMessage } from '../../components/toaster/toast';

function SignUp() {
  const navigate = useNavigate();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    else if (e.target.name == "fname") {
      setFName(e.target.value)
    }
    else if (e.target.name == "lname") {
      setLName(e.target.value)
    }
    else {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      first_name: fname,
      last_name: lname,
      email: email,
      password: password
    }

    registerUser(obj)
      .then((data) => {
        if (data) {
          console.log(data.data)
          toastMessage("success", data?.data?.message)
          navigate("/login")
        }
      })
      .catch((err) => {
        toastMessage("error", err.response.data)
      })
  }

  return (
    <>
      {/* <Container className="containerAuth" >
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="form-group mt-3">
                <label>First Name</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  className="form-control mt-1"
                  placeholder="John"
                  name="fname"
                />
              </div>
              <div className="form-group mt-3">
                <label>Last Name</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  className="form-control mt-1"
                  placeholder="Doe"
                  name="lname"
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  name="password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button disabled={!(fname && lname && email && password)} onClick={(e) => handleSubmit(e)} className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className='mt-3' style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>Or maybe Sign In?</p>
            </div>
          </form>
        </div >
      </Container > */}
      <Container>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{ borderRadius: "1rem", width: "100%" }}>
                  <div className="card-body p-5 text-center">

                    <div className=" mt-md-4 pb-3">

                      <h2 className="fw-bold mb-2 text-uppercase">SIGNUP</h2>
                      <p className="text-white-50 mb-5">Please enter your details and proceed!</p>

                      <div className="form-outline form-white mb-4" style={{ textAlign: "left" }}>
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          placeholder="John"
                          name="fname"
                          className="form-control mt-1"
                        />
                        <label className="form-label" for="typeEmailX">First Name</label>
                      </div>
                      <div className="form-outline form-white mb-4" style={{ textAlign: "left" }}>
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          placeholder="Doe"
                          name="lname"
                          className="form-control mt-1"
                        />
                        <label className="form-label" for="typeEmailX">Last Name</label>
                      </div>
                      <div className="form-outline form-white mb-4" style={{ textAlign: "left" }}>
                        <input type="email" id="typeEmailX" className="form-control mt-1"
                          onChange={(e) => handleChange(e)}
                          name="email"
                          placeholder="Enter email"
                        />
                        <label className="form-label" for="typeEmailX">Email</label>
                      </div>
                      <div className="form-outline form-white mb-4" style={{ textAlign: "left" }}>
                        <input
                          onChange={(e) => handleChange(e)}
                          type="password"
                          className="form-control mt-1"
                          placeholder="Enter password"
                          name="password"
                        />
                        <label className="form-label" for="typePasswordX">Password</label>
                      </div>
                      <button className="btn btn-outline-light btn-lg px-5" onClick={(e) => handleSubmit(e)}>Sign Up</button>
                    </div>

                    <div>
                      <p className="mb-0">Have an account ? <span href="#!" className="text-white-50 fw-bold" style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>Sign In</span>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default SignUp;