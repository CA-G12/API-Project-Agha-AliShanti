let container = document.querySelector(".container");
let reposContainer = document.querySelector(".container .repos");
let userContainer = document.querySelector(".container .user");
let btn = document.querySelector(".container button");
let input = document.querySelector(".container input");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = input.value;
  let userurl = `https://api.github.com/users/${name}`;
  let reposurl = `https://api.github.com/users/${name}/repos`;
  fetch(userurl, generateUserDom,userContainer);
  fetch(reposurl, generateReposDom,reposContainer);
});