function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    let regiaoFiscal = undefined
    if (cpfInformado.length != 11) {
        console.log("CPF inválido")
        return regiaoFiscal // breca o código
    }

    var numero_regiao = cpfInformado.charAt(cpfInformado.length - 3);
    switch (numero_regiao) {
        case "0":
            regiaoFiscal = "RS"
            break
        case "1":
            regiaoFiscal = "DF, GO, MT, MS, TO"
            break
        case "2":
            regiaoFiscal = "AC, AM, AP, PA, RO, RR"
            break
        case "3":
            regiaoFiscal = "CE, MA, PI"
            break
        case "4":
            regiaoFiscal = "AL, PB, PE, RN"
            break
        case "5":
            regiaoFiscal = "BA, SE"
            break
        case "6":
            regiaoFiscal = "MG"
            break
        case "7":
            regiaoFiscal = "ES, RJ"
            break
        case "8":
            regiaoFiscal = "SP"
            break
        case "9":
            regiaoFiscal = "PR, SC"
            break
        default:
            console.log("CPF inválido")
            break
    }
    console.log(cpfInformado)
    
    return regiaoFiscal
}



function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: "+regiaoFiscal
}
