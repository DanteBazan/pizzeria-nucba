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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const buscarPizza = pizzas.find(
    (pizza) => pizza.id === parseInt(number.value)
  );
  const pizzaEncontrada = buscarPizza;
  if (pizzaEncontrada) {
    containerCard.innerHTML = `
    <div class="card">
        <img src="${pizzaEncontrada.imagen}" />
        <div class="container-description">
        <h3 class="title-card">Nombre: ${pizzaEncontrada.nombre}</h3>
        <h3>Precio: ${pizzaEncontrada.precio}</h3>
        </div>
    </div>
    `;
    localStorage.setItem("pizza", JSON.stringify(pizzaEncontrada));
  } else {
    containerCard.innerHTML = `
    <div>
    <h3 class="error-msj">Flaco, la pizza que buscas no la tenemos</h3>
    </div>
    `;
  }
});

const ultimaPizzaEncontrada = JSON.parse(localStorage.getItem("pizza"));
if (ultimaPizzaEncontrada) {
  containerCard.innerHTML = `
  <div class="card">
        <img src="${ultimaPizzaEncontrada.imagen}" />
        <div class="container-description">
        <h3 class="title-card">Nombre: ${ultimaPizzaEncontrada.nombre}</h3>
        <h3>Precio: ${ultimaPizzaEncontrada.precio}</h3>
        </div>
    </div>
  `;
}
