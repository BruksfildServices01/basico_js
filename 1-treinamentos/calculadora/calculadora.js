var guarda = '' 
var resultado 
var btnN = document.querySelectorAll('.btn')
var display = document.querySelector('.display')
var equals = document.querySelector('.equals')
var clear = document.querySelector('.clear')
var correct = document.querySelector('.correct')




btnN.forEach(function(btn){
    btn.addEventListener('click', function(){
       guarda += btn.innerHTML

        display.textContent = guarda
     
    })
})

equals.addEventListener('click', function(){
    console.log('teste')
    resultado = eval(guarda);
    display.textContent = resultado
})

clear.addEventListener('click', function(){
   
     guarda = ""
     display.textContent = 0
  
 })

 correct.addEventListener('click', function(){
   // Converte a string em uma matriz (array) de caracteres
   var caracteres = guarda.split('');

   // Remove o último elemento da matriz
   caracteres.pop();

   // Converte a matriz de volta para uma string
   guarda = caracteres.join('');

   // Exibe a string atualizada no display
   display.textContent = guarda;
  
 })
