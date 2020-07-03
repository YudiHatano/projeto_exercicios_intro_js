function acaoBotao() {
    var numero, fatorial

    numero = prompt("Qual numero vc quer que seja calculado?")
    fatorial = 1

    for ( var contador = 1; contador <= numero; contador++) { //<-------------------------------------------------
        fatorial = fatorial * contador
    }


    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " e:" + fatorial
    
}