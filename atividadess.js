// 1. Função de Soma
// Crie uma função chamada `soma` que recebe dois parâmetros `a` e `b`.
// Dentro da função, declare uma variável chamada `resultado` que armazene a soma de `a` e `b`.
// Retorne `resultado` e armazene-o dentro de uma variavel chamada `somaResultado`, e imprima-a no console.

function soma(a, b) {
    let resultado = a + b
    return resultado;
}
var somaResultado = soma(5, 3);
console.log(somaResultado);


// 2. Concatenação de Strings
// Escreva uma função chamada `concatenaNomes` que recebe dois parâmetros `nome` e `sobrenome`.
// Retorne uma string que concatene `nome` e `sobrenome`, separando-os por um espaço e armazene-a em uma variavel chamada "nomeCompleto". Imprima-a no terminal.


function concatenaNomes(nome, sobrenome) {
    var nomeCompleto = nome + " " + sobrenome;
    return nomeCompleto;
}
var resultado = concatenaNomes("thalia", "schmitz");

// Imprime o nome completo no console
console.log(resultado);

// 3. Maiúsculas
// Crie uma função chamada `maiuscula` que recebe uma string `texto`.
// Dentro da função, utilize o método `toUpperCase()` para converter `texto` em letras maiúsculas.
// Imprima o resultado no console.

function maiuscula(texto) {
    let resultado = texto.toUpperCase();
    console.log(resultado);
}
maiuscula("olá, mundo!");


// 4. Número de Caracteres
// Escreva uma função chamada `contarCaracteres` que recebe uma string `texto`.
// Declare uma variável chamada `quantidade` que armazene o comprimento da string usando `length`.
// Retorne `quantidade` e armazene o retorno em uma variável de escopo global. Imprima esta variavel no terminal.

let totalCaracteres;

function contarCaracteres(texto) {
    let quantidade = texto.length;
    return quantidade;
}
totalCaracteres = contarCaracteres("Olá, mundo!");
console.log(totalCaracteres);

// 5. Último Elemento de um Array
// Crie uma função chamada `ultimoElemento` que recebe um array `array`.
// Declare uma variável chamada `ultimo` que armazene o último elemento do array usando `array[array.length - 1]`.
// Retorne `ultimo`.

function ultimoElemento(array) {
    var ultimo = array[array.length - 1];
    return ultimo;
}
var resultado = ultimoElemento([10, 20, 30, 40, 50]);
console.log(resultado);

// 6. Remover Último Elemento de um Array
// Escreva uma função chamada `removeUltimo` que recebe um array `array`.
// Utilize o método `slice()` para retornar um novo array sem o último elemento.

function removeUltimo(array) {
    return array.slice(0, array.length - 1);
}
var resultado = removeUltimo([1, 2, 3, 4, 5]);
console.log(resultado); 