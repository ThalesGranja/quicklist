const form = document.querySelector("form")
const newItem = document.getElementById("item");
const list = document.getElementById("list");

function addItem(name) {
  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
    <div class="checkbox-wrapper">
      <div class="checkbox-image"></div>
      <input type="checkbox" name="confirmed" id="confirmed">
    </div>

    <div id="item-name">${name}</div>

    <a href="#" class="trash" id="trash">
      <img src="./assets/icons/trash-icon.svg" alt="Ícone de lixo">
    </a>
  `

  list.append(item);
}

form.onsubmit = (event) => {
  event.preventDefault();

  const itemName = newItem.value;

  if (itemName.trim() !== "") {
    addItem(itemName);
    newItem.value = "";
    newItem.focus();
  }
};