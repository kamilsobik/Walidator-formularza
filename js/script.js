const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

const showError = (input, message) => {
  const formBox = input.parentElement;
  const errorMessage = formBox.querySelector(".error-text");
  formBox.classList.add("error");
  errorMessage.textContent = message;
};
const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((element) => {
    if (element.value === "") {
      showError(element, element.placeholder);
    } else {
      clearError(element);
    }
  });
};

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  checkForm([username, password, password2, email]);
});
``;

clearBtn.addEventListener("click", (event) => {
  event.preventDefault();
  [username, password, password2, email].forEach((element) => {
    element.value = "";
  });
});
