let criar = document.querySelector("#criar-btn");
let user = document.querySelector("#Inputname1");
let email = document.querySelector("#InputEmail1");
let password = document.querySelector("#InputPassword1");
let errorEl = document.querySelector("#help");
let logar = document.querySelector("#logar-btn");

logar.addEventListener("click", ()=>{
    location.href = "login.html";
})

criar.addEventListener("click", (evt) => {
  evt.preventDefault();
  let emailValue = email.value;
  let userValue = user.value;
  let passwordValue = password.value;

  userValue = userValue.trim();
  if(userValue === ""){
    errorEl.style.color = "red";
    errorEl.innerHTML =
      'Atenção! Preencha os campos de forma adequada.';
      return 
  }

  let userp = new createNewUser(userValue, emailValue, passwordValue);
  addUser(userp)
    .then((res) => {
      if (res === 1) {
        errorEl.style.color = "red";
        errorEl.innerHTML =
          'Atenção! Usuario ja cadastrado, deseja  <a href="../../../pages/eshop/login.html">Logar</a>?';
      }
      localStorage.setItem("usuarioLogado", userValue);
      window.location.href = "login.html";
    })
    .catch((e) => {
      console.log("deu ruim: " + e);
    });
});
