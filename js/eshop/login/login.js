let criar = document.querySelector("#criar-btn");
let user = document.querySelector("#Inputname1");
let password = document.querySelector("#InputPassword1");
let errorEl = document.querySelector("#help");
let logar = document.querySelector("#logar-btn");

criar.addEventListener("click", evt => {
  evt.preventDefault();
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
  
  logUserWithWebStorage(userValue, passwordValue);
});

function logUserWithWebStorage(usuario, senha) {
  searchUserDB(usuario, senha)
    .then((user) => {
     if (typeof(user) !== typeof(1)){
       localStorage.setItem('usuarioLogado', user.id);
       window.location.href = "loja.html";
       console.log("pagina");
     }else{
       if (user === -10){
        errorEl.style.color = "red";
        errorEl.innerHTML = "Senha errada! Esqueceu sua senha?";
        return;
       }
       else if( user === -99){
        errorEl.style.color = "red";
        errorEl.innerHTML = "Este usuario não existe, verifique os campos acima.";
        return;
       }
       else{
        errorEl.style.color = "red";
        errorEl.innerHTML = "Erro desconhecido, tente novamente mais tarde. (provavel queda do banco de dados)";
        return;
       }
     }
    })
    .catch((error) => {
      console.log("erro desconhecido" + error);
    });
  return;
}
