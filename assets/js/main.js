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

const phoneNumber = document.querySelector(".phoneNum");
const originalNum = phoneNumber.textContent;
phoneNumber.addEventListener("mouseenter", () => {
  phoneNumber.textContent = " (Kyivstar) " + originalNum;
});
phoneNumber.addEventListener("mouseleave", () => {
  phoneNumber.textContent = originalNum;
});

// 4. ✅ Додаткова інформація

// Номер телефону
// При наведенні на номер телефону (mouseenter) перед ним повинна з'являтися
// назва мобільного оператора:
// Kyivstar: +380 XX XXX XX XX
// При відведенні курсору (mouseleave) назва оператора повинна зникати,
// залишаючи лише номер телефону.
// Примітка: визначайте мобільного оператора за кодом номера телефону.
//  Можливість перенесення номера між операторами не враховуйте.

// Дата народження
// Додайте до дати народження атрибут title, у якому буде зазначено вік користувача.
