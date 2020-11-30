const videoEl = document.querySelector(".video video");
videoEl.addEventListener("canplaythrough", terminaLoading);

if(videoEl.readyState >= 3){
    terminaLoading();
}

function terminaLoading() {
    document.getElementById("loading").style.display = "none"
    document.getElementById("conteudo").style.visibility = "visible";
    window.scrollTo(0,0);
    
}