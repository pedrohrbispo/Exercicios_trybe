let n=5;
let asterisco = ''
for(let index=0; index < n; index += 1){
    for(let index_2= n-1; index_2 >0; index_2 -= 1){
       asterisco= asterisco + ' ';
        
    }
    for(index_3 = 0 ;index_3 < n; index_3 += 1){

        asterisco=asterisco+'*'
    }
    console.log(asterisco);
    asterisco='';
}
