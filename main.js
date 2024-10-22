const wizards = [
  {
    id: 1,
    imageUrl: 'https://th.bing.com/th/id/OIP.-mcUCJ6XSdl-Ad7e5q5JtgHaJ4?w=145&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    house: "Ravenclaw",
    name: "Savannah Davenport",
    color: "blue"
  }
];

const renderToDom = (divId, htmlToRender) => {
  const targetingApp = document.querySelector(divId);
  targetingApp.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src=${student.imageUrl} class="card-img-top" alt="...">
    <div class="card-body">
    <h3 class="card-title">${student.name}</h3>
    <h5 class="card-title">${student.house}</h5>
    <p class="card-text">${student.color}</p>
    <a href="#" class="btn btn-danger" id="delete">Expel</a>
    </div>
    </div>`;
  }
    renderToDom("#app", domString);
};

const filter = (array, houseString) => {
  const houseArray = []; 

  for (const student of array) {
    if (student.house === houseString) {
      houseArray.push(student);
    }
  }
    return houseArray;
  };

  const form = document.querySelector('form');

  const addStudent = (e) => {
    e.preventDefault();

    const newStudentObj = {
      id: wizards.length + 1,
      name: document.querySelector("#name").value,
      house: document.querySelector("#house").value,
      color: document.querySelector("#color").value,
      imageUrl: document.querySelector("#imageUrl").value,
    };

    wizaards.push(newStudentObj);
    cardsOnDom(pets);
    form.reset();
  }

  form.addEventListener("submit", addStudent);

  const app = document.querySelector("#app");

  app.addEventListener("click", (e) => {

  if (e.target.id.icludes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = wizards.findIndex((e) => e.id === Number(id));
    pets.splice(index, 1);
    cardsOnDom(wizards);
  }
});

  const allStudentsbutton = document.querySelector("#btn-allStudents")

  allStudentsbutton.addEventListener("click", () => {
    cardsOnDom(wizards);
  });
  
  const startApp = () => {
    cardsOnDom(wizards);
  };
  
  startApp();

function addStudentForm() {
  document.getElementById('form1').style.display = 'block';
}
