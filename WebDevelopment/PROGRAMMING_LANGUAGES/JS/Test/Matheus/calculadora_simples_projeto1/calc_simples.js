function calculaDora() {
    const pergunta = prompt('Digite a operação (+, -, /, *):');

    const numeroUm = Number(prompt('Digite um número: '));

    const numeroDois = Number(prompt('Digite outro número: '));

    const soma = (a, b) => a + b;
    const multiplicacao = (a, b) => a * b;
    const divisao = (a, b) => a / b;
    const subtracao = (a, b) => a - b;

    if (pergunta === '+'){
        const somadosdois = soma(numeroUm, numeroDois);
        alert('Resultado da soma: ' + somadosdois);
    } else if (pergunta === '-') {
        const subdosdois = subtracao(numeroUm, numeroDois);
        alert('Resultado da subtração: ' + subdosdois);
    } else if (pergunta === '*') {
        const multidosdois = multiplicacao(numeroUm, numeroDois);
        alert('Resultado da multiplicação: ' + multidosdois);
    } else if (pergunta === '/') {
        const divdosdois = divisao(numeroUm, numeroDois);
        alert('Resultado da divisão: ' + divdosdois);
    } else {
        alert('Inváido!')
    }

};

calculaDora();