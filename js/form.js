const form = document.getElementById("form-reservation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  const nameField = document.querySelector(".name-input");
  const emailField = document.querySelector(".email-input");
  const dateText = document.querySelector(".date-text");
  const monthInput = document.querySelector(".input-month");
  const dayInput = document.querySelector(".input-day");
  const yearInput = document.querySelector(".input-year");
  const timeText = document.querySelector(".time-text");
  const hourInput = document.querySelector(".input-hour");
  const minuteInput = document.querySelector(".input-minute");
  const ampmInput = document.querySelector(".input-am-pm");
  const errorText = document.querySelector(".error-text");
  const dateErrorText = document.querySelector("#error-date");
  const emailErrorText = document.querySelector("#error-email");
  const timeErrorText = document.querySelector("#error-time");
  const inputFields = document.querySelector(".input-field");

  const errorPlaceholder = (field, hasError) => {
    if (hasError) {
      field.classList.add("error-placeholder");
    } else {
      field.classList.remove("error-placeholder");
    }
  };

  if (nameField.value.trim() === "") {
    errorText.classList.add("error-show");
    inputFields.classList.add("error");
    errorPlaceholder(nameField, true);
    isValid = false;
  } else if (nameField.value.trim() !== "10") {
    errorText.textContent = "Must contain full name";
    errorText.classList.add("error-show");
    inputFields.classList.add("error");
    errorPlaceholder(nameField, false);
    isValid = false;
  } else if (nameField.value.trim() !== "") {
    errorText.classList.remove("error-show");
    inputFields.classList.remove("error");
    errorPlaceholder(nameField, false);
    isValid = true;
  } else {
    errorText.classList.remove("error-show");
    inputFields.classList.remove("error");
    errorPlaceholder(nameField, false);
    isValid = true;
  }

  if (emailField.value.trim() === "") {
    emailErrorText.classList.add("error-email");
    errorText.classList.add("error-show");
    emailField.classList.add("error");
    errorPlaceholder(emailField, false);
    isValid = false;
  } else if (emailField.value.trim() !== "") {
    emailErrorText.textContent = "Please enter a valid email address";
    emailErrorText.classList.add("error-email");
    emailErrorText.classList.remove("error-email");
    emailField.classList.remove("error");
    errorPlaceholder(emailField, false);
    isValid = true;
  } else {
    emailErrorText.classList.remove("error");
    emailField.classList.remove("error");
    errorPlaceholder(emailField, false);
    isValid = true;
  }

  if (
    monthInput.value.trim() === "" &&
    dayInput.value.trim() === "" &&
    yearInput.value.trim() === ""
  ) {
    dateText.classList.add("label-error");
    dateErrorText.classList.add("error-show");
    monthInput.classList.add("error");
    dayInput.classList.add("error");
    yearInput.classList.add("error");
    errorPlaceholder(monthInput, true);
    errorPlaceholder(dayInput, true);
    errorPlaceholder(yearInput, true);
    isValid = false;
  } else if (
    monthInput.value.trim() !== "" &&
    dayInput.value.trim() === "" &&
    yearInput.value.trim() === ""
  ) {
    dateText.classList.add("label-error");
    dateErrorText.classList.add("error-show");
    monthInput.classList.add("error");
    dayInput.classList.add("error");
    yearInput.classList.add("error");
    errorPlaceholder(monthInput, false);
    errorPlaceholder(dayInput, false);
    errorPlaceholder(yearInput, false);
    isValid = false;
  } else if (monthInput.value.trim() !== "") {
    dateText.classList.remove("label-error");
    dateErrorText.classList.remove("error-show");
    monthInput.classList.remove("error");
    dayInput.classList.remove("error");
    yearInput.classList.remove("error");
    errorPlaceholder(monthInput, false);
    errorPlaceholder(dayInput, false);
    errorPlaceholder(yearInput, false);
    isValid = false;
  } else {
    dateText.classList.remove("label-error");
    dateErrorText.classList.remove("error-show");
    monthInput.classList.remove("error");
    dayInput.classList.remove("error");
    yearInput.classList.remove("error");
    errorPlaceholder(monthInput, false);
    errorPlaceholder(dayInput, false);
    errorPlaceholder(yearInput, false);
    isValid = false;
  }

  if (
    hourInput.value.trim() === "" &&
    minuteInput.value.trim() === "" &&
    ampmInput.value.trim() === ""
  ) {
    timeText.classList.add("label-error");
    timeErrorText.classList.add("error-show");
    hourInput.classList.add("error");
    minuteInput.classList.add("error");
    ampmInput.classList.add("error");
    errorPlaceholder(hourInput, true);
    errorPlaceholder(minuteInput, true);
    errorPlaceholder(ampmInput, true);
    isValid = false;
  } else if (
    hourInput.value.trim() !== "" &&
    minuteInput.value.trim() === "" &&
    ampmInput.value.trim() === ""
  ) {
    dateText.classList.add("label-error");
    timeErrorText.classList.add("error-show");
    hourInput.classList.add("error");
    minuteInput.classList.add("error");
    ampmInput.classList.add("error");
    errorPlaceholder(hourInput, false);
    errorPlaceholder(minuteInput, false);
    errorPlaceholder(ampmInput, false);
    isValid = false;
  } else if (monthInput.value.trim() !== "") {
    dateText.classList.remove("label-error");
    dateErrorText.classList.remove("error-show");
    monthInput.classList.remove("error");
    dayInput.classList.remove("error");
    yearInput.classList.remove("error");
    errorPlaceholder(monthInput, false);
    errorPlaceholder(dayInput, false);
    errorPlaceholder(yearInput, false);
    isValid = false;
  } else {
    dateText.classList.remove("label-error");
    dateErrorText.classList.remove("error-show");
    monthInput.classList.remove("error");
    dayInput.classList.remove("error");
    yearInput.classList.remove("error");
    errorPlaceholder(monthInput, false);
    errorPlaceholder(dayInput, false);
    errorPlaceholder(yearInput, false);
    isValid = false;
  }
});

