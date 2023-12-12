/*
Jacob Blair
CST120
Milestone 7
12/10/23
This is my own work
*/
const fadeOut = (page) => {
  $("body").attr("style", "opacity: 0 !important;"); // set the body's opacity to 0 including transition
  setTimeout(() => {
    // once the transition is done, go to the provided page (only works for on-site pages!)
    window.location.href = this.window.origin + "/" + page;
  }, 350); // 350 ms
};
// attr is used because of bootstrap
const fadeIn = () => {
  $("body").attr("style", "opacity: 1 !important;");
};
