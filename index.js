const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.querySelector(".form");
const number = document.querySelector("#number");
const containerCard = document.querySelector(".container-card");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const buscarPizza = pizzas.find((pizza) => {
//     if (pizza.id === parseInt(number.value)) {
//       containerCard.innerHTML = `
//       <img src="${pizza.imagen}">
//       <h3>${pizza.nombre}</h3>
//       <h3>${pizza.precio}</h3>
//       `;
//     } else {
//       containerCard.innerHTML = `
//       <h3>No flaco, la pizza que buscas no esta disponible</h3>
//       `;
//     }
//     if (buscarPizza) {
//       localStorage.setItem("pizza", buscarPizza);
//     }
//   });
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchPizza = pizzas.filter((pizza) => {
    if (parseInt(number.value) === pizza.id) {
      containerCard.innerHTML = `
      <div>
         <img src="${pizza.imagen}"/>
         <h3>${pizza.nombre}</h3>
         <h3>${pizza.precio}</h3>      
      </div>
      `;
    } else {
      containerCard.innerHTML = `
      <h3>Flaco, la pizza que buscas no esta en el local</h3>
      `;
    }
    if (searchPizza) {
      localStorage.setItem("pizza", searchPizza);
    }
  });
});
