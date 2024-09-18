function chama_java() {
    var multiplicando = Number(document.getElementById('entrada').value)
    var resultado = document.getElementById('resultado_select');
    resultado.innerHTML = '';
    if (multiplicando == 0 ) {
        alert('Digite um valor válido')
        return
    } else {
        for (var contador = 1; contador <= 10; contador++) {
            var saida = document.createElement('option')
            saida.text = `${multiplicando} x ${contador} = ` + multiplicando * contador
            resultado.appendChild(saida); //saida(é um option) esta dentro de resultado = select
        }
    }
}