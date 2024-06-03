/**
 * Form
 * @type {Element}
 */
const form = document.querySelector("form");

/**
 * First Name Input
 * @type {Element}
 */
const firstName = document.getElementById("first-name");

/**
 * Last Name Input
 * @type {Element}
 */
const lastName = document.getElementById("last-name");

/**
 * Email Input
 * @type {Element}
 */
const email = document.getElementById("email");

/**
 * Queries Container
 * @type {Element}
 */
const queries = document.querySelector(".form__queries");

/**
 * Message Textarea
 * @type {Element}
 */
const message = document.getElementById("message");

/**
 * Consent checkbox
 * @type {Element}
 */
const consent = document.querySelector('input[name="consent"]');

/**
 * Success button
 * @type {Element}
 */
const success = document.querySelector(".success");

/**
 * Trim Input Value
 * @param {Element} element
 * @returns {Array<String>}
 */
const trimInput = (element) => {
  const value = element.value.trim();
  return [value];
};

/**
 * Show Error Message
 * @param {Element} element
 * @returns {Boolean}
 */
const showError = (element) => {
  element.classList.add("error");
  return false;
};

/**
 * Hide Error Message
 * @param {Element} element
 * @returns {Boolean}
 */
const hideError = (element) => {
  element.classList.remove("error");
  return true;
};

/**
 * Validates Empty/Non-Empty String Inputs
 * @param {Element} element
 * @returns {Boolean}
 */
const validateStringInput = (element) => {
  const [value] = trimInput(element);
  value === "" ? showError(element) : hideError(element);
  return value;
};

/**
 * Validates Email Input
 * @returns {String}
 */
const validateEmail = () => {
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  const [value] = trimInput(email);
  !regx.test(value) ? showError(email) : hideError(email);
  return value;
};

/**
 * Validates Checked/Non-Checked Query Radio
 * @returns {Boolean}
 */
const validateQuery = () => {
  const checkedQuery = queries.querySelector('input[name="query"]:checked');
  if (!checkedQuery) {
    showError(queries);
    return null;
  } else {
    hideError(queries);
    checkedQuery.ariaChecked = true;
    return checkedQuery.value;
  }
};

/**
 * Validates Checked/Non-Checked Consent Checkbox
 * @returns
 */
const validateConsent = () => {
  !consent.checked
    ? (showError(consent), (consent.ariaChecked = false))
    : (hideError(consent), (consent.ariaChecked = true));
  return consent.checked;
};

/**
 * Validates Form Inputs
 * @returns
 */
const validateForm = () => {
  const validations = {
    first_name: validateStringInput(firstName),
    last_name: validateStringInput(lastName),
    email: validateEmail(),
    query: validateQuery(),
    message: validateStringInput(message),
    consent: validateConsent(),
  };

  for (const [, value] of Object.entries(validations)) {
    if (!value) {
      success.classList.add("u-hidden");
      return;
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
