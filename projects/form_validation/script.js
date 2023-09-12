const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const errorMessages = document.querySelectorAll(".error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  resetErrors();
  validateInputs();
});

function setError(input, errorMessage) {
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.textContent = errorMessage;

  input.parentElement.classList.add("error");
}

function resetErrors() {
  errorMessages.forEach((msg) => {
    msg.textContent = "";
  });
  nome.parentElement.classList.remove("error");
  email.parentElement.classList.remove("error");
  assunto.parentElement.classList.remove("error");
  mensagem.parentElement.classList.remove("error");
}

function validateInputs() {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const assuntoValue = assunto.value.trim();
  const mensagemValue = mensagem.value.trim();

  if (nomeValue === "") {
    setError(nome, "Nome não pode ser em branco");
  }
  if (emailValue === "") {
    setError(email, "E-mail não pode ser em branco");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "E-mail inválido");
  }
  if (assuntoValue === "") {
    setError(assunto, "Assunto não pode ser em branco");
  }
  if (mensagemValue === "") {
    setError(mensagem, "Mensagem não pode ser em branco");
  }
}

function isValidEmail(email) {
  return /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/.test(email);
}
