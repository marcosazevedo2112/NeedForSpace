let clicar = document.querySelector("#modal-btn");
let modal = document.querySelector("#modal");

clicar.addEventListener('click', evt =>{
    modal.classList.toggle("sumiu");
});

window.addEventListener("scroll", evt=>{
    let scroll = this.scrollY;
    if(scroll>=265){
        clicar.classList.remove('sumiu')
        setTimeout(100);
        clicar.classList.remove('sumiu-anim');
    }
    if (scroll<265){
        clicar.classList.add('sumiu')
        clicar.classList.add('sumiu-anim');
    }
});
