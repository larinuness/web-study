// Selecionar os elementos em var

// input padrão
const inputElement = document.querySelector("#input");
// o tipo do dado do input
const fromElement = document.querySelector("#from");
// o tipo que vai ser convertido
const toElement = document.querySelector("#to");
// os dados de saida
const outputElement = document.querySelector("#output");
// btn de converter
const convertButton = document.querySelector("#convert-btn");
//mensagem final
const messageElement = document.querySelector("#message");

// Converter as unidades

function convert() {
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if (fromValue === toValue) {
    //conversão de tipos iguais
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }

  // Converter a entrada para metros e depois o que restou pra unidade escolhida
  let meters;
  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;
    case "km":
      meters = inputElement.value * 1000;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;
  }

  // Converter metros pra unidade de saida
  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters * 1000;
      break;
    case "cm":
      result = meters / 100;
      break;
    case "mm":
      result = meters / 1000;
      break;
  }
  // Exibir resultado no input e na mensagem
  outputElement.value = result;
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;

  console.log(fromLabel, toLabel);
  // printa pra ver os valores
  console.log(fromValue, toValue);
  console.log(meters, result);

  const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
  messageElement.textContent = message;
  return;
}

convertButton.addEventListener("click", convert);
