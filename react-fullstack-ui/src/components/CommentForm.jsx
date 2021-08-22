import React, { useContext } from 'react';
import { AppContext } from '../provider/AppProvider';

function CommentForm() {
    const { commentObj, handleCommentChange, handleCommentSubmit, restaurantId } = useContext(AppContext);

    return (
        <div className="mt-5">
            <h4>Leave a comment!</h4>
            <form onSubmit={(event) => handleCommentSubmit(event, commentObj)}>
                <p>Rating</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="rating" id="inlineRadio1" value="option1" 
                        onChange={(event) => handleCommentChange(event, commentObj, restaurantId)}
                        required 
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="rating" id="inlineRadio2" value="option2" 
                        onChange={(event) => handleCommentChange(event, commentObj, restaurantId)}
                        required 
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="rating" id="inlineRadio3" value="option3" 
                        onChange={(event) => handleCommentChange(event, commentObj, restaurantId)}
                        required 
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="rating" id="inlineRadio4" value="option4" 
                        onChange={(event) => handleCommentChange(event, commentObj, restaurantId)}
                        required 
                    />
                    <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="rating" id="inlineRadio5" value="option5" 
                        onChange={(event) => handleCommentChange(event, commentObj, restaurantId)}
                        required 
                    />
                    <label className="form-check-label" htmlFor="inlineRadio5">5</label>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="date">Date of Visit</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        onChange={(event) => handleCommentChange(event, commentObj, restaurantId)}
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
                        onChange={(event) => handleCommentChange(event, commentObj, restaurantId)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-info"
                >
                    Submit
                </button>
            </form>
        </div>

    );
};

export default CommentForm;