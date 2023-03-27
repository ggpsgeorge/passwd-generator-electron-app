const { contextBridge, ipcRenderer } = require('electron')
const { PythonShell } = require('python-shell')

contextBridge.exposeInMainWorld('pythonShell', {
    password: (element, arg1, arg2, arg3, arg4, arg5) => generate_password(element, arg1, arg2, arg3, arg4, arg5)
})

function generate_password(element, arg1, arg2, arg3, arg4, arg5){
    let options = {
        mode: 'text',
        args: [arg1, arg2, arg3, arg4, arg5]
    };
    PythonShell.run('engine/main.py', options).then(messages => {
        element.innerText = messages[0].toString()
    })

    return element
}