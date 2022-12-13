
import React, { useState } from "react"
import { Container } from "react-bootstrap";
import "../../Styles/auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginService } from "../../services/userService";
import { login } from "../../shared/Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { toastMessage } from "../../components/toaster/toast"

const SingIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {

    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    else {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      email: email,
      password: password
    }

    loginService(obj)
      .then(({ data: data }) => {
        let obj = {
          user: data?.user,
          token: data?.token
        }
        navigate("/")
        dispatch(login(obj))
      })
      .catch((err) => {
        toastMessage(err.response.data)
      })
  }

  console.log("email",)



  return (
    <>
      {/* <Container className="containerAuth" >
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
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
                <button disabled={!(email && password)} onClick={(e) => handleSubmit(e)} className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className='mt-3' style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Or maybe Sign Up?</p>
            </div>
          </form>
          <p>Sample user: admin@yopmail.com</p>
          <p>password: admin@1234</p>
        </div>
      </Container> */}
      <Container>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{ borderRadius: "1rem", width: "100%" }}>
                  <div className="card-body p-5 text-center">

                    <div className=" mt-md-4 pb-3">

                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>

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
                      <button className="btn btn-outline-light btn-lg px-5" onClick={(e) => handleSubmit(e)}>Login</button>
                    </div>

                    <div className="mb-4">
                      <label>sample account: admin@yopmail.com</label>
                      <label>password: admin@1234</label>
                    </div>

                    <div>
                      <p className="mb-0">Don't have an account? <span href="#!" className="text-white-50 fw-bold" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Sign Up</span>
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

export default SingIn;
