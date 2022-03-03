// Control
// console.log('JS OK!');

// Form
let pswOutput = document.getElementById('pswOutput');

// Info
let userName = prompt('Your name');

let userSurname = prompt('Your Surname');

let userColor = prompt('Your favourite color');

let password = `${userName}${userSurname}${userColor}21`;

document.getElementById('pswOutput').innerText = password;