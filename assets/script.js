const modeToggle = document.getElementById("mode_toggle");
const togglePassword = document.getElementById("toggle_password");
const passwordField = document.getElementById("password");

// Ao carregar a página, verifica a preferência salva e aplica a classe 'dark' no body
if (localStorage.getItem("theme") === "dark") {
  modeToggle.checked = true;
  document.body.classList.add("dark");
} else {
  modeToggle.checked = false;
  document.body.classList.remove("dark");
}

// Alternar modo dark/light
modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

// Alternar visibilidade da senha
togglePassword.addEventListener("click", () => {
  // Alterna entre tipo 'password' e 'text' para exibir ou ocultar a senha
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});
