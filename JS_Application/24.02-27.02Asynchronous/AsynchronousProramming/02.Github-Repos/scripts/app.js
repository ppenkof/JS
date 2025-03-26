function loadRepos() {
	const username= document.getElementById('username').value;
	const ulElement= document.getElementById('repos');
	const url=`https://api.github.com/users/${username}/repos`;
	//console.log(url);
	//debugger;

	fetch(url)
	.then((res)=>res.json())
	.then((repos)=>{
		
		ulElement.innerHTML='';

		repos.forEach((repo)=>{
			//console.log(repo);
			const liElement=document.createElement('li');
			const aElement=document.createElement('a');
			debugger;
			aElement.href=repo.html_url;
			aElement.textContent=repo.full_name;

			liElement.appendChild(aElement);
			ulElement.appendChild(liElement);
		});

	})
	.catch
	((error)=>{
		console.error(`Error: ${error}`);
	});
}