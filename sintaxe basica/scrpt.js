/*Estruturas Condicionais
a. if, else if, else

Esta é a forma mais básica de controle de fluxo.
if verifica uma condição. Se essa condição for verdadeira (true), o bloco de código dentro de if é executado.
else if pode ser usado para verificar múltiplas condições.
else é executado se nenhuma das condições anteriores for verdadeira.
Exemplo: */

let idade = 20;

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}



/*b. switch

switch é uma alternativa para múltiplos if...else if...else.
Baseia-se na comparação de uma variável com diferentes valores (case).
Exemplo: */

let corFavorita = "verde";

switch (corFavorita) {
    case "vermelho":
        console.log("Você gosta de vermelho");
        break;
    case "verde":
        console.log("Você gosta de verde");
        break;
    default:
        console.log("Cor não identificada");
}


/*2. Estruturas de Repetição (Loops)
a. for

Utilizado para repetir um bloco de código um número específico de vezes.
Exemplo: */

for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}

/*b. while

Executa um bloco de código enquanto uma condição específica for verdadeira.
Exemplo: */

let i = 0;
while (i < 5) {
    console.log("Número: " + i);
    i++;
}


/*c. do...while

Semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez.
Exemplo: */

let j = 0;
do {
    console.log("Número: " + j);
    j++;
} while (j < 5);

