renderProducts();

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
  link.innerText = "Comprar agora";
  link.addEventListener("click", ()=>{
    let item = {
      nome: nome,
      img: imagem,
      preco: preco,
      usuario: usuario
    }
    localStorage.setItem('produto', JSON.stringify(item));
    window.location.href = 'terminar.html'
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
