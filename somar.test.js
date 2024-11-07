const { somar, sub, mul, div, mod, exp, raiz, quadrado, cubo, media, max, min, potencia, Par, maiorNumero, converterMaiuscula, inverter, fatorial, Palindromo, 
  calculaMedia, celsiusParaFahrenheit, removeDuplicatas, retornaPares, contaCaracter } = require('./Somar');

test('Estou somando 2 números', () => {
  expect(somar(2, 2)).toBe(4);
});

test('Estou subtraindo 2 números', () => {
  expect(sub(2, 2)).toBe(0);
});

test('Estou multiplicando 2 números', () => {
  expect(mul(2, 2)).toBe(4);
});

test('Estou dividindo 2 números', () => {
  expect(div(2, 2)).toBe(1);
});

test('Estou calculando o módulo de 2 números', () => {
  expect(mod(5, 3)).toBe(2); 
});

test('Estou calculando a exponenciação de 2 números', () => {
  expect(exp(2, 3)).toBe(8); 
});

test('Estou calculando a raiz quadrada de um número', () => {
  expect(raiz(9)).toBe(3); 
});

test('Estou calculando o quadrado de um número', () => {
  expect(quadrado(4)).toBe(16); 
});

test('Estou calculando o cubo de um número', () => {
  expect(cubo(3)).toBe(27); 
});

test('Estou calculando a média de 2 números', () => {
  expect(media(4, 6)).toBe(5); 
});

test('Estou encontrando o maior entre 2 números', () => {
  expect(max(3, 5)).toBe(5); 
});

test('Estou encontrando o menor entre 2 números', () => {
  expect(min(3, 5)).toBe(3); 
});

test('Estou elevando 2 à potência de 3', () => {
  expect(potencia(2, 3)).toBe(8);
});

test('Estou verificando se 4 é par', () => {
  expect(Par(4)).toBe(true);
});

test('Estou verificando se 5 é par', () => {
  expect(Par(5)).toBe(false);
});

test('Estou encontrando o maior número entre 10 e 20', () => {
  expect(maiorNumero(10, 20)).toBe(20);
});

test('Estou convertendo "abc" para maiúsculas', () => {
  expect(converterMaiuscula("abc")).toBe("ABC");
});

test('Estou invertendo a string "hello"', () => {
  expect(inverter("hello")).toBe("olleh");
});

test('Estou calculando o fatorial de 5', () => {
  expect(fatorial(5)).toBe(120);
});

test('Estou verificando se "arara" é um palíndromo', () => {
  expect(Palindromo("arara")).toBe(true);
});

test('Estou calculando a média do array [10, 20, 30]', () => {
  expect(calculaMedia([10, 20, 30])).toBe(20);
});

test('Estou convertendo 0°C para Fahrenheit', () => {
  expect(celsiusParaFahrenheit(0)).toBe(32);
});

test('Estou removendo duplicatas do array [1, 2, 2, 3]', () => {
  expect(removeDuplicatas([1, 2, 2, 3])).toEqual([1, 2, 3]);
});

test('Estou retornando os números pares do array [1, 2, 3, 4]', () => {
  expect(retornaPares([1, 2, 3, 4])).toEqual([2, 4]);
});

test('Estou contando quantas vezes o caractere "a" aparece em "Macarronada"', () => {
  expect(contaCaracter("Macarronada", "a")).toBe(4);
});