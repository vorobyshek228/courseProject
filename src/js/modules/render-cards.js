import {setLocalData} from './data.js';
import {totalPrice, clearBasket} from './basket.js';

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
            item.count = 1;
            basketArr.push(item);
            setLocalData(basketArr);
            clearBasket();
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

    basketGoodsCounter.style.display = "block";
    basketGoodsCounter.textContent = arr.length;

    const basketList = document.querySelector('#basketList tbody');

    arr.forEach(item => {
        const li = document.createElement("tr");
        const img = document.createElement("td");
            img.innerHTML = `<img src=${item.imgUrl} alt="${item.name}"> `;
        const name = document.createElement("td");
            name.innerHTML = `${item.name} `;
        const count = document.createElement("td");
        const num = document.createElement("input");
            num.setAttribute("type","number");
            num.setAttribute("value","1");
        const price = document.createElement("td");
             price.innerHTML = `<span class="price">${item.price} р.</span> <span class="userPrice">${(item.price - (item.price * (item.discount / 100))).toFixed(2)} р.</span>` ;

        basketList.append(li);
        li.append(img, name, count, price);
        count.append(num);
    })
    let totalPriceValue = 0;
    for(let i = 0; i < arr.length; i++){
        let item = arr[i];
        totalPriceValue += item.price - (item.price * item.discount / 100);
    }
     totalPrice.innerHTML= `Итого: ${totalPriceValue.toFixed(2)} р.`;
}
