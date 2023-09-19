function comprarLeiteCondensado() {
  console.log("Está indo na padaria");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mensagem = "Foi atropelado";

      reject(mensagem);
    }, 5000);
  });
}

function fazerBrigadeiro() {
  console.log("Fazendo brigadeiro");
}

function comprarLeiteCondensadoEFazerBrigadeiroFetchApi() {
  comprarLeiteCondensado()
    .then((mensagem) => {
      console.log(mensagem);
      fazerBrigadeiro();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      console.log("Script concluido");
    });
}

// comprarLeiteCondensadoEFazerBrigadeiroFetchApi();

async function comprarLeiteCondensadoEFazerBrigadeiroAsyncAwait() {
  try {
    const retorno = await comprarLeiteCondensado();
    console.log(retorno);
    fazerBrigadeiro();
  } catch (error) {
    console.log(error);
  }
  console.log("Script concluído");
}

comprarLeiteCondensadoEFazerBrigadeiroAsyncAwait();
