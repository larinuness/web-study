function tratarErro(erro) {
    throw new Error('Deu bug');
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (error) {
        tratarErro(error);
    } finally { // aconteonce independente se deu certo ou não
        console.log('Finalmente')
    }
    
}

const obj = {name: 'Larissa'};
imprimirNome(obj);