class Pizza {
    constructor(base, molho, cobertura, queijo){
    this.base = base
    this.molho = molho
    this.cobertura = cobertura
    this.queijo = queijo
    }
    resultado(){
        console.log(`Olá, a base da sua pizza ficou ${this.base}, com ${this.molho}, ${this.queijo} e ${this.cobertura} de de bacon com brocolis!`);
    }
}

const user1 = new Pizza("Fina", "tomate", "brocolis e bacon", "mussarela");


user1.resultado()