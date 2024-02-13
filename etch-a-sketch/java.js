const main = document.querySelector('.main')
const btn = document.querySelector('.header')
btn.addEventListener('click',() =>pallet(parseFloat(prompt('Enter a number'))))
pallet()
x = 16

function pallet(x){
    while(main.firstChild){
        main.removeChild(main.firstChild)
    }

    for(i=0;i<x;i++){
        const boxes = document.createElement('div')
        boxes.style.width = `${(240/(Math.sqrt(x)))}px`
        boxes.style.height = `${(240/(Math.sqrt(x)))}px`
        main.appendChild(boxes)
        boxes.addEventListener('mouseover', (e)=> {
            boxes.style.background = 'black'
        })
    }
return
}

