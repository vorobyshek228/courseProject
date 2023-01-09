export const btnBasket = document.querySelector("#btnBasket");
export const modalBasket= document.querySelector('#modalBasket');

btnBasket.addEventListener('click', function(){
    modalBasket.showModal();
    document.body.classList.add("scroll-lock");
});

export const btnClearBasket = document.querySelector('.btnClearBasket');
export const totalPrice = document.querySelector('#total-price');
export const clearBasket = function(){
  const basketList = document.querySelector('#basketList tbody');
  basketList.innerHTML="";
  totalPrice.innerHTML="Итого: 0";
}



modalBasket.addEventListener("click", closeOnBackDropClick);

export function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement
  if (isClickedOnBackDrop) {
    dialogElement.close();
    document.body.classList.remove("scroll-lock");
  }
}
export function nullBasket(deletedItem, shownItem) {
  deletedItem.style.display = 'none';
  shownItem.style.display = 'table';
}