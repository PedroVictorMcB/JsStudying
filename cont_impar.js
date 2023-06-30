//Faça um script que conte os números ímpares até o número determinado
const num = +process.argv[2];

for (let i = 1; i <= num; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}