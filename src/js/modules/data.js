export let goodsArr = [
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

export function getData (){
    return new Promise((resolve, reject) => {
        const url = 'https://63b93fc26f4d5660c6e8866a.mockapi.io/api/courseProject/Product01';
        fetch(url).then(response => {
            if (response.status == 200) {
            resolve(response.json())
            } else {
            reject("Failed to load data from server mockapi.io")
            }
         })
    })
}