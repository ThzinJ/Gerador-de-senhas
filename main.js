// Seleciona os elementos do HTML
const passwordEl = document.getElementById("password");
const sizeEl = document.getElementById("size");
const includeUppercaseEl = document.getElementById("include_uppercase");
const includeLowercaseEl = document.getElementById("include_lowercase");
const includeNumberEl = document.getElementById("include_number");
const includeSpecialEl = document.getElementById("include_special_character");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

// Função principal que gera a senha
function generatePassword() {
  const size = parseInt(sizeEl.value);

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+[]{}<>?/|";

  let chars = "";

  if (includeUppercaseEl.checked) chars += uppercase;
  if (includeLowercaseEl.checked) chars += lowercase;
  if (includeNumberEl.checked) chars += numbers;
  if (includeSpecialEl.checked) chars += special;

  if (chars === "") {
    passwordEl.textContent = "Selecione uma opção!";
    return;
  }

  if (!size || size < 1) {
    passwordEl.textContent = "Defina o tamanho!";
    return;
  }

  let password = "";
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordEl.textContent = password;
}

// Copiar senha para área de transferência
copyBtn.addEventListener("click", () => {
  const password = passwordEl.textContent;
  if (!password || password === "Selecione uma opção!" || password === "Defina o tamanho!") return;
  
  navigator.clipboard.writeText(password);
  copyBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  
  setTimeout(() => {
    copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`;
  }, 1500);
});

// Gera a senha quando clica no botão
generateBtn.addEventListener("click", generatePassword);
