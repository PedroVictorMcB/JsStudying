//Faça um script que conte os números ímpares até o número determinado

console.log("Digite um número inteiro: ");
var num = parseInt(prompt());

for (var i = 1; i <= num; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}