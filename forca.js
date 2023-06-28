function solucao(palpite, palavra) {
	// seu codigo aqui
    let cont = 0
    
	for (let i of palavra){
        if (i === palpite){
            cont ++
        }
    }
    
    console.log(cont)
}