const arrowIcon = document.querySelector(".arrow-icon");
const amPmSubmenu = document.querySelector(".am-pm_submenu");
const amPmInput = document.querySelector(".input-am-pm");

arrowIcon.addEventListener("click", () => {
  const isExpanded = amPmInput.getAttribute("aria-expanded") === "true";
  if (isExpanded) {
    amPmSubmenu.classList.remove("show");
    arrowIcon.classList.remove("show");
    amPmInput.setAttribute("aria-expanded", "false");
  } else {
    amPmSubmenu.classList.add("show");
    arrowIcon.classList.toggle("show");
    amPmInput.setAttribute("aria-expanded", "true");
  }
});

// AM/PM selection functionality
const amPmOptions = document.querySelectorAll(".am-pm_submenu > div");
const checkIcon = document.querySelector(".am-pm_submenu img");

amPmOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the selected value (AM or PM)
    const selectedValue = option.querySelector("a").textContent;

    // Update the input field
    amPmInput.value = selectedValue;

    // Move the check icon to the selected option
    // First, remove check icon from all options
    amPmOptions.forEach((opt) => {
      const existingIcon = opt.querySelector("img");
      if (existingIcon) {
        existingIcon.remove();
      }
    });

    // Add check icon to the selected option
    const newCheckIcon = checkIcon.cloneNode(true);
    option.insertBefore(newCheckIcon, option.firstChild);

    // Close the dropdown
    amPmSubmenu.classList.remove("show");
    arrowIcon.classList.remove("show");
    amPmInput.setAttribute("aria-expanded", "false");
  });
});

// Add/Subtract people count functionality
const btnMinus = document.querySelector(".btn-minus");
const btnPlus = document.querySelector(".btn-plus");
const peopleCountSpan = document.querySelector(".r-number");

let peopleCount = 0;

// Prevent form submission when clicking plus/minus buttons
btnMinus.addEventListener("click", (e) => {
  e.preventDefault();
  if (peopleCount > 0) {
    peopleCount--;
    peopleCountSpan.textContent = peopleCount;
  }
});

btnPlus.addEventListener("click", (e) => {
  e.preventDefault();
  peopleCount++;
  peopleCountSpan.textContent = peopleCount;
});
