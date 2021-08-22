import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext({
  route: "",
  setRoute: () => {},
  restaurants: [],
  setRestaurants: () => {},
  reviews: [],
  setReviews: () => {},
  restaurantId: 0,
  setRestaurantId: () => {},
  comment: {},
  setComment: () => {},
  commentObj: {},
  setCommentObj: () => {},
  userObj: {},
  setUserObj: {},
  handleSignChange: () => {},
  handleSignin: () => {},
  token: "",
  setToken: () => {},
  handleSignout: () => {},
  handleRegister: () => {},
});

const AppProvider = ({ children }) => {
  const [route, setRoute] = useState("signin");
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantId, setRestaurantId] = useState(0);
  const [commentObj, setCommentObj] = useState({});
  const [userObj, setUserObj] = useState({});
  const [token, setToken] = useState("");
  // const [reviews, setReviews] = useState([]);

  const fetchRestaurants = async () => {
    try {
      const resp = await fetch("http://127.0.0.1:8000/viewset/restaurant/");
      const data = await resp.json();

      for (let item of data) {
        const reviews = item.reviews;
        reviews.sort((a, b) => {
          let dateA = new Date(a.date);
          let dateB = new Date(b.date);
          return dateB - dateA;
        });
        item.avgRating =
          reviews.reduce((acc, obj) => acc + (obj.rating || 0), 0) /
          (reviews.length || 1);
      }
      data.sort(function (a, b) {
        return b.avgRating - a.avgRating;
      });
      setRestaurants(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //     fetchRestaurants();
  // }, []);

  const handleSignChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserObj((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignin = async (event, userObj) => {
    event.preventDefault();
    try {
      const resp = await fetch("http://127.0.0.1:8000/auth/login/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObj),
      });

      const data = await resp.json();

      console.log(data);
      if ("key" in data) {
        setToken(data.key);
        setRoute("list");
        setUserObj({});
      } else {
        alert(Object.values(data));
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  const handleSignout = async (event) => {
    event.preventDefault();
    try {
      const resp = await fetch("http://127.0.0.1:8000/auth/logout/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
      });

      const data = await resp.json();
      console.log(data);
      setToken("");
      alert("You've log out!");
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }

    setRoute("signin");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const resp = await fetch("http://127.0.0.1:8000/auth/registration/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObj),
      });

      const data = await resp.json();

      console.log(data);
      if ("key" in data) {
        // setToken(data.key);
        alert("You've registered!");
        setRoute("signin");
        setUserObj({});
      } else {
        alert(Object.values(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentChange = (event, commentObj, restaurantId) => {
    if (!commentObj.hasOwnProperty("restaurant"))
      setCommentObj({ restaurant: restaurantId });

    const name = event.target.name;
    let value = event.target.value;
    const optionObj = {
      option1: 1,
      option2: 2,
      option3: 3,
      option4: 4,
      option5: 5,
    };

    if (value in optionObj) {
      value = optionObj[value];
      setCommentObj((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setCommentObj((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  //   useEffect(() => console.log(commentObj), [commentObj]);

  const handleCommentSubmit = async (event, commentObj) => {
    event.preventDefault();
    event.target.reset();

    try {
      const resp = await fetch("http://127.0.0.1:8000/viewset/review/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(commentObj),
      });

      const data = await resp.json();

      if ("detail" in data) {
        alert(Object.values(data));
      } else {
        setCommentObj({});
        fetchRestaurants();
        alert("Comment submitted!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        route,
        setRoute,
        restaurants,
        restaurantId,
        setRestaurantId,
        commentObj,
        handleCommentChange,
        handleCommentSubmit,
        userObj,
        handleSignChange,
        handleSignin,
        handleSignout,
        handleRegister,
        token,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
