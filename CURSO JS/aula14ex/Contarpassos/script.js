function calcular(){

var inicios = window.document.getElementById("inicio")
var fims = window.document.getElementById("fim")
var passos = window.document.getElementById("passos")
var inicio = Number(inicios.value)
var fim = Number(fims.value)
var passo = Number(passos.value)
var res = window.document.getElementById('res')
res.innerHTML = ''
var d = 0
if( inicio == '' || fim == '' || passo == '' ){
    window.alert('Dados incorretos')
}
else {
    if(inicio > fim){
        for(var c = inicio;c>=fim;c-=passo){
            res.innerHTML += `Passo ${c}👟<br>`
            
            d++;
        }
        
    }
    else if(inicio<fim){
        for(var c = inicio; c<=fim;c+=passo){
            res.innerHTML += `Passo ${c}👟<br>`
            
            d++;
        }
    }
    res.innerHTML += `Total de passos ${d}<br>`
    res.innerHTML += '🏁🏁🏁🏁🏁'

}





}