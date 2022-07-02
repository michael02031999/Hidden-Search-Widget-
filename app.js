let searchBox = document.getElementById("searchBox");
let input = document.getElementsByTagName("input");
let icon = document.getElementsByClassName("fa-magnifying-glass");

//searchBox.addEventListener("click", expand);
icon[0].addEventListener("click", expand);

let count = 0;

function expand() {
  if (count % 2 == 0) {
    searchBox.style.width = "160px";
    input[0].style.display = "block";
    searchBox.style.paddingRight = "20px";
  } else if (count % 2 == 1) {
    searchBox.style.width = "35px";
    input[0].style.display = "none";
    searchBox.style.paddingRight = "0px";
  }
  count++;
}
