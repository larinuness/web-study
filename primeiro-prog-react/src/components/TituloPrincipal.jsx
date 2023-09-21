// import do react, não necessário se for a versão 17 ou superior do React.
import React, { useEffect, useState } from "react";

function TituloPrincipal(props) {
  const [titulo, setTitulo] = useState(props.titulo ?? "Olá,mundo");

  useEffect(() => {
    console.log("Título mudou")
  }, []);

  // let titulo = "Olá mundo";
  // if(props.titulo) {
  //   titulo = props.titulo;
  // }

  function clickCallback(evento) {
    alert("Obrigada por clickar em mim!");
  }

  function inputChangeCallBack(event) {
    setTitulo(event.target.value);
  }
  // JSX em ação!
  // Nossa função retorna o HTML do componente
  return (
    <div>
      <h1 onClick={clickCallback}>{titulo}</h1>
      <input
        type="text"
        name="name"
        value={titulo}
        onChange={inputChangeCallBack}
      />
    </div>
  );
}

//Indica a exportação padrão do arquivo
export default TituloPrincipal;
