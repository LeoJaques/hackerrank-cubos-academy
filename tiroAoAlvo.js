function solucao(disparos) {
	//seu codigo aqui
    let acertosAcimaDe70 = 0
    for (let i of disparos){	
        if (i > 70){
            acertosAcimaDe70++
        }
    }
    if (!acertosAcimaDe70 || acertosAcimaDe70 < 3){
        console.log('ELIMINADO')
    } else {
        console.log(acertosAcimaDe70)
    }
}