import React from "react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password1: "",
      password2: "",
    },

    onSubmit: async (values) => {
      try {
        if (values.password1 !== values.password2) {
          alert("Password doesn't match!");
          return;
        }

        const resp = await fetch("http://127.0.0.1:8000/auth/registration/", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await resp.json();

        if ("key" in data) {
          alert("You've registered!");
          history.push("/");
        } else {
          alert(Object.values(data));
        }
      } catch (error) {
        console.log(error);
        alert(error);
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
              <h5 className="card-title text-center">Register</h5>
              <form className="form-signin" onSubmit={formik.handleSubmit}>
                <div className="form-label-group">
                  <label htmlFor="username">Username</label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    required
                    autoFocus
                    value={formik.values.username}
                  />
                </div>
                <div className="form-label-group">
                  <label htmlFor="password">Password(At least 8 letters)</label>
                  <input
                    name="password1"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    required
                    value={formik.values.password1}
                  />
                </div>
                <div className="form-label-group">
                  <label htmlFor="password">Confirm password</label>
                  <input
                    name="password2"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    required
                    value={formik.values.password2}
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
                <Link to="/">Signin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
