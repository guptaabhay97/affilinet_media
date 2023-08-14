window.onscroll = function () {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar_01").style.top = "0";
      document.getElementById("navbar_01").style.backgroundColor = "#fff";
  } else {
    document.getElementById("navbar_01").style.top = "0";
    document.getElementById("navbar_01").style.backgroundColor = "transparent";
  }
}