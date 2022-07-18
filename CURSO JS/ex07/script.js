var num3 = new Array
let final = 0
document.querySelector('#reiniciar').disabled = true
var res = window.document.getElementById("res")
function adicionar(){
      var num 
      var numm 
      
      
      num = window.document.getElementById("num")
      numm = Number(num.value)
    

 
     var item = document.createElement('option')
     teste = num3.indexOf(numm)
     if(numm > 100 || numm == "" || numm == 0)
     {
        window.alert("Dados Incorretos")
     }
     else if(teste == -1){
      num3.push(numm)
      item.text = `Número: ${numm} ${teste}`
      res.appendChild(item)
      document.querySelector("#reiniciar").disabled = false;
     }
     else{
      window.alert("Dados Repetidos")
     }
     
}


function finalizar()
{
  let d = 0                        //SETANDO AS VÁRIAVÉIS EM 0 
  let menorvalor = 0               //SETANDO AS VÁRIAVÉIS EM 0  
  let maiorvalor = 0               //SETANDO AS VÁRIAVÉIS EM 0 
  let soma = 0
  let media = 0
  var div = window.document.getElementById("div") //jogando o campo da div na variavel div
 div.innerHTML = "Os números inseridos foram: "
 for(x = 0; x<num3.length; x++){  //for pra rodar o número de vezes que o vetor tem de números
 d++  //variavel que mesmo eu sabendo num3.lenght eu quis tentar algo diferente
 final = 1;  //ainda em testes 
 (div.innerHTML += `${num3[x]} `) //mostrando os números inseridos.
 num3.sort();  //ordenando os números em forma cres
 menorvalor = Math.min(...num3)      //jogando na variável o menor valor com o método math.min
 maiorvalor = Math.max(...num3)      //jogando na variável o maior valor com o método math.max
 soma = soma + num3[x]
 media = soma/num3.length
 }
div.innerHTML += `<br>Menor Valor ${menorvalor} e maior valor: ${maiorvalor}`
div.innerHTML += `<br>Você Cadastrou o total de ${d} números.`
div.innerHTML += `<br>Soma total dos valores: ${soma}`
div.innerHTML += `<br>A média dos valores é ${media}`
document.querySelector('#calcular').disabled = true;
}

function reiniciar()
{
  document.getElementById('res').innerText = null
  div.innerHTML = ""
  document.querySelector("#calcular").disabled = false;
  document.querySelector("#reiniciar").disabled = true;
  num3.length = 0;
}










  /*  else(numm < 100 && num3.indexOf(numm) != num )
     { if(teste == -1)
        num3.push(numm)
          window.alert("tudo certo")
          item.text = `Número: ${num3}  ${teste}`
          res.appendChild(item)
           var teste = num3.indexOf(num)
     
           else
          window.alert("Dados Repetidos")
        item.text = `Número: ${num3}  ${teste}`
        res.appendChild(item)
        }
        }
      */