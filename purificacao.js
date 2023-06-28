function solucao(stringCorrompida) {
	// seu codigo aqui
    const resp = stringCorrompida.replace(/[!@#$%&*()]/g, '')
    console.log(resp)
}