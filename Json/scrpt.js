
/*Trabalhando com JSON em JavaScript
Analisando JSON (Parsing)
Para converter uma string JSON em um objeto JavaScript, você usa JSON.parse().*/

var jsonString = '{"nome":"João","idade":30}';
var obj = JSON.parse(jsonString);

console.log(obj.nome); // João

/*Convertendo Objeto em JSON (Stringify)
Para converter um objeto JavaScript em uma string JSON, você usa JSON.stringify(). */




/*Carregar JSON Usando HTML e JavaScript
Se você estiver trabalhando em um ambiente que suporta HTML (como um navegador), você pode usar um input do tipo file para carregar o JSON.*/

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var jsonObj = JSON.parse(e.target.result);
        console.log(jsonObj); // Agora você tem o JSON carregado
    };

    reader.readAsText(file);
});
