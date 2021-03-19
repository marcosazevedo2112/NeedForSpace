let cartaoEl = document.getElementById("cartao-numero");
let container = document.getElementById("#container-compras");

window.onload = () => {
  let item = localStorage.getItem("produto");
  item = JSON.parse(item);
  renderCard(item.nome, item.img, item.preco, item.usuario);
};

$(function () {
  $('[data-toggle="modal"]').click(function () {
    var modalId = $(this).data("target");
    $(modalId).modal("show");
  });
});

function renderCard(nome, img, preco, usuario) {
  let imagem = document.createElement("img");
  let cardBody = document.createElement("div");
  let name = document.createElement("h5");
  let valor = document.createElement("p");
  let user = document.createElement("p");
  let card = document.querySelector(".card");

  imagem.classList.add("card-img-top");
  cardBody.classList.add("card-body");
  name.classList.add("card-title");
  valor.classList.add("card-text");
  user.classList.add("card-text");

  imagem.src = img;
  name.innerHTML = nome;
  valor.innerHTML = `US$ <span>${preco}</span>`;
  user.innerHTML = `By ${usuario}`;

  card.append(imagem);
  card.append(cardBody);
  cardBody.append(name);
  cardBody.append(valor);
  cardBody.append(user);
}

cartaoEl.addEventListener("input", observaInput);

function observaInput() {
  let cartaoNumero = cartaoEl.value;
  let bandeira = verificaCartao(cartaoNumero);
  if (bandeira) {
    let emoji = document.createElement("p");
    emoji.innerHTML = "💳";
    console.log(bandeira);
    /**
     * TODO:{
     *  Adcionar cartão na tela
     * }
     */
  }
}

function verificaCartao(cardnumber) {
  var cardnumber = cardnumber.replace(/[^0-9]+/g, "");

  var cards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})/,
    mastercard: /^5[1-5][0-9]{14}/,
    amex: /^3[47][0-9]{13}/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
    elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
  };

  for (var flag in cards) {
    if (cards[flag].test(cardnumber)) {
      return flag;
    }
  }

  return false;
}
