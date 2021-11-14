
let min = document.getElementById('min');
let max = document.getElementById('max');


const updatePriceMin = (ev) => {
    let labelMin = document.querySelector('.min-price label');
    let p = ev.target.value;
    labelMin.setAttribute('price',p);
}

const updatePriceMax = (ev) => {
    let labelMax = document.querySelector('.max-price label');
    let p = ev.target.value;
    labelMax.setAttribute('price',p);    
}

min.addEventListener('change', updatePriceMin);
max.addEventListener('change', updatePriceMax);