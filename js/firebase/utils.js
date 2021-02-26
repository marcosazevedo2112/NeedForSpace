const db = firebase.firestore();
const users = db.collection("usuarios");

function searchUserDB(id, senha) {
  return users
    .where("id", "==", id)
    .get()
    .then((queryResult) => {
      let data;
      queryResult.forEach((element) => {
        data = element.data();
        if (data != null) {
          if (cript(senha, 7) === data.psswd) {
          } else {
            return -1;
          }
        }
      });
      return data;
    })
    .catch((err) => {
      console.log("Erro ao acessar o banco de dados " + err);
      return -2;
    });
}

function addUser(model) {
  let newPsswd = cript(model.psswd, 7);
  let newModel = {
    email: model.email,
    id: model.id,
    psswd: newPsswd,
  };
  console.log(newModel);
  return users
    .doc(newModel.id)
    .get()
    .then((doc) => {
      let result = null;
      result = doc.data();
      if (!result) {
        users.doc(newModel.id).set(newModel);
        console.log("conta criada!");
        return 0
      } else {
        console.log("email ja usado!");
        return 1;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function cript(frase, number) {
  const num = number;
  let output = "";

  for (let i = 0; i < frase.length; i++) {
    const code = frase.charCodeAt(i);
    let c = "";

    if (code >= 65 && code <= 90) {
      c = String.fromCharCode((code - num) % 26);
    } else if (code >= 97 && code <= 122) {
      if (code - num < 97) {
        c = String.fromCharCode(code - num + 122 - 97 + 1);
      } else {
        c = String.fromCharCode(code - num);
      }
    } else {
      if (code === 32) {
        c = " ";
      } else if (code === 58) {
        c = String.fromCharCode(code);
      } else if (code === 46) {
        c = String.fromCharCode(code);
      }
    }
    output += c;
  }
  return output;
}
