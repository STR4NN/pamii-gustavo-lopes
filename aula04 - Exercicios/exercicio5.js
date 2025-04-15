function letrasEmUmPalavra (){
    var fraseEscrevida = prompt("Digite uma frase: ");
    var letraRecebida = prompt("Digite uma letra: ");
    var quantidade = 0;

            for(var i = 0  ; i <= fraseEscrevida.length; i++){
                  if(fraseEscrevida[i] == letraRecebida){
                    quantidade++;
                  }
            }

 alert("A letra: " + letraRecebida + " foi escrita " + quantidade + " vezes");
}
