let btnClearBasket = document.querySelector('.btnClearBasket');
let shoppingList = document.querySelector('.shopping-list');
let totalPriceValue = document.querySelector('.total');

btnClearBasket.addEventListener("click", function(){
    console.log(`click Clear Basket`);
    shoppingList.innerHTML = "";
    totalPriceValue.innerHTML = "0";

})