import http from "http";
import fs from "fs/promises";
import {getCats, saveCat, getCat, editCat} from "./data.js";

const server = http.createServer(async (req, res) => {
  let html;

  if (req.method==='POST'){
    console.log('POST request');
    let data = '';

    req.on('data',chunk=>{  
      data+=chunk.toString();
    });

    req.on('end',async ()=>{
      const searchParams = new URLSearchParams(data);
      const catResult = Object.fromEntries(searchParams);

      if(req.url==='/cats/add-cat'){
        await saveCat(catResult);
      } else if(req.url.startsWith==='/cats/edit-cat'){
        const segments = req.url.split('/');
        const catId = Number(segments[3]);
        await editCat(catId,catResult);
      }
      // redirect to home page
      res.writeHead(301,{'Location':'/'});
      res.end();
    });

    return;
  }

  if(req.url.startsWith('cats/edit-cat')){

    const segments = req.url.split('/');
    const catId = Number(segments[3]);
    html = await editCatView(catId);

  } else {

  switch (req.url) {
    case '/':
      html = await homeView();
      break;
    case '/cats/add-breed':
      html = await addBreedView();
      break;
    case '/cats/add-cat':
        html = await addCatView();
        break;
    case '/style/site.css':
      const siteCss = await readFile("./src/style/site.css");
      res.writeHead(200, { 
        'content-type': 'text/css', 
        'cash-control': 'max-age=10' 
      });
      res.write(siteCss);
      return res.end();
    default:
      return res.end();
  }
}

  res.writeHead(200, { 
    "content-type": "text/html" 
  });
  res.write(html);
  res.end("Hello, Cat Shelter!");
});

server.listen(5000);
console.log("Server is lintening on http://localhost:5000...");


//functions
function readFile(path) {
  return fs.readFile(path, { encoding: 'utf-8', });
}

async function homeView() {
  const html = await readFile("./src/views/home/index.html");
  const cats = await getCats();
  let catHtml = '';
  cats.length > 0 ? catHtml = cats.map(cat=>catTemplate(cat)).join('\n'): catHtml='<span>There are no cats!</span>';
  const result = html.replace('{{cats}}',catHtml);
  return result;
}

async function addBreedView() {
  const html = await readFile('./src/views/addBreed.html');
  return html;
}

async function addCatView() {
  const html = await readFile('./src/views/addCat.html');
  return html;
}

async function editCatView(catId) {
  const cat = await getCat(catId);
  let html = await readFile('./src/views/editCat.html');

  html = html.replaceAll('{{name}}',cat.name);
  html = html.replaceAll('{{description}}',cat.description);
  html = html.replaceAll('{{imagrUrl}}',cat.imageUrl);
  //html = html.replaceAll('{{breed}}',cat.breed);
  return html;
}

function catTemplate(cat){
  return ` <li>
      <img src="${cat.imageUrl}" alt="${cat.name}">
      <h3>${cat.name}</h3>
      <p><span>Breed: </span>${cat.breed}</p>
      <p><span>Description: </span>${cat.description}</p>
      <ul class="buttons">
          <li class="btn edit"><a href="/cats/edit-cat/${cat.id}">Change Info</a></li>
          <li class="btn delete"><a href="">New Home</a></li>
      </ul>
  </li>`;
}
