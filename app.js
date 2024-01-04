const list = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "./assets/01.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "./assets/02.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "./assets/03.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

//Define Html Element
const card = document.querySelector(".card-container");
const backImg = card.querySelector(".img-container img");
const user = card.querySelector("#name");
const work = card.querySelector("#work-position");
const passage = card.querySelector("#parag");
const leftBtn = card.querySelector("#left");
const rightBtn = card.querySelector("#right");
const randomBtn = card.querySelector("#random");

let indexNumber = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  backImg.src = list[indexNumber].img;
  user.textContent = list[indexNumber].name;
  work.textContent = list[indexNumber].job;
  passage.textContent = list[indexNumber].text;
}

leftBtn.addEventListener("click", (e) => {
  indexNumber--;
  if (indexNumber < 0) {
    indexNumber = list.length - 1;
  }
  showPerson();
});

rightBtn.addEventListener("click", (e) => {
  indexNumber++;
  if (indexNumber > list.length - 1) {
    indexNumber = 0;
  }
  showPerson();
});

randomBtn.addEventListener("click", (e) => {
  let randomIndex = Math.floor(Math.random() * list.length);
  if (randomIndex === indexNumber) {
    randomIndex = Math.floor(Math.random() * list.length);
  }
  console.log(randomIndex);
  indexNumber = randomIndex;
  showPerson();
});
