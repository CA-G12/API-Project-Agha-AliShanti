function fetch(url, cb, container) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        cb(JSON.parse(xhr.responseText), container);
        
      } else {
        console.log("Error " + xhr.status);
      }
    }
  };
  xhr.open("GEt", url, true);
  xhr.setRequestHeader(
    "Authorization",
    "token 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"
  );
  xhr.send();
}
function generateUserDom(user, container) {
  container.innerHTML = ``;
  console.log(user);
  container.innerHTML += `
  
  <div class="userImg"><img src="${user.avatar_url}" alt=""></div>
  <div class="userName">${user.name || user.login}</div>
  
  <div class="userInfo">
  <div class="userBio">${user.bio ||'No Bio'}</div>
  <div class="userfol">
            <div class="foling">Followers: ${user.following}</div>
            <div class="fols">Following: ${user.followers}</div>
  </div>
  <div class="userEmail">${user.email || 'No Email'}</div>
  <div class="userLoc">${user.location || 'No location'}</div></div>
  
      `;
}
function generateReposDom(repos, container) {
  if (repos.length > 0) {
    container.innerHTML = ``;
    repos.forEach((repo) => {
      container.innerHTML += `
        <div class="repo">
            <div class="repoName"> ${repo.name}</div>
            <div class="repoStars"><i class="fa-solid fa-star"></i>  ${
              repo.stargazers_count
            }</div>
            <div class="repoLangs"><i class="fa-solid fa-code"></i> ${
              repo.language
            }</div>
            <div class="repoDate"> <i class="fa-solid fa-calendar-days"> </i> ${new Date(
              repo.updated_at
            ).toLocaleDateString()}</div>
        </div>
        `;
    });
  } else {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=kitchen-looney-tunes-empty&api_key=TLbbBcJE8n7CLqs4EvB5Uo342SwEcFYI",
      generateEmptyRepoDom,
      container
    );
  }
  window.scrollTo(0, 500)
}
function generateEmptyRepoDom(data, container) {
  let url = data.data[0].images.downsized_medium.url;
  container.innerHTML = `<img src='${url}'>`;
}
