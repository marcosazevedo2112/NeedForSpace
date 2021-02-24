const db = firebase.firestore();
const users = db.collection("usuarios");

function addCommonUser(model) {
    let newModel = {
        name: model.name,
        email: model.email,
        psswd: model.psswd
    }

    users.where('email','==',newModel.email).then(
        doc =>{
            if(doc.exists){
                return -1
            }
        }
    )
    db.collection("usuarios").doc(newModel.email).set(newModel);
}