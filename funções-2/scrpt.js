/*Funções Imediatamente Invocadas (IIFE)
Uma IIFE (Immediately Invoked Function Expression) é uma função que é executada assim que é definida. É uma técnica comum para criar escopos locais. */

(function() {
    var nomeLocal = "Privado";
    console.log(nomeLocal); // Imprime "Privado"
})();
// 'nomeLocal' não é acessível fora da IIFE


/*Closure (Fechamento)
Closure ocorre quando uma função tem acesso a variáveis de uma função externa que já retornou. São importantes para a criação de funções privadas e poderosas em JavaScript. */


function fabricaSaudacao() {
    var saudacao = "Olá";
    return function(nome) {
        console.log(saudacao + ' ' + nome);
    }
}

var saudar = fabricaSaudacao();
saudar("Maria"); // Imprime "Olá Maria"



/*Funções de Alta Ordem
São funções que operam em outras funções, seja tomando-as como argumentos ou retornando-as. São a base para técnicas como callbacks e funções de array como map, filter, e reduce. */

function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
}

var resultado = aplicarOperacao(5, 5, function(x, y) {
    return x + y;
});

console.log(resultado); // Imprime 10



/*Callbacks
Um callback é uma função passada como argumento para outra função. Esta técnica é usada para executar código após a conclusão de uma operação assíncrona. */

function buscarDados(id, callback) {
    // Simula buscar dados de forma assíncrona
    setTimeout(() => {
        callback({ id: id, nome: "João" });
    }, 1000);
}

buscarDados(1, function(dados) {
    console.log(dados); // Executado após 1 segundo
});



/*Promises
Promises são usadas para operações assíncronas. Elas representam um valor que pode estar disponível agora, no futuro, ou nunca. */

function buscarDados(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, nome: "João" });
        }, 1000);
    });
}

buscarDados(1)
    .then(dados => console.log(dados))
    .catch(erro => console.error(erro));



    /*Async/Await
async e await são extensões das promises e simplificam a escrita de código assíncrono de forma mais legível. */


async function buscarDadosAsync(id) {
    let dados = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, nome: "João" });
        }, 1000);
    });

    console.log(dados);
}

buscarDadosAsync(1); // Executa assincronamente
