function calcularValor(peso, servico) {
    let precoPorKg;

    switch (servico) {
        case 1:
            precoPorKg = 12;
            break;
        case 2:
            precoPorKg = 16;
            break;
        case 3:
            precoPorKg = 20;
            break;
        default:
            return 0;
    }

    let valor = peso * precoPorKg;

    if (valor < 25) {
        valor = 25;
    }

    return valor;
}

module.exports = calcularValor;