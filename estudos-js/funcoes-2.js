// Armazenar função em uma variavel
const imprimirSoma = function (a,b) {
    console.log(a + b);
    
}

imprimirSoma(2,2);

// Armazenar função arrow em uma variavel
const soma = (a,b) => {
    return a + b;
}

console.log(soma(1,1));

// Retorno implicito
const subtracao = (a,b) => a - b;

console.log(subtracao(4,1));

// Retorna valor padrão
function somaValorPadrao(a,b,c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;

    return a + b + c;
}

console.log(somaValorPadrao());