/*Arrays
Arrays em JavaScript são usados para armazenar múltiplos valores em uma única variável. Eles são listas ordenadas que podem conter diferentes tipos de dados.
Declaração de Arrays */
let frutas = ["Maçã", "Banana", "Laranja"];
/*Acessando Elementos do Array*/
console.log(frutas[0]); // Acessa o primeiro elemento: Maçã






/*Métodos Comuns de Arrays
Adicionar/Remover Elementos*/
frutas.push("Uva"); // Adiciona ao final
frutas.pop(); // Remove o último elemento
frutas.unshift("Morango"); // Adiciona ao início
frutas.shift(); // Remove o primeiro elemento
/*Encontrar Elementos */
let indice = frutas.indexOf("Banana"); // Retorna o índice de Banana


/*terar sobre Arrays
Usando forEach: */
frutas.forEach(function(item, indice) {
    console.log(item, indice);
});


/*Transformar Arrays
map, filter, reduce:*/

let numeros = [1, 2, 3, 4, 5];
let quadrados = numeros.map(x => x * x); // Eleva cada número ao quadrado
let pares = numeros.filter(x => x % 2 === 0); // Filtra números pares
let soma = numeros.reduce((acumulador, x) => acumulador + x, 0); // Soma todos os números

