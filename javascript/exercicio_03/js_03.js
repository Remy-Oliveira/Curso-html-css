function chama_java() {
    //parseInt(document.getElementById('inicio').value);
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var mostra_tela = document.getElementById('p_02')
    mostra_tela.innerText = ''
    if (inicio == 0 || fim == 0 || passo == 0) {
        alert('combinação inválida')
        return
    } else {
        for (inicio; inicio <= fim; inicio += passo) {
            mostra_tela.innerText += `${inicio} ❌ `
        }
    }
    mostra_tela.innerText += `Fim `
}
