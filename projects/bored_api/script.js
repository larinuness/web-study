const frase = document.querySelector("#descricao");
const button = document.querySelector("#gerar");
const container = document.querySelector("#teste");
const link = document.createElement("p");


const url = "http://www.boredapi.com/api/activity";

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicou");
  pegarAtividade();
  if(container.contains(link)) {
    container.removeChild(link);
  }

 
});

async function pegarAtividade() {
  const response = await fetch(url);
  
  const data = await response.json();
  console.log(data);
  
  
  frase.innerHTML = data.activity;

  link.innerText = `Type: ${data.type}`;

  container.appendChild(link);


  

  

}
