const { BrowserWindow, app } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 360,
        height: 366
    })

    win.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow()
})