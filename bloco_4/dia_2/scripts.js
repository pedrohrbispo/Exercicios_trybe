let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0, numElementos=0;
for(let index = 0; index < numbers.length; index += 1){
    soma=soma+numbers[index];
    numElementos +=1;
}

if((soma/numElementos) > 20 ){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}