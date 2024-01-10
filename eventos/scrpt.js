/*Tipos de Eventos
Eventos de Mouse

click: Quando o usuário clica em um elemento.
mouseover: Quando o cursor do mouse passa sobre um elemento.
mouseout: Quando o cursor do mouse sai de um elemento.
mousedown / mouseup: Quando um botão do mouse é pressionado/solto sobre um elemento.
Eventos de Teclado

keydown: Quando uma tecla é pressionada.
keyup: Quando uma tecla é solta.
keypress: Quando uma tecla é pressionada e solta.
Eventos de Formulário

submit: Quando um formulário é enviado.
change: Quando o valor de um campo de formulário muda.
focus: Quando um elemento recebe foco.
blur: Quando um elemento perde foco.
Eventos de Janela

load: Quando a página termina de carregar.
resize: Quando a janela é redimensionada.
scroll: Quando ocorre rolagem na página. */


/*Adicionando Ouvintes de Eventos
A maneira mais comum de responder a eventos em JavaScript é através do método addEventListener.
Sintaxe Básica
elemento.addEventListener('tipoDoEvento', funcaoDeCallback);

*/


/*exemplo*/
var botao = document.querySelector('button');

botao.addEventListener('click', function() {
    alert('Botão clicado!');
});

/*Função de Callback
A função de callback é a função que é executada quando o evento ocorre. Ela pode ser uma função anônima, como no exemplo acima, ou uma função nomeada.

Exemplo com Função Nomeada */

function mostrarAlerta() {
    alert('Botão clicado!');
}

botao.addEventListener('click', mostrarAlerta);

/*Passando Eventos para a Função de Callback
Você pode passar o objeto de evento para a função de callback para obter mais informações sobre o evento.*/

botao.addEventListener('click', function(evento) {
    console.log('Evento:', evento);
    console.log('Tipo do evento:', evento.type);
    console.log('Elemento alvo:', evento.target);
});

/*Removendo Ouvintes de Evento
Para remover um ouvinte de evento, você usa o método removeEventListener. */
botao.removeEventListener('click', mostrarAlerta);


