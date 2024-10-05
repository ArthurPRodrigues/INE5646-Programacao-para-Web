function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s
    let agora = new Date()
    let hora = agora.getHours()
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds()
    if (hora > 12) {
        hora = hora - 12
        alert("Horário: " + hora + " PM : " + minuto + "m : " + segundo + "s")
    }
    else {
        alert("Horário: " + hora + " AM : " + minuto + "m : " + segundo + "s")
    }


}