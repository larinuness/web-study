const peso1 = 1.0;

//outra forma de declarar
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.655
const avaliacao2 = 7.412

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); // em binário
console.log(media.toString());
console.log(typeof media);