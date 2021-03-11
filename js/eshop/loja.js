(function(){
    let usuario = localStorage.getItem("usuarioLogado");
    let usuarioEl = document.querySelector("#usuario");
    usuarioEl.innerHTML = `Bem vindo(a), @${usuario}`;
})();

let cardMais = document.querySelector("div#mais");

cardMais.addEventListener('click', ()=>{
    window.location.href = "loja2.html";
});