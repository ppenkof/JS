/*
<tr>
    <td>Harry Poter</td>
    <td>J. K. Rowling</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
</tr>
<tr>
    <td>Game of Thrones</td>
    <td>George R. R. Martin</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
</tr>
*/

let url = "http://localhost:3030/jsonstore/collections/books";
const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const H3el = document.querySelector("h3");
const submitBtn = document.querySelector("submit");
const loadBookBtn = document.getElementById("loadBooks");


loadBookBtn?.addEventListener("click", loadBooks);
async function loadBooks() {
   tbody.innerHTML = "";
  
  const response = await fetch(url);
  const books = await response.json();
  
  try {
    Object.entries(books).forEach((book) => {
      const trEl = document.createElement("tr");
      trEl.innerHTML = `<td>${book[1].title}</td>
                        <td>${book[1].author}</td>`;
      //console.log(book[1]);

      const tdBtns = document.createElement("td");
      const tdDeleteBtn = document.createElement("button");
      tdDeleteBtn.textContent = "Delete";
      const tdEditBtn = document.createElement("button");
      tdEditBtn.textContent = "Edit";
      //   const manipulatedIDVal=document.getElementById('td').value;

      //   console.log(manipulatedIDVal);

      //if (book._id) {
      tdDeleteBtn.addEventListener("click", deleteRow);
      tdEditBtn.addEventListener("click", editRow);
      tdBtns.appendChild(tdEditBtn);
      tdBtns.appendChild(tdDeleteBtn);
      trEl.appendChild(tdBtns);
      //}

      tbody.appendChild(trEl);

      async function deleteRow() {
        const response = await fetch(url + `/` + book[0], {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(),
        });
        if (response) {
          console.log(book[1].title + ": " + book[1].author + " is deleted");
        }
        form.innerHTML = ` <h3>FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <button>Submit</button>`;
      }

      function editRow() {
        //form.replaceChild(H3el);
        form.innerHTML = `<h3>Edit FORM</h3>
          <label>TITLE</label>
          <input type="text" name="title" placeholder="Title..." value=${book[1].title}>
          <label>AUTHOR</label>
          <input type="text" name="author" placeholder="Author..." value=${book[1].author}>
          <button>Save</button>`;

        form?.addEventListener("submit", onSave);
      }

      async function onSave(e) {
        e.preventDefault();
        const response = await fetch(url + `/` + book[0], {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(book[1]),
        });
        if (response) {
          console.log(book[1].title + ": " + book[1].author + " is edited");
        }

        // form.innerHTML = ` <h3>FORM</h3>
        // <label>TITLE</label>
        // <input type="text" name="title" placeholder="Title...">
        // <label>AUTHOR</label>
        // <input type="text" name="author" placeholder="Author...">
        // <button>Submit</button>`;
        //return;
      }
    });
  } catch (error) {
    console.log(error);
  }

  /*

  tdDeleteBtn.addEventListener("click", deleteRow);
  tdEditBtn.addEventListener("click", editRow);

  const bookArr = Object.entries(books);
  const book = bookArr[0];

  //console.log(book);
  async function deleteRow() {
    const response = await fetch(url + `/` + book[0]._id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
    if (response) {
      console.log(book[1].title + ": " + book[1].author + " is deleted");
    }
  }

  function editRow() {
    form.appendChild(H3el);
    form.innerHTML = `<h3>Edit FORM</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." value=${book[1].title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." value=${book[1].author}>
    <button>Save</button>`;

    form?.addEventListener("submit", onSave);
  }

  async function onSave(e) {
    e.preventDefault();
    const response = await fetch(url + `/` + book[0]._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book[1]),
    });
    if (response) {
      console.log(book[1].title + ": " + book[1].author + " is edited");
    }

    form.innerHTML = ` <h3>FORM</h3>
  <label>TITLE</label>
  <input type="text" name="title" placeholder="Title...">
  <label>AUTHOR</label>
  <input type="text" name="author" placeholder="Author...">
  <button>Submit</button>`;
  }

  */

  form?.addEventListener("submit", onSubmit);

  async function onSubmit(e) {
    e.preventDefault();
    console.log("Tuk sym Submit");
    const formData = new FormData(form);
    const eventData = Object.fromEntries(formData);

    const title = formData.get("title");
    const author = formData.get("author");

    try {
      if (title == "" || author == "") {
        throw new Error("Invalid data");
      }
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Incorrect action!");
      }
      console.log(eventData);

      //   form.innerHTML = ` <h3>FORM</h3>
      //   <label>TITLE</label>
      //   <input type="text" name="title" placeholder="Title...">
      //   <label>AUTHOR</label>
      //   <input type="text" name="author" placeholder="Author...">
      //   <button>Submit</button>`;
      //   return;
    } catch (error) {
      console.log(error);
    }
  }
}
