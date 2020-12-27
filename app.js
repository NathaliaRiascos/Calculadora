'use strict'

const teclasNumeros  = document.querySelector('#numeros');
const operation = document.querySelector('#operation');
const equal = document.querySelector('#equal');
const showResult = document.querySelector('#showResult');
const clear = document.querySelector('#clear');

//Añade los botones numericos

document.addEventListener("DOMContentLoaded",() => {

     for(let i=9 - 1; i >= 0; i--){
          teclasNumeros.innerHTML += `<button class="contenedor_fondo">${i+1}</button>`;
     }           
})

//Detecta si se hizo click en un numero u operador

document.addEventListener('click', e => {

     //Muestra los numeros y operacion seleccionada
     if(e.target.tagName === 'BUTTON' && e.target.innerText !== '=' && 
          e.target.innerText !== 'C'){

          //Si el resultado es un 0 no se añadira
          if(operation.value === "0"){
               console.log(operation.value)
               operation.value = '';             
          }


          //operation.value += Number(operation.value).toFixed(3)
          
          operation.value += e.target.innerText;


          //Hace un llamado para realizar la operación
          equal.addEventListener('click', () => {

               let operations = operation.value;
               let operator = "";
               let contador =0;
     
               for(let i=0; i<operations.length; i++){

                    if(operations[i] === '/' || operations[i] === '*' ||
                         operations[i] === '+' || operations[i] === '-' ){

                         contador +=1;
                         operator = operations[i];
                         const cadena = operations.split(operator);
                         
                         //Si se agrega otro operador no se realiza la operación
                         if(contador>1){
                              alert('Solo es posible una operacion a la vez')
                              operation.value = ''
                              showResult.innerText = 0
                              return; 
                         }

                         //Llamado a realizar y mostrar operacion    
                         performOperation(operator, Number(cadena[0]),Number(cadena[1])); 
                         hayDecimal(Number(operation.value))
                         showResultOperation(Number(operation.value));
                         
                    }     
               }
          })
          
          
          clear.addEventListener('click', () => {
               operation.value = '';  
               showResult.innerText = 0;
          })
     

          const performOperation = (operator,num1,num2) =>{
 
               switch(operator){
                    case '/': if(num2 !== 0){
                                   operation.value = num1/num2;
                              }else{
                                   alert('No puedes dividir por 0')  
                              }                   
                              break;
                    case '*': 
                              operation.value = num1*num2;
                              break;
                    case '+': 
                              operation.value = num1+num2;
                              break;
                    case '-': 
                              operation.value = num1-num2;
                              break;
                    default: break;
               }
          }    

          const showResultOperation = result => {

               if(result % 1 === 0){ 
                    showResult.innerText = result;
               }else{  
                    console.log(typeof(showResult.innerText),showResult.innerText)
                    showResult.innerText = result.toFixed(3)             
               }
          }

          const hayDecimal = numero => {
               if(numero % 1 === 0){ 
                    operation.value = numero;
               }else{  
                    operation.value = numero.toFixed(3)             
               }
          }

     }



     return;
})
