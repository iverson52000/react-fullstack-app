const fetchProducts = async () => {
  const resp = await fetch("http://127.0.0.1:8000/viewset/product/");
  const data = await resp.json();

  for (let item of data) {
    const reviews = item.reviews;
    reviews.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateB - dateA || b.id - a.id;
    });
    item.avgRating =
      reviews.reduce((acc, obj) => acc + (obj.rating || 0), 0) /
      (reviews.length || 1);
  }
  data.sort(function (a, b) {
    return b.avgRating - a.avgRating;
  });
  return data;
};

export { fetchProducts };
