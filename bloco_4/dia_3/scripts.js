let n=5, parametro=0, parametroSpace =0;
let asterisco = ''
for(let index=0; index < n; index += 1){
    for(let index_3 = 4 ; index_3 >=parametroSpace; index_3 -= 1){
        asterisco = asterisco + ' ';
    }    
    for(let index_2 = 0 ; index_2 <=parametro; index_2 += 1){
       asterisco = asterisco + '*';
        
    }

    console.log(asterisco);
    parametro += 1;
    asterisco = '';
    parametroSpace +=1;

}
