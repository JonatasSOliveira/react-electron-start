const { ipcRenderer } = window.require("electron");

const funcoesUsuario = {
  requisitarLogin: async ({ login, senha }) => {
    try {
      return await ipcRenderer.sendSync("usuario/requisitarLogin", {
        login,
        senha,
      });
    } catch (error) {
      console.log("[ipc Usuario - requisitar Login] Erro:", error);
      return {};
    }
  },
};

export default funcoesUsuario;
