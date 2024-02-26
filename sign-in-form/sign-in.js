const confirmPass = document.querySelector('#password_confirm')
const pass = document.querySelector('#password')
function passCompare(){
    if(pass.value !== confirmPass.value){
        confirmPass.style.outline = "solid red 1px";
    }
    else{
        confirmPass.style.outline = "";
    }
}
pass.addEventListener('input',passCompare);
confirmPass.addEventListener('input',passCompare)
