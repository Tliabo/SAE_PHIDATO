const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
const API_PARAMETER = {
    cocktailName: 's',
    firstLetter: 'f',
    ingredient: 'i',
}
let flipbook = document.querySelector('#flipbook');

let apiBuildUrl = function (pUrlParameter = '', pKeyword = '', pRandom = true) {

    let url = '';

    if (pRandom) {
        url = `${API_BASE_URL}random.php`
    } else {
        url = `${API_BASE_URL}search.php?${pUrlParameter}=${pKeyword}`
    }

    return url;
}


for (let i = 0; i < 5; i++) {
    fetch(apiBuildUrl())
        .then(response => response.json())
        .then(data => {
            // console.log(data);

            let drink = data.drinks[0];
            // console.log(drink);

            const imageTemplate = `<img src="${drink.strDrinkThumb}" title="${drink.strDrink}">`;
            const container = document.createElement('div');
            container.classList.add('page');

            container.innerHTML = imageTemplate;

            $(flipbook).turn("addPage", container);
        });
}
