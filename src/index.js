const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const queries = document.querySelector(".form__queries");
const message = document.getElementById("message");
const consent = document.querySelector('input[name="consent"]');
const success = document.querySelector(".success");

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
  return value;
};

const validateEmail = () => {
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  const [value] = trimInput(email);

  !regx.test(value) ? showError(email) : hideError(email);

  return value;
};

const validateQuery = () => {
  const checkedQuery = queries.querySelector('input[name="query"]:checked');

  if (!checkedQuery) {
    showError(queries);
    return false;
  } else {
    hideError(queries);
    return checkedQuery.value;
  }
};

const validateConsent = () => {
  !consent.checked ? showError(consent) : hideError(consent);
  return consent.checked;
};

const validateForm = () => {
  const validations = {
    first_name: validateStringInput(firstName),
    last_name: validateStringInput(lastName),
    email: validateEmail(),
    query: validateQuery(),
    message: validateStringInput(message),
    consent: validateConsent(),
  };

  for (const [key, value] of Object.entries(validations)) {
    if (!value) {
      success.classList.add("u-hidden");
    } else {
      success.classList.remove("u-hidden");
    }
  }

  console.log(validations);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});
