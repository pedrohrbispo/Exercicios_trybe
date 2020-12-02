let array = [2, 3, 2, 5, 8, 2, 3]; 
function mostRepeated(numbers){
    let numberUnrepeateds = [], copyNumbers = [];
  

   for(let index=0; index < numbers.length; index +=1){
        for(let index2=index; index2 < numbers.length; index2 +=1){
            if(numbers[index] == numbers[index2]){

            }else{
                numberUnrepeateds.push(numbers[index]);
            }

            }
        }

        return numberUnrepeateds;
   }


console.log(mostRepeated(array));