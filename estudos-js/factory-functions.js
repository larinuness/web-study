function criarProduto(nome,preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 2100.50));
console.log(criarProduto('Computador', 5100.50));