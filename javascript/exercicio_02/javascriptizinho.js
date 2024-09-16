function verificar() {  // função que foi disparada do botão
    var ano = new Date().getFullYear() // pega o ano atual
    var form_ano = document.querySelector('#txtano') // pega o input da data de nascimento
    var resultado = document.querySelector('#resultado p') // pega o paragrafo da div
    if (Number(form_ano.value) > ano) { // se ele nasceu do futuro! kkk
        alert('Verifique os dados e tente novamente') // alerta de erro
    } else {
        var sexo = document.getElementsByName('radiosex') // pegando os dois checkboxes
        var idade = ano - Number(form_ano.value) // idade é a data de nascimento pela  o ano atual. Number converte o txt para numero
        //resultado.innerHTML = `Idade calculada: ${idade}`
        var genero = ' ' // declaração do genero vazio
        var img = document.createElement('img') // crio uma imagem...
        img.setAttribute('id', 'foto') // ... com o id = foto
        if (sexo[0].checked) { // se o radio de numero 01 é masculino...
            genero = 'Homem'  // genero é masculino
            if (idade >= 0 && idade < 10) { // se a idade for maior ou igual a 0 e tambem menor que 10... é uma criançinha...
                //crianca
                img.setAttribute('src', 'imagens/menino.jpg') // coloco a imagem de masculina de uma criança...
                document.body.style.background = 'linear-gradient(to top, #995f1f, #89604e)' // gradiente bonitão...
            } else if (idade >= 10 && idade < 21) { // se a idade for maior que 10 e tambem menor que 21, é um xovemzinho...
                //xovem
                img.setAttribute('src', 'imagens/garoto.jpg') // imagem de um jovenzinho...
                document.body.style.background = 'linear-gradient(to top, #cd2b3a, #0c091a)' // o gradiente bobnitão...
            } else if (idade < 50) { // menor que 50 é um adulto masculino
                // adulto
                img.setAttribute('src', 'imagens/homem.jpg') // foto do adulto masculino...
                document.body.style.background = 'linear-gradient(to top, #d02e3d, #d0902c)' // já sabe, neh?
            } else if (idade > 50) { // se for maior que 50, é um mestre yoda!
                //veio
                img.setAttribute('src', 'imagens/velho.jpg') // ancião...
                document.body.style.background = 'linear-gradient(to top, #c18062, #29556e)' // gradiente
            }
        } else { // se for mulher...
            genero = 'Mulher' // genero mulher
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
        resultado.style.textAlign = 'center' // alinhar texto 
        resultado.innerHTML = `Detectamos um(a) <strong>${genero}</strong> com <strong>${idade}</strong> ano(s).` // altera o texto da div por essa interpolação de string!(s).
        resultado.appendChild(img)
    }
}