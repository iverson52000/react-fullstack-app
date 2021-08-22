import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../provider/AppProvider";

function Register() {
  const { handleSignChange, userObj, handleRegister, setRoute } =
    useContext(AppContext);

  return (
    <>
      <h1 className="mt-5" style={{ textAlign: "center" }}>
        Product Review App!
      </h1>
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Register</h5>
              <form
                className="form-signin"
                onSubmit={(event) => handleRegister(event, userObj)}
              >
                <div className="form-label-group">
                  <label htmlFor="inputEmail">Username</label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={(event) => handleSignChange(event, userObj)}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-label-group">
                  <label htmlFor="inputPassword">
                    Password(At least 8 letters)
                  </label>
                  <input
                    name="password1"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(event) => handleSignChange(event, userObj)}
                    required
                  />
                </div>
                <div className="form-label-group">
                  <label htmlFor="inputPassword">Confirm password</label>
                  <input
                    name="password2"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(event) => handleSignChange(event, userObj)}
                    required
                  />
                </div>
                <button
                  className="btn btn-lg btn-info btn-block text-uppercase"
                  type="submit"
                >
                  Register
                </button>
              </form>
              <div className="text-center mt-2">
                <Link to="/signin">Signin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
