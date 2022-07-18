
var x = ''
function gerar(){
    var num = window.document.getElementById('numero')
 x = Number(num.value)
var res = window.document.getElementById('res')
    res.innerHTML = ''
    if(x == ''){
        window.alert('Campo em branco. Por favor digite um número válido.')
    }
    else{
for( var c = 1; c<=10;c++){
       var mu = x*c
       res.innerHTML +=  (`${x} X ${c} = ${mu}<br>`)
}
}
}