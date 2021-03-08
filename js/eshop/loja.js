(function(){
    let usuario = localStorage.getItem("usuarioLogado");
    let usuarioEl = document.querySelector("#usuario");
    usuarioEl.innerHTML = `Bem vindo(a), @${usuario}`;
})();