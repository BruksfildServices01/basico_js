/*Manipulação de Datas
Datas em JavaScript são tratadas com o objeto Date. Você pode usá-lo para criar, formatar e manipular datas.

Criando Datas
new Date() cria um novo objeto de data com a data e hora atuais.
Você também pode criar datas específicas passando parâmetros.
Exemplo:*/

var agora = new Date();
var dataEspecifica = new Date("2024-01-01");


/*Obtendo Componentes de Data
Métodos como getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds().
Exemplo: */
var ano = agora.getFullYear(); // ex: 2024
var mes = agora.getMonth(); // 0-11 (Janeiro é 0)
var dia = agora.getDate(); // 1-31

/*Formatando Datas
Não há um método direto para formatar datas em estilos diferentes. Você geralmente precisa compor uma string manualmente ou usar bibliotecas como moment.js.
Exemplo: */
var dataFormatada = ano + "-" + (mes + 1) + "-" + (dia + 10); // "2024-01-01"

/*Comparando Datas
Datas podem ser comparadas usando operadores como >, <, ==.
Exemplo:*/
if (dataEspecifica > agora) {
    console.log("hoje")
}
else {
    console.log(dataFormatada)
}


