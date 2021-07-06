const { ipcMain } = require("electron");
const Usuario = require("./Usuario");

const iniciarFuncoes = () => {
  try {
    console.info("[controller - f iniciarFuncoes] Iniciando Funções.");
    ipcMain.on("usuario/requisitarLogin", async (event, usuario) =>
      await Usuario.requisitarLogin(event, usuario)
    );
    console.info("[controller - f iniciarFuncoes] Funções Iniciadas");
  } catch (error) {
    console.error("[controller - f iniciarFuncoes] Erro:", error);
  }
};

module.exports = { iniciarFuncoes };
