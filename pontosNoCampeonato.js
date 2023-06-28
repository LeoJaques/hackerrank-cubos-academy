function solucao(resultados) {
	//seu codigo aqui
    let totalPontos = 0
    const tabelaDePontos = {
        V: 3,
        E: 1,
        D: 0
    }
    for (let n of resultados){
       for (let i in tabelaDePontos){
    		if (i === n){
        		totalPontos += tabelaDePontos[i]
    		}
    	} 
    }
    
	
    console.log(totalPontos)
}