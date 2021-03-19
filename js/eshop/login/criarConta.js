if (localStorage.getItem("usuarioLogado")) {
  window.location.href = "loja.html";
}

let criar = document.querySelector("#criar-btn");
let user = document.querySelector("#Inputname1");
let email = document.querySelector("#InputEmail1");
let password = document.querySelector("#InputPassword1");
let errorEl = document.querySelector("#help");
let logar = document.querySelector("#logar-btn");

logar.addEventListener("click", () => {
  location.href = "login.html";
});

criar.addEventListener("click", clickBtnAddUser);

function clickBtnAddUser(evt) {
  evt.preventDefault();
  let emailValue = email.value;
  let userValue = user.value;
  let passwordValue = password.value;

  if (userValue.length < 3 || passwordValue.length < 3) {
    errorEl.style.color = "red";
    errorEl.innerHTML =
      "O nome de usuario e senha deve conter no minimo 3 caracteres. ";
    return -76;
  }
  if (
    emailValue == "" ||
    emailValue.indexOf("@") == -1 ||
    emailValue.indexOf(".") == -1
  ) {
    errorEl.style.color = "red";
    errorEl.innerHTML = "Coloque o email corretamente. ";
    return -77;
  }
  let userp = new createNewUser(userValue, emailValue, passwordValue);
  addUser(userp)
    .then((res) => {
      if (res === 1) {
        errorEl.style.color = "red";
        errorEl.innerHTML =
          'Atenção! Usuario ja cadastrado, deseja  <a href="login.html">Logar</a>?';
        return 0;
      }
      errorEl.style.color = "green";
      errorEl.innerHTML =
        "Conta Criada! Você será redirecionado em alguns segundos";
      localStorage.setItem("usuarioLogado", userValue);
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    })
    .catch((e) => {
      console.log("deu ruim: " + e);
    });
}
