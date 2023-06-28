function solucao(sequencia) {
    let posicao = 0
    const inicio = 0
    const fim = 6
    for (let i of sequencia) {
        if (i === '>') {
            posicao++
            if (posicao === 7) {
                posicao = inicio
            }
        } else if (i === '<') {
            posicao--
            if (posicao === -1) {
                posicao = fim
            }
        }
    }
    console.log(posicao)
}