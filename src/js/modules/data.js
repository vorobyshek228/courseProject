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

export const getLocalData = function(){
    return  JSON.parse(localStorage.getItem("wb2"));

}
export const setLocalData = function(arr){
    localStorage.setItem("wb2",JSON.stringify(arr));
};


export const removeLocalData = function(){
    localStorage.removeItem("wb2");
}

export const valideLocalData = function(){
    return (localStorage.getItem("wb2") === null || localStorage.getItem("wb2") === undefined);
}