let criar = document.querySelector("#criar-btn");
let user = document.querySelector("#Inputname1");
let password = document.querySelector("#InputPassword1");
let errorEl = document.querySelector("#help");
let logar = document.querySelector("#logar-btn");

criar.addEventListener("click", () => {
  location.href = "criarconta.html";
});
logar.addEventListener("click", (evt) => {
  evt.preventDefault();
  let userValue = user.value;
  let passwordValue = password.value;

  userValue = userValue.trim();
  if (userValue === "") {
    errorEl.style.color = "red";
    errorEl.innerHTML = "Atenção! Preencha os campos de forma adequada.";
    return;
  }
  
  logUserWithWebStorage(usuerValue, passwordValue);
});

function logUserWithWebStorage(usuario, senha) {
  searchUserDB(usuario, senha)
    .then((user) => {
      localStorage.setItem("usuarioLogado", usuario);
    })
    .catch((error) => {
      console.log("erro desconhecido" + error);
    });
  return;
}
