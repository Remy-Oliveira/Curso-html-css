var numeros = [8, 4, 2, 6, 3]

numeros.push(7) // Acrescenta o valor 7 na ultima posição
numeros.length //Comprimento
numeros[2] //Terceira posição

for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

numeros.sort() //ordem crescente



for (let i in numeros) {  // incremento ja está implícito
    console.log(`A posição ${i} tem o valor ${numeros[i]}`)
}

console.log(`A posição referente ao valor 6 é -> ${numeros.indexOf(6)}`) //Qual o index do valor 3 ? resposta = 2

console.log(numeros[3])