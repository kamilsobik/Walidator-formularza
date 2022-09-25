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

const checkLenght = (input, minimumLength) => {
  if (input.value.length < minimumLength) {
    showError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} składa się z mininum ${minimumLength} znakow`
    );
  }
};

const checkPassword = (password, password2) => {
  if (password.value !== password2.value) {
    showError(password2, "Hasła do siebie nie pasują");
  }
};

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  checkForm([username, password, password2, email]);
  checkLenght(username, 4);
  checkLenght(password, 8);
  checkPassword(password, password2);
});
``;

clearBtn.addEventListener("click", (event) => {
  event.preventDefault();
  [username, password, password2, email].forEach((element) => {
    element.value = "";
  });
});
