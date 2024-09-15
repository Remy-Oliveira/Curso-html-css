function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = 15 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        imagem.src = 'imagens/MANHA.png'
        document.body.style.backgroundColor = '#494949'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde
        imagem.src = 'imagens/TARDE.png'
        document.body.style.backgroundColor = '#ec8046'
    } else {
        // Boa noite
        imagem.src = 'imagens/NOITE.png'
        document.body.style.backgroundColor = '#620498'
    }
}