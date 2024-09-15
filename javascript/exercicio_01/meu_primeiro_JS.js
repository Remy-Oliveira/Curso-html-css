function carregar() {
    var msg = document.querySelector('#msg p')
    var imagem = document.querySelector('#imagem')
    // var data = new Date()
    var hora = 1 // data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        imagem.src = 'imagens/MANHA.png'
        document.body.style.background = 'linear-gradient(to top, #656565, #000000)'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde
        imagem.src = 'imagens/TARDE.png'
        document.body.style.background = 'linear-gradient(to top, #F2A679, #593650)'
    } else {
        // Boa noite
        imagem.src = 'imagens/NOITE.png'
        document.body.style.background = 'linear-gradient(to top, #9D4843, #362641)'
    }
}