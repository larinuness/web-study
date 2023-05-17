const alunos = [
    {nome: 'Larissa', nota: 9.9, bolsista: true},
    {nome: 'Viviane', nota: 7.5, bolsista: true},
    {nome: 'Cido', nota: 6.6, bolsista: false},
    {nome: 'Victória', nota: 7, bolsista: false},
];

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce((acumulador,atual) => {
    console.log(acumulador,atual);
    return acumulador + atual;
}, 10)

const resultado2 = alunos.map(a => a.nota).reduce((acumulador,atual) => {
    console.log(acumulador,atual);
    return acumulador + atual;
},)

console.log(resultado);

console.log(resultado2);