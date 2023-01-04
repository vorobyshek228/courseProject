import {btnBasket, modalBasket, btnClearBasket} from './modules/basket.js'; 

const goods[
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

const goodsAera = document.querySelector('.goods-aera');

const renderCard = function (item) {
    let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", item.id);


        cardsAera.append(card);
        card.append(cardStatusWraper, cardText, cardCloseButton, cardDate); 
        cardStatusWraper.append(cardStatusSpan, cardStatus);
    }

// goods.forEach(element => {
//     const 
// });