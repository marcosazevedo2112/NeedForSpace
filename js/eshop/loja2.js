let numeroEl = document.querySelector("#numero");
let foguete = document.querySelector("#foguete");
let i = carrinho.length;
attFoguete();

window.addEventListener("scroll", (evt) => {
  let scroll = this.scrollY;
  if (scroll >= 265) {
    foguete.classList.remove("sumiu");
    setTimeout(100);
  }
  if (scroll < 265) {
    foguete.classList.add("sumiu");
  }
});

renderProducts();

function attFoguete() {
  if (i > 0) {
    foguete.style.backgroundColor = "orange";
    numeroEl.style.color = "orange";
  }
  numeroEl.innerText = i;
}

function renderProducts() {
  getProductsDB()
    .then((products) => {
      products.forEach((element) => {
        createNewCard(
          element.nome,
          element.img,
          element.preco,
          element.usuario,
          element.categoria
        );
      });
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}

function createNewCard(nome, imagem, preco, usuario, categoria) {
  let loja = document.querySelector("#loja");
  let card = document.createElement("div");
  let img = document.createElement("img");
  let cardBody = document.createElement("div");
  let h4 = document.createElement("h4");
  let categoriaEl = document.createElement("p");
  let criador = document.createElement("p");
  let valor = document.createElement("p");
  let link = document.createElement("a");

  card.setAttribute("class", "card");
  card.setAttribute("style", "align-self: flex-start");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("src", imagem);
  cardBody.setAttribute("class", "card-body");
  criador.setAttribute("class", "card-subtitle mb-2 text-muted");
  valor.setAttribute("class", "card-text");
  categoriaEl.setAttribute("class", "card-subtitle mb-2 text-muted categoria");
  criador.innerHTML = `By <span class="usuario">${usuario}</span>`;
  h4.innerText = nome;
  categoriaEl.innerHTML = categoria;
  valor.innerHTML = `<span>US$ ${preco}</span>`;
  link.setAttribute("class", "link");
  link.innerText = "Adicionar ao Foguetinho";
  link.addEventListener("click", () => {
    console.log("a");
    i++;
    addCarrinho(nome, imagem, preco);
    attFoguete();
  });

  card.append(img);
  card.append(cardBody);
  cardBody.append(h4);
  cardBody.append(criador);
  cardBody.append(categoriaEl);
  cardBody.append(valor);
  cardBody.append(link);
  loja.append(card);
}
