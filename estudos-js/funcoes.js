// Função sem retorno

function imprimirSoma(a, b) {
 console.log(a + b);
}

imprimirSoma(2,2);
imprimirSoma(2);
imprimirSoma(2,2,4);
imprimirSoma();

// Função com retorno

function soma(a,b = 1) {
    return a+b;
}

console.log(soma(3,3));
console.log(soma(1));
console.log(soma());