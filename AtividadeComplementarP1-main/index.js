const readline = require('readline-sync');

const cadastrarAtendimentos = require('./cadastro');
const exibirRelatorio = require('./relatorio');

// Arrays unidimensionais para armazenar os dados.
let clientes = [];
let pesos = [];
let servicos = [];

let cadastroRealizado = false;
let opcao;

// O menu continua aparecendo ate o usuario escolher encerrar.
do {
    console.log('\n========== MENU DA LAVANDERIA ==========');
    console.log('1 - Cadastrar atendimentos');
    console.log('2 - Exibir relatorio');
    console.log('0 - Encerrar');
    console.log('========================================');

    opcao = readline.question('Escolha uma opcao: ');

    switch (opcao) {
        case '1':
            cadastrarAtendimentos(clientes, pesos, servicos);
            cadastroRealizado = true;
            break;

        case '2':
            if (!cadastroRealizado) {
                console.log(
                    '\nCadastre os atendimentos antes de exibir o relatorio.'
                );
            } else {
                exibirRelatorio(clientes, pesos, servicos);
            }
            break;

        case '0':
            console.log('\nPrograma encerrado. Ate mais!');
            break;

        default:
            console.log(
                '\nOpcao inexistente. Escolha 1, 2 ou 0.'
            );
    }
} while (opcao !== '0');