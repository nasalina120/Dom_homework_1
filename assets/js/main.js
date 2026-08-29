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
const likesElement = document.querySelector(".countlikes");
let likes = parseInt(likesElement.textContent);
btnHeart.addEventListener("click", () => {
  btnHeart.classList.toggle("btn-heartActive");
  if (btnHeart.classList.contains("btn-heartActive")) {
    likes++;
  } else {
    likes--;
  }
  likesElement.textContent = likes;
});

// 4. Додаткова інформація
// Номер телефону

const phoneNumber = document.querySelector(".phoneNum");
const originalNum = phoneNumber.textContent;
let operator = "";
phoneNumber.addEventListener("mouseenter", () => {
  const operatorCode = originalNum.slice(4, 7);
  if (operatorCode === "067" || operatorCode === "068") {
    operator = "Київстар";
  }
  if (operatorCode === "050" || operatorCode === "066") {
    operator = "Vodafone Україна";
  }
  phoneNumber.textContent = originalNum + " (" + operator + ")";
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

// 5.  Показати контакти
const btnContacts = document.querySelector(".btn-contacts");
const contactsSection = document.querySelector(".card-contacts");

btnContacts.onclick = function changeContactHidden(e) {
  contactsSection.classList.toggle("card-contacts-hidden");

  if (contactsSection.classList.contains("card-contacts-hidden")) {
    btnContacts.textContent = "Показати контакти";
    btnContacts.style.backgroundColor = "";
  } else {
    btnContacts.textContent = "Приховати контакти";
    btnContacts.style.backgroundColor = "pink";
  }
};

// 6 Робота з подіями
let clickprofile = 0;
let clickPublications = 0;
let clickProjects = 0;

const profileLink = document.querySelector(".profile-link");
profileLink.addEventListener("click", () => {
  clickprofile++;
  console.log("click profileLink :>> ", clickprofile);
});

const publicationsLink = document.querySelector(".publications-link");
publicationsLink.addEventListener("click", () => {
  clickPublications++;
  console.log("click publications :>> ", clickPublications);
});

const projectsLink = document.querySelector(".projects-link");
projectsLink.addEventListener("click", () => {
  clickProjects++;
  console.log("click projects:>> ", clickProjects);
});
