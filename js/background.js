let bgLDT = document.querySelector("#linha-tempo");

bgLDT.addEventListener('mousemove', e => {
    let moveX = (e.pageX* -1/75);
    let moveY = (e.pageY* -1/75);
    bgLDT.style.backgroundPositionX = (moveX) + "px";
    bgLDT.style.backgroundPositionY = (moveY) + "px";
});