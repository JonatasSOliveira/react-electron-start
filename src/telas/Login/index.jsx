import "./index.css";

import React, { useState } from "react";

import BotaoPadrao from "../../componentes/BotaoPadrao/index.jsx";
import InputPadrao from "../../componentes/InputPadrao/index.jsx";
import ipc from "../../ipc/index";

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  let inputLogin = null;
  let inputSenha = null;

  async function realizarLogin() {
    const retorno = await ipc.usuario.requisitarLogin({
      login: login.trim(),
      senha: senha.trim(),
    });
    
    if (retorno.status) {
      const { usuario } = retorno;
      if (usuario) {
        return;
      }
      return;
    }
  }

  return (
    <div className="telaLogin">
      <div className="telaLogin_container">
        <h1>Acesso ao Sistema</h1>
        <InputPadrao
          inputRef={(e) => (inputLogin = e)}
          placeholder="Login"
          value={login}
          onChangeText={(texto) => setLogin(texto)}
          onKeyEnter={() => inputSenha.focus()}
        />
        <InputPadrao
          inputRef={(e) => (inputSenha = e)}
          type="password"
          placeholder="Senha"
          value={senha}
          onChangeText={(texto) => setSenha(texto)}
          onKeyEnter={() => this.realizarLogin()}
        />
        <BotaoPadrao descricao="Entrar" onClick={realizarLogin} />
      </div>
    </div>
  );
}

export default Login;
