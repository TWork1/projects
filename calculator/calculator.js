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
{//variables
let firstNumber;
let operater;
let secondNumber;
}
{//operations details
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
{//buttons
    const screen = document.querySelector('.screen');
    const btnce = document.querySelector('#btnce');
    let all_btn = document.querySelectorAll("button");
    btnce.addEventListener('click',clear())
    all_btn.forEach(function(btn) {
        btn.addEventListener("click", function() {
            if(this.textContent !== btnce.textContent)
            screen.textContent += this.textContent
            else btnce.addEventListener('click',clear())
        });
    });
    function clear (){
        screen.textContent = ''
    }
}