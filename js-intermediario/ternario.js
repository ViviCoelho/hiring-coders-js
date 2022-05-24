//Sem ternario
let isValid = true;

function verify(isValid){
    if(isValid) {
        return true;
    } else {
        return false;
    }
}

console.log(verify(isValid));

//Com ternario

const result = isValid ? true : false;

console.log(result)


let zero = 0;

const numeroResultado = zero == 0 ? 0 : -1;

console.log(numeroResultado)