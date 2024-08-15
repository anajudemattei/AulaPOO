class Pessoa {
    constructor(nome, idade, altura){
    this.nome = nome
    this.idade = idade
    this.altura = altura
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade e tenho ${this.altura} de altura!!!`);
    }

}

const user = new Pessoa("Ana Julia", 16, 1.6)
const user1 = new Pessoa ("Flávia", 16, 1.63)

user1.seApresentar()

console.clear()
//console.log(user);
//console.log(user1);