/*Declaração de Função
1. Sintaxe Básica

Uma função é declarada usando a palavra-chave function, seguida pelo nome da função, parênteses () e um bloco de código entre chaves {}.
Exemplo: */

function saudacao() {
    console.log("Olá, mundo!");
}

/*2. Chamando uma Função

Para executar a função, você "chama" ela pelo nome seguido de parênteses.
Exemplo: */

saudacao(); // Imprime: Olá, mundo!



/*Parâmetros e Argumentos
1. Funções com Parâmetros

Funções podem receber parâmetros, que são valores passados para a função para serem usados dentro dela.
Exemplo:*/

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Maria"); // Imprime: Olá, Maria!




/*2. Retorno de Funções

Funções podem retornar valores usando a palavra-chave return.
Quando return é chamado, a função para de executar.
Exemplo:*/
function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 3); // resultado é 8



/*Tipos de Funções
1. Função Anônima

Uma função sem nome. Geralmente atribuída a uma variável ou usada como argumento para outra função.
Exemplo:*/

let quadrado = function(num) {
    return num * num;
};

console.log(quadrado(4)); // Imprime: 16


/*2. Arrow Functions (Funções Flecha)

Uma forma mais curta de escrever funções em ES6.
Útil para funções anônimas de uma linha.
Exemplo: */

const soma = (a, b) => a + b;

console.log(soma(2, 3)); // Imprime: 5

