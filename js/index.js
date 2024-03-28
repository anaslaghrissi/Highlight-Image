let focus = document.getElementById("focus");

let focusHalfWidth = focus.offsetWidth / 2;

document.onmousemove = function (e) {
  focus.style.left = e.pageX - focusHalfWidth + "px";
  focus.style.top = e.pageY - focusHalfWidth + "px";
};
