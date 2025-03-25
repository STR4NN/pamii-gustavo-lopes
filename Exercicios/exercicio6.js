function inverterString (){
    var fraseEscrita = prompt("Digite uma frase: ");
 
    var fraseInvertida = fraseEscrita.split("").reverse().join("");
   alert("Frase invertida : "+ fraseInvertida);
}
