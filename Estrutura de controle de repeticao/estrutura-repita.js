function acaoBotao(){
    var sairLoop1, sairLoop2, valor1, valor2;

    do { //<---------------------------------------------------
        valor1 = prompt("Digite o primeiro valor: ");
        valor2 = prompt("Digite o segundo valor: ");
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt( valor1 ) + parseInt( valor2 ));
        sairLoop1 = prompt("Deseja sair? S/N");

        sairLoop2 = sairLoop1.toUpperCase();
        
    } while ( sairLoop2 == "N" );
    

}

