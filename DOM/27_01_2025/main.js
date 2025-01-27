const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", (ev) => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    myBtn.textContent = "🌞";
  } else {
    myBtn.textContent = "🌚";
  }
});

const result = document.querySelector("#result");

window.addEventListener("resize", (ev) => {
  console.log(ev);
  result.textContent =
    ev.srcElement.innerHeight + " x " + ev.srcElement.innerWidth;
});
