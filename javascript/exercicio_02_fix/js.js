function vai_pro_java() {
    var ano_atual = new Date().getFullYear()
    var nascimento = document.getElementById('ano-txt').value
    var idade = ano_atual - nascimento
    var genero = document.getElementsByName('radio_sexo')
    var foto = document.createElement('img'); // Criando o elemento img
    if (genero[0].checked) {
        if (nascimento > ano_atual) {
            alert('ERROO]...Data invalida')
            return
        } else if (idade >= 0 && idade <= 8) {
            //criancinha
            foto.setAttribute('src', 'imagens/menino.jpg')
            //foto.src = 'imagens/menino.jpg'
            genero = 'Menininho'
            document.body.style.background = 'linear-gradient(to top, #995f1f, #89604e)'
        } else if (idade > 8 && idade <= 21) {
            //garoto
            genero = 'Garoto'
            foto.setAttribute('src', 'imagens/garoto.jpg')
            document.body.style.background = 'linear-gradient(to top, #cd2b3a, #0c091a)'
        } else if (idade > 21 && idade <= 50) {
            // adulto
            genero = 'Homem'
            foto.setAttribute('src', 'imagens/homem.jpg')
            document.body.style.background = 'linear-gradient(to top, #d02e3d, #d0902c)'
        } else if (idade > 50) {
            // anciao
            genero = 'Senhor'
            foto.setAttribute('src', 'imagens/velho.jpg')
            document.body.style.background = 'linear-gradient(to top, #c18062, #29556e)'
        }
    } else {
        if (idade >= 0 && idade <= 8) {
            genero = 'Menininha'
            //criancinha
            foto.setAttribute('src', 'imagens/menina.jpg')
            document.body.style.background = 'linear-gradient(to top, #fce3dc, #95000a)'
        } else if (idade > 8 && idade <= 21) {
            genero = 'Garota'
            //garoto
            document.body.style.background = 'linear-gradient(to top, #744730, #0c3c14)'
            foto.setAttribute('src', 'imagens/garota.jpg')
        } else if (idade > 21 && idade <= 50) {
            // adulto
            genero = 'Mulher'
            foto.setAttribute('src', 'imagens/mulher.jpg')
            document.body.style.background = 'linear-gradient(to top, #c0b6ad, #9e5938)'
        } else if (idade > 50) {
            // anciao
            genero = 'Senhora'
            foto.setAttribute('src', 'imagens/velha.jpg')
            document.body.style.background = 'linear-gradient(to top, #1a1917, #aa8b48)'

        }
    }
    var resposta = document.querySelector('#resposta p')
    resposta.innerHTML = `Detectamos um <strong>${genero}</strong> de <strong>${idade}</strong> ano(s).`
    resposta.appendChild(foto)
}