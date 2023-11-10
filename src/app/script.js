let burger = document.querySelector(".burger__list");
console.log(burger);
function close() {
  document.querySelector(".burger__check").checked = false;
  console.log("ssss");
}
burger.addEventListener("click", close);
