(function (){
    renderProducts();
})();
function renderProducts() {
    getProductsDB()
      .then((products) => {
          products.forEach(element =>{
              createNewCard(element.nome, element.img, element.preco, element.usuario, element.categoria);
          });
      })
      .catch((error) => {
          console.log(error);
          return error;
      })
  }
  
  function createNewCard(nome, imagem, preco, usuario, categoria){
    let loja = document.querySelector("#loja");
    let card = document.createElement('div');
    let img = document.createElement('img');
    let cardBody = document.createElement('div');
    let h4 = document.createElement('h4');
    let criador = document.createElement('p');
    let valor = document.createElement('p');
    let link = document.createElement('a');

    card.setAttribute('class', 'card');
    img.setAttribute('class', 'card-img-top');
    img.setAttribute('src', imagem);
    cardBody.setAttribute('class', 'card-body');
    criador.setAttribute('class', 'card-subtitle mb-2 text-muted');
    valor.setAttribute('class', 'card-text');
    criador.innerHTML = `By <span id="usuario">${usuario}</span>`;
    h4.innerText = nome;
    valor.innerHTML = `<span>US$ ${preco}</span>`;
    link.setAttribute('class', 'link');
    link.innerText = "Foguetinho";

    card.append(img);
    card.append(cardBody);
    cardBody.append(h4);
    cardBody.append(criador);
    cardBody.append(valor);
    cardBody.append(link);
    loja.append(card);
  }

/**
 * <div class="card">
        <img class="card-img-top"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/dbradtr-2d49a0d9-9984-4fb5-b9b4-1ee547d46241.png/v1/fill/w_600,h_861,strp/baby_groot_3___png_by_captain_kingsman16_dbradtr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NjEiLCJwYXRoIjoiXC9mXC9lYTE5NjExNy0wYjY0LTQ5YjctYjEzZi03OWY0M2NmNzdlNTNcL2RicmFkdHItMmQ0OWEwZDktOTk4NC00ZmI1LWI5YjQtMWVlNTQ3ZDQ2MjQxLnBuZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gCynr4-d471SJs9MFcmNoQ5zOCKVNeCwvundhZ08rg8"
          alt="">
        <div class="card-body">
          <h4>Baby Groot</h4>
          <p class="card-subtitle mb-2 text-muted">By <span id="usuario">NeedForSpace™</span></p>
          <p class="card-text"><span>US$ 40.000,00</span></p>
          <a class="link">Foguetinho</a>
        </div>
      </div>
 */