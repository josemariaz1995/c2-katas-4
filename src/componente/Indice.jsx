import { useState } from "react";

export const Indice = () => {
  let [indice, setIndice] = useState(0);
  let [pagina, setPagina] = useState("");
  const numeros = [
    { id: 0, numero: indice },
    { id: 1, numero: indice + 1 },
    { id: 2, numero: indice + 2 },
    { id: 3, numero: indice + 3 },
    { id: 4, numero: indice + 4 },
  ];
  const sumarIndice = () => {
    if (indice === 16) {
      return;
    }
    setIndice(++indice);
  };
  const restarIndice = () => {
    if (indice === 0) {
      return;
    }
    setIndice(--indice);
  };
  const display = (posicion) => {
    setPagina(posicion + indice);
    console.log(pagina);
  };
  return (
    <>
      <div className="contador row py-5">{`Pagina ${pagina}`}</div>
      <div className="row align-items-center indice">
        <div
          className="col  border border-right-0"
          onClick={restarIndice}
        >{`<<`}</div>
        {numeros.map((numero) => (
          <div
            key={numero.id}
            className="col border"
            onClick={() => {
              display(numero.id);
            }}
          >
            {numero.numero}
          </div>
        ))}
        {/* <div className="col border" onClick={display}>
          {indice}
        </div>
        <div className="col border" onClick={display}>
          {indice + 1}
        </div>{" "}
        <div className="col border" onClick={display}>
          {indice + 2}
        </div>
        <div className="col border" onClick={display}>
          {indice + 3}
        </div>
        <div className="col border" onClick={display}>
          {indice + 4}
        </div> */}
        <div className="col  border " onClick={sumarIndice}>{`>>`}</div>
      </div>
    </>
  );
};
