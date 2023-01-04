export const btnBasket = document.querySelector("#btnBasket");
export const modalBasket= document.querySelector('#modalBasket');

btnBasket.addEventListener('click', function(){
    modalBasket.showModal();
});

export const btnClearBasket = document.querySelector('.btnClearBasket');
export const shoppingList = document.querySelector('.shopping-list');
export const totalPriceValue = document.querySelector('#total-price');

btnClearBasket.addEventListener("click", function(){
    shoppingList.innerHTML = "";
    totalPriceValue.innerHTML = `<strong>Итого: <span class="total"></span>0 р.</strong>`;
});

modalBasket.addEventListener("click", closeOnBackDropClick);

function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement
  if (isClickedOnBackDrop) {
    dialogElement.close();
  }
}