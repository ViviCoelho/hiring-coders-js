//classes e interfaces e herança e marcadores de acessos

class user {
    public name;
    public age;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Player extends user {
    public game;
    constructor(name: string, age: number, game: string){
        super(name, age);
        this.game = game;
    }

    dizerOJogoAtual() {
        return `Estou jogando no momento: ${this.game}`
    }

    static queHorasSao() {
        return Date();
    }

}

const jogador = new Player ('Viviane', 36, 'Fifa');
console.log(jogador.dizerOJogoAtual())
console.log(Player.queHorasSao())



//private, protected, public
//public: acessível de forma geral, dentro e fora da classe
//private: é acessível apenas dentro da classe onde o campo foi criado
//protected: é acessível apenas dentro da classe (e subclasses) onde o campo foi criado

class Jogo {
    public name;

    constructor(name: string) {
        this.name = name;
    }

    dizerNome(){
        return `O nome o jogo é: ${this.name}`
    }
}

class JogoComDescricao extends Jogo{ 
    private descricao;
    
    constructor(name: string, descricao:string) {
        super(name);
        super(descricao);

        this.descricao = descricao;
    }
    dizerNomeComDescricao(){
        return `O nome o jogo é: ${this.name}`
    }
}

const fifa = new JogoComDescricao ('Nba 2k2', 'É um jogo massa de basquete')
console.log(fifa.dizerNome());



//interfaces

interface IJogocomDescricao {
   name: string;
    descricao: string;
    dizerNomeComDescricao(): string;
}

//implements

type TJogocomDescricao = {
    descricao: string;
    dizerNomeComDescricao(): string;
}

const obj: IJogocomDescricao = {
    descricao: 'descrição do Jogo',
    dizerNomeComDescricao() {
        return '123';
    },
    name: ""
}
/* class JogoComDescricao extends Jogo implements IJogocomDescricao { 
    public descricao;
    
    constructor(name: string, descricao:string) {
        super(name);

        this.descricao = descricao;
    }
    dizerNomeComDescricao(){
        return `O nome o jogo é: ${this.name}`
    }
}

const fifa = new JogoComDescricao ('Nba 2k2', 'É um jogo massa de basquete')
console.log(fifa.dizerNome()); */