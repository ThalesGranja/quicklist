const form = document.querySelector("form");
const newItem = document.getElementById("item");
const list = document.getElementById("list");

const alert = document.getElementById("alert");
const closeAlert = document.getElementById("close");

let alertTimeout;

function setupRemoveEvent(item) {
  const trashIcon = item.querySelector(".trash");

  trashIcon.onclick = (event) => {
    event.preventDefault();
    item.remove();
    showAlert();
  };
}

const existingItems = document.querySelectorAll(".item");

existingItems.forEach((item) => {
  setupRemoveEvent(item);
});

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
  `;

  setupRemoveEvent(item);

  list.append(item);
}

function hideAlert() {
  alert.classList.add("remove-animation");

  setTimeout(() => {
    alert.classList.add("hidden");
    alert.classList.remove("remove-animation");
  }, 500);
}

function showAlert() {
  alert.classList.remove("remove-animation");
  alert.classList.remove("hidden");

  clearTimeout(alertTimeout);

  alertTimeout = setTimeout(() => {
    hideAlert();
  }, 3000);
}

closeAlert.onclick = (event) => {
  event.preventDefault();

  hideAlert();

  clearTimeout(alertTimeout);
};

form.onsubmit = (event) => {
  event.preventDefault();

  const itemName = newItem.value;

  if (itemName.trim() !== "") {
    addItem(itemName);
    newItem.value = "";
    newItem.focus();
  }
};