var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Menor de idade.')
} else if (idade < 18 || idade > 65) {
    console.log('Voto Opcional.')
} else {
    console.log('Voto obrigatório.')
}
