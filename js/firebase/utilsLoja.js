const db = firebase.firestore();
const shop = db.collection("mercado");

function addProduct(model) {
  let newModel = {
    nome: model.nome,
    preco: model.preco,
    img: model.img,
    usuario: model.usuario,
    categoria: model.categoria,
  };
  return shop
    .doc(newModel.nome)
    .get()
    .then((doc) => {
      let result = null;
      result = doc.data();
      if (!result) {
        shop.doc(newModel.nome).set(newModel);
        console.log("Produto adcionado!");
        return 0;
      } else {
        console.log("O Produto ja existe em nossa loja");
        return 1;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function getProductsDB() {
    let data = [];
    return shop
    .get()
    .then((queryResult) => {
        queryResult.forEach(element => {
            data.push(element.data());
        })
        return data;
    })
    .catch((err) => {
        console.log(err);
        return -2;
    });
}
