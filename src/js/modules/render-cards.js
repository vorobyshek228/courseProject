import {setLocalData} from './data.js';


export const goodsAera = document.querySelector('.goods-aera');

const renderCard = function (item, basketArr) {
    let figure = document.createElement("figure");
        figure.classList.add("goods-card");
        figure.setAttribute("data-id", item.id);

    let img = document.createElement("img");
        img.classList.add("goods-card--img");
        img.setAttribute("src", item.imgUrl);

    let imgBtn = document.createElement("button");
        imgBtn.classList.add("card-button");
        imgBtn.textContent = 'Быстрый просмотр';

    let figcaption = document.createElement("figcaption");

    let pricing = document.createElement("p");
        pricing.classList.add("goods-card--pricing");
        pricing.innerHTML = `<span class="price">${item.price} BYN</span>  <span class="user-price">${(item.price - (item.price * item.discount / 100)).toFixed(2)} BYN</span>`;

    let title = document.createElement("p");
        title.classList.add("goods-card--title");
        title.innerHTML = `<span class="name">${item.name}</span>`;
    let imageInfo = document.createElement("div");
        imageInfo.classList.add("goods-card--title");
        imageInfo.innerHTML = `<span class="diskont">-${Number(item.discount)}%</span>`

    let cardBusketButton = document.createElement("button");
        cardBusketButton.classList.add("goods-card-busket-button");
        cardBusketButton.textContent = '+';


        cardBusketButton.addEventListener('click', function(){
            basketArr.push(item);
            setLocalData(basketArr);
            renderBasket(basketArr);

        })


        goodsAera.append(figure);
        figure.append(img,imgBtn,figcaption); 
        figcaption.append(pricing, title, imageInfo)
        imageInfo.append(cardBusketButton)

  
    }

export const createCardsAera = function(arr, basketArr){  
    arr.forEach(element => renderCard(element, basketArr));
} 
   
export const renderBasket = function(arr){
    const shoppingList = document.querySelector("#shopping-list");
    const totalPrice = document.querySelector("#total-price");

    basketGoodsCounter.style.display = "block";
    basketGoodsCounter.textContent = arr.length;
    shoppingList.innerHTML= "";
    totalPrice.innerHTML= "";

    arr.forEach(item => {
        const li = document.createElement("li");
        const name = document.createElement("span");
            name.classList.add("name");
            name.textContent = `${item.name} `
        const price = document.createElement("span");
            price.classList.add("price");
            price.textContent = `${Number(item.price)} р. ` ;
        const userPrice = document.createElement("span");
            userPrice.classList.add("userPrice");
            userPrice.textContent = ` ${(item.price - (item.price * (item.discount / 100))).toFixed(2)} р.` ;
        shoppingList.append(li);
        li.append(name, price, userPrice);
    })
    let totalPriceValue = 0;
    for(let i = 0; i < arr.length; i++){
        let item = arr[i];
        totalPriceValue += item.price - (item.price * item.discount / 100);
    }
    totalPrice.innerHTML= `<strong>Итого: <span class="total">${totalPriceValue.toFixed(2)}</span> р.</strong>`;
}
