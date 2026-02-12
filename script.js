const form = document.querySelector("form")
const newItem = document.getElementById("item");
const list = document.getElementById("list");

const alert = document.getElementById("alert");
const closeAlert = document.getElementById("close");

function addItem(name) {
  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
    <div class="checkbox-wrapper">
      <div class="checkbox-image"></div>
      <input type="checkbox" name="confirmed" class="confirmed">
    </div>

    <div class="item-name">${name}</div>

    <a href="#" class="trash" class="trash">
      <img src="./assets/icons/trash-icon.svg" alt="Ícone de lixo">
    </a>
  `

  const trashIcon = item.querySelector(".trash");
  trashIcon.onclick = (event) => {
    event.preventDefault();

    item.remove();
    showAlert();
  }

  list.append(item);
}

function showAlert() {
  alert.classList.remove("hidden");
}

closeAlert.onclick = (event) => {
  event.preventDefault();
  alert.classList.add("hidden");
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