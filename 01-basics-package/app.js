const data = require("./script.js");
const oneLinerJoke = require("one-liner-joke");
const getRandomCat = require("random-cat-img");
const figlet = require("figlet");

// script.js to app.js using commonJs
// console.log(data);

// Log random jokes
// console.log(oneLinerJoke.getRandomJoke());

// Get random Image of cat
// (async () => {
//   const data = await getRandomCat();
//   console.log(data.message); // https://cdn.sefinek.net/images/animals/cat/cat-1362565-min.jpg
// })();

// Log name in figlet
figlet("Sheryians", (err, data) => {
  if (err) {
    console.log("something wrong");
    console.log(err);
    return;
  } else {
    console.log(data);
  }
});
