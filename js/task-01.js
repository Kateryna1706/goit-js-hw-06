const list = document.querySelector("#categories");

const arrayCategories = list.querySelectorAll(".item");

function categoryCounter(categories) {
  const numberCategories = categories.length;

  console.log(`Number of categories: ${numberCategories}`);

  return categories.forEach((element) => {
    const title = element.firstElementChild.textContent;
    const listEl = element.lastElementChild;

    return console.log(
      `Category: ${title} \nElements: ${listEl.children.length}`
    );
  });
}

categoryCounter(arrayCategories);
