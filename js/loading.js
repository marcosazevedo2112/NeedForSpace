const videoEl = document.querySelector(".video video");
let oneTime = 0;

videoEl.addEventListener("canplaythrough", terminaLoading);

if(videoEl.readyState >= 3){
    terminaLoading();
}

function terminaLoading() {
    document.getElementById("loading").style.display = "none"
    document.getElementById("conteudo").style.visibility = "visible";
    if(oneTime==0){
        window.scrollTo(0,0);
        oneTime=1;
    }
    
}