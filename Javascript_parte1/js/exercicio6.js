function InvertedString() {
    var texto = window.prompt("Digite um texto para ser invertido: ");
    if(texto) {
        texto_alterado = texto.split("").reverse().join("");
        alert("Texto invertido: " + texto_alterado);
    } else {

    alert("Nenhum texto foi digitado.");
    }
}
