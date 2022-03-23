let entradaInicial = 2
let conservador = 11.487
let moderado = 13.245
let agressivo = 14.978
let bancaNaBlaze = 1000
let saldoDaBlaze = 0
let totalPerdido = 0
let escolhaDoCliente = conservador
let proximaEntrada
let acertouOuErrou = false


if(escolhaDoCliente === conservador){
    proximaEntrada = entradaInicial + (entradaInicial * conservador/100)
    if(acertouOuErrou === false){
        proximaEntrada = proximaEntrada + (proximaEntrada * conservador/100)
    }
    else{
        proximaEntrada = entradaInicial
    }
}

else if(escolhaDoCliente === moderado){
    proximaEntrada = entradaInicial + (entradaInicial * moderado/100)
    if(acertouOuErrou === false){
        proximaEntrada = proximaEntrada + (proximaEntrada * moderado/100)
    }
    else{
        proximaEntrada = entradaInicial
    }
}

else if(escolhaDoCliente === agressivo){
    proximaEntrada = entradaInicial + (entradaInicial * agressivo/100)
    if(acertouOuErrou === false){
        proximaEntrada = proximaEntrada + (proximaEntrada * agressivo/100)
    }
    else{
        proximaEntrada = entradaInicial
    }
}

bancaNaBlaze -= proximaEntrada
totalPerdido += proximaEntrada