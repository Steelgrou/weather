//Prayer section
const prayerForm = document.querySelector('#prayerForm')
const prayerInput = document.querySelector('#prayerInput')
const prayerBtn = document.querySelector('#prayerBtn')
const prayerInfo = document.querySelector('#prayerInfo')

prayerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    fetch(`https://islomapi.uz/api/present/day?region=${prayerInput.value}`)
        .then(response => response.json())
        .then(data => {
            prayerInfo.innerHTML = `<h1>${data.region}</h1><br>
            <p>Kun: ${data.weekday}</p><br><p>Namoz Vaqti:</p>
            <p>${data.times.tong_saharlik} Tong saharlik</p>
            <p>${data.times.quyosh} Quyosh</p>
            <p>${data.times.peshin} Peshin</p>
            <p>${data.times.asr} Asr</p>
            <p>${data.times.shom_iftor} Shom</p>
            <p>${data.times.hufton} Hufton</p>`;
        }).catch((error) => {
            console.log(error);
            alert('Error BRO! example Toshkent')
        });
});
// Weather section
const weatherForm = document.querySelector('#weatherForm')
const weatherInput = document.querySelector('#weatherInput')
const weatherBtn = document.querySelector('#weatherBtn')
const weatherInfo = document.querySelector('#weatherInfo')

weatherForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let apikey = '7639f5cd4da89691622ae7276bc486df'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherInput}&units=metric&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            weatherInfo.innerHTML = `<h1>${data.region}</h1><br>
            <p>Kun: ${data.weekday}</p><br><p>Namoz Vaqti:</p>
            <p>${data.times.tong_saharlik} Tong saharlik</p>
            <p>${data.times.quyosh} Quyosh</p>
            <p>${data.times.peshin} Peshin</p>
            <p>${data.times.asr} Asr</p>
            <p>${data.times.shom_iftor} Shom</p>
            <p>${data.times.hufton} Hufton</p>`;

        }).catch((error) => {
            console.log(error);
            alert('Error Weather! example Toshkent')
        });

});
// Switching the language
function changeLanguage(lang) {
    // prayer 
    let prayerTitle = document.getElementById("prayerTitle")
    let prayerSubtitle = document.querySelector('#prayerSubtitle')
    let prayerDesc = document.querySelector('#prayerDesc')
    let prayerLangInput = document.querySelector('.prayerLangInput')
    let prayerLangBtn = document.querySelector('.prayerLangBtn')
    // style
    let active = document.querySelector('.active')
    let second = document.querySelector('.second')
    let thrid = document.querySelector('.thrid')
    // weather
    let weatherTitle = document.querySelector('#weatherTitle')
    let weatherName = document.querySelector('#weatherName')
    let weatherSubtitle = document.querySelector('#weatherSubtitle')
    let weatherLangBtn = document.querySelector('.weatherLangBtn')
    let weatherLangInput = document.querySelector('.weatherLangInput')

    if (lang == "en") {
        title.innerHTML = "Language selection"
        // Prayer ENGLISH section 
        prayerTitle.textContent = "PRAYER"
        prayerSubtitle.innerHTML = 'Prayer time'
        prayerDesc.innerHTML = 'Enter the name of the city and click the button for the data'
        prayerLangInput.placeholder = "name of the city..."
        prayerLangBtn.textContent = "to obtain data"
        // Style
        active.style.color = "white"
        active.style.background = "red"
        second.style.color = "black"
        second.style.background = "white"
        thrid.style.color = 'black'
        thrid.style.background = "white"
        //Weather ENGLISH section
        weatherTitle.textContent = "Weater time"
        weatherName.textContent = "WEATHER"
        weatherSubtitle.textContent = 'Enter the name of the city and click the button for the data'
        weatherLangBtn.textContent = "to obtain data"
    } else if (lang == "uz") {
        title.innerHTML = "Tilni tanlash"
        // Prayer UZBEK section 
        prayerTitle.textContent = "NAMOZ"
        prayerSubtitle.innerHTML = 'Namoz vaqti'
        prayerDesc.innerHTML = 'Shahar nomini kiriting va ma`lumotlar uchun tugmani bosing'
        prayerLangInput.placeholder = "Shahar nomini kiriting..."
        prayerLangBtn.textContent = "Ma`lumot olish"
        // Style
        active.style.color = 'black'
        active.style.background = "white"
        second.style.color = "white"
        second.style.background = "red"
        thrid.style.color = 'black'
        thrid.style.background = "white"
        //Weather Uzbek section
        weatherName.textContent = "OB-HAVO"
        weatherTitle.textContent = "Ob-Havo vaqti"
        weatherSubtitle.textContent = 'Shahar nomini kiriting va ma`lumotlar uchun tugmani bosing'
        weatherLangBtn.textContent = 'Ma`lumot olish'
        weatherLangInput.placeholder = 'Shahar nomini kiriting...'
    } else if (lang == "ru") {
        title.innerHTML = "Выбор языка"
        // Prayer RUSSIA section 
        prayerTitle.textContent = "МОЛИТВА"
        prayerSubtitle.innerHTML = 'Время молитвы'
        prayerDesc.innerHTML = 'Введите название города и нажмите на кнопку'
        prayerLangInput.placeholder = "Введите название города..."
        prayerLangBtn.textContent = "Получить данные"
        // style
        second.style.color = 'black'
        second.style.background = "white"
        thrid.style.color = 'white'
        thrid.style.background = "red"
        active.style.color = 'black'
        active.style.background = "white"
        // Prayer Russian section
        weatherName.textContent = "ПОГОДА"
        weatherTitle.textContent = "Время погоды"
        weatherSubtitle.textContent = 'Введите название города и нажмите на кнопку'
        weatherLangBtn.textContent = 'Получить данные'
        weatherLangInput.placeholder = 'Введите название города...'
    }
}

