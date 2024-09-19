let amigo = {       //  declarando um objeto  let amigo = {}
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) {
        console.log("Engordou");
        this.peso += p  // this é o mesmo que amigo.peso += p
    }
}

console.log(`Nome: ${amigo.nome}`) // nome é a chave (ou índice)
console.log(`Sexo: ${amigo.sexo}`)
console.log(`Peso: ${amigo.peso}`)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg!`)