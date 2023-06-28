function solucao(notas) {

   //seu codigo aqui
   let maiorNota = notas.indexOf(Math.min(...notas))

   notas.splice(maiorNota, 1)
    
	let menorNota = notas.indexOf(Math.max(...notas))

   notas.splice(menorNota, 1)
    
    
    console.log(notas.reduce((acumulador, valorAtual)=> acumulador + valorAtual, 0) / notas.length)

}