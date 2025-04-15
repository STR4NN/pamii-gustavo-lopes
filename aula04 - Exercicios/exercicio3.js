function somaDeTodosOsNumeros (){
    var valorRecebido = prompt("Digite um valor: ");

            for(var i = 0  ; i <= valorRecebido; i++){
                  var valorFinal =  parseInt(valorRecebido) + parseInt(i); 
                  console.log(valorFinal)
            }
            alert("Esse é o valor final: " + valorFinal)
}
