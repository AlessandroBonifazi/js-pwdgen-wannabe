// Control
// console.log('JS OK!');

// Form
const pswOutput = document.getElementById('pswOutput');

// Info
const userName = prompt('Your name', 'Alex');

const userSurname = prompt('Your Surname', 'Boni');

const userColor = prompt('Your favourite color', 'black');

const password = `${userName}${userSurname}${userColor}21`;

document.getElementById('pswOutput').innerText = password;
// document.getElementById('pswOutput').innerHTML = '<span>'+password+'</span>';

