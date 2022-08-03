let container = document.querySelector(".container");
let reposContainer = document.querySelector(".container .repos");
let userContainer = document.querySelector(".container .user");
let btn = document.querySelector(".container button");
let input = document.querySelector(".container input");
let quotes = document.querySelector(".quotes");
window.onload = function () {
  fetch("https://type.fit/api/quotes", generateQuotes, quotes);
};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  quotes.style.display = "none";
  let name = input.value;
  let userurl = `https://api.github.com/users/${name}`;
  let reposurl = `https://api.github.com/users/${name}/repos`;
  fetch(userurl, generateUserDom, userContainer);
  fetch(reposurl, generateReposDom, reposContainer);
});
