const url = "http://localhost:3030/jsonstore/collections/students";
const submitBtn = document.getElementById("submit");
const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const par = document.querySelector(".notification");

submitBtn.addEventListener("click", fillTable);

async function fillTable(event) {
  event.preventDefault();
  //debugger;
  const data = new FormData(form);
  const name = data.get("firstName");
  const lastName = data.get("lastName");
  const facultyNumber = data.get("facultyNumber");
  const grade = Number(data.get("grade"));
  // console.log(data);
  //   if (
  //     name == "" ||
  //     lastName == "" ||
  //     facultyNumber == "" ||
  //     typeof grade != "number"
  //   ) {
  //     throw new Error("All fields are required!");
  //   }

  try {
    const response = await fetch(url);
    const students = await response.json();
    //console.log(students);
    Object.values(students).forEach((student) => {
      //console.log(student);
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdLastName = document.createElement("td");
      const tdFacultyNumber = document.createElement("td");
      const tdGrade = document.createElement("td");
      tdName.textContent = student.firstName;
      tdLastName.textContent = student.lastName;
      tdFacultyNumber.textContent = student.facultyNumber;
      tdGrade.textContent = student.grade;

      tr.appendChild(tdName);
      tr.appendChild(tdLastName);
      tr.appendChild(tdFacultyNumber);
      tr.appendChild(tdGrade);
      tbody.appendChild(tr);
    });
  } catch (err) {
    console.error(err);
  }
}
