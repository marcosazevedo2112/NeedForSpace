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