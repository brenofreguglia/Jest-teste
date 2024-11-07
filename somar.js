function somar(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}
function mul(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}

//  Exercicios que eu fiz por conta propria: 

function mod(a, b) {
return a % b;
}

function exp(a, b) {
return Math.pow(a, b);
}

function raiz(a) {
return Math.sqrt(a);
}

function quadrado(a) {
return a * a;
}

function cubo(a) {
return a * a * a;
}

function media(a, b) {
return (a + b) / 2;
}

function max(a, b) {
return a > b ? a : b;
}

function min(a, b) {
return a < b ? a : b;
} 

// Exercicios:

//  Função de Potência: Utiliza Math.pow(base, expoente) para calcular a potência.
function potencia(base, expoente) {
    return Math.pow(base, expoente);
}

// 2 - Função de Verificação de Paridade: Verifica se o número é divisível por 2, retornando true para números pares.
function Par(numero) {
    return numero % 2 === 0;
}

// 3 - Função para Encontrar o Maior Número: Utiliza a função Math.max() para encontrar o maior número entre dois números.
function maiorNumero(a, b) {
    return a > b ? a : b;
}

// 4 - Função para Converter para Maiúsculas: Utiliza a função toUpperCase() para converter uma string para maiúsculas.
function converterMaiuscula(str) {
    return str.toUpperCase();
}

// 5 - Função para Inverter uma String: Utiliza a função split() e join() para inverter uma string.
function inverter(str) {
    return str.split('').reverse().join('');
}

// 6 - Função de Fatorial: Utiliza a função Math.pow() para calcular o fatorial de um número.
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

// 7- Função de Verificação de Palíndromo: Verifica se a string é igual a ela mesma quando invertida, considerando a normalização (remover espaços e pontuação).
function Palindromo(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    return normalizedStr === normalizedStr.split('').reverse().join('');
}

// 8 - Função para Calcular a Média de um Array: Soma todos os elementos do array e divide por sua quantidade.
function calculaMedia(arr) {
    const soma = arr.reduce((acc, val) => acc + val, 0);
    return soma / arr.length;
}

// 9 - Função de Conversão de Celsius para Fahrenheit: Utiliza a fórmula para conversão.
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 10 - Função para Remover Duplicatas de um Array: Utiliza o método filter() para remover elementos duplicados.
function removeDuplicatas(arr) {
    return [...new Set(arr)];
}

// 11 - Função para Retornar Números Pares de um Array: Utiliza o método filter() para retornar apenas os números pares.
function retornaPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 12 - Função para Contar Caracteres em uma String: Utiliza o método length para contar a quantidade de caracteres.
function contaCaracter(str, char) {
    return (str.match(new RegExp(char, 'g')) || []).length;
}


module.exports = {
    somar,
    sub,
    mul,
    div,
    mod,
    exp,
    raiz,
    quadrado,
    cubo,
    media,
    max,
    min,
    potencia,
    Par,
    maiorNumero,
    converterMaiuscula,
    inverter,
    fatorial,
    Palindromo,
    calculaMedia,
    celsiusParaFahrenheit,
    removeDuplicatas,
    retornaPares,
    contaCaracter
};

