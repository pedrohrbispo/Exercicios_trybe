let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtdImpar=0;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2==1){
        qtdImpar+=1;
    }
}
if(qtdImpar > 0){
    console.log('A quantidade de numeros impares é ' + qtdImpar);
} else {
    console.log('Nenhum valor encontrado');
}