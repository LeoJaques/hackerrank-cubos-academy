function solucao(precos) {
    // seu codigo aqui
    let menorDiferenca = 0
    for (let i of precos) {
        for (let n of precos) {
            if (precos.indexOf(i) < precos.indexOf(n)) {
                if ((i - n) < 0) {
                    continue
                } else if (menorDiferenca === 0) {
                    menorDiferenca = i - n
                } else if ((i - n) < menorDiferenca && (i - n) !== 0) {
                    menorDiferenca = i - n
                }
            }


        }
    }

    console.log(menorDiferenca)
}