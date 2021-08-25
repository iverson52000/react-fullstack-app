import React, { useContext } from "react";
import { useFormik } from "formik";

function CommentForm({ id }) {
  const formik = useFormik({
    initialValues: {
      restaurant: id, //id will be converted to string here
      rating: "",
      date: "",
      comment: "",
    },

    onSubmit: async (values) => {
      try {
        values.restaurant = parseInt(values.restaurant);
        values.rating = parseInt(values.rating);
        alert(JSON.stringify(values));
      } catch (error) {}
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
            id="inlineRadio1"
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
            id="inlineRadio2"
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
            id="inlineRadio3"
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
            id="inlineRadio4"
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
            id="inlineRadio5"
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
