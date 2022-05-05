// Login
const eyeClose = document.querySelector(".card-senha__eye-close");
const eyeOpen = document.querySelector(".card-senha__eye-open");

const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");
const formCard = document.querySelector(".card");
const erro = document.getElementById("erro__description");
const urlPost = "https://test-final.b8one.academy/login";

function showPassword() {
  eyeClose.addEventListener("click", function () {
    inputSenha.type = "text";
    eyeOpen.classList.remove("open");
    eyeClose.classList.add("close");
  });
}

function hidePassword() {
  eyeOpen.addEventListener("click", function () {
    inputSenha.type = "password";
    eyeOpen.classList.add("open");
    eyeClose.classList.remove("close");
  });
}

function clearErros() {
  inputEmail.addEventListener("change", function ({ target }) {
    if (target.value) {
      inputEmail.style.borderColor = "#555555";
    }
  });

  inputSenha.addEventListener("change", function ({ target }) {
    if (target.value) {
      inputSenha.style.borderColor = "#555555";
    }
  });
}

function ValidationInputs() {
  if (!inputEmail.value || !inputSenha.value) {
    erro.innerText = "Os campos são obrigatórios";
    erro.style.color = "#F03460";
    erro.style.marginBottom = "8px";
    inputEmail.style.borderColor = "#F03460";
    inputSenha.style.borderColor = "#F03460";
    formCard.style.height = "428px";
    return;
  }

  post();
}

function loginUsuario() {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    ValidationInputs();

    inputEmail.value = "";
    inputSenha.value = "";
  });
}

async function post() {
  const response = await fetch(`${urlPost}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: `${inputEmail.value}`,
      password: `${inputSenha.value}`,
    }),
  });

  const responsePost = await response.json();

  if (responsePost.message) {
    erro.innerText = "Senha ou email incorretos";
    return;
  } else {
    erro.innerText = "";
    window.location = "../index/dashboard.html";
  }
}

function login() {
  loginUsuario();
  showPassword();
  hidePassword();
  clearErros();
}

login();
