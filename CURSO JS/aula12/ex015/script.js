function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value> ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10 ){
                //CRIANÇA
                img.setAttribute('src', 'criançam250.png')
            }
            if(idade >=11 && idade <19 ){
                //ADOLESCENTE
                img.setAttribute('src', 'adolescentem.png')
            }
            if(idade >=20 && idade <49 ){
                //ADULTO
                img.setAttribute('src', 'adulto250.png')
            }
            if(idade >50 && idade <10000 ){
                img.setAttribute('src', 'idoso250.png')
                //IDOSO
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10 ){
                img.setAttribute('src', 'criançaf250.png')
                //CRIANÇA
            }
            if(idade >=11 && idade <19 ){
                img.setAttribute('src', 'adolescentef.png')
                //ADOLESCENTE
            }
            if(idade >=20 && idade <49 ){
                img.setAttribute('src', 'adulta250.png')
                //ADULTO
            }
            if(idade >50 && idade <10000 ){
                img.setAttribute('src', 'idosa250.png')
                //IDOSO
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
