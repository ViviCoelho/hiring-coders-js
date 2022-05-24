let estaAtivo: boolean;

//..

estaAtivo = true;

function mapearStatusDeUsuario(status: boolean){
    if(status){
        return `Usúario está ativo`
    } else {
        return `Usúario não está ativo`
    }
}

mapearStatusDeUsuario(true);