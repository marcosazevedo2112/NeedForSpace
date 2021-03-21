let cardMais = document.querySelector("div#mais");
let yoda = document.querySelector("#yoda");
let kryptonita = document.querySelector("#krypto");
let armadura = document.querySelector("#armadura");
let groot = document.querySelector("#groot");

yoda.addEventListener(
  "click",
  ()=>{
      compraProduto(
        "Baby Yoda",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/ddls31c-9247bae6-b63b-4209-b3d3-df61ddb1bf67.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWExOTYxMTctMGI2NC00OWI3LWIxM2YtNzlmNDNjZjc3ZTUzXC9kZGxzMzFjLTkyNDdiYWU2LWI2M2ItNDIwOS1iM2QzLWRmNjFkZGIxYmY2Ny5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.-9XEYkI6DKEU_EW6wnuY8RIRBaLZjG34bzHihg8ah4I",
        "100.000,00",
        "NeedForSpace™"
    )});
    

kryptonita.addEventListener(
    "click",
    ()=>{
        compraProduto(
            "Kryptonita",
            "https://cdn.discordapp.com/attachments/770006003416563736/816808599346217000/kryptonite-mineral-JeKkPl0-600-removebg-preview.png",
            "US$ 4.000,00/g",
            "NeedForSpace™"
          )
    }
  );

armadura.addEventListener("click", () => {
    compraProduto(
        "Armadura Mandaloriana", 
        "https://i.pinimg.com/originals/b4/5a/b4/b45ab43fa147c614d04c663a2c84e0d3.png", 
        "20.000,00",
        "NeedForSpace™"
    )
});

groot.addEventListener("click", () => {
    compraProduto(
        "Baby Groot", 
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/dbradtr-2d49a0d9-9984-4fb5-b9b4-1ee547d46241.png/v1/fill/w_600,h_861,strp/baby_groot_3___png_by_captain_kingsman16_dbradtr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NjEiLCJwYXRoIjoiXC9mXC9lYTE5NjExNy0wYjY0LTQ5YjctYjEzZi03OWY0M2NmNzdlNTNcL2RicmFkdHItMmQ0OWEwZDktOTk4NC00ZmI1LWI5YjQtMWVlNTQ3ZDQ2MjQxLnBuZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gCynr4-d471SJs9MFcmNoQ5zOCKVNeCwvundhZ08rg8", 
        "40.000,00",
        "NeedForSpace™"
    )
});


oiUser();
cardMais.addEventListener("click", () => {
  window.location.href = "loja2.html";
});

function compraProduto(nome, imagem, preco, usuario) {
  let item = {
    nome: nome,
    img: imagem,
    preco: preco,
    usuario: usuario,
  };
  localStorage.setItem("produto", JSON.stringify(item));
  window.location.href = "terminar.html";
}

function oiUser() {
  let usuario = localStorage.getItem("usuarioLogado");
  let usuarioEl = document.querySelector("#usuario");
  usuarioEl.innerHTML = `Bem vindo(a), @${usuario}`;
}
