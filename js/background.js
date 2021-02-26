let bgLDT = document.querySelector("#linha-tempo");
if(bgLDT == null){
    bgLDT = document.querySelector("#container");
}

bgLDT.addEventListener('mousemove', e => {
    let moveX = (e.pageX* -1/75);
    let moveY = (e.pageY* -1/75);
    bgLDT.style.backgroundPositionX = (moveX) + "px";
    bgLDT.style.backgroundPositionY = (moveY) + "px";
});