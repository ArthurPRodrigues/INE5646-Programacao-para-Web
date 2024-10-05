function fuctionVerificaIntervaloNumeros() {
    var numero = window.prompt("Digite um número: ")

    if (numero >= 30 && numero <= 50) {
        alert(numero + " está no intervalo [30,50].")
    }
    else if (numero >= 60 && numero <= 100) {
        alert(numero + " está no intervalo [60,100].")
    }
    else {
        alert(" O número informado não está em nenhum dos dois intervalos.")
    }

}