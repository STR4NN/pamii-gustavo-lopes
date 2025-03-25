function positvoOuNegativo (){
    var valorRecebido = prompt("Digite um valor: ");

    if (valorRecebido > 0) {
        alert("O valor é positivo")
    } else if(valorRecebido < 0){
        alert("O valor é negativo");
    }else{
        alert("O valor é 0");
    }
}
