export const btnBasket = document.querySelector("#btnBasket");
export const modalBasket= document.querySelector('#modalBasket');

btnBasket.addEventListener('click', function(){
    modalBasket.showModal();
});

export const btnClearBasket = document.querySelector('.btnClearBasket');
export const totalPrice = document.querySelector('#total-price');
export const clearBasket = function(){
  const basketList = document.querySelector('#basketList tbody');
  basketList.innerHTML="";
}



modalBasket.addEventListener("click", closeOnBackDropClick);

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement
  if (isClickedOnBackDrop) {
    dialogElement.close();
  }
}