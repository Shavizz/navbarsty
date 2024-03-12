const d = document,
  w = window;

const nav = d.querySelector(".tabs-container");

const offset = nav.offsetTop;

w.addEventListener("scroll", function () {
  if (w.scrollY >= offset) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
