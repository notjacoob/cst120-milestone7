/*
Jacob Blair
CST120
Milestone 7
12/10/23
This is my own work
*/
const startTheater = (id) => {
  const el = $(`#${id}`); // select provided element
  const theater = $(".theater-mode"); // select applicable theater elements
  el.css("zIndex", 2); // set provided element to be above all theater elements
  theater.get().map((ele) => $(ele).toggleClass("theater-active")); // toggle all theater elements on
};
const stopTheater = (id) => {
  const el = $(`#${id}`); // select provided element
  const theater = $(`.theater-mode`); // select applicable theater elements
  el.css("zIndex", 0); // set provided element to be below all theater elements
  theater.get().map((ele) => $(ele).toggleClass("theater-active")); // toggle all theater elements off
};
