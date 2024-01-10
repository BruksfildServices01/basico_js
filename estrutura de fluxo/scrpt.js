/*Sintaxe Básica

1 - Variáveis
Variáveis são usadas para armazenar dados.
Em JavaScript, você pode declarar variáveis usando let, const, ou var (mas var é menos usado atualmente por questões de escopo).
Exemplo:
 */

let nome = "João";
const ANO_NASCIMENTO = 1990;

/*
2 - Tipos de Dados

Os principais tipos de dados em JavaScript são: String, Number, Boolean, null, undefined, Object, e Array.
Exemplos:
 */
let nome2 = "Maria"; // String
let idade = 30; // Number
let isEstudante = true; // Boolean
let endereco = null; // null
let cor; // undefined
let objeto = { nome: "João", idade: 30 }; // Object
let numeros = [1, 2, 3, 4, 5]; // Array




/*
3 - Operadores
JavaScript inclui operadores aritméticos (+, -, *, /), de atribuição (=), de comparação (==, ===, !=, !==, >, <, >=, <=) e lógicos (&&, ||, !).
Exemplos:
*/

let soma = 5 + 10; // 15
let isMaiorIdade = idade >= 18; // true ou false
let isJovem = idade < 30 && isEstudante; // true ou false

/*Strings

4-Cadeias de caracteres, usadas para texto.
Podem ser manipuladas e combinadas.
Exemplos:
 */

let saudacao = "Olá, " + nome; // Concatenação
let comprimento = nome.length; // Comprimento da string


/*
5-Estruturas de Controle

Usadas para controlar o fluxo do programa.
Incluem if...else, switch, e loops (for, while).
Exemplos: 
 */

if (idade > 18) {
    console.log("Adulto");
} else {
    console.log("Menor de idade");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

