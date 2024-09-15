function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.querySelector('#txtano')
    var resultado = document.querySelector('#resultado p')
    if (form_ano.value.length == 0 || form_ano.value > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('radiosex')
        var idade = ano - Number(form_ano.value)
        //resultado.innerHTML = `Idade calculada: ${idade}`
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'imagens/menino.jpg')
                document.body.style.background = 'linear-gradient(to top, #995f1f, #89604e)'
            } else if (idade >= 10 && idade < 21) {
                //xovem
                img.setAttribute('src', 'imagens/garoto.jpg')
                document.body.style.background = 'linear-gradient(to top, #cd2b3a, #0c091a)'
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/homem.jpg')
                document.body.style.background = 'linear-gradient(to top, #d02e3d, #d0902c)'
            } else if (idade > 50) {
                //veio
                img.setAttribute('src', 'imagens/velho.jpg')
                document.body.style.background = 'linear-gradient(to top, #c18062, #29556e)'
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'imagens/menina.jpg')
                document.body.style.background = 'linear-gradient(to top, #fce3dc, #95000a)'
            } else if (idade >= 10 && idade < 21) {
                //xovem
                img.setAttribute('src', 'imagens/garota.jpg')
                document.body.style.background = 'linear-gradient(to top, #744730, #0c3c14)'
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/mulher.jpg')
                document.body.style.background = 'linear-gradient(to top, #c0b6ad, #9e5938)'
            } else if (idade > 50) {
                //veio
                img.setAttribute('src', 'imagens/velha.jpg')
                document.body.style.background = 'linear-gradient(to top, #1a1917, #aa8b48)'
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos um(a) <strong>${genero}</strong> com <strong>${idade}</strong> ano(s).`
        resultado.appendChild(img)
    }
}