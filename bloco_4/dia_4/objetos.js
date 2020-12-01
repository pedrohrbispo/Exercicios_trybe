let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function highiestName(names){
    let sizes = [], position=0
    let maior=0
   for(let index=0; index < names.length; index +=1){
       sizes.push (names[index].length);
   }
   for(let index=0; index < sizes.length; index +=1){
        if(sizes[index]> maior){
            maior=sizes[index];
            position=index;
        }
    }
    return names[position];
}

console.log(highiestName(array));