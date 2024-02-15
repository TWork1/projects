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
        else if (o = division){
            return division(a,b)
        }

    }

}