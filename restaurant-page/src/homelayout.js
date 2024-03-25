import './stylesheet.css'
const content = document.querySelector('#content');
const header = document.querySelector('header');

const logo = document.createElement('a');
logo.classList.add('logo')
logo.setAttribute('href','/restaurant-page/dist/index.html')
logo.innerHTML = '<em>The Lazzy Lounge<em>';
header.prepend(logo);

const call = document.createElement('h1');
call.classList.add('call')
call.innerHTML = 'The Coziest and Comfiest Cuisine'
content.appendChild(call);

const reserve = document.createElement('Button');
reserve.classList.add('reserve')
reserve.innerHTML = "Reservations"
content.appendChild(reserve);

const online = document.createElement('Button');
online.classList.add('online')
online.innerHTML = "Order Online"
content.appendChild(online)
