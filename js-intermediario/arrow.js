//Arrow function
//sem arrow function
function soma(x, y){
    return  x + y;
}
console.log(soma(3,4));


const multiplicacao = function(x,y){
    return x * y;
}

console.log(multiplicacao(5, 5))

//com arrow function
//exemplo 1
const dividir = (x, y) => {
    return x / y;
};

console.log(dividir(10,2));

//exemplo 2
const objeto = () => ({nome: 'Viviane', sobrenome: 'Coêlho'});

