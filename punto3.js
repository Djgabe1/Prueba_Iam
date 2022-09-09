let num1 = prompt('Ingresa el primer numero entre 1 y 10');
let num2 = prompt('Ingresa el segundo numero entre 1 y 10');
let num3 = prompt('Ingresa el tercer numero entre 1 y 10');



document.write('Los numeros ingresados por el usuario son: ' + num1 + ", " + num2 + ", " + num3 + '<br/>' );

const arreglo1 = [];
const arreglo2 = [];
const arreglo3 = [];

// Validacion de num1 
if(num1 <=10 && num1 >0){
for (let i=1; i <= num1; i++){
    
    document.write('*');    
}
document.write('<br/>');
}else{
    document.write('Lo sentimos el numero ' + num1 + ' no es valido');
    document.write('<br/>');
} 

// Validacion num 2
 if (num2 <=10 && num2 >0){
    for (let i=1; i <= num2; i++){
        
        document.write('*');
    }
    document.write('<br/>');
}else{
    document.write('Lo sentimos el numero ' + num2 + ' no es valido');
    document.write('<br/>');

}
// Validacion num 3
if(num3 <=10 && num3 >0){
    for (let i=1; i <= num3; i++){
            
        document.write('*');
    }
    document.write('<br/>');
}else{
    document.write('Lo sentimos el numero ' + num3 + ' no es valido');

}