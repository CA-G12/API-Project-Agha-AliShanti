function fetch(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        cb(JSON.parse(xhr.responseText));
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

function generateReposDom(user, container) {
  container.innerHTML = ``;
  fetch(user.repos_url, (repos) => {
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
  });
}
