function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
 

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  let boxArr = [];

  for (let i = 0; i < amount; i+=1) {
    const newBox = document.createElement('div');

    newBox.style.width = `${20+i*10}px`;
    newBox.style.height = `${20+i*10}px`;
    newBox.style.background = getRandomHexColor();

    boxArr.push(newBox);
  }
  boxes.append(...boxArr);
}

createBoxes(input.value);

function destroyBoxes(event) {
  boxes.remove();
 }

// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає
//  кнопку Створити, після чого рендериться колекція.Натисненням 
//  на кнопку Очистити, колекція елементів очищається.


// Створи функцію createBoxes(amount),
//   яка приймає один параметр - число.Функція створює стільки
//     < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим 
// і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі
// HEX.Використовуй готову функцію getRandomHexColor
//  для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.