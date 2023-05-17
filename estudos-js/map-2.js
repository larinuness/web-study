const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 15.50}',
  '{"nome": "Apontador", "preco": 5}',
  '{"nome": "Tesoura", "preco": 8.75}',
];

// Retorna um array apenas com os preços
const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);