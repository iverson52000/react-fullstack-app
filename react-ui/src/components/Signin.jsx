import React from "react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

function Signin() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        const resp = await fetch("http://127.0.0.1:8000/auth/login/", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await resp.json();

        if ("key" in data) {
          localStorage.setItem("token", data.key);
          history.push("/list");
        } else {
          alert(Object.values(data));
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong!");
      }
    },
  });

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
              <form className="form-signin" onSubmit={formik.handleSubmit}>
                <div className="form-label-group">
                  <label htmlFor="username">Username</label>
                  <input
                    name="username"
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    required
                    autoFocus
                    value={formik.values.username}
                  />
                </div>
                <div className="form-label-group">
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    required
                    value={formik.values.password}
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
