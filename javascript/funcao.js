
function par_impar(valor) {
    if (valor % 2 == 0) {
        return 'par'
    } else {
        return "ímpar"
    }
}

console.log(`O numero 2 é ${par_impar(2)}`);

function soma(n1, n2) {
    return n1 + n2
}

console.log(`A soma entre 5 e 9 é igual a ${soma(5, 9)}`)

function multiplicar(n1 = 0, n2 = 2) {  // se liga, o valor de n1 é 4 e não zero, o de n2 é 2.
    return n1 * n2;
}

console.log(`4 * 2 é ${multiplicar(4)}`);

var funcao = function (n1) {  // A variável recebe uma função que não precisa apenas de parametros
    return 2 ** 5
}

console.log(`2 elevado a cinco é ${funcao(2)}`)

// Fatorial de um número -> 5! = 5 x 4 x 3 x 2 x 1

function fatorial(n) {
    let fatorial = 1
    for (let contador = n; contador > 1; contador--) {
        console.log(`${contador} * ${fatorial} = ${fatorial *= contador}`)
    }
    return fatorial
}

console.log(`Por tanto, o fatorial de 5 é ${fatorial(5)}`)

function fatorial_recursiva(n) {
    if (n == 1) {
        return 1
    } else {
        console.log('helowss')
        return n * fatorial_recursiva(n - 1)  // recursividade
    }
}

console.log(fatorial_recursiva(5))