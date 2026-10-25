const readline = require('readline-sync');

function cadastrarAtendimentos(clientes, pesos, servicos) {
    // Limpa o cadastro anterior, caso exista.
    clientes.length = 0;
    pesos.length = 0;
    servicos.length = 0;

    for (let i = 0; i < 7; i++) {
        console.log(`\n--- Atendimento ${i + 1} de 7 ---`);

        let nome;

        do {
            nome = readline.question('Nome do cliente: ').trim();

            if (nome === '') {
                console.log('O nome nao pode ficar vazio.');
            }
        } while (nome === '');

        let peso;

        do {
            let entradaPeso = readline.question(
                'Peso das roupas em kg: '
            );

            // Aceita tanto virgula quanto ponto decimal.
            entradaPeso = entradaPeso.replace(',', '.');
            peso = Number(entradaPeso);

            if (!Number.isFinite(peso) || peso <= 0) {
                console.log(
                    'Digite um peso numerico maior que zero.'
                );
            }
        } while (!Number.isFinite(peso) || peso <= 0);

        let servico;

        do {
            console.log('\nServicos disponiveis:');
            console.log('1 - Roupas comuns');
            console.log('2 - Roupas delicadas');
            console.log('3 - Edredons');

            servico = Number(
                readline.question('Escolha o servico (1, 2 ou 3): ')
            );

            if (
                !Number.isInteger(servico) ||
                servico < 1 ||
                servico > 3
            ) {
                console.log(
                    'Opcao invalida. Escolha 1, 2 ou 3.'
                );
            }
        } while (
            !Number.isInteger(servico) ||
            servico < 1 ||
            servico > 3
        );

        // Os dados do mesmo atendimento ocupam o mesmo indice.
        clientes[i] = nome;
        pesos[i] = peso;
        servicos[i] = servico;
    }

    console.log('\nOs 7 atendimentos foram cadastrados com sucesso!');
}

module.exports = cadastrarAtendimentos;