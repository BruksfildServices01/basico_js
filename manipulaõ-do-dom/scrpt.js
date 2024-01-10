/*O que é o DOM?
O DOM é uma interface de programação para documentos HTML e XML. Ele representa a estrutura da página de forma que os programas podem alterá-la. Cada elemento HTML é um nó no DOM.*/


/*Selecionando Elementos
Antes de manipular o DOM, você precisa selecionar os elementos com os quais deseja trabalhar*/





/*1. document.getElementById(id)
Seleciona um elemento pelo seu ID.
Exemplo:*/
var titulo = document.getElementById("titulo");



/*2. document.querySelector(selector)
Seleciona o primeiro elemento que corresponde ao seletor CSS especificado.
Exemplo:*/
var primeiroParagrafo = document.querySelector("p");


/*3. document.querySelectorAll(selector)
Seleciona todos os elementos que correspondem ao seletor CSS especificado.
Retorna um NodeList.
Exemplo:*/
var todosParagrafos = document.querySelectorAll("p");



/*Manipulando Elementos Depois de selecionar um elemento, você pode manipulá-lo de várias maneiras.

1. Alterar Conteúdo
element.textContent – altera apenas o texto do elemento.
element.innerHTML – altera o HTML interno do elemento.
Exemplos:*/
titulo.textContent = "Novo Título";
primeiroParagrafo.innerHTML = "<strong>Texto em negrito</strong>";


/*2. Alterar Estilo

Você pode modificar o estilo CSS dos elementos.
Exemplo:*/
titulo.style.color = "blue";


/*3. Adicionar ou Remover Classes

element.classList.add('nova-classe')
element.classList.remove('outra-classe')
Exemplo:*/
titulo.classList.add("titulo-destacado");


/*Eventos
Eventos são ações ou ocorrências que acontecem nos elementos da página, como cliques, movimentos do mouse, pressionamento de teclas, etc. O JavaScript pode reagir a esses eventos.*/

/*1. Adicionar um Ouvinte de Eventos
element.addEventListener(event, function)
Exemplo: */
var botao = document.querySelector("button");
botao.addEventListener("click", function() {
    alert("Botão clicado!");
});



/*
exemplo pratico
        var titulo = document.getElementById("titulo");
        var botao = document.getElementById("botao");

        botao.addEventListener("click", function() {
            titulo.style.color = titulo.style.color === "blue" ? "black" : "blue";
        });

*/



