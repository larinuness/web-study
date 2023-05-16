// par nome/valor
const saudacao = "Olá" // contexto léxico 1

function exec() {
    const saudacao = "Opa" // contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Larissa',
    idade: 25,
    peso: 66,
    endereco: {
        logradouro: 'Rua de Teste',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);