function haOnzeDigitos(cpf) {
    if (cpf.length != 11) {
    return false
    }
    return true
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    for (let i = 0; i < cpf.length; i++) {
        if (isNaN(Number(cpf[i]))) {
            return false
        }
    }
    return true        
}

function osOnzeNumerosSaoDiferentes(cpf) {
    //---- edite aqui para a validação do exercício 9c
    for (let i = 0; i < cpf.length; i++) {
        let digito = i
        for (let j = 0; j < cpf.length; j++) {
            if (cpf[j] != digito) {
                return true
            }        
        }
        return true;
    }
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    let cpfBase = cpf.slice(0, 9)

    let soma = 0;
    let peso = 10;

    for(let i = 0; i < cpfBase.length; i++) {
        soma += parseInt(cpfBase[i]) * peso;
        peso--;

    }

    let resto = soma % 11;

    if (resto < 2) {
        digito = 0;
    } else {
        digito = 11 - resto;
    }

    return digito == parseInt(cpf[9]);

}

function oSegundoDigitoVerificadorEhValido(cpf) {
    let cpfBase = cpf.slice(0, 10)

    let soma = 0;
    let peso = 11;

    for(let i = 0; i < cpfBase.length; i++) {
        soma += parseInt(cpfBase[i]) * peso;
        peso--;

    }

    let resto = soma % 11;

    if (resto < 2) {
        digito = 0;
    } else {
        digito = 11 - resto;
    }

    return digito == parseInt(cpf[10]);

}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }

    
}