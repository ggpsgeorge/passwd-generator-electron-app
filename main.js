const { BrowserWindow, app } = require("electron")
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 720,
        height: 366,
        icon: path.join(__dirname, 'public\\icon.png'),
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        },
        // devTools: true,
    })

    win.loadFile("index.html")
    // win.webContents.openDevTools()

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

    app.quit()
})
