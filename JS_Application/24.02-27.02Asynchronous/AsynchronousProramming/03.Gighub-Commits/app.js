function loadCommits() {
  const username = document.getElementById("username").value;
  const repository = document.getElementById("repo").value;
  const ulElement = document.getElementById("commits");
  const url = `https://api.github.com/repos/${username}/${repository}/commits`;
 
  fetch(url)
    .then((res) => res.json())
    .then((repos) => {
      ulElement.innerHTML = "";

      repos.forEach((repo) => {
   //console.log(repo.commit.author.name);
        if (repo.commit.author.name!=="unknown") {
          const liElement = document.createElement("li");
          liElement.textContent = `${repo.commit.author.name}: ${repo.commit.message}`;
          ulElement.appendChild(liElement);
        }
        // else{
        //     ulElement.innerHTML = "";
        //     const liElement = document.createElement("li");
        //     liElement.textContent = `Error: ${error.status} (Not Found)`;
        //     ulElement.appendChild(liElement);
        // }
      });
    })
    .catch((error) => {
       // console.error(`Error: ${error}`);
       ulElement.innerHTML = "";
       const liElement = document.createElement("li");
       liElement.textContent = `Error: ${error.status} (Not Found)`;
       ulElement.appendChild(liElement);
    });
}
