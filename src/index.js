const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const query = document.querySelector('input[name="query"]');
const message = document.getElementById("message");
const consent = document.querySelector('input[name="consent"]');

const validateStringInput = (element, classStr = "error") => {
  const value = element.value.trim();

  value === ""
    ? element.classList.add(classStr)
    : element.classList.remove(classStr);
};

const validateEmail = () => {
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  const emailValue = email.value.trim();

  !regx.test(emailValue)
    ? email.classList.add("error")
    : email.classList.remove("error");
};

const validateQuery = () => {
  const queryContainer = query.closest(".form__queries");

  !query.checked
    ? queryContainer.classList.add("error")
    : queryContainer.classList.remove("error");
};

const validateConsent = () => {
  !consent.checked
    ? consent.classList.add("error")
    : consent.classList.remove("error");
};

const validateForm = () => {
  validateStringInput(firstName);
  validateStringInput(lastName);
  validateEmail();
  validateQuery();
  validateStringInput(message);
  validateConsent();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});
