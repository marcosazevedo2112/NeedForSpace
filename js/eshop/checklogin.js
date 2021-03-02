(function(){
	if (!localStorage.getItem("usuarioLogado")) {
        window.location.href = "login.html";
    }
})()