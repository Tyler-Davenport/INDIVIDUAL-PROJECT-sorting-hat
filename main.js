const houses = ["Ravenclaw", 
  "Gryffindor", 
  "Hufflepuff", 
  "Slytherin"];

const wizards = [
  {
    id: 1,
    // imageUrl: 'https://th.bing.com/th/id/OIP.-mcUCJ6XSdl-Ad7e5q5JtgHaJ4?w=145&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    house: houses[0],
    name: "Savannah Davenport",
    // color: "blue"
  },
  {
    id: 2,
    // imageUrl: 'https://th.bing.com/th?id=OIP.0SZPLWIKPvUjmxGCy0vtGgHaID&w=239&h=260&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2',
    house: houses[3],
    name: "Christian Jackson",
    // color: "green"
  }
];

const voldyArr = [
  {
    id: 1,
    name: "Daun",
    house: "The Dark Side",
  }
]

const renderToDom = (divId, htmlToRender) => {
  const targetingApp = document.querySelector(divId);
  targetingApp.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => { 
  let domString = "";
  wizards.forEach((student) => {
  // for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <h3 class="card-title">${student.name}</h3>
  <h5 class="card-title">${student.house}</h5>
  <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
  </div>
  </div>`;
});
    renderToDom("#app", domString);
};

const armyOnDom = (array) => { 
  let armyDomString = "";
  for (const evilOne of array) {
    armyDomString += `<div class="expelledCard" style="width: 18rem;">
  <div class="card-body">
  <h3 class="card-title">${evilOne.name}</h3>
  <h5 class="card-title">${evilOne.house}</h5>
  </div>
  </div>`;
}
    renderToDom("#armyApp", armyDomString);
};

  // let domString = "";
  // wizards.map((student) => {
  //   const card = cardsOnDom(student);
  //   domString += card;
  // });
  //   renderToDom("#app", domString);


// const filter = (house) => {
//   const filteredWizards = wizards.filter(
//     (student) => student.house === house
//   );
//   cardsOnDom(filteredWizards);
// };

const filter = (array, houseString) => {
  const houseArray = []; 

  for (const student of array) {
    if (student.house === houseString) {
      houseArray.push(student);
    }
  }
  return houseArray;
};

const form = document.querySelector('form')

const addStudent = (e) => {
  e.preventDefault();
  
  const newStudentObj = {
    id: wizards.length + 1,
    name: document.querySelector("#name").value,
    house: houses[Math.floor(Math.random() * houses.length)],
  };
  
  wizards.push(newStudentObj);
  cardsOnDom(wizards);
  form.reset();
}
// const armyFilter = (array, armyString) => {
//   const armyArray = []; 

//   for (const student of array) {
//     if (student.name === armyString) {
//       armyArray.push(student);
//     }
//   }
//   return armyArray;
// };
// const removeStudent = (e) => {
//   e.preventDefault();

// const expelledStudentObj = {
//   id: voldyArr.length + 1,
//   name: document.querySelector("#name").value
// };
//   voldyArr.push(expelledStudentObj);
//   armyOnDom(voldyArr);
//   form.reset();
// }

form.addEventListener("submit", addStudent);

const app = document.querySelector("#app");

app.addEventListener("click", (e) => {
  
    if (e.target.id.includes("delete")) {
      // let expelledWizards = [];
        const [, id] = e.target.id.split("--");
    const index = wizards.findIndex((e) => e.id === Number(id));
    const removedStudent = wizards.splice(index, 1);
    voldyArr.push(removedStudent[0]);
    cardsOnDom(wizards);
    armyOnDom(voldyArr);
    // expelledWizards.push
  }
});

  const allStudentsbutton = document.querySelector("#btn-allStudents")
  const ravenclawButton = document.querySelector("#Ravenclaw");
  const gryffindorButton = document.querySelector("#Gryffindor");
  const hufflepuffButton = document.querySelector("#Hufflepuff");
  const slytherinButton = document.querySelector("#Slytherin");
  
  allStudentsbutton.addEventListener("click", () => {
    cardsOnDom(wizards);
  });
  
  ravenclawButton.addEventListener("click", () => {
    const ravenclawWizards = filter(wizards, "Ravenclaw")
    cardsOnDom(ravenclawWizards);
  });
  
  gryffindorButton.addEventListener("click", () => {
    const gryffindorWizards = filter(wizards, "Gryffindor")
    cardsOnDom(gryffindorWizards);
  });
  
  hufflepuffButton.addEventListener("click", () => {
    const hufflepuffWizards = filter(wizards, "Hufflepuff")
    cardsOnDom(hufflepuffWizards);
  });
  
  slytherinButton.addEventListener("click", () => {
    const slytherinWizards = filter(wizards, "Slytherin")
    cardsOnDom(slytherinWizards);
  });
  
  const startApp = () => {
    cardsOnDom(wizards);
  };
  
  startApp();
  
  function addStudentForm() {
    document.getElementById("form").style.display = 'block';
  }
