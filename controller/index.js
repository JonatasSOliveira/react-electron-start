const { ipcMain } = require("electron");

const iniciarFuncoes = () => {
  try {
    console.info("[controller - f iniciarFuncoes] Iniciando Funções.");
    // ipcMain.on("evento", async (event, usuario) =>
    //   
    // );
    console.info("[controller - f iniciarFuncoes] Funções Iniciadas");
  } catch (error) {
    console.error("[controller - f iniciarFuncoes] Erro:", error);
  }
};

module.exports = { iniciarFuncoes };
