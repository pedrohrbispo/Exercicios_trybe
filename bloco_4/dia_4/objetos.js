function indexOfTheHighiest( numbers) {
    let maior= numbers[0];
    for( let index = 0; index < numbers.length; index +=1){
        if(numbers[index] > maior){
            maior = numbers[index];
        }

    }
    for( let index = 0; index < numbers.length; index +=1) {
        if(maior == numbers[index]){
            return index;
        }
    }  
}
let array = [2, 3, 6, 7, 10, 1];

console.log(indexOfTheHighiest(array));