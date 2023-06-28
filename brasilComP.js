function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    let achei = false
    for (let i of palavras){
        let primeiro = primeiraLetra === i[0]
        let segundo = segundaLetra === i[1]
        if (primeiro && segundo){
            console.log(i)
            achei = true
        	} 
        }
     if (!achei){
         console.log('NENHUMA')
     }

}