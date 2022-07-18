function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours() 
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >=0 && hora <12 )
{
    //bom dia
    img.src = "fotomanha250.png"
    document.body.style.background = '#E9CC6A'
} else if (hora >= 12 && hora <=18)
{
    img.src = "fototarde250.png"
    document.body.style.background = '#CEAD8D'
    //Boa tarde
}
else 
{  
    img.src = 'fotonoite250.png'
    document.body.style.background = '#555D9C'   
    //Boa noite}
}
}