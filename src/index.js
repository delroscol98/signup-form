const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const query = document.querySelector('input[name="query"]');
const message = document.getElementById("message");
const consent = document.querySelector('input[name="consent"]');

const trimInput = (element) => {
  const value = element.value.trim();

  return [value];
};

const showError = (element) => {
  element.classList.add("error");
  return false;
};

const hideError = (element) => {
  element.classList.remove("error");
  return true;
};

const validateStringInput = (element) => {
  const [value] = trimInput(element);

  value === "" ? showError(element) : hideError(element);
};

const validateEmail = () => {
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  const [value] = trimInput(email);

  !regx.test(value) ? showError(email) : hideError(email);
};

const validateQuery = () => {
  const queryContainer = query.closest(".form__queries");

  !query.checked ? showError(queryContainer) : hideError(queryContainer);
};

const validateConsent = () => {
  !consent.checked ? showError(consent) : hideError(consent);
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
