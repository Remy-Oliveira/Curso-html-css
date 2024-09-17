function chama_java() {
    var contador = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var mostra_tela = document.getElementById('p_02')
    
    for (contador; contador <= fim; contador = passo) {
        
    }
    mostra_tela.innerText = `Remy: ${fim}`
}