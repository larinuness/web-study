const pessoa = {
  nome: "Larissa",
  idade: 25,
  peso: 66,
  endereco: {
    logradouro: "Rua de Teste",
    numero: 123,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: id } = pessoa;
console.log(n, id);

const { sobrenome, humor = true } = pessoa;
console.log(sobrenome, humor);

const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(endereco, numero, cep);
