
---

# Projeto de Funções Matemáticas e Utilitárias

Este projeto contém uma série de funções matemáticas e utilitárias implementadas em JavaScript, juntamente com testes automatizados usando Jest para garantir que o código esteja funcionando corretamente.

## Funcionalidades

As seguintes funções estão implementadas no projeto:

1. **Funções Matemáticas:**
   - `somar(a, b)`: Soma dois números.
   - `sub(a, b)`: Subtrai o segundo número do primeiro.
   - `mul(a, b)`: Multiplica dois números.
   - `div(a, b)`: Divide o primeiro número pelo segundo.
   - `mod(a, b)`: Calcula o módulo (resto da divisão).
   - `exp(a, b)`: Calcula a exponenciação (eleva o primeiro número à potência do segundo).
   - `raiz(a)`: Calcula a raiz quadrada do número.
   - `quadrado(a)`: Calcula o quadrado de um número.
   - `cubo(a)`: Calcula o cubo de um número.
   - `media(a, b)`: Calcula a média de dois números.
   - `max(a, b)`: Retorna o maior número entre dois valores.
   - `min(a, b)`: Retorna o menor número entre dois valores.

2. **Funções Utilitárias:**
   - `potencia(base, expoente)`: Eleva o primeiro número à potência do segundo.
   - `Par(numero)`: Verifica se um número é par.
   - `maiorNumero(a, b)`: Retorna o maior número entre dois números.
   - `converterMaiuscula(str)`: Converte uma string para maiúsculas.
   - `inverter(str)`: Inverte uma string.
   - `fatorial(n)`: Calcula o fatorial de um número.
   - `Palindromo(str)`: Verifica se uma string é um palíndromo.
   - `calculaMedia(arr)`: Calcula a média de um array de números.
   - `celsiusParaFahrenheit(celsius)`: Converte uma temperatura de Celsius para Fahrenheit.
   - `removeDuplicatas(arr)`: Remove duplicatas de um array.
   - `retornaPares(arr)`: Retorna os números pares de um array.
   - `contaCaracter(str, char)`: Conta quantas vezes um caractere específico aparece em uma string.

## Instalação

Para utilizar este projeto, siga as instruções abaixo:

### 1. Clonar o Repositório

Clone o repositório em seu computador:

```bash
git clone https://github.com/seu-usuario/projeto-funcoes-matematicas.git
cd projeto-funcoes-matematicas
```

### 2. Instalar Dependências

Este projeto utiliza o Jest para realizar os testes. Para instalá-lo, execute:

```bash
npm install jest --save-dev
```

Isso irá instalar todas as dependências necessárias, incluindo o Jest.

## Rodando os Testes

### 1. Executando os Testes

Para rodar os testes com Jest, basta usar o seguinte comando:

```bash
npx jest
```

Ou, se preferir, pode rodar os testes com o comando npm:

```bash
npm run test
```

### 2. Testes Disponíveis

O Jest irá automaticamente procurar por arquivos que terminam com `.test.js` ou `.spec.js` e executará os testes definidos nesses arquivos.

Os testes são definidos no arquivo `somar.teste.js`, onde as funções implementadas são testadas com diferentes entradas e saídas esperadas.

## Estrutura do Projeto

A estrutura do seu projeto deve ser algo como:

```
/projeto-funcoes-matematicas]
├── node_modules        # Pacotes de dependência do Node.js
├── somar.js            # Arquivo com as funções matemáticas e utilitárias
├── somar.teste.js      # Arquivo com os testes automatizados
├── package.json        # Arquivo com as dependências e scripts
└── README.md           # Este arquivo
```
---
