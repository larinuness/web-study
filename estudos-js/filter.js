const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Copo', preco: 20, fragil: true},
    {nome: 'Caderno', preco: 24, fragil: false},
]

console.log(produtos.filter((p) => p.fragil == true));

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));