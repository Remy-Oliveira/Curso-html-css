// Array que armazenará os números adicionados
let numeros = []

// Função chamada ao clicar no botão "Adicionar"
function adicionar() {
    // Pega o valor do input de número
    const numero = document.getElementById("numero").value
    // Seleciona o elemento <select> onde os números serão listados
    const lista = document.getElementById("lista")

    // Validações

    // Verifica se o número está fora do intervalo (1-100) ou se não é um número válido
    if (numero < 1 || numero > 100 || isNaN(numero)) {
        alert("Por favor, insira um número entre 1 e 100.")
    }
    // Verifica se o número já foi adicionado ao array `numeros`
    else if (numeros.includes(Number(numero))) {
        alert("Número repetido! Adicione outro.")
    }
    else {
        // Adiciona o número ao array de números
        numeros.push(Number(numero))

        // Cria uma nova opção no <select> para mostrar que o número foi adicionado
        const option = document.createElement("option")
        option.text = `Valor ${numero} adicionado.`
        lista.appendChild(option) // Adiciona o novo <option> ao <select>
    }

    // Limpa o campo de entrada após o número ser adicionado
    document.getElementById("numero").value = ""
}

// Função chamada ao clicar no botão "Finalizar"
function finalizar() {
    // Seleciona a div onde o resultado será exibido
    const resultado = document.getElementById("resultado")

    // Verifica se nenhum número foi adicionado ainda
    if (numeros.length === 0) {
        alert("Adicione números antes de finalizar!")
    }
    else {
        // Calcula o total de números
        const total = numeros.length
        // Calcula o maior número usando Math.max() com o array de números
        const maior = Math.max(...numeros)
        // Calcula o menor número usando Math.min() com o array de números
        const menor = Math.min(...numeros)
        // Soma todos os números do array usando o método reduce
        const soma = numeros.reduce((acc, val) => acc + val, 0)

        /*
        const soma = numeros.reduce(function(acc, val) {
            return acc + val;
        }, 0);



        let soma = 0;  // Inicializa a soma como 0
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];  // Adiciona o valor atual do array à soma
        }
            */

        // Calcula a média dividindo a soma pelo total de números
        const media = soma / total

        // Exibe os resultados na div de `resultado` em formato de parágrafo
        resultado.innerHTML = `
            <p>Ao todo, temos ${total} números cadastrados.</p>
            <p>O maior valor informado foi ${maior}.</p>
            <p>O menor valor informado foi ${menor}.</p>
            <p>Somando todos os valores, temos ${soma}.</p>
            <p>A média dos valores digitados é ${media.toFixed(2)}.</p> <!-- toFixed(2) para limitar a média a 2 casas decimais -->
        `
    }
}


/*

Use var se precisar de uma variável com escopo de função (usado menos atualmente).

Use let para variáveis que podem mudar de valor e precisam de escopo de bloco.

Use const para variáveis cujo valor não pode ser reatribuído (mas que ainda podem ter conteúdo mutável, como objetos e arrays).

No geral, a prática comum no desenvolvimento moderno é usar const por padrão, e usar let apenas quando o valor de uma variável realmente precisa ser reatribuído.


------------------------------------------------------------------------------------------


Math.max(): É uma função que retorna o maior número dentre os valores fornecidos como argumentos. Por exemplo, Math.max(1, 2, 3) retornaria 3.

Spread operator ...: O spread operator permite expandir um array em uma lista de argumentos. Isso é necessário porque Math.max() não aceita arrays diretamente, ele espera receber vários números separados por vírgulas.

Por exemplo, se você tentar fazer Math.max([1, 2, 3]), isso não funcionaria. No entanto, ao usar o spread operator ..., ele "espalha" os elementos do array, transformando o array [1, 2, 3] em Math.max(1, 2, 3).

Resumindo, o código Math.max(...numeros) pega todos os números dentro do array numeros e retorna o maior valor.

O método reduce() é usado para reduzir todos os elementos de um array a um único valor.

acc (acumulador): É o valor que vai acumulando o resultado a cada iteração. No início, ele é inicializado com o valor 0 (último argumento de reduce).


val (valor atual): É o valor do item do array que está sendo processado na iteração atual.

let numeros = [10, 50, 3, 45, 12];

const soma = numeros.reduce((acc, val) => acc + val, 0);

console.log(soma); // Saída: 120

Primeira iteração:
acc começa como 0 (valor inicial).
val é 10 (primeiro valor no array).
Resultado: acc + val = 0 + 10 = 10.

Segunda iteração:
acc agora é 10 (resultado da primeira iteração).
val é 50 (segundo valor no array).

Resultado: acc + val = 10 + 50 = 60.
Terceira iteração:
acc agora é 60.
val é 3.

Resultado: acc + val = 60 + 3 = 63.
*/