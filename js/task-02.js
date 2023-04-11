const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

function createsEl(array) {
  return array.map((el) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = el;
    return item;
  });
}

const elements = createsEl(ingredients);

list.append(...elements);
