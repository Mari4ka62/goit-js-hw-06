const inputControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


const onInputChangeRange = event =>
    text.style.fontSize = event.currentTarget.value + 'px';

inputControl.addEventListener('input', onInputChangeRange);

// Напиши скрипт, який реагує на зміну значення 
// input#font - size - control(подія input) і 
// змінює інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок,
//     буде змінюватися розмір тексту.

 