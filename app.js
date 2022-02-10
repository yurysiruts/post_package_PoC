const inputNum = document.querySelector(".field_input.number");
const inputCode = document.querySelector(".field_input.code");
const startBtn = document.querySelector(".start_btn");
const confirmBtn = document.querySelector(".confirm_btn");
const form = document.getElementById("client_form");

// Start
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  form.style.display = "block";
});

// Spacing between numbers in input fields
inputNum.addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{3})/g, "$1 ")
    .trim();
});

inputCode.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^\dA-Z]/g, "").trim();
});

// Validation input data after btn click
confirmBtn.addEventListener("click", () => {
  let numberError = false;
  let codeError = false;
  inputNum.value.length !== 11 ? (numberError = true) : numberError;
  inputCode.value.length !== 4 ? (codeError = true) : codeError;

  if (numberError || codeError) {
    alert(`Numer telefonu: 11 characters\nKod odbioru: 4 characters`);
  }
});
