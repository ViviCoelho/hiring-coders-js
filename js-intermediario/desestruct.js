const pessoa = {
    nome: 'Viviane',
    sobrenome: 'Coêlho',
    idade: 36,
    profissao: 'Ceo da Google'
};

console.log(pessoa);

//sem desestruct
/* let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao;
 */

//com desestruct
let {nome, idade, profissao} = pessoa;

console.log(nome, idade, profissao);