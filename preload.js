const { contextBridge } = require('electron')
const { PythonShell } = require('python-shell')

contextBridge.exposeInMainWorld('PythonShell', {
    password: (arg1, arg2, arg3, arg4, arg5) => {
        let options = {
            mode: 'text',
            args: [arg1, arg2, arg3, arg4, arg5]
          };
        PythonShell.run('engine/main.py', options).then(messages => {
            console.log(messages)
        })
    }
})
