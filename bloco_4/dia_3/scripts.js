let n=5, parametro=0;
let asterisco = ''
for(let index=0; index < n; index += 1){
    for(let index_2 = 0 ; index_2 <=parametro; index_2 += 1){
       asterisco = asterisco + '*';
        
    }
    console.log(asterisco);
    parametro += 1;
    asterisco = '';
}
