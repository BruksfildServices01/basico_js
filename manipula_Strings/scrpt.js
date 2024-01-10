/*Manipulação de Strings
Strings são uma sequência de caracteres usados para representar texto. Em JavaScript, existem várias maneiras de manipular strings.

Métodos Comuns de String*/


/*
Concatenação
Juntar strings.
Exemplo:*/
var string1 = "Olá";
var string2 = "Mundo";
var saudacao = string1 + ", " + string2 + "!"; // "Olá, Mundo!"


/*Tamanho da String
length retorna o comprimento da string.
Exemplo: */
var tamanho = saudacao.length; // 11

/*Acessando Caracteres
Acessar um caractere específico usando índice.
Exempl */
var primeiroChar = saudacao.charAt(0); // "O"


/*Substrings
Extrair partes de uma string.
Exemplo:
 */
var sub = saudacao.substring(0, 3); // "Olá"


/*Substituição
Substituir parte da string.
Exemplo: */
var novaSaudacao = saudacao.replace("Mundo", "Todos"); // "Olá, Todos!"

/*Maiúsculas e Minúsculas
Converter para maiúsculas ou minúsculas.
Exemplo: */
var maiusculas = saudacao.toUpperCase(); // "OLÁ, MUNDO!"
var minusculas = saudacao.toLowerCase(); // "olá, mundo!"

/*Dividindo Strings
split para dividir uma string em um array de strings.
Exemplo: */
var palavras = saudacao.split(", "); // ["Olá", "Mundo!"]
