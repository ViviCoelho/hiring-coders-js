function principal(){

    console.log('executando');

}

principal();

function funcaoQueNuncaRetorna(){
    throw new Error('olá')
}

const a = funcaoQueNuncaRetorna()