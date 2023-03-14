const fetchExample = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .then(() => console.log("All done!"));
};

fetchExample();
