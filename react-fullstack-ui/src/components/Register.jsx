import React, { useContext } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { AppContext } from "../provider/AppProvider";

function Register() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      password2: "",
    },

    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      //   try {
      //     const resp = await fetch('http://127.0.0.1:8000/auth/registration/', {
      //         method: "post",
      //         headers: { "Content-Type": "application/json" },
      //         body: JSON.stringify(userObj),
      //     })

      //     const data = await resp.json();

      //     console.log(data);
      //     if ("key" in data) {
      //         // setToken(data.key);
      //         alert("You've registered!");
      //         setRoute("signin");
      //         setUserObj({});
      //     } else {
      //         alert(Object.values(data));
      //     };
      // } catch (error) {
      //     console.log(error);
      // }
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
                    name="password"
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
