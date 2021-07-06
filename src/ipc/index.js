import usuario from "./usuario";

const { ipcRenderer } = window.require("electron");

const funcoes = {
  usuario: usuario,
  testar: () => {
    ipcRenderer.sendSync("teste", "pong");
  },
};

export default funcoes;
