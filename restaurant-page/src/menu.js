import './menu.css'
const content= document.querySelector('#content');
export const menu = ()=>{
    while(content.hasChildNodes()){
        content.firstChild.remove()
    }
const foodcontainer = document.createElement('div');
foodcontainer.classList.add('foodcontainer');

const bread = document.createElement('div');
bread.classList.add('bread');
const breadimg = document.createElement('div');
breadimg.classList.add('breadimg')
breadimg.innerHTML ='<img src="../src/imge/Bread.jpg">'
const breadtext = document.createElement('div');
breadtext.classList.add('breadtext')
breadtext.textContent = "Indulge in the timeless allure of our Homemade Bread, a culinary masterpiece that embodies the essence of comfort and tradition. Crafted with care and passion in our kitchen, each loaf is a celebration of artisanal baking at its finest."
bread.appendChild(breadimg)
bread.appendChild(breadtext)
foodcontainer.appendChild(bread)

const coq = document.createElement('div');
coq.classList.add('coq');
const coqimg = document.createElement('div');
coqimg.classList.add('coqimg')
coqimg.innerHTML ='<img src="../src/imge/coq.jpg">'
const coqtext = document.createElement('div');
coqtext.classList.add('coqtext')
coqtext.textContent = 'Savor the exquisite flavors of France with our Coq au Vin. Tender chicken, simmered in a rich red wine sauce with pearl onions and aromatic herbs, delivers a symphony of savory indulgence.'
coq.appendChild(coqimg)
coq.appendChild(coqtext)
foodcontainer.appendChild(coq)

const wine = document.createElement('div');
wine.classList.add('wine');
const wineimg = document.createElement('div');
wineimg.classList.add('wineimg')
wineimg.innerHTML ='<img src="../src/imge/wine.jpeg">'
const winetext = document.createElement('div');
winetext.classList.add('winetext')
winetext.textContent = 'Elevate your palate with our Apple Cider Wine, a crisp and refreshing libation crafted from the finest handpicked apples. Experience the perfect harmony of sweet and tart notes, culminating in a delightful burst of autumnal flavors with every sip.'
wine.appendChild(wineimg)
wine.appendChild(winetext)
foodcontainer.appendChild(wine)

content.appendChild(foodcontainer)
}
