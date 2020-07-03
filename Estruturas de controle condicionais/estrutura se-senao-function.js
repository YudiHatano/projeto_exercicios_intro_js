function acaoBotao() {
    var valor1, valor2, resultado, operacao

    alert("A proposta desse programa e calcular dois valores baseados na operacao de sua escolha.")
    valor1 = prompt("Qual o primeiro valor? ")
    operacao = prompt("Escolha uma das operacoes: -, +, /, * :")
    valor2 = prompt("Qual o segundo valor? ")

    if(operacao == "+"){ //<-----------------------------------
       resultado = parseInt(valor1) + parseInt(valor2)
    }else if(operacao == "-"){
      resultado = parseInt(valor1) - parseInt(valor2)    
    }else if(operacao == "*"){
       resultado = parseInt(valor1) * parseInt(valor2)
    }else if(operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
}

    document.getElementById("paragrafo").innerText = "O seu resultado e: " + resultado
    
}

