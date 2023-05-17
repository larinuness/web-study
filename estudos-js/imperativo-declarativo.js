const alunos = [
    {nome: 'Larissa', nota: 9.9, bolsista: true},
    {nome: 'Viviane', nota: 7.5, bolsista: true},
    {nome: 'Cido', nota: 6.6, bolsista: false},
    {nome: 'Victória', nota: 7, bolsista: false},
];

// imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}

console.log(total1 / alunos.length);

// declarativo
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma);

console.log(total2 / alunos.length);