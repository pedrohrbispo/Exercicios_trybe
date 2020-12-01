function ispalidrom( word) {
    let trueCondition=0;
    let size= word.length -1;

    for(let index = 0, index2 = size; index < word.length; index+=1 ){

            if(word[index]== word[index2] ){
                trueCondition+=1;
                index2-=1;

        }    
    }

    if(trueCondition == word.length){
        return true;
            } else {
        return false;
       }
}

   console.log(ispalidrom('matam'));
