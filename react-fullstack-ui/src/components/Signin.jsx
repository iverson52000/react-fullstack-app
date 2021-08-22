import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../provider/AppProvider";

function Signin() {
  const { handleSignChange, userObj, handleSignin, setRoute } =
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
              <h5 className="card-title text-center">Sign In</h5>
              <form
                className="form-signin"
                onSubmit={(event) => handleSignin(event, userObj)}
              >
                <div className="form-label-group">
                  <label htmlFor="inputEmail">Username</label>
                  <input
                    name="username"
                    type="text"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Username"
                    onChange={(event) => handleSignChange(event, userObj)}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-label-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    name="password"
                    type="password"
                    id="inputPassword"
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
                  Sign in
                </button>
              </form>
              <div className="text-center mt-2">
                <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
