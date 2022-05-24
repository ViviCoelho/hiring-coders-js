var achou = false;


var possivelValor = 0;
var repeticoes = 10;

while (!achou) {
    possivelValor +=1;

    if(repeticoes === possivelValor) {
        achou = true;
    } else {
        console.log('Possivel valor não encontrado' + possivelValor);
    }
}