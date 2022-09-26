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

const checkPasswordContatinCharacters = (password) => {
  var letters =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (password.value.match(letters)) {
    true;
  } else {
    showError(
      password,
      "Hasło powinno zawierać minimum 8 znaków w tym cyfrę, małą literę, dużą literę oraz znak specjalny"
    );
  }
};

const checkLenght = (input, minimumLength) => {
  if (input.value.length < minimumLength) {
    showError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} musi składać się z minimum ${minimumLength} znaków`
    );
  }
};

const checkPassword = (password, password2) => {
  if (password.value !== password2.value) {
    showError(password2, "Hasła do siebie nie pasują");
  }
};

const checkMail = (email) => {
  const checkMailConditions =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (checkMailConditions.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "email jest niepoprawny");
  }
};

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  checkForm([username, password, password2, email]);
  checkLenght(username, 4);
  checkLenght(password, 8);
  checkPassword(password, password2);
  checkMail(email);
  checkPasswordContatinCharacters(password);
});
``;

clearBtn.addEventListener("click", (event) => {
  event.preventDefault();
  [username, password, password2, email].forEach((element) => {
    element.value = "";
  });
});
