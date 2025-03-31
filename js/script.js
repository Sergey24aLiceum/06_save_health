const arrayOfhealthWishers = [
  "Rest well – Give your body the time it needs to heal.",
  "Stay hydrated – Drink water regularly to support recovery.",
  "Eat nutritious foods – Include vitamins and minerals to strengthen your body.",
  "Listen to your body – Avoid overexerting yourself and take breaks when needed.",
  "Stay positive – A positive mindset boosts the healing process.",
  "Keep moving gently – Light stretching or walking helps circulation.",
  "Follow your doctor’s advice – Stick to prescribed treatments and medications.",
  "Limit stress – Stress can hinder recovery, so try to stay calm.",
  "Avoid unhealthy habits – Limit alcohol, smoking, or junk food while recovering.",
  "Stay patient – Healing takes time, so be kind to yourself during the process.",
];

const arrayOfImages = ["1.jpg", "2.jpg", "3.jpg"];

let countOfpills = 5;
document.getElementById("count-of-tablets").innerText = "💊".repeat(
  countOfpills
);
document.getElementById("btn_health_wishes").addEventListener("click", () => {
  let index = Math.floor(Math.random() * arrayOfhealthWishers.length);
  document.getElementById("p-health-wishes").innerText =
    arrayOfhealthWishers[index];

  countOfpills--;
  console.log(countOfpills);
  document.getElementById("count-of-tablets").innerText =
    "💊".repeat(countOfpills) + "❌".repeat(5 - countOfpills);
  console.log("💊".repeat(countOfpills) + "❌".repeat(5 - countOfpills));
  if (countOfpills === 0) {
    console.log("countOfpills = 0");
    document.getElementById("btn_health_wishes").style.display = "none";
  }
});

document.getElementById("btn-byu-tablets").addEventListener("click", () => {
  countOfpills = 5;
  console.log(countOfpills);
  document.getElementById("count-of-tablets").innerText = "💊".repeat(
    countOfpills
  );
  document.getElementById("btn_health_wishes").style.display = "inline-block";
});

let galleryImage = 1;

document
  .getElementById("main-image")
  .setAttribute("src", `img/gallery/${arrayOfImages[galleryImage - 1]}`);

document.getElementById("right-arrow").addEventListener("click", () => {
  galleryImage++;
  console.log(galleryImage);

  if (galleryImage == 4) {
    galleryImage = 1;
  }

  document
    .getElementById("main-image")
    .setAttribute("src", `img/gallery/${arrayOfImages[galleryImage - 1]}`);
});

document.getElementById("left-arrow").addEventListener("click", () => {
  galleryImage++;
  console.log(galleryImage);

  if (galleryImage == 4) {
    galleryImage = 1;
  }

  document
    .getElementById("main-image")
    .setAttribute("src", `img/gallery/${arrayOfImages[galleryImage - 1]}`);
});

const arrayOfVitamins = [
  {
    id: 1,
    title: "Вітамін E",
    photo: "vitamin-e.png",
    description: "Вітамін E — група жиророзчинних біологічно активних сполук (токофероли та токотрієноли), що проявляють антиоксидантні властивості.",
    rating: "4",
    typ: "",
  },
  {
    id: 2,
    title: "Вітамін С",
    photo: "vitamin-c.png",
    description: "Аскорбíнова кислотá — відносно проста органічна кислота. Хімічна формула C6H8O6. Міститься у свіжих фруктах (яблука, сливи, персики тощо) та овочах. Відносять до водорозчинних вітамінів.",
    rating: "3",
    typ: "",
  },
  {
    id: 3,
    title: "Вітамін D",
    photo: "vitamin-d.png",
    description: "Вітамі́н D має кілька форм. Їх називають кальцифероли і представлені вони переважно у вигляді двох речовин: ергокальциферолу (вітаміну D2), що надходить із дріжджів, та холекальциферолу (вітаміну D3), який отримано із тканин тварин.",
    rating: "5",
    typ: "",
  },
  {
    id: 4,
    title: "Вітамін B3",
    photo: "molecule.png",
    description: "Нікоти́нова кислота́, також ніацин, вітамін B3, вітамін PP, нікотинамід — розчинний у воді вітамін; необхідний для багатьох реакцій окиснення у живих клітинах.",
    rating: "5",
    typ: "",
  },
  {
    id: 5,
    title: "Омега-3",
    photo: "omega-3.png",
    description: "Омега-3 поліненасичені жирні кислоти належать до родини ненасичених жирних кислот, що мають подвійний вуглець-вуглецевий зв'язок в омега-3 позиції, тобто біля третього атома вуглецю від метильного кінця жирної кислоти.",
    rating: "3",
    typ: "",
  },
  {
    id: 6,
    title: "Вітамін B5",
    photo: "b5.png",
    description: "Пантоте́нова кислота́ D-(+)-3-(2,4-дигідрокси-3,3-диметилбутирил)-β-аланін — антидерматитний фактор, вітамін B5, пантотенат. Лікарська форма — D-(+)-кальцієва сіль пантотенової кислоти.",
    rating: "3",
    typ: "",
  },
];

//console.log(arrayOfVitamins)

arrayOfVitamins.forEach((item, index) => {
  //console.log("елемент №",index,item)

  let divVitamin = document.createElement("div");
  divVitamin.classList.add("vitamin");

  document.getElementById("p-vitamins").appendChild(divVitamin)

  divVitamin.innerHTML = `
          <h3>${item.title}</h3>
          <hr>
          <img src="img/vitamins/${item.photo}" alt="">
          <p>${item.description}</p>
          <span>${"💚".repeat(item.rating)+"🤍".repeat(5-item.rating)}</span>
          <p>type</p>
          <span>id</span>
        `;
});
