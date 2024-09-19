
function funcao_principal() {
    var entrada = Number(document.getElementById("entrada").value);
    var selecao = document.getElementById("selecao");
    var saida = document.getElementById("saida");

    function cria_numero(entrada_selection) {
        var opcao = document.createElement("option");
        selecao.appendChild(opcao);
        opcao = entrada_selection;
        return opcao;
    }

    saida.innerText = `O numero resultante é -> ${cria_numero(entrada)}`;
}

function isNumero(valor) {

}

function inlist(valor){

}

function adicionar() {
    if (isNumero(entrada) && !inlist(entrada)) {

    } else {
        alert("Valor INválido ou já encontrado na lista!");
    }
}