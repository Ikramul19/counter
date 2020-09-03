let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    var style = e.currentTarget.classList;
    if (style.contains("btn-decrease")) {
      count--;
    } else if (style.contains("btn-increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#1B2B34";
    }
    value.textContent = count;
  });
});
