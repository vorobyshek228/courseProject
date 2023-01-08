import {btnBasket, modalBasket, btnClearBasket, totalPrice, clearBasket, nullBasket} from './basket.js'; 
import {getData, getLocalData, setLocalData, removeLocalData, valideLocalData} from './data.js';
import {createCardsAera, goodsAera, renderBasket} from './render-cards.js';

export const app = function(){
let goodsArr = [];

let topGoodsArr =[];
let basketArr ;
let searchArr= [];

let uiFlag = 0;
const basketGoodsCounter = document.querySelector('#basketGoodsCounter');
     basketGoodsCounter.style.display= "none";


if (valideLocalData()){
    basketArr = [];
    setLocalData(basketArr);

} else{
    basketArr = getLocalData();

}

if (basketArr.length > 0){
    renderBasket(basketArr);
    basketGoodsCounter.style.display = "block";
    const result = basketArr.reduce((sum, current) => sum + +current.count, 0);
    basketGoodsCounter.textContent = result;
    
}


btnBasket.addEventListener('click', function(){
    let basketNull = document.getElementById('modal-basket__null'),
        basketList = document.getElementById(`basketList`);
    if (basketArr.length > 0){
    nullBasket(basketNull, basketList);
    } else {
        nullBasket(basketList, basketNull);
    }
  })

getData()
.then(data =>  {
    goodsArr = data;
    main();
})
.catch(error => console.log(error));

function main(){
    topGoodsArr = goodsArr.slice(0,6);;
    createCardsAera(topGoodsArr, basketArr);
    
    window.addEventListener('wheel',topGoods);
    
    function topGoods(){
        ++uiFlag;
    
        if(uiFlag > 6 && uiFlag < 18){
            goodsAera.innerHTML="<dialog id=modalGoodsCard class=modalGoodsCard> </dialog>";
            topGoodsArr = goodsArr.slice(0,12)
            createCardsAera(topGoodsArr, basketArr);
        }
    
        if(uiFlag >= 18){
            goodsAera.innerHTML="<dialog id=modalGoodsCard class=modalGoodsCard> </dialog>";
            topGoodsArr = goodsArr.slice(0,18)
            createCardsAera(topGoodsArr, basketArr);
        }
    
    };

    

    const searchForMain = function (){
        const slidder = document.querySelector('.slider');
    
        if( (this.value === "") || (this.value === " ")){
            createCardsAera(topGoodsArr, basketArr);
            slidder.style.display = "flex";
        } else{
            slidder.style.display = "none";
            searchArr.length = 0;
            let rule = this.value.split('');
            rule[0]=this.value[0].toUpperCase();
            let ruleU = rule.join('');
            rule[0]=this.value[0].toLowerCase()
            let ruleL= rule.join('');

            searchArr = goodsArr.filter(item => item.name.includes(ruleU||ruleU));
            goodsAera.innerHTML="";
            createCardsAera(searchArr, basketArr);
        }
    }

    const searchForCategory = function (category){
        const slidder = document.querySelector('.slider');
            slidder.style.display = "none";
            searchArr.length = 0;
            searchArr = goodsArr.filter(item => item.category === category);
            goodsAera.innerHTML="";


            categoryMenu.checked = false;
            window.removeEventListener('wheel', topGoods);
            createCardsAera(searchArr, basketArr);
        

    }
    
    
    const inputSearch = document.querySelector('#search');
        inputSearch.value = '';
    inputSearch.addEventListener("keyup", searchForMain);
    
   
    btnClearBasket.addEventListener("click", function(){
        modalBasket.close();
        basketArr.length = 0;
        removeLocalData();
        clearBasket();
        basketGoodsCounter.textContent = 0;
        basketGoodsCounter.style.display= "none";
        
       
    });
    

    const btnCatalog = document.querySelector('#btnCatalog');;
    btnCatalog.addEventListener('click', function(){
        goodsAera.innerHTML="";
        createCardsAera(topGoodsArr);

        window.addEventListener('wheel',topGoods);
        const slidder = document.querySelector('.slider');
        slidder.style.display = "flex";
    })

    const categoryMen = document.querySelector('#category-men');
    const categoryWomen = document.querySelector('#category-women');
    const categoryKids = document.querySelector('#category-kids');
    const categoryMenu = document.querySelector('#checkbox');

    categoryKids.addEventListener('click', function(){
        searchForCategory('kid');
    })
    categoryMen.addEventListener('click', function(){
        searchForCategory('men');
    })
    categoryWomen.addEventListener('click', function(){
        searchForCategory('women');
    })

    
}

}