const { BrowserWindow, app, ipcMain, shell } = require("electron")
const path = require("path");


const createWindow = () => {
    const win = new BrowserWindow({
        width: 360,
        height: 366,
        icon: path.join(__dirname, 'public\\icon.png')
    })

    win.loadFile("index.html")

}

app.whenReady().then(() => {
    createWindow()
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})

app.on('window-all-closed', () => {
    if(process.platform === 'darwin'){
        app.quit()
    }
})


