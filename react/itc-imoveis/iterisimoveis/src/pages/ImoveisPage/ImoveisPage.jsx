import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { getImoveis } from "../../services/imovelApiService";
import ImovelCard from "../../components/ImovelCard";
import "./ImoveisPage.css";

function ImoveisPage() {
  const navigate = useNavigate();
  const [listaImoveis, setListaImoveis] = useState([]);

  // O array vazio no useEffect indica que somente deve ser executando uma vez
  useEffect(() => {
    getImoveis().then((data) => {
      setListaImoveis(data);
    });
  }, []);

  function irParaDetalhe(id) {
    navigate(`/imoveis/${id}`);
  }

  return (
    <div className="listaImoveis">
      <h1> Página de Imóveis! </h1>
      <div>
        {listaImoveis.map((item) =>
          <div key={item.id} onClick={() => irParaDetalhe(item.id)} className="listaImoveis__imovelCard">
            <ImovelCard imovel={item} />
          </div>
        )}
      </div>
    </div>
  );
}
export default ImoveisPage;