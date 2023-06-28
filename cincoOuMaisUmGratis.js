function solucao(precos) {
    //seu codigo aqui
    if (precos.length >= 5) {
        const valorMinimo = Math.min(...precos)
        const indiceMinimo = precos.indexOf(valorMinimo)
        precos.splice(indiceMinimo, 1)
    }

    const soma = precos.reduce((acumulador, valorAtual) => acumulador += valorAtual, 0)
    console.log(soma)

}