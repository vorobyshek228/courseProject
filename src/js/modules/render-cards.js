import {setLocalData} from './data.js';
import {totalPrice, clearBasket, closeOnBackDropClick} from './basket.js';

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
        imgBtn.addEventListener('click', function(){
            const modalGoodsCard = document.getElementById('modalGoodsCard');
                modalGoodsCard.classList.add("modalGoodsCard");
                modalGoodsCard.innerHTML = '';
            const card = document.createElement("div");
                card.classList.add("card");
            const img = document.createElement("img");
                img.setAttribute("src", item.imgUrl);
                img.classList.add("card__img");
            const cardInfo = document.createElement("div");
                cardInfo.classList.add("card__info");
            const name = document.createElement("p");
                name.textContent = `${item.name}`;
            const id = document.createElement("p");
                id.classList.add("card__id");
                id.textContent = `Артикул: ${item.id}`;
            const price = document.createElement("div");
                price.classList.add("card__price");
                price.innerHTML = `<span class="price">${item.price} р.</span> <span class="userPrice">${(item.price - (item.price * item.discount / 100)).toFixed(2)} р.</span>`;
            const button = document.createElement("button");
                button.classList.add("card__button");
                button.textContent = 'Добавить в корзину';
                button.addEventListener('click', function(){
                    item.count = 1;
                    basketArr.push(item);
        
                    clearBasket();
                    renderBasket(basketArr);
                    setLocalData(basketArr);

                    modalGoodsCard.close();
                   
                });
            modalGoodsCard.append(card);
            card.append(img, cardInfo);
            cardInfo.append(name, id, price, button);
            modalGoodsCard.showModal();
            modalGoodsCard.addEventListener("click", closeOnBackDropClick);     
        })

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
            const findSameId = basketArr.map(elem => elem.id);
            if(findSameId.includes(item.id)){
                let num = item.count;
                item.count =  ++num;

            }else{
                item.count = 1;
                basketArr.push(item);
            }

            clearBasket();

            renderBasket(basketArr);
            setLocalData(basketArr);
        })


        goodsAera.append(figure);
        figure.append(img,imgBtn,figcaption); 
        figcaption.append(pricing, title, imageInfo);
        imageInfo.append(cardBusketButton);
    }

export const createCardsAera = function(arr, basketArr){  
    arr.forEach(element => renderCard(element, basketArr));
} 
   
export const renderBasket = function(arr){

    basketGoodsCounter.style.display = "block";
    const result = arr.reduce((sum, current) => sum + +current.count, 0);
    basketGoodsCounter.textContent = result;

    const basketList = document.querySelector('#basketList tbody');

    arr.forEach(item => {
        const li = document.createElement("tr");
        const img = document.createElement("td");
            img.innerHTML = `<img src=${item.imgUrl} alt="${item.name}"> `;
        const name = document.createElement("td");
            name.innerHTML = `${item.name} `;
        const count = document.createElement("td");
        const countDiv = document.createElement('div')
            countDiv.style.cssText = `
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            `;
        const num = document.createElement("span");
            num.innerHTML = `${item.count}`
            num.style.cssText = `
            display: block;
            `;
        const addCount = document.createElement('button');
            addCount.classList.add('count__active');
            addCount.innerText = '+';
            addCount.style.cssText = `
                width: 20px;
                height: 20px;
                font-size: 20px;
                font-family: "Raleway", san-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 0px;
                background-color: #f44;
                cursor: pointer;
            `;
            const removeCount = document.createElement('button');
            removeCount.innerText = '-';
            removeCount.classList.add('count__active');
            removeCount.style.cssText = `
                width: 20px;
                height: 20px;
                font-size: 20px;
                font-family: "Raleway", san-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 0px;
                background-color: #f44;
                cursor: pointer;
            `;
            addCount.addEventListener('click', function(){
                item.count++;
                renewCount(item)
            });
            removeCount.addEventListener('click', function(){
                if(item.count > 1){
                    item.count--;
                    renewCount(item)
                } else if (item.count > 0){
                    item.count--;
                    li.remove();
                    renewCount(item)
                };});
        const price = document.createElement("td");
             price.innerHTML = `<span class="price">${(item.price * item.count).toFixed(2)} р.</span> <span class="userPrice">${((item.price * item.count - (item.price * item.count * (item.discount / 100)))).toFixed(2)} р.</span>` ;

        basketList.append(li);
        li.append(img, name, count, price);
        count.append(countDiv);
        countDiv.append(removeCount, num, addCount);
        num.addEventListener('change', function(){
            item.count =  this.value;
            price.innerHTML = `<span class="price">${(item.price * item.count).toFixed(2)} р.</span> <span class="userPrice">${((item.price * item.count - (item.price * item.count * (item.discount / 100)))).toFixed(2)} р.</span>` ;
            setLocalData(arr);
            drawTotalPrice();
            drawBasketGoodsCounter();
       });
       function renewCount(item){
            num.innerHTML = `${item.count}`;
            drawTotalPrice();
            drawBasketGoodsCounter();
            price.innerHTML = `<span class="price">${(item.price * item.count).toFixed(2)} р.</span> <span class="userPrice">${((item.price * item.count - (item.price * item.count * (item.discount / 100)))).toFixed(2)} р.</span>` ;
        };
    
    })

    drawTotalPrice();
    function drawTotalPrice(){
        let totalPriceValue = 0;
        for(let i = 0; i < arr.length; i++){
            let item = arr[i];
            totalPriceValue += item.price* item.count - (item.price* item.count * item.discount / 100);
        }
         totalPrice.innerHTML= `Итого: ${totalPriceValue.toFixed(2)} р.`;
    }
    function drawBasketGoodsCounter(){
        basketGoodsCounter.style.display = "block";
        const result = arr.reduce((sum, current) => sum + +current.count, 0);
        basketGoodsCounter.textContent = result;
    }
};

