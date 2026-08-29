btnSub = document.querySelector(".btn-subscribe");

btnSub.onclick = function changesubscribe(e) {
  if (btnSub.textContent === "Підписатися") {
    btnSub.textContent = "Ви підписані";
    btnSub.style.backgroundColor = "pink";
  } else {
    btnSub.textContent = "Підписатися";
    btnSub.style.backgroundColor = "";
  }
};
