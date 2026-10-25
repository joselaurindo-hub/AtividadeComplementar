const calcularValor = require('./calculo');

function exibirRelatorio(clientes, pesos, servicos) {
    let totalAReceber = 0;
    let quantidadeDelicadas = 0;
    let maiorPeso = pesos[0];
    let clienteMaiorPeso = clientes[0];

    console.log('\n========== RELATORIO DA LAVANDERIA ==========');

    for (let i = 0; i < clientes.length; i++) {
        let nomeServico;

        switch (servicos[i]) {
            case 1:
                nomeServico = 'Roupas comuns';
                break;
            case 2:
                nomeServico = 'Roupas delicadas';
                break;
            case 3:
                nomeServico = 'Edredons';
                break;
        }

        let valor = calcularValor(pesos[i], servicos[i]);

        totalAReceber += valor;

        if (servicos[i] === 2) {
            quantidadeDelicadas++;
        }

        // O sinal > mantém o primeiro cadastro em caso de empate.
        if (pesos[i] > maiorPeso) {
            maiorPeso = pesos[i];
            clienteMaiorPeso = clientes[i];
        }

        console.log(`\nAtendimento ${i + 1}`);
        console.log(`Cliente: ${clientes[i]}`);
        console.log(`Peso: ${pesos[i].toFixed(2)} kg`);
        console.log(`Servico: ${nomeServico}`);
        console.log(
            `Valor a cobrar: R$ ${valor.toFixed(2)}`
        );
    }

    console.log('\n=============== RESUMO FINAL ===============');
    console.log(
        `Total a receber: R$ ${totalAReceber.toFixed(2)}`
    );
    console.log(
        `Atendimentos de roupas delicadas: ${quantidadeDelicadas}`
    );
    console.log(`Cliente de maior peso: ${clienteMaiorPeso}`);
    console.log(`Maior peso: ${maiorPeso.toFixed(2)} kg`);
    console.log('============================================\n');
}

module.exports = exibirRelatorio;