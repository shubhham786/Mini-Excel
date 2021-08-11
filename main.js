// main.js

// Modules to control application life and create native browser window


const electron=require("electron");
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;

const ejs=require("ejs-electron");
function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    
  })
    
  win.loadFile('index.ejs').then(()=>{
    win.webContents.openDevTools();
     win.maximize();    
  })

  // and load the index.html of the app.
  //mainWindow.loadFile('index.ejs')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)
  

 


//mac ke liye hai

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
