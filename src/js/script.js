import {btnBasket, modalBasket, btnClearBasket, totalPriceValue, shoppingList} from './modules/basket.js'; 

let goodsArr = [
    {
        id:1,
        name:"Шорты",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"12",
        diskont: 10,
    },
    {
        id:2,
        name:"Шорты",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"14",
        diskont: 20,
    
    },
    {
        id:3,
        name:"Шорты",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"15",
        diskont: 50,
    
    },
    {
        id:4,
        name:"Шорты",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"20",
        diskont: 10,
    
    },
    {
        id:5,
        name:"Майка",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"12",
        diskont: 10,
    },
    {
        id:6,
        name:"Майка",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"14",
        diskont: 20,
        
    },
    {
        id:7,
        name:"Майка",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"15",
        diskont: 50,
        
    },
    {
        id:8,
        name:"Майка",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"20",
        diskont: 10,
    
    },
    {
        id:9,
        name:"Штаны",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"12",
        diskont: 10,
    },
    {
        id:10,
        name:"Штаны",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"14",
        diskont: 20,
        
    },
    {
        id:11,
        name:"Штаны",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"15",
        diskont: 50,
        
    },
    {
        id:12,
        name:"Штаны",
        imgUrl:"https://basket-01.wb.ru/vol28/part2826/2826015/images/big/1.webp",
        category:"man",
        price:"20",
        diskont: 10,
    
    }    
]
let basketArr = [];
let searchArr= [];
const goodsAera = document.querySelector('.goods-aera');


const renderCard = function (item) {
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
        pricing.innerHTML = `<span class="price">${item.price} BYN</span>  <span class="user-price">${item.price - (item.price * item.diskont / 100)} BYN</span>`;

    let title = document.createElement("p");
        title.classList.add("goods-card--title");
        title.innerHTML = `<span class="name">${item.name}</span>`;
    let imageInfo = document.createElement("div");
        imageInfo.classList.add("goods-card--title");
        imageInfo.innerHTML = `<span class="diskont">-${item.diskont}%</span>`

    let cardBusketButton = document.createElement("button");
        cardBusketButton.classList.add("goods-card-busket-button");
        cardBusketButton.textContent = '+';

        cardBusketButton.addEventListener('click', function(){
            basketArr.push(item)
            const shoppingList = document.querySelector("#shopping-list");
            const totalPrice = document.querySelector("#total-price");

            shoppingList.innerHTML= "";
            totalPrice.innerHTML= "";
            basketArr.forEach(item => {
                const li = document.createElement("li");
                const name = document.createElement("span");
                    name.classList.add("name");
                    name.textContent = `${item.name} `
                const price = document.createElement("span");
                    price.classList.add("price");
                    price.textContent = `${item.price} р. ` ;
                const userPrice = document.createElement("span");
                    userPrice.classList.add("userPrice");
                    userPrice.textContent = ` ${item.price - (item.price * item.diskont / 100)} р.` ;
                shoppingList.append(li);
                li.append(name, price, userPrice);
            })
            let totalPriceValue = 0;
            for(let i = 0; i < basketArr.length; i++){
                let item = basketArr[i];
                totalPriceValue += item.price - (item.price * item.diskont / 100);
            }
            totalPrice.innerHTML= `<strong>Итого: <span class="total">${totalPriceValue}</span> р.</strong>`;
        })


        goodsAera.append(figure);
        figure.append(img,imgBtn,figcaption); 
        figcaption.append(pricing, title, imageInfo)
        imageInfo.append(cardBusketButton)

  
    }

const createCardsAera = function(arr){  
    arr.forEach(element => renderCard(element));
}

btnClearBasket.addEventListener("click", function(){
    shoppingList.innerHTML = "";
    totalPriceValue.innerHTML = `<strong>Итого: <span class="total"></span>0 р.</strong>`;
    basketArr.length = 0;
    console.log(basketArr);
});

const searchForMain = function (){
    const slidder = document.querySelector('.slider');

    if( (this.value === "") || (this.value === " ")){
        createCardsAera(goodsArr);
        slidder.style.display = "flex";
    } else{
        slidder.style.display = "none";
        searchArr.length = 0;
        searchArr = goodsArr.filter(item => item.name.includes(this.value.trim()));
        goodsAera.innerHTML="";
        createCardsAera(searchArr);
    }
}


const inputSearch = document.querySelector('#search');
inputSearch.addEventListener("keyup", searchForMain);


createCardsAera(goodsArr);