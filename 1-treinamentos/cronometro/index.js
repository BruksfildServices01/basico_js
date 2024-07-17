// difinindo variaveis, controle do tempo e estado do cronometro

let timer; // var para guarda o intervalo do tempo e atualiza o cronometro
let running = false; // var para indicar se o cronometro esta executando
let paused = false; // var para indicar se o cronometro esta pausado
let seconds = 0; // var para guarda os segundos
let minutes = 0; // var para guarda os minutos
let hours = 0; // var para guarda as horas
let lastpausedtime = 0 // var para guarda o tempo no qual o crono foi pausado



// função para inicia  ou pausar o cronometro

function startPause(){
 if (running){
     if(paused){
        // se estiver pausado retornamos a contagem 
        let currenttime = new Date().getTime();// obter milesssgundos
        let pauseduration = (currenttime - lastpausedtime) / 1000; //calcula a duração da pausa em segundos

        seconds += pauseduration // add a duração da pausa aos segundos do crono
        paused = false // atuali o estado do crono para indicar que não esta mais pausado

        document.getElementById('startPause').textContent = 'pausar' // atualiza o texto do html 

        // continuamos atualizando o cronometro
        timer = setInterval(updateTimer, 1000)
     }

     else {
        // se estiver executando, pausamos a contagem 
         clearInterval(timer); // paramos o intervalo de atualizado do cronometro
         paused = true;
         lastpausedtime = new Date().getTime();
         document.getElementById('startPause').textContent = 'continuar'
     }
    }

    else {
        // se o cronometro nao estiver ativo, o executamos
        timer =  setInterval(updateTimer, 1000); // config um intervalo para inicia o cronometro a cada segundo
        running = true  // atuliza o estado do cronometro para indica que esta em execuçao
        document.getElementById('startPause').textContent = 'pausar'
        console.log('inicia')
    }

}

 // função para atualizar o cronometro
function updateTimer(){
    seconds++; // incrementamos os segundos
    if (seconds === 60){
// se os segundos alcança 60,, ingrementmos 1 minuto e zaramos os segundos        
        seconds = 0;
        minutes ++;
        if(minutes = 60){
            // se os minutos alcança 60,, ingrementmos 1 hora e zaramos os minutos        
            minutes = 0;
            hours++
        }
    }

    // atualiza o display do cronometro com o tempo atualizado
    document.getElementById('display').textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function stop(){
    clearInterval(timer);
    running = false; 
    paused = false;
}
