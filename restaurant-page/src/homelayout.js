import './Home.css'
const content = document.querySelector('#content');
export const home = ()=>{
    while(content.hasChildNodes()){
        content.firstChild.remove()
    }
const call = document.createElement('h1');
call.classList.add('call')
call.innerHTML = 'The Coziest and Comfiest Cuisine'
content.appendChild(call);

const text = document.createElement('div')
text.classList.add('text');
text.innerHTML =  'They say an apple a day keeps the doctor away, lets hope that holds true with our <p>Apple Cider Wine <p>'
content.appendChild(text)

const reserve = document.createElement('Button');
reserve.classList.add('reserve')
reserve.innerHTML = "Reservations"
content.appendChild(reserve);

const online = document.createElement('Button');
online.classList.add('online')
online.innerHTML = "Order Online"
content.appendChild(online)
}
