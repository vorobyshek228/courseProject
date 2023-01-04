export const btnBasket = document.querySelector("#btnBasket");
export const modalBasket= document.querySelector('#modalBasket');

btnBasket.addEventListener('click', function(){
    modalBasket.showModal();
});

export const btnClearBasket = document.querySelector('.btnClearBasket');
export const shoppingList = document.querySelector('.shopping-list');
export const totalPriceValue = document.querySelector('.total');

btnClearBasket.addEventListener("click", function(){
    shoppingList.innerHTML = "";
    totalPriceValue.innerHTML = "0";
});