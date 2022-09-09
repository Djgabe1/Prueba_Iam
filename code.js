let arregloPares = new Array();
let resultado;



for( let i= 0; i <= 20; i++){
    resultado = arregloPares.push(i);
  
   if(resultado%2 == 0){
    document.write(resultado + "  ");
}    
}
