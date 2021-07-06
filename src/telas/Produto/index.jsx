import React, { useState } from "react";

function Produto() {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    vr_custo: "",
    vr_venda: "",
  });

  function setCampoProduto(campo, valor) {
    setProduto({
      ...produto,
      [campo]: valor,
    });
  }

  return <div></div>;
}

export default Produto;
