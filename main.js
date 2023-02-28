const { BrowserWindow, app, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 360,
        height: 366,
        icon: path.join(__dirname, 'public\\icon.png')
    })

    win.loadFile("index.html")
    win.on('closed', () => {
        console.log("Closing")
    })
}

app.whenReady().then(() => {
    createWindow()
    generateKey()
})


