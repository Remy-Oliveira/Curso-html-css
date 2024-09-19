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
