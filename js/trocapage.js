btn1 = document.getElementById("comprar")

if(btn1 != null){
    btn1.addEventListener("click", function(){
        location.href = "../eshop/buypage.html";
    });
}else{
    document.getElementById("buy").addEventListener("click", function(){
        location.href = "../eshop/successfulBuy.html";
    });
}