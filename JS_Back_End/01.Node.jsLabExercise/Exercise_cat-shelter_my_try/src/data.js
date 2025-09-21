import fs from 'fs/promises';

const dbSerialized = await fs.readFile('./src/db.json');
const db = JSON.parse(dbSerialized);

export async function getCats(){
    return db.cats;
}

export async function getCat(id){
    return db.cats.find(cat=>cat.id===id);
}

export async function saveCat(catData){
    //add cat to db
    db.cats.push({id:db.cats[db.cats.length-1].id+1,...catData});
    //save cat array to filesystem
    await saveDb();
}

export async function editCat(catId,catData){
    db.cats = db.cats.map(cat=>cat.id===catId? {id:catId,...catData} : cat);
    await saveDb();
}

async function saveDb(){
    await fs.writeFile('./src/db.json',JSON.stringify(db,null,2));
}