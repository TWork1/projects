{//Base Functions
function add(a,b){
   return a+b
}
function subtract(a,b){
    return a-b
}
function multiplication(a,b){
    return a*b
}
function division(a,b){
    return a/b
}
}
{//Variables
let firstNumber;
let operater;
let secondNumber;
}
{//Operations details
    function operate(o,a,b){
        if (o = add){
            return add(a,b)
        }
        else if (o = subtract){
            return subtract(a,b)
        }
        else if (o = multiplication){
            return multiplication(a,b)
        }
        else if (o = '/'){
            return division(a,b)
        }

    }

}
{//Buttons functionality
    const screen = document.querySelector('.screen');
    const btnce = document.querySelector('#btnce');
    let all_btn = document.querySelectorAll('#btn');
    btnce.addEventListener('click',clear())
    all_btn.forEach(function(btn) {
        btn.addEventListener("click", function() {
             screen.textContent += this.textContent
        });
    });
    function clear (){
        screen.textContent = ''
    }
    const newSelector = document.querySelectorAll('#btnce')
    console.log(newSelector)
}