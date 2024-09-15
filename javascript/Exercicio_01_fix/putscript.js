function carregar() {
    var mensagem = document.querySelector('#msg p')
    var imagem = document.querySelector('#fotinha')
    hora = 2 //data.getHours()
    mensagem.innerHTML = `São exatamente ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = 'linear-gradient(to top, #656565, #000000)'
        imagem.src = 'imagens/MANHA.png'
    } else if (hora > 11 && hora < 18) {
        document.body.style.background = 'linear-gradient(to top, #F2A679, #593650)'
        imagem.src = 'imagens/TARDE.png'
    } else if (hora >= 18 && hora <= 24) {
        document.body.style.background = 'linear-gradient(to top, #9D4843, #362641)'
        imagem.src = 'imagens/NOITE.png'
    }
}