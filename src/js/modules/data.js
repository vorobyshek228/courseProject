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