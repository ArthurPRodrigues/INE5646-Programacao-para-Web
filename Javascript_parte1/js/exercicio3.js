function TratamentoString() {
    var texto = window.prompt("Digite um texto aqui:");

    if (texto) {
        var texto_formatado = texto.split(" ");

        if (texto_formatado.length <= 2) {
            alert("Texto muito curto para formatação.");
        } else {
            texto_formatado.shift(); 
            texto_formatado.pop();   
            texto_formatado = texto_formatado.join(" ");

            alert("String formatada: " + texto_formatado);
        }
    } else {
        alert("Você não digitou nada.");
    }
}
