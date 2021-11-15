
// let min = document.getElementById('min');
// let max = document.getElementById('max');


// const updatePriceMin = (ev) => {
//     let labelMin = document.querySelector('.min-price label');
//     let p = ev.target.value;
//     labelMin.setAttribute('price',p);
// }

// const updatePriceMax = (ev) => {
//     let labelMax = document.querySelector('.max-price label');
//     let p = ev.target.value;
//     labelMax.setAttribute('price',p);    
// }

// min.addEventListener('change', updatePriceMin);
// max.addEventListener('change', updatePriceMax);

const updatePrice = (ev) => {
    ev.target.classList.remove('price');
    let p = ev.target.value;
    ev.target.setAttribute('data-price', p); 
    setTimeout( (e)=>{
        e.target.classList.add('price');
        console.log(e.target.value);
        console.log(ev.target.getAttribute('data-price'));
    }, 10, ev);
}
let min = document.getElementById('min');
let max = document.getElementById('max');
min.addEventListener('change', updatePrice);
max.addEventListener('change', updatePrice);