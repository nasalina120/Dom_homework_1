// 2. Підписка

const btnSub = document.querySelector(".btn-subscribe");

btnSub.onclick = function changesubscribe(e) {
  if (btnSub.textContent === "Підписатися") {
    btnSub.textContent = "Ви підписані";
    btnSub.style.backgroundColor = "pink";
  } else {
    btnSub.textContent = "Підписатися";
    btnSub.style.backgroundColor = "";
  }
};

// 3. Вподобання

const btnHeart = document.querySelector(".btn-heart");

btnHeart.addEventListener("click", () => {
  btnHeart.classList.toggle("btn-heartActive");
});

// 4. Додаткова інформація
// Номер телефону
const phoneNumber = document.querySelector(".phoneNum");
const originalNum = phoneNumber.textContent;
phoneNumber.addEventListener("mouseenter", () => {
  phoneNumber.textContent = " (Kyivstar) " + originalNum;
});
phoneNumber.addEventListener("mouseleave", () => {
  phoneNumber.textContent = originalNum;
});

// Дата народження
const birthDate = document.querySelector(".birthdate");
const dateParts = birthDate.textContent.split(".");
const yearBirth = parseInt(dateParts[dateParts.length - 1]);
const currentYear = new Date().getFullYear();
birthDate.title = `Вік: ${currentYear - yearBirth} років`;
