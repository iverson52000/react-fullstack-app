import React from "react";
import { useParams } from "react-router";
import { useFormik } from "formik";

function CommentForm() {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      restaurant: id, // id from useParams is string
      rating: "",
      date: "",
      comment: "",
    },

    onSubmit: async (values) => {
      try {
        const resp = await fetch("http://127.0.0.1:8000/viewset/review/", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(values),
        });

        const data = await resp.json();

        if ("detail" in data) {
          alert(Object.values(data));
        } else {
          alert("Comment submitted!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="mt-5">
      <h4>Leave a comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        <p>Rating</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="rating"
            value="1"
            onChange={formik.handleChange}
            required
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            1
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="rating"
            value="2"
            onChange={formik.handleChange}
            required
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            2
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="rating"
            value="3"
            onChange={formik.handleChange}
            required
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            3
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="rating"
            value="4"
            onChange={formik.handleChange}
            required
          />
          <label className="form-check-label" htmlFor="inlineRadio4">
            4
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="rating"
            value="5"
            onChange={formik.handleChange}
            required
          />
          <label className="form-check-label" htmlFor="inlineRadio5">
            5
          </label>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="date">Date of Visit</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            onChange={formik.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Comment</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputComment"
            aria-describedby="CommentHelp"
            placeholder="Enter comment"
            name="comment"
            onChange={formik.handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
