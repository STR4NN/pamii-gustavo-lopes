function verificaNumeroPrimo(){
    var valorRecebido = prompt("Digite um valor: ");

    var divisorBase = 2;
    while(valorRecebido%divisorBase != 0){
        divisorBase++;
    }
    if(valorRecebido == divisorBase){
        alert("O numero é primo")
    }else{
        alert("O numero não é primo.")
    }
}
