    (function(){
    let usuario = localStorage.getItem("usuarioLogado");
    let usuarioEl = document.querySelector("#Inputusario1");
    usuarioEl.value = usuario;
})()

let nomeEl = document.querySelector("#Inputname1");
let imagemEl = document.querySelector("#Inputimagem1");
let precoEl = document.querySelector("#Inputpreco1");
let categoriaEl = document.querySelector("#Inputcategoria1");
let btnEL = document.querySelector("#cadastrar-btn");
let help = document.querySelector("#help");

btnEL.addEventListener("click", click);

function click(evt){
    evt.preventDefault();
    let nome = nomeEl.value;
    let imagem = imagemEl.value;
    let preco = precoEl.value;
    let categoria = categoriaEl.value;
    let usuario = localStorage.getItem('usuarioLogado');
    
    imagem = imagem.trim();
    preco = preco.trim();

    if (nome.length < 3 || imagem < 3 || preco <= 0){
        help.style.color = "red";
        help.innerHTML =
          'Deu ruim fml, reescreve esses campos ai bixo';
    }else{
        help.innerHTML = '';
        let myModel = new createNewProduct(nome,preco,imagem, usuario ,categoria);
        console.log(myModel);
        addProduct(myModel);
        help.style.color = "green";
        help.innerHTML =
          'Produto Adicionado! pode demorar alguns minutos para que as mudanças sejam salvas. Você será redirecionado em alguns segundos';
          setTimeout(() => {
            window.location.href = "loja2.html";
          }, 1500);

        nomeEl.value = '';
        imagemEl.value = '';
        precoEl.value = '';
        categoriaEl.value = '';
    }

}
