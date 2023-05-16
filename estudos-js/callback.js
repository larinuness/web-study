const notas = [7.7, 2.5, 8.5, 5.5, 4.5, 2.3, 7.6, 3.9, 8.8, 10];

// Sem callback
let notasBaixas = [];
for (let nota in notas) {
    if(notas[nota] < 7) {
        notasBaixas.push(notas[nota]);
    }
}

console.log(notasBaixas);

// Com callback

notasBaixas = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas);