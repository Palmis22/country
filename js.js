import allCountries from './data.js';
console.log(allCountries);
//pasizymiu vieta i kuria JS pagalba printinsiu elementus
const my_main_div = document.getElementById('main_div')

allCountries.map((country, index) => {
    console.log(index + 1);
    console.log(country.name.common)
    // kuriu elementa i kuri irasysiu salies pavadinima
    const one_country_info = document.createElement('div')
    const my_img = document.createElement('img');
    const my_country_name = document.createElement('h2');
    my_img.src = country.flags.png
    // idedu teksta, reiksme, kintamaji i sukurta elementa
    my_country_name.innerText = country.name.common;
    // idedu i main diva savo sukurta elementa su kontentu
    one_country_info.appendChild(my_img);
    one_country_info.appendChild(my_country_name);
    const my_country_capital = document.createElement('h3')
    if (Array.isArray(country.capital)) {
        console.log(country.capital[0])
        my_country_capital.innerText = country.capital[0];
    } else {
        console.log("info nerasta...")
        my_country_capital.innerText = "Info nerasta..."
    }
    console.log("________")
    one_country_info.appendChild(my_country_capital);


    const my_country_continents = document.createElement('h4');
    my_country_continents.innerText = country.continents[0];
    one_country_info.appendChild(my_country_continents)

    my_main_div.appendChild(one_country_info);
});





const continents = ['all'];
const continents_buttons = document.querySelector('header')
allCountries.map(
    country => {
        if (!continents.includes(country.continents[0])) {
            continents.push(country.continents[0]);

        }
    }

)


console.log(continents);
continents.forEach(continent => {
    const myBtn = document.createElement('button');
    myBtn.innerText = continent;
    continents_buttons.appendChild(myBtn);

})

const my_buttons = document.getElementsByTagName('button');
const card_continents = document.getElementsByTagName('h4');
console.log(my_buttons)
console.log(card_continents)
for (let one_category of my_buttons) {
    one_category.addEventListener('click', () => { getCountries(one_category.innerText) })

}
const getCountries = (continent) => {
    console.log("funkcijos vidu")
    console.log(continent)
    for (let i of card_continents) {
        console.log(i.innerText)
        if (i.innerText === continent || continent=== 'all') {
            i.parentElement.style.display = "block"
        } else {
            i.parentElement.style.display = 'none'
        }


    }
}
