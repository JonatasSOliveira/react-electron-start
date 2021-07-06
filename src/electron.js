const electron = require("electron");

const banco = require("../banco/index");
const controller = require("../controller/index");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

const iniciarSistema = () => {
  banco.iniciarBanco();
  controller.iniciarFuncoes();

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL("http://localhost:3000");
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
};

app.on("ready", iniciarSistema);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    iniciarSistema();
  }
});
