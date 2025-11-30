const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false,  // 禁止调整窗口大小
    fullscreen: true,  // 默认全屏
    icon: 'qianxia.png', // 游戏图标
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('The Incubation.html');
  Menu.setApplicationMenu(null); // 隐藏菜单栏
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});