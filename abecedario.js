function solucao(letra, palavras) {
    let cont = 0
    for (let palavra of palavras) {
        if (palavra[0] !== letra) {
            cont++
        }
    }
    console.log(cont)
}
