const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar
falar();

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()

function idadePessoa() {
    this.idade = 0

    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000)
}

new idadePessoa