import "./index.css";

import React from "react";

function BotaoPadrao({ onClick = () => null, descricao = "" }) {
  return (
    <div className="componenteBotao" onClick={() => onClick()}>
      <span>{descricao}</span>
    </div>
  );
}

export default BotaoPadrao;
