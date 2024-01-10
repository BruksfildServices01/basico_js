/*
Promessas (Promise)
Uma Promessa em JavaScript é um objeto que representa a conclusão ou falha de uma operação assíncrona. Ela pode estar em um de três estados:

Pending (Pendente): Estado inicial, nem cumprida nem rejeitada.
Fulfilled (Cumprida): Significa que a operação foi completada com sucesso.
Rejected (Rejeitada): Significa que a operação falhou.
Criando uma Promessa
*/
let promessa = new Promise((resolve, reject) => {
    // Fazer algo assíncrono e depois...

    let sucesso = true; // suponha que isto é o resultado de algo assíncrono
    if (sucesso) {
        resolve("Operação bem sucedida");
    } else {
        reject("Falha na operação");
    }
});


/*Consumindo uma Promessa
Você usa .then() para lidar com o sucesso e .catch() para lidar com a falha.*/
promessa
    .then((resultado) => {
        console.log(resultado); // "Operação bem sucedida"
    })
    .catch((erro) => {
        console.log(erro); // "Falha na operação"
    });



/*async/await
async e await são extensões das Promessas que simplificam a sintaxe para trabalhar com operações assíncronas, tornando o código mais legível e fácil de entender.

Funções Assíncronas (async)
Ao declarar uma função como async, você está dizendo que a função sempre retornará uma promessa.
Dentro de funções async, você pode usar await para pausar a execução da função até que a promessa seja resolvida. */

async function operacaoAssincrona() {
    try {
        let resultado = await promessa; // espera a promessa ser resolvida
        console.log(resultado); // "Operação bem sucedida"
    } catch (erro) {
        console.log(erro); // "Falha na operação"
    }
}

/*Usando await
await só pode ser usado dentro de funções async.
Ele faz a função esperar até que a Promessa seja resolvida ou rejeitada.*/




/*Exemplo Prático
Vamos imaginar que você tenha uma função que retorna uma promessa após um tempo, como uma simulação de uma operação de leitura de dados.*/
function lerDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dados = { nome: "João", idade: 30 };
            resolve(dados);
        }, 2000); // simula uma operação que leva 2 segundos
    });
}

async function obterDados() {
    try {
        let dados = await lerDados();
        console.log(dados); // { nome: "João", idade: 30 }
    } catch (erro) {
        console.error(erro);
    }
}

obterDados();


/*Neste exemplo, a função obterDados usa await para aguardar o resultado da função lerDados que retorna uma promessa. Isso torna o código assíncrono mais fácil de escrever e de entender, comparado ao uso de .then() e .catch().*/