let carrinho = [];
let foguetinho = document.getElementById("foguete");

foguetinho.addEventListener("click", ()=>{
  window.location.href = "foguetinho.html";
});

function addCarrinho(nome, img, preco) {
  carrinho.forEach((element) => {
    if (element.nome === nome) {
      element.unidade++;
    } else {
      carrinho.push({
        nome: nome,
        img: img,
        preco: preco,
        unidade: 1,
      });
    }
  });
  salvaCarrinho();
}

carregaCarrinho();

function salvaCarrinho() {
  let carrinhoSTR = JSON.stringify(carrinho);
  localStorage.setItem("carrinho", carrinhoSTR);
}

function carregaCarrinho() {
  let carrinhoLocal = JSON.parse(localStorage.getItem("carrinho"));
  carrinho.length = 0;
  carrinhoLocal.forEach((element) => {
    carrinho.push(element);
  });
}
