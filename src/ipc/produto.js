const { ipcRenderer } = window.require("electron");

const funcoesProduto = {
  salvar: async (produto) => {
    try {
      return await ipcRenderer.sendSync("produto/salvar", produto);
    } catch (error) {
      console.log("[ipc Usuario - requisitar Login] Erro:", error);
      return {};
    }
  },
};

export default funcoesProduto;
